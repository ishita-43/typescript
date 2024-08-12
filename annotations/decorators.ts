class Boat{
    color: string;

    get formattedColor():string{
        return `The color of the boat is ${this.color}`;
    }

    @testDecorator("Boat was sink")
    pilot():void {
        throw new Error();
        console.log("swish");
    }

}

function testDecorator(errorMessage){
 return function(target:any, key:any , desc:PropertyDescriptor):void{
    const method = desc.value;
    desc.value = function(){
        try{
            method();
        }catch(e){
            console.log(errorMessage);
        }
    };

    // console.log("Target",target);
    // console.log("Key",key);
}
}


// testDecorator(Boat.prototype,'pilot');
new Boat().pilot();