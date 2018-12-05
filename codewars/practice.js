// There is an worday with some numbers. All numbers are equal except for one. Try to find it!
//
//     findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that worday contains more than 3 numbers.
//
//     The tests contain some very huge wordays, so think about performance

function findUniq(word) {
    // do magic
    var init;
    var found;
    for (var i=0; i<word.length; i++){
        if(word[0] !== word[i]){
            var init = word[i];
            if (init == word[2]&&init==word[1]){
                found = word[0];
                return found;}
            else { return init;}
        }
    }
}


function isDivisible(n, x, y) {
    var output;
    if(n % x ==0 && n%y==0){
        output = true;}
    else {output = false;}
    return output;
}

//
// Your task is to make function, which returns the sum of a sequence of integers.
//
//     The sequence is defined by 3 non-negative values: begin, end, step.
//
//     If begin value is greater than the end, function should returns 0
//
// Examples
//
// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4

const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    var final;
    if(end<begin){final=0;}
    else if(begin==end){final=begin;}
    else if(begin<end&&((end-begin)%step==0)){
        final=(((Math.floor((end-begin)/step+1))*(begin+end))/(2));
    }
    else if(begin<end){
//   final=(((Math.floor(((end-begin)/step+1))*(end-begin)))/(2));
        var numb=Math.floor((end-begin)/step);
        final=begin;
        for(var i = 1; i<numb+1; i++){
            final=final+begin+step*i;}
    }
    return final;
};

var capitals = function (word) {
    var arr=[];
    for(var i = 0; i < word.length; i++){
        if (word[i] === "Q" || word[i] === "W" || word[i] === "E" || word[i] === "R" || word[i] === "T" || word[i] === "Y" || word[i] === "U" || word[i] === "I" || word[i] === "O" || word[i] === "P" || word[i] === "A" || word[i] === "S" || word[i] === "D" || word[i] === "F" || word[i] === "G" || word[i] === "H" || word[i] === "J" || word[i] === "K" || word[i] === "L" || word[i] === "Z" || word[i] === "X" || word[i] === "C" || word[i] === "V" || word[i] === "B" || word[i] === "N" || word[i] === "M"){
            arr.push(i);
        }
    }
    return arr;
};

function minMax(arr){
    var arr1=arr.toString();
    var arr2 = arr1.split(",");
    var str = arr2;
    return [parseFloat(Math.min(...str)), parseFloat(Math.max(...str))]; // fix me!
}

class SequenceSum {
    static showSequence(count) {
        if (count === 0) return '0=0'
        if (count < 0) return `${count}<0`

        const numberRange = Array.from({ length: count + 1 }, (_, index) => index)

        const summatoryString = numberRange.join('+')
        const total = numberRange.reduce((total, value) => total + value, 0)

        return `${summatoryString} = ${total}`
    }
}

// Function Export
module.exports = SequenceSum;