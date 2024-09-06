class Category {
  constructor(private name: string, private taxPercentage: number) {
  }

  public getTaxPercentage(): number {
      return this.taxPercentage;
  }

  // TODO: remove name if it's not used
  public getName(): string {
      return this.name;
  }
}

export default Category;

