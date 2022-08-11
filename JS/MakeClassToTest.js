class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    get showName() {
        return this.name;
    }
}

let person = new Person('Ivan', 22);
console.log(person.showName);