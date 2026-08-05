function countvowels(str) {
 const vowels = 'aeiouAEIOU';
 let count = 0; 

    for (let index = 0; index < str.length; index++) {
        const ch = str[index];
        
        if(vowels.includes(ch)){
            count++
        }
    }
    return count; 
}

var input = 'Hello World';
var output = countvowels(input);
console.log(output);