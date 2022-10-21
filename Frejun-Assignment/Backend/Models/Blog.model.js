const mongoose  = require('mongoose');
const BlogsSchema = new mongoose.Schema({
    title : {type: String, required : true},
    category : {type: String, required : true},
    body : {type: String, required : true},
});
const BlogModel = new mongoose.model('blog', BlogsSchema);
module.exports = BlogModel;
