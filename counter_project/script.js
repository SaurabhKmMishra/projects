const Countervalue = document.querySelector('.Countervalue');
const decrementBtn = document.querySelector('.decrementBtn');
const incrementBtn = document.querySelector('.incrementBtn');
const resetBtn = document.querySelector('.resetBtn');
const stepAmount = document.querySelector('#stepAmount');


let stepValue = 1;

stepAmount.addEventListener('input', (e)=>{
    e.stopPropagation();
    stepValue = +stepAmount.value;

});


stepAmount.addEventListener('blur', (e)=>{
    
    if(stepValue<1 ){
        stepAmount.value = 1;
        stepValue = 1;
    }
});


incrementBtn.addEventListener('click', increaseCount);
decrementBtn.addEventListener('click', decreaseCount);


resetBtn.addEventListener('click', ()=> {
    Countervalue.innerHTML = '0';
});


window.addEventListener('keydown', (evt)=> {
    if(evt.target.tagName === "INPUT") return;
    
    if(evt.key === '-') decreaseCount();
    if(evt.key === '+') increaseCount();
    if(evt.key === 'ArrowUp'){
        stepAmount.value++;
        stepValue = +stepAmount.value;

    };
    if(evt.key === 'ArrowDown'){
        if(stepAmount.value>1) stepAmount.value--;
        stepValue = +stepAmount.value;    
    }
        
});



function increaseCount(){
    if(stepValue < 1) return; 

    let count = +Countervalue.innerHTML;
    Countervalue.innerHTML = `${count + stepValue}`;
}

function decreaseCount(){
    if(stepValue < 1) return; 

    let count = +Countervalue.innerHTML;
    Countervalue.innerHTML = `${count - stepValue}`;
}
