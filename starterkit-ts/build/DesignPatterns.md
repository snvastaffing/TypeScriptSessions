// class DBMigrator{
//     // 700 MB
//     Blob data;
//     constructor(){
//         data= new DBReader('fhdajfhdfhd');
//     }
// }
// 700 * instances ;
// DBMigrator obj1 = new DBMigrator() // DEV1
// DBMigrator obj1 = new DBMigrator() // DEV2
// DBMigrator obj1 = new DBMigrator() // DEV3

Design patterns : 

1. Creational Design Pattern:-
    i.  Singleton Pattern :- ensures that only single instance of a given class has only one immutable instance, single point of truth for whole application  

    
const Config ={
    start:()=> console.log("App is starting .... started"),
    stop:()=> console.log("App is stopping .... stopped")
}

Class Example
 class Config{
    constructor(){}
    start(){ console.log("App is starting .... started")}
    stop(){ console.log("App is stopping .... stopped")}
}
const theconfig= new Config();
const theconfig1= new Config();
Object.freeze(theconfig)

// Config.start();
// Config.stop();

theconfig1.start();
theconfig1.stop();


theconfig1.name='__Dheerajthedev__'

console.log(theconfig1)



2. Structural Design Pattern:-

3. Behavioral Design Pattern:-