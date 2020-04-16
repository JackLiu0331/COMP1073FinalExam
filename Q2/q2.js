// JavaScript Document

//create a person class
class Person {
  //create constructor with server values
  constructor(name, age, gender, interests) {
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
//create a greeting log with person.name inside which will generate a console log
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };
//create a bye log with person.name inside which will generate a console log
  bye() {
    console.log(`${this.name} has left the building. Bye for now!`);
  };
}

//instance a new person name parth with value inside
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
//instance a new person name harmanpreet with value inside
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

//create a teacher class that extends person class which means it will able to reach values in person
class Teacher extends Person {
  constructor(name, last, age, gender, interests, subject, grade) {
    //super function to extand value in person class
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
  let chao = new Teacher('Chao', 'Liu', 20, 'male', ['JavaScript'], 'javascript', 5);
}
