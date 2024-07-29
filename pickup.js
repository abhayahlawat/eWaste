const scriptURL = 'https://script.google.com/macros/s/AKfycbz7yIl8HnyygvDwwOot26uMJH2hgKtRvh-P0W-TevBU63DI4LW0kVduMWyNnMOxcit41w/exec'
const form = document.forms['submit-to-google-sheet']
const submitButton = document.getElementById('button')

form.addEventListener('submit', e => {
  e.preventDefault()
  submitButton.value = 'Scheduling...'
  submitButton.disabled = true // Disable the submit button

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      console.log('Success!', response)
      setTimeout(() => {
        resetForm()
      }, 500) // Delay of 500 milliseconds (0.5 seconds)
    })
    .catch(error => {
      console.error('Error!', error.message)
      submitButton.value = 'Schedule'
      submitButton.disabled = false // Enable the submit button in case of error
    })
})

function resetForm() {
  form.reset()
  submitButton.value = 'Send'
  submitButton.disabled = false // Enable the submit button after reset
}