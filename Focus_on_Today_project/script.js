const checkBoxList = document.querySelectorAll('.custom-checkbox');
const inputFieldList = document.querySelectorAll('.goal-input');
const errorLabel = document.querySelector('.error-label');
const progressAmtBar = document.querySelector('.progress-amount');
const footerQuote = document.querySelector('.quote');



let progressCount = 0;


checkBoxList.forEach( (checkbox) => {

    checkbox.addEventListener('click', (e)=> {
        
        const allFieldsFilled = [...inputFieldList].every( (input) =>{
             return  input.value.trim() !== ""; 
        });
        
        if(allFieldsFilled){
                 
            checkbox.parentElement.classList.toggle('completed');
        
            
            if(checkbox.parentElement.classList.contains('completed')){
                checkbox.nextElementSibling.readOnly = true;
              
                progressCount++;
                changeProgressAmt(progressCount);
                

            }
            else{
                checkbox.nextElementSibling.readOnly = false;

                progressCount--;
                changeProgressAmt(progressCount);
                
            }
            
        }   
         
        else{
            errorLabel.classList.add('show-error');

            inputFieldList.forEach( input => {

                input.addEventListener( 'focus', (e)=> {
                    errorLabel.classList.remove('show-error');

                });

            });

        }   

    })

});

function changeProgressAmt(count){

                // for progress bar

    if(count === 1){
        progressAmtBar.id = 'one-task-complete';
        footerQuote.textContent = `“You've taken the first step — and that's where champions begin.”`;

    }
    else if(count === 2){
        progressAmtBar.id = 'two-task-complete';
        footerQuote.textContent = `“Keep Going, You're making great progress!”`;
    }
    else if(count === 3){
        progressAmtBar.id = 'three-task-complete';
        footerQuote.textContent = `“Congratulations! You've proven that vision + action = success.”`
    }
    else {
        progressAmtBar.id = 'zero-task-complete';
        footerQuote.textContent = `“Move one step ahead, today!”`;
    }


                // for progress bar text

    if(count>0){
        progressAmtBar.textContent = `${count}/3 Completed`;
    }
    else{
        progressAmtBar.textContent = `0/3`;
    }

}






/*

function isClickable(inputFieldList) {
    
    let clickable = 1;
    inputFieldList.forEach( input => {

        if( input.value.trim() === "" )
            clickable = 0;

    });
    return clickable;
}


checkBoxList.forEach( (checkbox) => {
    checkbox.addEventListener('click', (e)=> {
        
        
        if(isClickable(inputFieldList)){
                        
            checkbox.parentElement.classList.toggle('completed');
            
            if(checkbox.parentElement.classList.contains('completed')){
                    checkbox.nextElementSibling.readOnly = true;

            }
            else{
                    checkbox.nextElementSibling.readOnly = false;
            }
            
        }   
         
        else{
            errorLabel.style.opacity = "1";

            inputFieldList.forEach( input => {

                input.addEventListener( 'focus', (e)=> {
                    errorLabel.style.opacity = "0"; 
                });

            });

        }   

    })
});

*/
