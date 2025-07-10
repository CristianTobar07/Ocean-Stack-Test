import mongoose, { Schema, Document } from "mongoose";

export interface UserType extends Document {
  name: string;
  email: string;
  password: string;
  user_type: number;
}

const userSchema: Schema<UserType> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  user_type: { type: Number, required: true }, // 1 = admin, 2 = waiter
});

userSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

const userModel = mongoose.model<UserType>("users", userSchema);

export { userModel, userSchema };
