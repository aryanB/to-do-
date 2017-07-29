const mongoose = require('mongoose');
const schema = mongoose.Schema;

const TodoSchema = new schema ({
    title: {
        type: String,
        required: true
    },
    is_complete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Todo',TodoSchema);
