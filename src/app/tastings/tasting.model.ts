import { User } from '../users';

export class Tasting {
  id?: number;
  author: User
  date: Date
  nose: string[]
  taste: string[]
  sweet: number
  spice: number
  smoke: number
  sherry: number
  wood: number
  alcohol: number
  round: number
  finish: number
  comment: string
}
