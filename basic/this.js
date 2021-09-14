const Mango = {
      color : 'Red',
      price : 3500,
      weight : 120,
      about: function(){
           return `This Mango color is ${this.color}`;
      }
}
console.log(Mango.about());