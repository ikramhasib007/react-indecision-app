
// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// }

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Ikram Hasib'));

const user = {
    name:"ikram",
    cities: ['Jamalpur', 'Dhaka', 'Bangladesh'],
    placeYouLived(){
        return this.cities.map((city) => this.name + ' lived in '+ city);
    }
};

console.log(user.placeYouLived());

const multiplier = {
    numbers: [2,3,4,5],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());