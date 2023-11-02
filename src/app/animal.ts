export interface Animal {
  age: number;
  type: AnimalTypeEnum;
  name: string;
}

export enum AnimalTypeEnum {
  Dog = 0,
  Cat,
  Lion,
  Bird
}
