import { pgTable, serial, text, integer, timestamp, boolean, doublePrecision } from 'drizzle-orm/pg-core';

export const portfolioStats = pgTable('portfolio_stats', {
  id: serial('id').primaryKey(),
  profileViews: integer('profile_views').default(0),
  satisfiedClients: integer('satisfied_clients').default(0),
  unsatisfiedClients: integer('unsatisfied_clients').default(0),
  totalFeedback: integer('total_feedback').default(0),
  averageRating: doublePrecision('average_rating').default(0),
  positiveReactions: integer('positive_reactions').default(0),
  negativeReactions: integer('negative_reactions').default(0),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const feedback = pgTable('feedback', {
  id: serial('id').primaryKey(),
  clientName: text('client_name').notNull(),
  clientEmail: text('client_email').notNull(),
  clientPhoto: text('client_photo'),
  rating: integer('rating').notNull(),
  comment: text('comment').notNull(),
  source: text('source').default('Direct'),
  date: timestamp('date').defaultNow(),
  googleVerified: boolean('google_verified').default(false),
  googleId: text('google_id'),
  adminReply: text('admin_reply'),
  isApproved: boolean('is_approved').default(true),
  codeUsed: text('code_used'),
  projectScreenshot: text('project_screenshot'),
});

export const feedbackCodes = pgTable('feedback_codes', {
  id: serial('id').primaryKey(),
  code: text('code').notNull().unique(),
  assignedTo: text('assigned_to'),
  notes: text('notes'),
  status: text('status').default('Active'), // 'Active', 'Used', 'Revoked'
  createdAt: timestamp('created_at').defaultNow(),
  usedAt: timestamp('used_at'),
});

export const reactions = pgTable('reactions', {
  id: serial('id').primaryKey(),
  userId: text('user_id'), // Firebase UID if logged in
  type: text('type').notNull(), // 'like' or 'dislike'
  ipAddress: text('ip_address'),
  createdAt: timestamp('created_at').defaultNow(),
});
