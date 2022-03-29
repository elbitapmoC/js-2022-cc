const person = {
  fN: 'Ahkal',
  heritageName: 'Yahawadah',
  parent: true,
  fullName : function() {
    return `${this.fN} ban ${this.heritageName}` //'this' refers to the person object.
  }
}

const time = {
  printTime : function(){
    
    return document.getElementById('demo').innerHTML = Date();
  }
}
