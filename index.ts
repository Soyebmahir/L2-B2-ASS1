// Problem 1:
type Value = string | number;
const typeCheck = (param: Value): Value => {
    if (typeof param === 'number') {
        return param * param;
    } else {
        return param.length;
    }

}
// console.log(typeCheck(12));



// Problem 2:
interface Person {
    name: string;
    age: number;
    address?: {
        city: string;
        street: string;
    }
    phone?: number
}
const getAddressCity = (param: Person): string | undefined => {
    return param?.address?.city

}
// const person1: Person = {
//     name: 'soyeb',
//     age: 12,
//     address: {
//         city: 'Dhaka',
//         street: 'Sheikhdi'
//     },
//     phone: 213515616

// }
// console.log(getAddressCity(person1));

// Problem 3:

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
class cat extends Animal {
    constructor(name: string) {
        super(name);
    }
}
class dog extends Animal {
    constructor(name: string) {
        super(name);
    }
}
const isCat = (animal: Animal): animal is cat => {
    return animal instanceof cat;
}
const isdog = (animal: Animal): animal is dog => {
    return animal instanceof dog;
}
const getAnimal = (animal: Animal) => {
    if (isCat(animal)) {
        console.log("yes, it's a cat.");
    } else {
        console.log("no, it's not a cat.");
    }

}
const doggy = new dog('Huski')
const caty = new cat('Ginger')
getAnimal(doggy)
getAnimal(caty)