import { Tasting } from '../tastings';
import { User } from '../users';

export class Edition {
  id?: number;
  brand: string;
  name?: string;
  region?: string;
  age?: number;
  vol?: number;
  yearBottled?: number;
  barrels?: string[];
  createdAt: Date;
  createdBy: number;
}
