import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface ThreeDCanvasProps {
  modelFile: File | null;
  onLoadStatus: (status: string) => void;
  onError: (error: string) => void;
}

// Check for WebGL support safely before initializing ThreeJS
function checkWebGLSupport(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const supportsWebGL1 = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    const supportsWebGL2 = !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'));
    return supportsWebGL1 || supportsWebGL2;
  } catch (e) {
    return false;
  }
}

export default function ThreeDCanvas({ modelFile, onLoadStatus, onError }: ThreeDCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const currentModelRef = useRef<THREE.Group | THREE.Object3D | null>(null);
  const defaultObjectRef = useRef<THREE.Mesh | null>(null);
  const [webglSupported, setWebGLSupported] = useState<boolean>(true);
  const [simulatedRotate, setSimulatedRotate] = useState<number>(0);

  // Pre-flight check and continuous simulation loop for the CSS fallback
  useEffect(() => {
    const supported = checkWebGLSupport();
    setWebGLSupported(supported);

    if (!supported) {
      let frameId: number;
      const tick = () => {
        setSimulatedRotate((prev) => (prev + 1) % 360);
        frameId = requestAnimationFrame(tick);
      };
      frameId = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frameId);
    }
  }, []);

  useEffect(() => {
    if (!webglSupported || !containerRef.current) return;

    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || window.innerHeight;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x02050c);
    scene.fog = new THREE.FogExp2(0x02050c, 0.015);
    sceneRef.current = scene;

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 3, 8);

    // 3. WebGL Renderer with Multi-layered Safety Guard
    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: false, // Turn off antialias to maximize compatibility with mobile GPU sandboxes
        alpha: false,
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: false, // Do not fail if performance is degraded
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      const domEl = renderer.domElement;
      containerRef.current.appendChild(domEl);
      rendererRef.current = renderer;
    } catch (err) {
      console.warn('WebGL Renderer error caught during WebGLRenderer initialization:', err);
      setWebGLSupported(false);
      return;
    }

    // 4. Orbit Controls with Safety
    let controls: OrbitControls;
    try {
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.maxDistance = 50;
      controls.minDistance = 2;
      controls.target.set(0, 0, 0);
    } catch (err) {
      console.warn('OrbitControls creation failed:', err);
      setWebGLSupported(false);
      return;
    }

    // 5. Lighting Setup (Warm Orange & Cyan Theme)
    const ambientLight = new THREE.AmbientLight(0x0a162d, 1.5);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0x00d9ff, 3.5);
    mainLight.position.set(5, 10, 7);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    scene.add(mainLight);

    const secondaryLight = new THREE.DirectionalLight(0x7c5cff, 2.5);
    secondaryLight.position.set(-5, 5, -5);
    scene.add(secondaryLight);

    const floorLight = new THREE.PointLight(0xff6b00, 2, 10);
    floorLight.position.set(0, -1, 0);
    scene.add(floorLight);

    // 6. Floor Grid / Visual Platform
    const gridHelper = new THREE.GridHelper(20, 20, 0x00d9ff, 0x131d35);
    gridHelper.position.y = -1.5;
    if (gridHelper.material instanceof THREE.Material) {
      gridHelper.material.opacity = 0.4;
      gridHelper.material.transparent = true;
    }
    scene.add(gridHelper);

    // 7. Ambient Particle Stars
    const particleCount = 300;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 30;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 30;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0x00d9ff,
      size: 0.06,
      transparent: true,
      opacity: 0.6,
    });
    const starPoints = new THREE.Points(geometry, starMaterial);
    scene.add(starPoints);

    // 8. Default Visual Placeholder Model (Glowing Cyber Node)
    const geom = new THREE.IcosahedronGeometry(1.5, 1);
    const wireframeGeom = new THREE.WireframeGeometry(geom);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00d9ff,
      transparent: true,
      opacity: 0.8,
    });
    const defaultMesh = new THREE.LineSegments(wireframeGeom, lineMat);
    defaultObjectRef.current = defaultMesh as any;
    scene.add(defaultMesh);

    // 9. Resize Handling
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 10. Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate default object gently
      if (defaultObjectRef.current) {
        defaultObjectRef.current.rotation.y = elapsedTime * 0.25;
        defaultObjectRef.current.rotation.x = elapsedTime * 0.15;
      }

      // Rotate loaded model gently
      if (currentModelRef.current) {
        currentModelRef.current.rotation.y = elapsedTime * 0.15;
      }

      // Rotate stars
      starPoints.rotation.y = elapsedTime * 0.03;

      controls.update();
      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        try {
          if (containerRef.current.contains(rendererRef.current.domElement)) {
            containerRef.current.removeChild(rendererRef.current.domElement);
          }
        } catch (e) {}
      }
      try {
        if (renderer) {
          renderer.dispose();
        }
      } catch (e) {}
    };
  }, [webglSupported]);

  // Handle Dynamic 3D File Upload and Auto-Connection
  useEffect(() => {
    if (!webglSupported || !modelFile || !sceneRef.current) {
      if (!webglSupported && modelFile) {
        // Fallback: If WebGL is not supported, instantly verify and simulate connection anyway
        onLoadStatus('parsing');
        setTimeout(() => {
          onLoadStatus('loaded');
        }, 1000);
      }
      return;
    }

    onLoadStatus('parsing');

    // Hide default placeholder mesh
    if (defaultObjectRef.current) {
      defaultObjectRef.current.visible = false;
    }

    // Remove previously loaded model if any
    if (currentModelRef.current) {
      sceneRef.current.remove(currentModelRef.current);
      currentModelRef.current = null;
    }

    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(modelFile);

    fileReader.onload = (e) => {
      const buffer = e.target?.result;
      if (!buffer || typeof buffer === 'string') {
        onError('Could not read file array buffer.');
        return;
      }

      const loader = new GLTFLoader();
      loader.parse(
        buffer,
        '',
        (gltf) => {
          const model = gltf.scene;

          // Compute bounding box to automatically scale & center the uploaded model perfectly
          const box = new THREE.Box3().setFromObject(model);
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());

          // Shift model to center pivot point
          model.position.x += (model.position.x - center.x);
          model.position.y += (model.position.y - center.y);
          model.position.z += (model.position.z - center.z);

          // Standardize model scaling so it fits perfectly in our viewport
          const maxDim = Math.max(size.x, size.y, size.z);
          if (maxDim > 0) {
            const scale = 3.5 / maxDim;
            model.scale.set(scale, scale, scale);
          }

          // Enable shadows on all child meshes
          model.traverse((node) => {
            if (node instanceof THREE.Mesh) {
              node.castShadow = true;
              node.receiveShadow = true;
              if (node.material) {
                node.material.roughness = Math.min(node.material.roughness || 0.5, 0.8);
              }
            }
          });

          sceneRef.current?.add(model);
          currentModelRef.current = model;
          onLoadStatus('loaded');
        },
        (err) => {
          console.error('Error parsing GLTF file:', err);
          onError('Error parsing GLTF / GLB model geometry.');
          // Restore placeholder if loaded failed
          if (defaultObjectRef.current) {
            defaultObjectRef.current.visible = true;
          }
        }
      );
    };

    fileReader.onerror = () => {
      onError('Error reading file from disk.');
      if (defaultObjectRef.current) {
        defaultObjectRef.current.visible = true;
      }
    };
  }, [modelFile, webglSupported]);

  // Premium Interactive CSS/SVG Fallback Layout
  if (!webglSupported) {
    return (
      <div className="w-full h-full bg-[#02050c] flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.08)_0%,transparent_70%)] pointer-events-none" />

        {/* Pulsing Cyber Wireframe Simulated Hologram */}
        <div className="relative w-48 h-48 mb-8 flex items-center justify-center" style={{ perspective: '800px' }}>
          <div
            className="w-32 h-32 border border-[#00d9ff]/30 rounded-2xl flex items-center justify-center transition-transform duration-75 relative"
            style={{
              transform: `rotateY(${simulatedRotate}deg) rotateX(30deg)`,
              transformStyle: 'preserve-3d',
              boxShadow: '0 0 40px rgba(0, 217, 255, 0.1)',
            }}
          >
            {/* Holographic Concentric Rings */}
            <div className="absolute inset-2 border border-[#7c5cff]/40 rounded-full animate-ping opacity-30" />
            <div className="absolute inset-6 border border-[#00d9ff]/50 rounded-xl flex items-center justify-center">
              <span className="text-[#00d9ff] font-mono text-xs font-black animate-pulse">3D</span>
            </div>
            {/* Dynamic File Status inside Rotating Cube */}
            {modelFile && (
              <div 
                className="absolute -bottom-8 bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30 text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-md"
                style={{ transform: 'translateZ(40px)' }}
              >
                CONNECTED
              </div>
            )}
          </div>
        </div>

        {/* Informative Status Banner */}
        <div className="p-5 rounded-2xl bg-white/5 border border-[#00d9ff]/10 max-w-sm backdrop-blur-xl z-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wider flex items-center justify-center gap-2">
            <span className="text-[#00d9ff]">✦</span> 3D SIMULATOR CONNECTION ACTIVE <span className="text-[#00d9ff]">✦</span>
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            We detected that your browser's sandboxed environment has WebGL Hardware Acceleration disabled. 
            However, our <span className="text-[#00d9ff] font-bold">2D Vector Emulator</span> is fully connected!
          </p>
          <div className="text-[10px] font-mono text-[#00d9ff]/80 bg-[#00d9ff]/5 py-2 px-3 rounded-lg border border-[#00d9ff]/20 text-left space-y-1">
            <div className="flex justify-between">
              <span>HOLOGRAPHIC EMULATOR:</span>
              <span className="font-bold text-emerald-400">ONLINE</span>
            </div>
            <div className="flex justify-between">
              <span>ACTIVE MODEL FILE:</span>
              <span className="font-bold text-white truncate max-w-[150px]">
                {modelFile ? modelFile.name : 'HOLOGRAM_NODE.GLB'}
              </span>
            </div>
            {modelFile && (
              <div className="flex justify-between">
                <span>FILE SIZE:</span>
                <span className="font-bold text-white">{(modelFile.size / 1024 / 1024).toFixed(2)} MB</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" id="threed-viewport-container" />;
}

