import {Event} from './event';

export class User {
  public userId: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public events: Event[];

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
