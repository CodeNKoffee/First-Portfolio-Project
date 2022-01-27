//VARIABLES
const targets = document.querySelectorAll('img');
const form = document.getElementById('contact__form');
const firstName = document.getElementById('first__name');
const lastName = document.getElementById('last__name');
const email = document.getElementById('email');
const submitButton = document.getElementById('form__btn');
const error = document.getElementById('error__msg');

//FUNCTIONS

//Fade-In Animation
const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    
    entries.forEach(entry => {
      console.log('💩');

      if(entry.isIntersecting) {
        const img = entry.target ;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
        img.classList.add('fade');

        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

targets.forEach(lazyLoad);


//Form Validation
// submitButton.addEventListener('submit', (e) => {
//   let messages = []
//   if(firstName.value === '' || firstName.value == null) {
//     errorMessage.push('Name is required! Please enter a name.')
//     const errorMessage = document.createElement('h5');
//     errorMessage.innerText = `Name is required! Please enter a name.`;
//     errorMessage.classList.add('error');
//     error.appendChild(errorMessage);
//   }

//   if(lastName.value === '' || lastName.value == null) {
//     messages.push('Name is required! Please enter a name.')
//   }
// })


//Booking & Planning
submitButton.addEventListener('submit', (e) => {
  
})

