export class Participate {
  public eventId: number;
  public userId: number;

  public constructor(init?: Partial<Participate>) {
    Object.assign(this, init);
  }

  deserialize(input: any): Participate {
    Object.assign(this, input);
    // this.users = input.users.map(user => new User().deserialize(user));
    return this;
  }
}
