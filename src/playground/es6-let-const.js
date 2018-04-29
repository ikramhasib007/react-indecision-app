var fullName = 'Ikram Hasib';

if(fullName){
    const firstName = fullName.split(' ')[0];
    console.log(firstName); //showing console as expected
}
console.log(firstName); // showing error firstName is not defined