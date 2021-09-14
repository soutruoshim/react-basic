function _var(){
    for(var i = 1; i < 4; i++){
        console.log(`i = ${i}`);
    }
    console.log(i);
}

function _let(){
    for(let i = 1; i < 4; i++){
        console.log(`i = ${i}`);
    }
    //console.log(i); // error i cus let can't use without loop
}

function _const(){
    // error const cus can't change value
    // for(const i = 1; i < 4; i++ ){
    //     console.log(`i = ${i}`);
    // }
    // console.log(i);
}

_var();
_let();
_const();