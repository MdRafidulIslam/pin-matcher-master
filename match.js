function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}


function generatePin() {
    const pin = getPin();
    document.getElementById('pin-display').value = pin;
}

document.getElementById('cals-body').addEventListener('click', function (event) {
    const displayInput = document.getElementById('cals-input');
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number == 'C') {
            displayInput.value = '';
        }

    } else {


        const previousNumber = displayInput.value;
        const newNumber = previousNumber + number;
        displayInput.value = newNumber;
    }

})
document.getElementById('error').style.display = 'none';
document.getElementById('right').style.display = 'none';

function verifyPin() {
    const pin = document.getElementById('pin-display').value;
    const type = document.getElementById('cals-input').value;



    if (pin == type) {
        console.log("YAY match");
        document.getElementById('right').style.display = 'block';
        document.getElementById('error').style.display = 'none';

    } else {

        document.getElementById('error').style.display = 'block';
        document.getElementById('right').style.display = 'none';
    }

}