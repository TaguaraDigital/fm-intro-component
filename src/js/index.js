const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');


// validar correo
const validateEmail = (email) => {
   // const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

   if(emailRegex.test(email)){return true;}
   else{return false;}
}



const handleInput = (inputs) => {

   resetErrors(inputs)
   
   if (fname.value ==='' || fname === null) {
      showError(inputs.children[0].children)
   }
   
   if (lname.value ==='' || lname === null) {
      showError(inputs.children[1].children)
   }

   
   if (email.value ==='' || !validateEmail(email.value)) {
      showError(inputs.children[2].children)
   }

   if (password.value ==='' || password === null) {
      showError(inputs.children[3].children)
   }

   
}

const showError = (element) => {
   element[0].classList.add('error');
   element[1].classList.remove('hidden');
   element[2].classList.add('msg-error--show');
}

const resetErrors = (element) => {
   for (let i = 0; i < 4; i += 1) {
      element.children[i].children[0].classList.remove('error');
      element.children[i].children[1].classList.add('hidden');
      element.children[i].children[2].classList.remove('msg-error--show');
   }
}


form.addEventListener('submit', (e) => {
   e.preventDefault()
   handleInput (e.target)

})
