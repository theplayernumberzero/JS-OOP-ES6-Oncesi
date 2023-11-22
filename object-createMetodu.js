//Object create metodu bir obje oluştururken prototype ini başka objeden oluşturmamızı sağlar.

const obj = {
    test1: function(){
        console.log("Test 1");
    },
    test2: function(){
        console.log("Test 2");
    }
}

//Child Object
const emp = Object.create(obj); //Kalıtım işlemlerinde kullanılır.

//Childe bir şey ekleme parent ı etkilemez.
emp.name = "Bahadir";
emp.age = 22;

function Person(){

}
Person.prototype.test1 = function(){
    console.log("Test 1");
}
Person.prototype.test2 = function(){
    console.log("Test 2");
}

function Employee(name, age){
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);   //Soldaki child, sağdaki parent