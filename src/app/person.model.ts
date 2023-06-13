export interface IName {
  first: string
  last: string
}

export const nameTemplate: IName = {
  first: '',
  last: ''
}

export class Person {
  constructor(public name: IName) {}
}
