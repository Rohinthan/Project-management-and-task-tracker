const eventSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g. task.create, task.move
  entityId: String,
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, default: Date.now },
  meta: mongoose.Schema.Types.Mixed
});
eventSchema.index({ projectId: 1, type: 1, timestamp: -1 });
export default mongoose.model('Event', eventSchema);
