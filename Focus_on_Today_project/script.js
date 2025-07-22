const checkBoxList = document.querySelectorAll('.custom-checkbox');
const inputFields = document.querySelectorAll('.goal-input');
const errorLabel = document.querySelector('.error-label');
const progressAmtBar = document.querySelector('.progress-amount');
const progressTextSpan = document.querySelector('.progress-text');
const footerQuote = document.querySelector('.quote');

const allGoals =  JSON.parse(localStorage.getItem('allGoals'))||{};



let count = Object.values(allGoals).filter((goals) => goals.completed).length;

checkBoxList.forEach( (checkbox) => {

    checkbox.addEventListener('click', (e)=> {
        
        const allGoalsAdded = [...inputFields].every( (input) =>{
            return  input.value.trim() !== ""; 
        });
        
        if(allGoalsAdded){  
                 
            checkbox.parentElement.classList.toggle('completed');


            const inputId = checkbox.nextElementSibling.id;
            allGoals[inputId].completed = !allGoals[inputId].completed; // i.e, to change the existing value


                    // to maintain disablility for completed ones
            
            if(allGoals[inputId].completed ){
                checkbox.nextElementSibling.disabled = true;
            }
            else{
                checkbox.nextElementSibling.disabled = false;
            }
    
                    // to change prg amt txt,wdth and footrQuote

            count = Object.values(allGoals).filter((goals) => goals.completed).length; // to updt cnt in real time.

            changeProgressAmt(count);

            localStorage.setItem( 'allGoals', JSON.stringify(allGoals));

        }   

        else{
            errorLabel.classList.add('show-error');

        }     

    })
});

                 // for local storg pre text on refresh
    

inputFields.forEach( (input) => {
   

    if(Object.keys(allGoals).length !== 0){ // to ensure that allGoals is not empty

        input.value = allGoals[input.id].name; // to maintain data

        if( allGoals[input.id].completed ){ // fr chkBox
            input.parentElement.classList.add('completed');

            input.disabled = true;
        }
        
        changeProgressAmt(count);


    }


    input.addEventListener( 'input', (e) => {

        allGoals[input.id]  = {
            name: input.value,
            completed: false,
        }
        // allGoals.count = 0;

        localStorage.setItem( 'allGoals', JSON.stringify(allGoals)); // to set in local storage the obj. after conv. to string.

    })

    input.addEventListener( 'focus', (e)=> {
        errorLabel.classList.remove('show-error');
    });


});



function changeProgressAmt(count){

    progressAmtBar.style.width = `${count/3 * 100}%`;


                // for progress bar text

    if(count>0){
        progressTextSpan.textContent = `${count}/3 Completed`;
    }
    else{
        progressTextSpan.textContent = `0/3`;
    }


                // for footer quote

    if(count === 1){
        footerQuote.textContent = `“You've taken the first step — and that's where champions begin.”`;

    }
    else if(count === 2){
        footerQuote.textContent = `“Keep Going, You're making great progress!”`;
    }
    else if(count === 3){
        footerQuote.textContent = `“Congratulations! You've proven that vision + action = success.”`
    }
    else {
        footerQuote.textContent = `“Move one step ahead, today!”`;
    }


}
