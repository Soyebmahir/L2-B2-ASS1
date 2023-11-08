# What are some benefits of using TypeScript over JavaScript in a project?

-> While JavaScript is dynamically typed, TypeScript adds optional static typing, which allows variables and function signatures to have type annotations. This typing enables stronger tooling and editor support like auto-completion and error checking during development.

# What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each

## Optional chaining

-> Purpose: Optional chaining allows you to safely access nested properties or call methods on an object without encountering runtime errors if any intermediate property or method is null or undefined. It stops the evaluation and returns undefined if any of the properties or methods in the chain is missing.

```typescript
interface Person {
  name: string;
  age: number;
  address?: {
    city: string;
    street: string;
  };
  phone?: number;
}
const getAddressCity = (param: Person): string | undefined => {
  return param?.address?.city;
};
```

## nullish coalescing (??)

```typescript
const someValue = null;
const defaultValue = "Default Value";

const result = someValue ?? defaultValue;
console.log(result); // Output: "Default Value"
```

# How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?.

-> In TypeScript, as in JavaScript, you can handle asynchronous operations using callbacks, Promises, and the async/await syntax. While each approach has its advantages, async/await has become the preferred way to manage asynchronous operations for several reasons:

- Clarity and Readability:

async/await provides a more synchronous-like and linear code structure, making it easier to understand and maintain, especially for complex asynchronous logic. It results in more readable code.

- Error Handling:

Error handling with async/await is simpler and more akin to try-catch error handling in synchronous code, which leads to more robust error management.

- Avoiding Callback Hell:

async/await alleviates the callback hell problem, where deeply nested callbacks can become difficult to follow and maintain.

- Improved Debugging:

Debugging asynchronous code using async/await is more straightforward since errors will be reported in the context where they occur, allowing for easier diagnosis.

- Better Flow Control:

With async/await, you can use control flow constructs like if, for, and while directly, making it more intuitive to manage the flow of your asynchronous code.
Here's a comparison of how you can handle asynchronous operations using callbacks, Promises, and async/await in TypeScript:

```typescript
// Callbacks:

function fetchData(callback) {
  setTimeout(() => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  }, 1000);
}

// Promises:

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    }, 1000);
  });
}

// Async/Await:

async function fetchData() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      }, 1000);
    });
    return result;
  } catch (error) {
    // Handle errors
  }
}
```

# How can you use TypeScript's enums, and what are their advantages?.

TypeScript's enums are a powerful tool for defining a set of named constants, providing a way to work with symbolic values instead of raw values. Enums in TypeScript come with several advantages:

- Improved Code Readability: Enums make your code more readable and self-explanatory by providing meaningful names to values. This enhances code maintainability and reduces the risk of errors caused by incorrect values.

- Type Safety: Enums allow you to work with a finite set of known values. TypeScript ensures that you only use valid enum values, providing compile-time type safety.

- Reverse Mapping: Enums in TypeScript support reverse mapping, which allows you to look up the name of an enum member based on its value. This is useful for debugging or presenting user-friendly information.

- Iteration: You can iterate over the members of an enum using for...in loops. This is particularly useful when you want to perform operations on all members of a specific enum.

- Compilation Output: When TypeScript compiles to JavaScript, enums are transpiled into a concise and efficient representation. This means that the benefits of using enums do not come at the cost of additional runtime overhead.

```typescript
// <!-- Here's how you can define and use TypeScript enums: -->

// <!-- Defining an Enum: -->

enum Color {
  Red, // 0
  Green, // 1
  Blue, // 2
}

// Using an Enum:

let selectedColor: Color = Color.Blue;
console.log(selectedColor); // Output: 2

// Reverse Mapping:

console.log(Color[2]); // Output: "Blue"

// Iteration:

for (let colorKey in Color) {
  if (isNaN(Number(colorKey))) {
    console.log(colorKey, Color[colorKey]);
  }
}

// External Values:
// You can explicitly assign numeric values to enum members. For example:

enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
```

# Explain the role of type guards in TypeScript and provide an example of a custom type guard.

TypeScript type guards are a way to narrow down the type of a variable within a conditional block of code. They are particularly useful when working with union types or complex object types to ensure type safety and enable code analysis. Type guards are essential for performing type checks and making informed decisions based on those checks.

Here's the basic role of type guards:

Type Assertion: Type guards are used to assert or narrow down the type of a variable, helping TypeScript's static analysis understand the specific type within a certain code block.

Condition-Based Type Checking: They allow you to check the properties, structure, or values of a variable to determine its type.

Improved Type Safety: Type guards ensure that the code is type-safe by preventing type-related errors during runtime.

Here's an example of a custom type guard:

```typescript
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
};
const isdog = (animal: Animal): animal is Dog => {
  return animal instanceof Dog;
};
const getAnimal = (animal: Animal) => {
  if (isCat(animal)) {
    console.log("yes, it's a cat.");
  } else {
    console.log("no, it's not a cat.");
  }
};
```

# Can you give an example of how to use "readonly" properties in TypeScript?

### Readonly modifier to create properties that can only be assigned a value when they are initialized or in the class's constructor. Once set, their values cannot be modified. Here's an example:

```typescript
class Person {
  // Create readonly properties
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name; // Initialize readonly property
    this.age = age; // Initialize readonly property
  }

  // Attempting to modify a readonly property in a method will result in a TypeScript error
  // For example, this method would generate a compile-time error:
  // changeName(newName: string) {
  //   this.name = newName; // Error: Cannot assign to 'name' because it is a read-only property.
  // }
}

// Usage
const person = new Person("Alice", 30);

console.log(person.name); // Accessing a readonly property is allowed
console.log(person.age);
```

# Explain what a union type is in TypeScript and provide an example of its usage.

In TypeScript, a union type is a type that can hold values of multiple types. It allows you to specify that a variable, parameter, or property can have a value of one of the specified types. Union types are defined using the pipe (|) symbol between the types.

```typescript
type Value = string | number;
const typeCheck = (param: Value): Value => {
  if (typeof param === "number") {
    return param * param;
  } else {
    return param.length;
  }
};
```
