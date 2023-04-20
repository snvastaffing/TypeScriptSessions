
let instance;
class InstanceCounter{
    constructor(){
        this.count= 0
            if(instance){
                throw new Error("Its singleton my dear dev you cant create multiple instances !");
            }
        instance= this;
    }

    getCount(){return this.count}    
    
}

const singletonCount = Object.freeze(new InstanceCounter);
singletonCount.increment()
const one = singletonCount
const two = singletonCount
const three = singletonCount





