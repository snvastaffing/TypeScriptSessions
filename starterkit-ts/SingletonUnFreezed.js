var Singleton = (function(){
    var instance;

    function createInstance(){
        var object = Object("I am an Instance");
        return object
    }

    return{
        getInstance:function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();
function run(){
    let inst1= Singleton.getInstance()
    let inst2= Singleton.getInstance()
    let inst3= Singleton.getInstance()

    console.log(`are inst1 ${inst1} and inst2 ${inst2} are same ? ${(inst1===inst2)} `)
    console.log(`are inst2 ${inst2} and inst3 ${inst3} are same ? ${(inst2===inst3)} `)
}