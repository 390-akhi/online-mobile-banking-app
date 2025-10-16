// console.log('home js connected!');


// reusable code
function getInputValueNumber(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);
    // console.log(inputFieldValueNumber);
    return inputFieldValueNumber;
}

function getInputValue (id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}

// function to get innertext
function getInnerText(id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}

// function to set innertext
   function setInnerText(value){
    const availableBalanceElement = document.getElementById('available-balance');
    availableBalanceElement.innerText = value;
   }



//    function to toggle 
function handleToggle(id){
     const forms = document.getElementsByClassName('form')
      for(const form of forms){
        form.style.display = 'none';
      }
      document.getElementById(id).style.display = 'block';
}

// function to active toggle button
function activeButtonToggle(id){
   const formBtns = document.getElementsByClassName('form-btn')

      for(const btn of formBtns){
          btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
          btn.classList.add('border-gray-300');
      }
      document.getElementById(id).classList.remove('border-gray-300')
      document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
}


// add money feature
const validPin = 1234;
const transactionData = [];

document.getElementById('add-money-btn')
.addEventListener('click', function(e){
   e.preventDefault();

   const bank = getInputValue('bank');
   const accountNumber = document.getElementById('account-number').value;
  const addAmount = getInputValueNumber("add-amount");
    if(addAmount<= 0){
        alert('Invalid Amount');
        return;
    }

  const pinNumber = getInputValueNumber('add-pin-number');

//  console.log(bank, accountNumber, addAmount, pinNumber);

const availableBalance = getInnerText('available-balance');
// console.log(availableBalance);

if(accountNumber.length < 11){
    alert('please provide 11 digit valid account number');
    return;
}

if(pinNumber !== validPin){
    alert('please provide valid pin number');
    return;
}

const totalNewBalance = addAmount + availableBalance;

alert('successfully added money');

setInnerText(totalNewBalance);

const data = {
    name : 'Add Money',
    date : new Date().toLocaleTimeString()
}
transactionData.push(data)
console.log(transactionData)

} )


// cash out feature

document.getElementById('withdraw-money-btn').addEventListener('click',
    function(e){
         e.preventDefault();
        // console.log('withdraw button clicked');
        const amount = getInputValueNumber('withdraw-amount');
        const availableBalanceNew = parseInt(document.getElementById('available-balance').innerText);

        if(amount<=0 || amount>availableBalanceNew){
            alert('Invalid cash out');
            return;
        }

        // console.log(amount, availableBalanceNew);
        const totalNewBalance = availableBalanceNew - amount;
        alert('successfully added money');
        
        setInnerText(totalNewBalance);

        const data = {
    name : 'Cash Out',
    date : new Date().toLocaleTimeString()
}
transactionData.push(data)
console.log(transactionData)

    })


    // transaction part
    document.getElementById('transaction-btn').addEventListener('click', function(){
        const transactionContainer = document.getElementById('transaction-container')

        transactionContainer.innerText = ''

        for(const data of transactionData){
            const div = document.createElement('div')
            div.innerHTML =`
               <div class="rounded-xl p-3 bg-white flex justify-between items-center mt-3">
        <div class="flex items-center ">
           <div class="p-3 rounded-full bg-[#f4f5f7]"><img src="assets/wallet1.png" alt="" class="mx-auto"></div>
           <div class="ml-3">
            <h1>${data.name}</h1>
            <p>${data.date}</p>
           </div>
        </div>
           <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
            
            `

            transactionContainer.appendChild(div)
        }
    })

// toggling features
// add money
  document.getElementById('add-btn').addEventListener('click', function(){
      handleToggle('add-money-parent');
      activeButtonToggle('add-btn');
    })

//  cash out
  document.getElementById('cash-btn').addEventListener('click', function(){
     handleToggle('cash-out-parent');
    activeButtonToggle('cash-btn');
   })


//   transfer money
document.getElementById('transfer-btn').addEventListener('click', function(){
       handleToggle('tranfer-parent');
       activeButtonToggle('transfer-btn');
})


//   transfer money
document.getElementById('bonus-btn').addEventListener('click', function(){
       handleToggle('get-bonus-parent');
        activeButtonToggle('bonus-btn');
})



//   Pay bill
document.getElementById('pay-bill-btn').addEventListener('click', function(){
       handleToggle('pay-bill-parent');
       activeButtonToggle('pay-bill-btn');
})


//   Transaction
document.getElementById('transaction-btn').addEventListener('click', function(){
       handleToggle('transaction-parent');
       activeButtonToggle('transaction-btn');
})