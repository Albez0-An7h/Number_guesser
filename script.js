const gen = document.getElementById('gen');
const sub = document.getElementById('sub');
const fill = document.getElementById('in');
const para = document.getElementById('fill')
let num;
para.innerText = `Try to guess the genrated no.!`


gen.onclick = function(){
    num = Math.floor(Math.random()*11);
    para.innerText=`Try to guess the genrated no.!`
    document.getElementById('idn').innerText = `Number Genrated`
    console.log(num);
}
sub.onclick = function(){
    check_ = fill.value;
    if (check_ == num){
        para.innerText = `You guessed Right!!!`
    } 
    else{
        para.innerText = `Try again!!! It was ${num}`
    }
}

