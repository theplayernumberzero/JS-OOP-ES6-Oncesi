//JS class tabanlı bir dil değildir, type tabanlıdır.
//JS de her objenin kendi içinde prototype özelliği vardır.

const object = new Object();    //Object Literal
object.name = "Bahadir";
console.log(object);

//Objelerin ortak metdoları prototype içine yazılır

function Employee(name, age){
    this.name = name;
    this.age = age;
}

//Employee Objesi prototype objesine sahip, prototype da object objesine sahip. (Prototype Chain)
//Prototype kalıtım yapılmasını sağlar.

//Kaltımda hiyerarşi vardır. Aynı metoddan 2 classta da varsa en yüksektekini çalıştırır.(Employee)

const emp1 = new Employee("Bahadir",22);
const emp2 = new Employee("Umut", 18);

//Prototype alan açısından fayda sağlar. Sürekli Kullanılacak bir fonksiyon prototype a yazılırsa hepsinde kullanılabilir ve daha az yer kaplar
Employee.prototype.showInfos = function(){
    console.log("İsim: "+this.name+" Age: "+this.age);
}
