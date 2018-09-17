class Sorter {
  constructor() {
    this.arr = [];
    this.compUsed = false;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
   return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(array) {
    let temp = [];
    array.sort(function(a,b){return a - b;});
   for(let i = 0; i < array.length; i++){
      temp[i] = this.arr[array[i]];
    }
      if(this.compUsed == true){
        temp.sort(this.compareFunction);
      }
      else temp.sort(function(a,b){return a - b;});
    for (let i = 0; i < array.length; i++){
      this.arr[array[i]] = temp[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
    this.compUsed = true; 
  }
}

module.exports = Sorter;