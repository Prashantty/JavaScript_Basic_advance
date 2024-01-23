// ex 1

function fn(){

    var i = 10;
    let b =1000;
    setTimeout( function() {
        console.log(i);
        console.log(b);
    }, 1000);

    console.log("Running 1")

    setTimeout( () => {
        console.log(i);
        console.log(b);
    }, 5000);
    console.log("Running 2 ")
}

//fn();



//Ex 2
// write a program to print 1 to 6 like 1 after 1sec , 2 after 2sec , 3 after 3sec like that 

function fn1()
{
    for(let i = 1 ; i<=6 ; i++) // everytime its created in new memory space [let created copy of itself everytime ]
    {
        setTimeout(() => {
            console.log(i)
        }, i*1000);
    }
}

//fn1();




// using var (closure will help )
//ex 3

function m()
{
    for(var i = 1 ; i<=6 ; i++)
    {
        function close(x)
        {
            setTimeout(() => {
                console.log(x)
            }, x * 1000);
        }
        close(i); // everytime its make a copy of itself 
    }
    

}

m();
