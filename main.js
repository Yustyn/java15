// Task 1

signIn1.addEventListener('click', () => {
    if (login1.value && password1.value) {
        if (rememberMe.checked) {
            alert(`Hello ${form1.login.value}! I remember you.`)
        } else {
            alert(`Hello ${form1.login.value}! I do not remember you.`)
        }
    }
})


// Task 2

signUp2.addEventListener('click', () => {
    if (email2.value && login2.value && password2.value && password2.value == repPassword2.value) {
        alert(`A confirmation email has been sent to your email ${email2.value}`)
    } else {
        alert('Wrong data')
    }
})


// Task 3 
let checkboxes = ''

myList3.addEventListener('change', () => {
    if (myList3.value == 'Україна') {
        document.getElementById('myList4').innerHTML = "<option>Київ</option><option>Харків</option><option>Рівне</option>"
    } else if (myList3.value == 'Білорусь') {
        document.getElementById('myList4').innerHTML = "<option>Мінськ</option><option>Гомель</option><option>Пінськ</option>"
    } else if (myList3.value == 'Польща') {
        document.getElementById('myList4').innerHTML = "<option>Варшава</option><option>Краків</option><option>Хелм</option>"
    } else if (myList3.value == 'Чехія') {
        document.getElementById('myList4').innerHTML = "<option>Прага</option><option>Острава</option><option>Брно</option>"
    } else if (myList3.value == 'Угорщина') {
        document.getElementById('myList4').innerHTML = "<option>Будепешт</option><option>Дебрецен</option><option>Мішкольц</option>"
    } else {
        document.getElementById('myList4').innerHTML = ''
    }
})



save3.addEventListener('click', () => {
    gender = ''
    if (male.checked) {
        gender = 'male'
    } else if (female.checked) {
        gender = 'female'
    }

    for (checkbox of task3.checkbox3) {
        if (checkbox.checked) {
            checkboxes += document.querySelector(`label[for="${checkbox.id}"]`).textContent + ' '
        }
    }

    if (firstName3.value && lastName3.value && birthDay3.value && myList3.value && (male.checked || female.checked) && myList5.value && (html3.checked || css3.checked || js3.checked || php3.checked || c3.checked || java3.checked || c23.checked)) {
        result.classList.remove('d-none')
        result.innerHTML = `<tr>
        <th>Result:</th>
    </tr>
    <tr>
        <td>Firstname</td>
        <td>${firstName3.value}</td>
    </tr>
    <tr>
        <td>Lastname</td>
        <td>${lastName3.value}</td>
    </tr>
    <tr>
        <td>Birthday</td>
        <td>${birthDay3.value}</td>
    </tr>
    <tr>
        <td>Gender</td>
        <td>${gender}</td>
    </tr>
    <tr>
        <td>Country</td>
        <td>${myList3.value}</td>
    </tr>
    <tr>
        <td>City</td>
        <td>${myList5.value}</td>
    </tr>
    <tr>
        <td>Skills</td>
        <td>${checkboxes}</td>
    </tr>`
        console.log('firstName3= ', firstName3.value, 'lastName3= ', lastName3.value, 'birthDay3=', birthDay3.value, 'myList3 = ', myList3.value, 'male = ', male.checked, 'female = ', female.checked, 'myList5=', myList5.value, 'checkboxes', html3.checked, css3.checked, js3.checked, php3.checked, c3.checked, java3.checked, c23.checked)
    }

    console.log(checkboxes)
})


// Task 4 

clr4.addEventListener('click', (event) => {
    if (R4.value && G4.value && B4.value) {
        colorplace4.insertAdjacentHTML('beforeend', `<div class="myColor"><div class="colorplace" style="background-color: rgb(${R4.value}, ${G4.value}, ${B4.value})""></div>RGB(${R4.value}, ${G4.value}, ${B4.value})</div>`)
    }
})


// Task 5


add5.addEventListener('click', () => {
    if (question5.value, canswer.value, wanswer.value) {
        list5.insertAdjacentHTML('beforeend', `<li><u>${question5.value}</u></li><li>${canswer.value}</li><li>${wanswer.value}</li><hr>`)
        question5.value = ''
        canswer.value = ''
        wanswer.value = ''
    }

})