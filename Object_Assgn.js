// I've invited you to fill out a form:
// Objects
// Given an array of objects, each object representing a person with a name and age property, 
// write a function that returns a new array containing the names of all people who are 18 years old
//  or older.

function getNamesOfAdults(people){
  const adults =people.filter(people => person.age >=18);
  return adults.map(adult =>adult.name);
}
   const people = [
       { name: 'Alice', age: 17 },
       { name: 'Eunice', age: 22 },
       { name: 'Charlie', age: 14 },
        { name: 'Max', age: 19 },

          ];

    
        
          const namesOfAdults=getNamesOfAdults(people);
          

    


// // 
// Write a function that takes an array of objects, where each object represents a product with a name,
//  price, and category property. The function should return an object that groups the products by their 
//  categories, with the category names as keys and the arrays of products as values.

functiongroupproductsByCategory(products)
  function groupedproductsByCategory(products){
    const groupedproducts={};
    products.forEach(products =>{
      if(!groupedproducts[products.category]){
        groupedproducts[products.category]=[];
      }
      groupedproducts[products.category].push(products);
    
    });
    return groupedproducts;
       }
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Headphones', price: 80, category: 'Electronics' },
  { name: 'Shoes', price: 60, category: 'Clothing' }
];
const groupedproducts=
groupedproductsByCategoey(products)


// Given an array of objects, where each object represents a student with a name and an array of scores, write a function that returns
//  a new array containing the names of all students whose average score is greater than or equal to 85.
function getNamesOfTopStudent(students){
  const topStudent = student.filter(student =>{student .scores.reduce((acc,score)=> acc + score ,0)
 /student.scores.length;
 return avaerageScore >= 85;
 });
 return topStudents.map(topstudent => topStudent.name);
}


const students= [
  {name:'john', scores:[90,80,85]},
  {name: 'Jane', scores : [95,92,88]},
  {name:'Jim', scores :[70,80,75]},
  {name: 'Jill',scores:[85,90,84]},

];
const getNamesOfTopStudent=
getNamesOfTopStudent(students);


// Given an object representing a car, with properties for the make, model, year, and a method to display
//  the car's information, write a function that takes the car object and adds a new method to the object
//   called age. The age method should return the current age of the car based on the current year and the
//    car's year property.
function addAgeMethodToCar(car){
    const currentyear=new Date().getFullYear();
    car.age=function(){
        return currentyear-this.year;
    }
}
const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};
addAgeMethodToCar(car);
console.log(car.age());