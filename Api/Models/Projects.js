const projectSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  description: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    role: { type: String, enum: ['manager','member'], default: 'member' }
  }],
  startDate: Date,
  endDate: Date,
  archived: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('Project', projectSchema);
