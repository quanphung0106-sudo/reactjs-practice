import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    country: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    isSeller: {
        type: Boolean,
        default: false
    },
    desc: {
        type: String,
    },
},
    {
        timestamps: true
    }
)

export default mongoose.model("User", UserSchema);