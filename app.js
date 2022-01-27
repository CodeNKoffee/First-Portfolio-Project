//VARIABLES
const targets = document.querySelectorAll('img');
const form = document.getElementById('contact__form');
const firstName = document.getElementById('first__name');
const lastName = document.getElementById('last__name');
const email = document.getElementById('email');
const nextButton = document.getElementById('next__btn');
const submitButton = document.getElementById('submit__btn');
const error = document.getElementById('error__msg');
const formTray = document.getElementById('form__tray');
const firstForm = document.getElementById('first__form');
const secondForm = document.getElementById('second__form');
const formSuccess = document.getElementById('form__success');
const functionalityBar = document.getElementById('functionality__bar');

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




//Transitioning to Next Form
secondForm.style.display = "none";
formSuccess.style.display = "none";
submitButton.style.display = "none";


nextButton.addEventListener("click", () => {
  firstForm.style.display = "none";
  nextButton.style.display = "none";
  secondForm.style.display = "block";
  submitButton.style.display = "block";
});

submitButton.addEventListener("click", () => {
  secondForm.style.display = "none";
  functionalityBar.style.display = "none";
  formSuccess.style.display = "block";
});

