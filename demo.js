var name = 'arjji';

const first  = 'ariel';
let lastname = 'girov'

console.log(`hello ${lastname}`);

class Song {
  //same as initialize in ruby
  constructor(name, year){
    this.name = name;
    this.year = year;
  }
}

const hit = new Song('backstreet boys', 2333);
console.log(hit.name);

const numbers = [1,2,3,4,];

numbers.forEach(number => {
  console.log(number);
})
