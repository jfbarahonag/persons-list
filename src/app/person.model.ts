interface IName {
  first: string
  last: string
}

export class Person {
  constructor(public name: IName) {}
}
