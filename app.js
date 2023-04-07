//DECLARATIONS
const targets = document.querySelectorAll('img');
const form = document.getElementById('contact__form');
const firstName = document.getElementById('first__name');
const lastName = document.getElementById('last__name');
const email = document.getElementById('email');
const nextButton = document.getElementById('next__btn');
const submitButton = document.getElementById('submit__btn');
const error = document.getElementById('error__msg');
const formTray = document.getElementById('form__tray');
const loadingMessage = document.getElementById('loading-message');
const firstForm = document.getElementById('first__form');
const secondForm = document.getElementById('second__form');
const formSuccess = document.getElementById('form__success');
const formIcon = document.querySelectorAll('.form__icon');
const formIconOne = document.getElementById('form__icon--one');
const formIconTwo = document.getElementById('form__icon--two');
const formIconThree = document.getElementById('form__icon--three');
const functionalityBar = document.getElementById('functionality__bar');

//FUNCTIONS
//Navigation Bar & Hamburger
function openMenu(){
  document.body.classList += " menu--open"
}

function closeMenu(){
  document.body.classList.remove('menu--open')
}
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




// Transitioning to Next Form
secondForm.style.display = "none";
formSuccess.style.display = "none";
submitButton.style.display = "none";


nextButton.addEventListener("click", () => {
  // hide the first form and next button
  firstForm.style.display = "none";
  nextButton.style.display = "none";

  // show a loading message
  loadingMessage.style.display = "block";

  // delay the appearance of the second form and submit button
  setTimeout(() => {
    // hide the loading message
    loadingMessage.style.display = "none";

    // show the second form and submit button
    secondForm.style.display = "block";
    submitButton.style.display = "block";

    // add a swift animation
    secondForm.classList.add("swift-animation");
  }, 500); // wait for 1 second before showing the second form
});

submitButton.addEventListener("click", () => {
  // hide the first form and next button
  secondForm.style.display = "none";
  functionalityBar.style.display = "none";

  // show a loading message
  loadingMessage.style.display = "block";

  // delay the appearance of the second form and submit button
  setTimeout(() => {
    // hide the loading message
    loadingMessage.style.display = "none";

    // hide form icons
    formIconOne.style.display = "none";
    formIconTwo.style.display = "none";
    formIconThree.style.display = "none";

    // add icon swift animation
    formIcon.classList.add("icon-swift-animation");

    // show the success form
  formSuccess.style.display = "block";

  // add a swift animation
  formSuccess.classList.add("swift-animation");
  }, 1000); // wait for 1 second before showing the second form
});

