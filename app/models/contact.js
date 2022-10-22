import mongoose from "mongoose"

const Schema = mongoose.Schema;

const ContactsSchema = new Schema({
    name: String,
    phone: String,
    email: String,
}, {
    timestamps: true,
    collection: 'contacts'
});

export default mongoose.model('Contact', ContactsSchema);