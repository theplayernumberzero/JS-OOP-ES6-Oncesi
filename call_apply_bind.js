//Call, apply ve bind prototype objesinin içinde bulunan fonksiyonlardır.

//this anahtar kelimesi, call fonksiyonuna hangi objeyi argüman olarak gönderirsek onu gösterecektir.
//call
const obj1 = {
    number1:10,
    number2:20
}
const obj2 = {
    number1:30,
    number2:50
}

function addNumbers(num, num2) {
    console.log(this.number1 + this.number2 + num + num2);

}

addNumbers.call(obj1,100,200);
addNumbers.call(obj2,100,200);

//Apply ve call aynı tek farkı apply da parametleri argüman listesi olarak vermelisin.
addNumbers.apply(obj1,[100,200]);
addNumbers.apply(obj2,[100,200]);

// Çıktı: 130 180

function Person(name){
    this.name = name;
}

function Employee(name,age){
    // This Employee'yi Gösteriyor 
    // ES6 sınıflarında kullandığımız super() gibi Person yapıcı metodunu kullanıyoruz.
    Person.call(this,name); 
    this.age = age;

}
const emp1 = new Employee("Mustafa",25);

console.log(emp1.name);
console.log(emp1.age);

// Çıktı : Mustafa 25


//Bind() fonksiyonu, içine verilen objeye göre yeni bir fonksiyon kopyası yaratır. Oluşan bu kopya fonksiyonu daha sonradan argüman listesi ile beraber gönderilen objeye kullanabiliriz.
//Bind
//or Copr Function
const obj3 = {
    number1:10,
    number2:20
};

function getNumbersTotal(number3,number4) {
    return this.number1 + this.number2 + number3 + number4;
}
// obj3'ü this parametresinin göstereceği şekilde bağlayarak yeni bir fonksiyon oluşturuyoruz.

const copyFunc = getNumbersTotal.bind(obj3);

console.log(copyFunc(30,40));

// Çıktı : 100

// Call ve Apply fonksiyonları bir fonksiyonu hemen çalıştırırken, bind fonksiyonu bize yeni bir kopya üretmektedir.

//Bind fonksiyonundan, fonksiyonumuzu başka bir bağlamda daha sonradan kullanabilmek adına yararlanabiliriz (örnek,Javascript Olayları — JS Events). Call ve Apply Fonksiyonlarını ise bir fonksiyonu hemen bir obje ile çağırmak için kullanabiliriz.