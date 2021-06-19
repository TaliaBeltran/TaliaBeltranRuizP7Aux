import { Schema, Document, model } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  fullname: string;
  username: string;
  email: string;
  password: string;
  deteReg: Date;
  encryptPassword(password: string):any;
  machPassword(password: string):any;
}

const userSchema = new Schema<IUser>({
  fullname: {
  type: String,
  required: true,
  },
username: {
  type: String,
  required: true,
},
email: {
  type: String,
  required: true,
},
password: {
  type: String,
  required: true,
},
dateReg: {
  type: Date,
  default: Date.now(),
},
});

userSchema.methods.encryptPassword = async (password: string) =>{
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};
userSchema.methods.machPassword = async function (password: string){
  return await bcrypt.compare(password, this.password);
};
 
export default model<IUser>("User", userSchema);