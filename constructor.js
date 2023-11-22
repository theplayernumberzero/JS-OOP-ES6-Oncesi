//Bir obje başka bir objeden özellik ve metodalarını miras alabiliyor.
//this keywordu üzerinde bulunduğumuz objeyi gösterir.
//Kendi objemizi oluşturmadığımız takdirde this = window, oluşturursak gloabl scope objelerimiz olur.

const emp1 = {  //Object Literal
    name: "Bahadir",
    age: 21,
    showInfos: function(){console.log("Bilgiler Gösteriliyor..")}
};

emp1.salary = 0;    //özellik ekleme

//Constructor Oluşturma
//Yapıcı Fonksiyon
function Employee1(){    //Büyük başlaması önemli
    this.name = "Umut";
}

const emp2 = new Employee();

function Employee2(name, age, salary){     //This keywordu şu anki objeyi gösterir.
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function(){
        console.log(this.name, this.age, this.salary);
    }
}

const emp3 = new Employee2("Uzay", 18, 30000);
emp3.showInfos();