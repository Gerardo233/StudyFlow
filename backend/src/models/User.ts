import {Schema, model, connect} from 'mongoose';

//1. First we define the interface for the User model (Schema) is like the model for the User
interface IUser{
  firstName: string,
  lastName: string,
  email: string,
  birthDate: Date,
  password: string,
  avatar?: string,
  university: string,
  major: string,
  token?: string,
  createdAt?: Date,
  updatedAt?: Date
}

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: ''
  },
  university: {
    type: String,
    required: true
  },
  major: {
    type: String,
    required: true
  },
  token:{
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'users' 
})

//2. Then we create the model using the schema
const User = model<IUser>('User', userSchema)

export default User


