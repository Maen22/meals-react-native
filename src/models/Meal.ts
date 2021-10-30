class Meal {
  constructor(
    public id: string,
    public categoryIds: Array<string>,
    public title: string,
    public affordability: string,
    public complexity: string,
    public imageURL: string,
    public duration: number,
    public ingredients: Array<string>,
    public steps: Array<string>,
    public isGlutenFree: boolean,
    public isVegan: boolean,
    public isVegetarian: boolean,
    public isLactoseFree: boolean
  ) {}
}

export default Meal;
