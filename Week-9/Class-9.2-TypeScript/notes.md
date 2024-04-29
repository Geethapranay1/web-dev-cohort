## What is the difference between strongly typed and loosely typed languages
- Strongly typed languages are languages that require variables to be declared with a specific data type. This means that the data type of a variable cannot be changed once it has been declared.
- Example java vs javascript
- In Java, you have to declare the data type of a variable when you declare it. For example, you can declare a variable of type int, double, or String.
- In JavaScript, you do not have to declare the data type of a variable when you declare it. For example, you can declare a variable without specifying its data type.
- Syntax of strongly typed language
```java
int x = 5;
double y = 5.5;
String z = "Hello";
```
- Syntax of loosely typed language
```javascript
var x = 5;
var y = 5.5;
var z = "Hello";
```
- Strongly typed languages are more strict and less flexible than loosely typed languages.
- Javascript is a powerful language but lacks the type safety of Java.
- Strongly typed languages are more secure and less error-prone than loosely typed languages.
- So TypeScript is introduced on top of JavaScript to add type safety to JavaScript.

## What is TypeScript
- TypeScript is a superset of JavaScript that adds static type checking to JavaScript.
- TypeScript is a statically typed language, which means that the data type of a variable is known at compile time.
- It is a Strict syntactical superset of JavaScript and adds optional static typing to the language.

## Where/How does TypeScript code run
- TypeScript code never runs directly in the browser.
- TypeScipt code is compiled to JavaScript code before it is run in the browser.
- JavaScript is the runtime language of TypeScript.

## Types in TypeScript
- TypeScript has several built-in types such as number, string, boolean, etc.
- number, string, boolean, null, undefined, void, any, never, object, array, tuple, enum, etc.

## Thing learning in class
 ### Type inference
 - TypeScript has a feature called type inference that allows the compiler to automatically determine the data type of a variable based on its value.
 - Example
    ```typescript
    let x = 5; // x is of type number
    let y = "Hello"; // y is of type string
    ```
    ### Type annotations

## Interfaces
- Interfaces are used to define the structure of an object.