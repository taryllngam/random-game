const display = document.getElementById('display')
const btn = document.getElementById('btn')

let number = [Math.floor(Math.random() * 100)]
btn.addEventListener('click',function(){
    let input = document.getElementById('input').value;
    if(input == number){
        display.innerHTML = `YOU GUESED RIGHT, YOUR NUMBER WAS ${number}`
    }
    else if(input < number){
        display.innerHTML = `YOU GUESED TOO LOW`
    }if(input > number){
        display.innerHTML = `YOU GUESED TOO HIGH`
    }
})

