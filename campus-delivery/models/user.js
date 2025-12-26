import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  _id: String, // phone
  name: String,
  phone: String,
  role: String,
  verified: { type: Boolean, default: false}
}, { timestamps: true })

export default mongoose.models.User || mongoose.model("User", UserSchema)
