'use strict'
let tipContainer = document.getElementById('tipContainer');
tipContainer.style.display='none';
tipContainer.style.backgroundColor='white';
tipContainer.style.color='blue';

function calculateTip(){
    let billPrice=document.getElementById('bPrice').value;
    let serviceValue=document.getElementById('service-option').value;
    let nSharing=document.getElementById('nSharing').value;
    let showTip= document.getElementById('showTip');

    let total=0;

    if(billPrice==='' || serviceValue==0 || isNaN(billPrice)){
         showTip.textContent="Please enter a valid bill price";
         return false;
    }
    if(nSharing===''){
       nSharing=1;
    }

    total=(billPrice * serviceValue) / nSharing;
    console.log(total);

    total=Math.round(total*100)/100;
        

    tipContainer.style.display='block';
    showTip.textContent=total;
};

let calculateButton = document.getElementById('submit');


calculateButton.addEventListener('click',function(e){
    e.preventDefault();
    calculateTip();
});