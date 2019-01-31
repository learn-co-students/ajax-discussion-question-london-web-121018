const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});


let person = {}
fetch('https://randomuser.me/api/').then(resp => resp.json()).then(json => person = json.results[0])


const assigName = attribute => {
  document.querySelector(attribute)
  attribute.innerText = full_name.innerText = `${(person.name.first).charAt(0).toUpperCase() + (person.name.first).slice(1)} ${(person.name.last).charAt(0).toUpperCase() + (person.name.last).slice(1)}`
}


full_name = document.querySelector('#fullname')
full_name.innerText = `${(person.name.first).charAt(0).toUpperCase() + (person.name.first).slice(1)} ${(person.name.last).charAt(0).toUpperCase() + (person.name.last).slice(1)}`
email = document.querySelector('#email');
email.innerText = person.email
cell = document.querySelector('#cell');
cell.innerText = person.cell
image = document.querySelector('img');
image.src = person.picture.thumbnail
dob = document.querySelector('#date_of_birth')
dob.innerText = person.dob.date
street = document.querySelector('#street')
street.innerText = person.location.street
city = document.querySelector('#city')
city.innerText = person.location.city
state = document.querySelector('#state')
state.innerText = person.location.state
postcode = document.querySelector('#postcode')
postcode.innerText = person.location.postcode
phone = document.querySelector('#phone')
phone.innerText = person.phone
