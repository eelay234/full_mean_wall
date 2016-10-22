var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 3 },
 message: { type: String, required: true, minlength: 6 },
 created_at: { type: Date, required: true, default: Date.now },
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });
// The 'type' property of the object inside of the array is an attribute
// that tells Mongoose what to look for.
mongoose.model('Post', PostSchema);
var Post = mongoose.model('Post');
