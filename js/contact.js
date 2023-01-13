const contactBtn = document.querySelector('#contact-button')
const contactForm = document.querySelector('.contactForm')
contactBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  console.log("hello world")
  contactForm.reset()
})