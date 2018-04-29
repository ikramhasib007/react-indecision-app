class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Travellar extends Person{
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }

    getLocation(){
        let description = super.getDescription();
        if(this.location){
            description += ` I m from ${this.location}`;
        }
        return description;
    }
}

const me = new Travellar('Ikram Hasib',31, 'Jamalpur');
console.log(me.getLocation());

const other = new Travellar(undefined, undefined, 'Nowhere');
console.log(other.getLocation());