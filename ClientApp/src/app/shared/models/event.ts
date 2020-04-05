import {User} from './user';
import {Category} from './category';

export class Event {
  public eventId: number;
  public title: string;
  public description: string;
  public eventDate: string;
  public categoryId: number;
  public category: Category;
  public users: User[];

  public constructor(init?: Partial<Event>) {
    Object.assign(this, init);
  }

  deserialize(input: any): Event {
    Object.assign(this, input);
    // this.users = input.users.map(user => new User().deserialize(user));
    return this;
  }
}
