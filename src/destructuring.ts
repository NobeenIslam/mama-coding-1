const details: (string | number)[] = ["John", 7, "Clarice"];
const [firstName, age] = details;

console.log(firstName, age);

interface schoolType {
  numberOfPeople: number;
  buildDate: number;
  address: string;
}

const school: schoolType = {
  numberOfPeople: 1000,
  buildDate: 2019,
  address: "baltigham",
};
const blueBird: schoolType = {
  numberOfPeople: 3000,
  buildDate: 1995,
  address: "England",
};

const { numberOfPeople, address } = school;
console.log(numberOfPeople, address);
console.log(school);
