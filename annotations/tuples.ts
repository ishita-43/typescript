const drink = {
    color:"brown",
    carbonated:true,
    sugar:40
}
// type alias
type Drink = [string,boolean,number];
const pepsi:Drink = ["brown",true,40];
// const pepsi:[string,boolean,number]= ["brown",true,40];