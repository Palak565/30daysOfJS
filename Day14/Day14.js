// DAY 14 : Classes

// ACTIVITY 1: Class Definition
// Task 1: Define a class Person with properties name & age and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    constructor(fname, lname, age) {
        this.fname = fname,
        this.lname = lname,
        this.age = age;
    }

    greet(){
        return "Hi everyone!";
    };

    updateAge(new_age){
        this.age = new_age;
        console.log("Age = ",this.age); 
    }

    static msg()
    {
        console.log("This is a static method.");        
    }

    get fullname(){
        return this.fname + ' ' + this.lname;
    }

    setFname(new_fname){
        this.fname = new_fname;
    }

    setLname(new_lname){
        this.lname = new_lname;
    }
};

let p1 = new Person("Pallavi","Sharma",23);
console.log(p1.greet()); // O/P : Hi everyone!


// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
p1.updateAge(30); // O/P : Age =  30



// ACTIVITY 2 : Class Inheritance
// Task 3: Define a class student that extends the Person class. Add a property studentId & a method to return the studentId. Create an instance of the student class and log the student id.
class Student extends Person{
    static totalStudents = 0;
    constructor(fname, lname, age, studentID){
        super(fname, lname, age);
        this.studentID = studentID;
        Student.totalStudents++;
    }

    ID(){
        return this.studentID;
    }

    greet()
    {
        console.log(`Hi, I am ${this.fname} having student ID ${this.studentID}`);
    }
};

let s1 = new Student("Palak", "Goyal", 18, 138);
console.log("Student ID = " + s1.ID()); // O/P : Student ID = 138


// Task 4: Override the greeting method in the Student class to include the studentID in the message. Log the overriden greeting message.
s1.greet(); // O/P : Hi, I am Palak having student ID 138


// ACTIVITY 3 : Static Methods & Properties
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
Person.msg(); // O/P : This is a static method.
// p1.msg();     // will give error


// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
let s2 = new Student("Pranali", "Mehta", 25, 123);
console.log(Student.totalStudents); // O/P : 2



// ACTIVITY 4 : Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a firstname & lastname property). Create an instance and log the full name using the getter.
let p2 = new Person("Priyanka", "Ahlawat", 25);
console.log(p2.fullname); // O/P : Priyanka Ahlawat


// Task 8: Add a setter method to the Person class to update the name properties (firstname, lastname). Update the name using the setter and log the updated full name.
p2.setFname("Bhumika");
p2.setLname("Sharma");
console.log(p2.fullname); // O/P : Bhumika Sharma



// ACTIVITY 5: Private Fields
// Task 9: Define a class Account with private fields for balance and a method to deposit & withdraw money. Ensure that the balance can only be updated through these methods.
class Account{
    #balance;
    constructor(balance = 0){
        this.#balance = balance
    }

    deposit (amount){
        if (amount > 0)
        {
            this.#balance += amount;
            console.log(`Amount deposited = ${amount},  Balance = ${this.#balance}`);
        }
        else
            console.log("Enter a positive amount");            
    }

    withdraw (amount){
        if (amount > 0 && amount <= this.#balance)
        {
            this.#balance -= amount;
            console.log(`Amount withdrawn = ${amount},  Balance = ${this.#balance}`);
        }
    }
}


// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
let Acc1 = new Account(1000);
Acc1.deposit(500); // O/P : Amount deposited = 500,  Balance = 1500
Acc1.withdraw(700); // O/P : Amount withdrawn = 700,  Balance = 800
