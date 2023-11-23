//ES6 dan sonra bu tarz kalıtım işlemleri yapılmamaya başladı.
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function(){
    console.log("İsim: "+this.name+" Age: "+this.age);
}

const person = new Person("Bahadir", 22);

function Employee(name, age, salary){
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age);     //Üstteki classın constructor unu kullanma.
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

const emp = new Employee("Umut",22,50000);
emp.showInfos();    //kalıtım ile Employee prptptype ını Person prototype ından almasını sağladık.