const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' },
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

module.exports = mongoose.model('Comment', commentSchema);
