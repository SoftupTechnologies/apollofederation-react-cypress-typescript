import { Request as ExpressRequest } from 'express';

interface IUser {
  id?: string,
  name?: string
  username?: string
  email?: string
  password?: string
  title?: string
  birthDate?: string
  error?: string
}
interface IRequest extends ExpressRequest {
  user: IUser
}