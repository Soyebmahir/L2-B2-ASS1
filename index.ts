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
class Cat {
    constructor(public name: string) {
    }
}
const isCat = <T extends object>(animal: T): void => {
    if (animal instanceof Cat) {
        console.log("yes, it's a cat.");
    } else {
        console.log("no, it's not a cat.");
    }
}

// problem 4:
const totalCount = <T>(arr: T[]): number => {
    let total = arr.reduce((acc: number, current: T): number => {

        if (typeof current === 'number') {
            acc += current as number
        }
        return acc

    }, 0)
    return total;
}

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
const combineObject = (obj1: Car, obj2: Driver): Car & Driver => {
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

//problem 7
const findFirstOccurrence = <T>(arr: T[], targetedValue: T) => {
    const indexNumber = arr.indexOf(targetedValue)
    return indexNumber !== -1 ? indexNumber : -1

}

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


