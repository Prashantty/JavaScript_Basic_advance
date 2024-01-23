class Person {
    private name: string;
    public name1 : string;
    public readonly name2 : string;
  
    public constructor(name: string , pra: string , pras: string) {
      this.name = name;
      this.name1 = pra;
      this.name2 = pras = "Kumar"  // cannot redeclare this 
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
    const person = new Person("Jane" , "Prashant"  , "hello");
    console.log(person.getName()); 
    // console.log(person.name);   // person.name isn't accessible from outside the class since it's private
    console.log(person.name1);
    console.log(person.name2);



class Employee{

    //constructor 
    public constructor(private name : string ) {}

    public GetName() : string {

        return this.name;
        
    }


}
const employee1 = new Employee("Prashant Kumar");
console.log(employee1.GetName());
// console.log(employee1.name) // not accessable because it is private 

