export class Category {
  public categoryId: number;
  public categoryName: string;

  public constructor(init?: Partial<Category>) {
    Object.assign(this, init);
  }

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
