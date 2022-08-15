"use strict";
const tony = { name: "tony", age: 7, home: "Birmingam" };
const beth = { name: "beth", age: 7, home: "London" };
const Jissan = { name: "jissan", age: 29, home: "Bangladesh" };

const people = { tony, beth, Jissan };
const peopleArr = [tony, beth, Jissan];

tony.age = 14;
tony["favouriteFood"] = "sandwich";
tony.favourteDrink = "milk";
//console.log(tony)

const keyArray = ["favouriteFood", "favouriteDrink", "favouriteShow"];

for (const person of peopleArr) {
  //console.log(`This person is ${person.name}`)
  for (const key of keyArray) {
    //console.log(`The value of key is ${key}`)
    person[key] = 3;
    //person.key = 3
    //tony["favouriteFood"] = 3
    //tony.favouriteFood
  }
}

console.log(peopleArr);
