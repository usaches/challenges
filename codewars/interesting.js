function diamond(n) {
    var rows=n;
    var arr = [];
    for(var i=1; i <= rows; i++)
    {
        for(var j=1; j<=i; j++)
        {

           arr.push('*');
        }

        arr.push('<br />');
    }
    console.log(arr.join(''));
}

diamond(5);

function FizzBuzz() {
    for (var i =0; i<51; i++){
        if (i%15 ===0 ){
            console.log("Fizzbuzz")
        }
        else  if (i%5===0 ){
            console.log("Buzz")
        }
        else  if (i%3===0 ){
            console.log("Fizz")
        }
        else console.log(i)
    }
}
FizzBuzz();


function evaporator(content, evap_per_day, threshold){
    var perc = (100-evap_per_day)/100;
    var left = 100;
    for(var i =0, j=1; i<1000; i++){
        if(perc*left < threshold){return j}
        else{
            left = perc*left;
            j++}

    }
}