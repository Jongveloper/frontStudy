const hashmap = new Map();

hashmap.set('1', 800);
hashmap.set('2', [1,2,3]);
hashmap.set('3', 'This is a string');
hashmap.set('4', ()=>{console.log("Hello World")});

if(hashmap.has('3')){
  hashmap.set('3', 'We changed the value...')
}

hashmap.delete('4');

console.log(hashmap)

hashmap.clear();
console.log(hashmap);