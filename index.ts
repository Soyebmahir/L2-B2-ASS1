// Problem 1:
type Value = string | number;
const typeCheck = (param: Value): Value => {
    if (typeof param === 'number') {
        return param * param;
    } else {
        return param.length;
    }

}




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






// Problem 3:

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
}
const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
}
const isdog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
}
const getAnimal = (animal: Animal) => {
    if (isCat(animal)) {
        console.log("yes, it's a cat.");
    } else {
        console.log("no, it's not a cat.");
    }

}


// problem 4:
type numberOrArray = (number | string)[]
const mixedData: numberOrArray = [1, 'two', 3, 'four', 5]
const total = mixedData.reduce((acc: number, number: number | string): number => {
    if (typeof number === 'number') {
        return acc + number;
    } else {
        return acc;

    }
}, 0)



// problem 5
interface Car {
    make: string,
    model: number,
    year: number
}
interface Driver {
    name: string,
    licenseNumber: number
}
const car: Car = {
    make: 'china',
    model: 2354235,
    year: 2023
}
const driver: Driver = {
    name: 'Abul',
    licenseNumber: 23874
}
const combineObject = (obj1: Car, obj2: Driver): object => {
    return {
        ...obj1, ...obj2
    }

}



// problem 6

const sumOfArrayOfNumbers = (param: unknown) => {
    if (Array.isArray(param) && param.every((valueOfIndex) => typeof valueOfIndex === 'number')) {
        const arrayOfNumber = param as number[];
        const sum = arrayOfNumber.reduce((acc, num) => acc + num, 0);
        console.log(sum);
    } else {
        console.error('Not an array of numbers');
    }
}


const arr: unknown[] = [1, 2, 3, 4, 5];
const arr2: unknown[] = [1, 's', 3, 4, 5];
sumOfArrayOfNumbers(arr);
sumOfArrayOfNumbers(arr2);

//problem 7
const findFirstOccurrence = <T>(arr: T[], targetedValue: T) => {
    const indexNumber = arr.indexOf(targetedValue)
    return indexNumber !== -1 ? indexNumber : -1

}
const numbers: number[] = [1, 2, 3, 4, 5, 2];
const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

const targetNumber = 2;
const targetString = "nashpati";

const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
const indexInStrings = findFirstOccurrence(strings, targetString);
console.log(indexInNumbers);
console.log(indexInStrings);

// problem 8
interface Product {
    name: string,
    price: number,
    quantity: number
}
type Cart = Product[]

const totalCost = (cart: Cart): number => {
    let total = 0;
    cart.forEach(product => {
        total += (product.price * product.quantity)
    })
    return total;

}


