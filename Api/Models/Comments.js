const commentSchema = new mongoose.Schema({
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true, index: true },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('Comment', commentSchema);
