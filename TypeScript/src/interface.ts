interface Shape {
   
    GetArea : () => number;
}


class Ractangle implements Shape {

    public constructor( private readonly length : number , private readonly breadth : number ){
     
        
    }

    public GetArea(): number{

        return  this.length * this.breadth;
    }

}

const MyResult = new Ractangle( 10  , 12);
console.log(MyResult.GetArea())
