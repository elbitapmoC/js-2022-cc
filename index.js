const person = {
  fN: 'Ahkal',
  heritageName: 'Yahawadah',
  parent: true,
  fullName : function() {
    return `${this.fN} ban ${this.heritageName}` //'this' refers to the person object.
  }
}

console.log(person.fullName());