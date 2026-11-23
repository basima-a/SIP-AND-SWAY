

let croissant = document.getElementById('croissant')
let painChoc = document.getElementById('painChoc');
let danish = document.getElementById('danish');
let benedict = document.getElementById('benedict')
let avocado = document.getElementById('avocado')
let matcha = document.getElementById('matcha')


let allbtn = document.getElementById('allbtn');
let viennbtn = document.getElementById('viennbtn');
let brunchbtn = document.getElementById('brunchbtn');
let drinksbtn = document.getElementById('drinksbtn');

allbtn.onclick = function () {
    croissant.style.display = 'block';
    painChoc.style.display = 'block';
    danish.style.display = 'block';
    benedict.style.display = 'block';
    avocado.style.display = 'block';
    matcha.style.display = 'block';
};

viennbtn.onclick = function () {
    croissant.style.display = 'block';
    painChoc.style.display = 'block';
    danish.style.display = 'block';
    benedict.style.display = 'none';
    avocado.style.display = 'none';
    matcha.style.display = 'none';
};

brunchbtn.onclick = function () {
    croissant.style.display = 'none';
    painChoc.style.display = 'none';
    danish.style.display = 'none';
    benedict.style.display = 'block';
    avocado.style.display = 'block';
    matcha.style.display = 'none';
};

drinksbtn.onclick = function () {
    croissant.style.display = 'none';
    painChoc.style.display = 'none';
    danish.style.display = 'none';
    benedict.style.display = 'none';
    avocado.style.display = 'none';
    matcha.style.display = 'block';
};
let nameinput = document.getElementById('nameinput');
let phoneinput = document.getElementById('phoneinput');
let msginput = document.getElementById('msginput');
let sendbtn = document.getElementById('sendbtn');
let result = document.getElementById('result');

 sendbtn.onclick = function() {
    
    if(nameinput.value === '') {
        result.innerHTML = 'Please Enter Your NAME: ';
        result.style.color = 'red';
    } else if (phoneinput.value === '') {
        result.innerHTML = 'Please Enter Your Phone Number: ';
        result.style.color = 'red';
    } else if (isNaN(phoneinput.value)) {
        result.innerHTML = 'Phone number must contain only digits.';
        result.style.color = 'red';
    } else if (phoneinput.value.length !== 10) {
        result.innerHTML = 'Phone number must be exactly 10 digits.';
        result.style.color = 'red';
    } else if(msginput.value === '') {
        result.innerHTML = 'Please write a message.';
        result.style.color = 'red';
    } else {
        result.innerHTML = 'ThankYOU.' + nameinput.value + ' ! We will contact you soon.';
        result.style.color = 'green';
    }
};