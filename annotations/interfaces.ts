interface Vehicle{
    name:string;
    year:number;
    broken:boolean;
    summary(): string;
};

const OldCivic = {
    name:"civic",
    year:1994,
    broken:true,
    summary():string{
        return `${this.name}`;
    }
};

const printVehicle = (vehicle:Vehicle):void=>{
    console.log(`
        Name: ${vehicle.name}
        Year: ${vehicle.year}
        Broken? ${vehicle.broken}
        `)
};

printVehicle(OldCivic);
