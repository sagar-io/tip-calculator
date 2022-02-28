const billInput = document.getElementById('bill-input');
const numOfPeopleInput = document.getElementById('num-of-people-input');
const tipPercInputs = document.querySelectorAll('#tip-container .tip-btn')

const outputNumberTip = document.getElementById('output-number-tip');
const outputNumberTotal = document.getElementById('output-number-total');

const resetButton = document.getElementById('output-reset-btn');

let bill, numOfPeople, tipPerc;
let tipPerPerson, totalPerPerson;

billInput.addEventListener('change', (e) => {
     bill = e.target.value;
    handleOutput();
});

numOfPeopleInput.addEventListener('change', (e) => {
     numOfPeople = e.target.value;
    handleOutput();
})

tipPercInputs.forEach(
    (tipPercInput) => tipPercInput.addEventListener('click',(e) =>  {
         tipPerc = e.target.dataset.value;
         
        handleOutput();
    }));

    

function handleOutput() {
    if(bill && numOfPeople && tipPerc){
       tipPerPerson = (bill * tipPerc / 100) / numOfPeople;
       totalPerPerson = tipPerPerson + (bill / numOfPeople);

       outputNumberTip.innerText = tipPerPerson;
       outputNumberTotal.innerText = totalPerPerson;
    }else{
        return;
    }
}

resetButton.addEventListener('click', () =>{
    outputNumberTip.innerText = '0.00';
    outputNumberTotal.innerText = '0.00';
    
})