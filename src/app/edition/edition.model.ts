import { Tasting } from '../tastings';
import { User } from '../users';

export class Edition {
  id?: number;
  brand: string;
  name: string;
  age?: number;
  yearBottled?: number;
  barrels: string[];
  createdAt: Date;
  createdBy: number;
}
