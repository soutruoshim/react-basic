class Fruite{
    constructor(name){
        this.name = name;
    }

    foo(){
        console.log(`${this.name} is to much fasting`)
    }

    static jackFruite(){
        console.log('this is static method')
    }
}
let fruite = new Fruite('Mango');
fruite.foo();