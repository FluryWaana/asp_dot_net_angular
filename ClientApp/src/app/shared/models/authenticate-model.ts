export class AuthenticateModel {
  public username: string;
  public password: string;

  public constructor(init?: Partial<AuthenticateModel>) {
    Object.assign(this, init);
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
