class Vehicle{
    // color: string ='red';
    // color:string;
    constructor(public color:string){
        // this.color = color;
    }
    // public drive(): void{
    //     console.log("chagga chagga");
    // }
    protected honk():void{
        console.log("beep");
    }
}

class Car extends Vehicle{
    constructor(public wheel:number,color:string){
        super(color);
    }
    private drive(): void {
        console.log("vroom");
    }
    startDriving():void{
        this.drive();
        this.honk();
    }
}
// const car = new Car();
// const car = new Vehicle();
// car.drive();
const vehicle = new Vehicle('red');
const car = new Car(4,"red");
console.log(vehicle.color);
// car.startDriving();
// car.honk();
