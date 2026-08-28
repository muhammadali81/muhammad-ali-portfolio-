import React, { useState } from 'react';
import { Mail, Search, Eye, Trash2, Edit2, Download, XCircle } from 'lucide-react';
import { InquiryItem } from '../types';

interface InquiriesTabProps {
  inquiries: InquiryItem[];
  onViewInquiry: (inquiry: InquiryItem) => void;
  onDeleteInquiry: (id: string) => void;
  onClose: () => void;
}

export default function InquiriesTab({
  inquiries,
  onViewInquiry,
  onDeleteInquiry,
  onClose
}: InquiriesTabProps) {
  const [search, setSearch] = useState('');
  const [serviceFilter, setServiceFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const services = ['All', ...Array.from(new Set(inquiries.map((i) => i.service)))];

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.name.toLowerCase().includes(search.toLowerCase()) ||
      inq.subject.toLowerCase().includes(search.toLowerCase()) ||
      inq.email.toLowerCase().includes(search.toLowerCase()) ||
      inq.message.toLowerCase().includes(search.toLowerCase());
    const matchesService = serviceFilter === 'All' ? true : inq.service === serviceFilter;
    const matchesStatus = statusFilter === 'All' ? true : inq.status === statusFilter;
    return matchesSearch && matchesService && matchesStatus;
  });

  const exportCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Subject', 'Service', 'Budget', 'Status', 'Date', 'Message'];
    const rows = filteredInquiries.map(i => [
      `"${i.name}"`,
      `"${i.email}"`,
      `"${i.phone || ''}"`,
      `"${i.subject}"`,
      `"${i.service}"`,
      `"${i.budget || ''}"`,
      `"${i.status}"`,
      `"${i.date}"`,
      `"${i.message.replace(/"/g, '""')}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `inquiries_export_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-5 pb-12">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0f1523] border border-white/10 p-5 rounded-2xl relative">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center hover:bg-rose-600 transition-colors shadow-lg z-10 sm:hidden"
          title="Close and return to Dashboard"
        >
          <XCircle className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="hidden sm:flex p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-rose-400 hover:border-rose-400/30 transition-all cursor-pointer"
            title="Go back to Dashboard"
          >
            <XCircle className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-400" /> Incoming Client Inquiries
            </h2>
            <p className="text-xs text-slate-400">
              Total {inquiries.length} inquiries received across all web, AI, and game design channels
            </p>
          </div>
        </div>

        <button
          onClick={exportCSV}
          className="px-3.5 py-2 bg-[#141c2c] border border-white/10 text-slate-200 text-xs font-semibold rounded-xl hover:text-[#00d9ff] hover:border-[#00d9ff]/30 transition-all flex items-center gap-2 cursor-pointer"
        >
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-[#0f1523] border border-white/10 p-3.5 rounded-xl text-xs">
        <div className="relative w-full md:w-80">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by client name, email, or message..."
            className="w-full pl-9 pr-3 py-1.5 bg-[#141c2c] border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00d9ff]"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="bg-[#141c2c] border border-white/10 rounded-lg text-xs text-slate-300 px-3 py-1.5 focus:outline-none"
          >
            {services.map((s) => (
              <option key={s} value={s}>
                {s === 'All' ? 'All Services' : s}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[#141c2c] border border-white/10 rounded-lg text-xs text-slate-300 px-3 py-1.5 focus:outline-none"
          >
            <option value="All">All Statuses</option>
            <option value="New">New</option>
            <option value="Read">Read</option>
            <option value="Replied">Replied</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#0f1523] border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-[#131a2a] text-slate-400 uppercase tracking-wider text-[10px] border-b border-white/10">
              <tr>
                <th className="py-3.5 px-4">Client Name</th>
                <th className="py-3.5 px-4">Subject & Message</th>
                <th className="py-3.5 px-4">Service</th>
                <th className="py-3.5 px-4">Budget</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredInquiries.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    No inquiries match your criteria.
                  </td>
                </tr>
              ) : (
                filteredInquiries.map((inq) => (
                  <tr key={inq.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4">
                      <p className="font-bold text-white">{inq.name}</p>
                      <p className="text-[11px] text-slate-400 font-mono">{inq.email}</p>
                      {inq.phone && <p className="text-[10px] text-slate-500 font-mono">{inq.phone}</p>}
                    </td>
                    <td className="py-3.5 px-4 max-w-xs">
                      <p className="font-semibold text-slate-200 truncate">{inq.subject}</p>
                      <p className="text-[11px] text-slate-400 truncate">{inq.message}</p>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 text-[11px]">
                        {inq.service}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold font-mono">
                      {inq.budget || '$10+'}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          inq.status === 'New'
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                            : inq.status === 'Read'
                            ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20'
                            : 'bg-purple-500/15 text-purple-400 border border-purple-500/20'
                        }`}
                      >
                        {inq.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">{inq.date}</td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => onViewInquiry(inq)}
                          title="View Full Details"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-[#00d9ff]/20 text-slate-300 hover:text-[#00d9ff] transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onViewInquiry(inq)}
                          title="Edit / Reply"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-amber-500/20 text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onDeleteInquiry(inq.id)}
                          title="Delete"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
