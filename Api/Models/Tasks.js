const taskSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true, index: true },
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['todo','in-progress','review','done'], default: 'todo', index: true },
  priority: { type: String, enum: ['P0','P1','P2'], default: 'P2' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
  dueDate: Date,
  estimateHours: Number,
  labels: [String],
  history: [{
    type: { type: String }, // e.g. 'status_change', 'assign'
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    at: { type: Date, default: Date.now },
    meta: mongoose.Schema.Types.Mixed
  }],
  commentsCount: { type: Number, default: 0 },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  completedAt: Date,
  deleted: { type: Boolean, default: false }
});

taskSchema.index({ projectId: 1, status: 1 });
taskSchema.index({ assignedTo: 1, status: 1 });

export default mongoose.model('Task', taskSchema);
