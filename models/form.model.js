const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    formName: { type: String, required: true },
    isPublished: { type: Boolean, required: true },
    formData: { type: Object, required: true },
    userId: { type: String, required: true }
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
