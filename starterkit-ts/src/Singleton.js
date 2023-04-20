
// const Config ={
//     start:()=> console.log("App is starting .... started"),
//     stop:()=> console.log("App is stopping .... stopped")
// }

// Class Example
 class Config{

    constructor(){
        this.instanceId='___001__'
    }
    start(){ console.log(`App is starting with ${this.instanceId} .... started`)}
    stop(){ console.log(`App is stopping with ${this.instanceId} .... stopped`)}
}

configFactory={
    configSingleton : 
}


const theconfig1= new Config();


// Config.start();
// Config.stop();

theconfig1.start();
theconfig1.stop();


theconfig1.name='__Dheerajthedev__'

console.log(theconfig1)