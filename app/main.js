
/* Напиши получение значений через Prompt и запись их в обьект */          
getPerson = (name,subname,age) => {
    // console.log(person);
    let person = {
        name: name,
        subname: subname,
        age: age,
        sayHello () {
            console.log(`Привет меня зовут ${this.name} ${this.subname} мне ${this.age} лет!!!! `);
        }
    }
    return person;
}

const myPerson = getPerson("Mike","Shibodaev",35);
myPerson.sayHello();

const newPerson = getPerson("Виктория","Ромадина",38);
newPerson.sayHello();

