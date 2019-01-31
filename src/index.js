const fullname = document.getElementById("fullname");

const street = document.getElementById("street");

const city = document.getElementById("city");

const state = document.getElementById("state");

const postcode = document.getElementById("postcode");

const phone = document.getElementById("phone");

const cell = document.getElementById("cell");

const date_of_birth = document.getElementById("date_of_birth");

const email = document.getElementById("email");

attributesArray = [fullname, street, city, state, postcode, phone, cell, date_of_birth, email]

appendInfo = obj => {
  obj = obj.results[0]


  nameParam = obj["name"]
  fullnameParam = nameParam["title"] + nameParam["first"] + nameParam["last"]
  locationParam = obj["location"]
  cityParam = locationParam["city"]
  stateParam = locationParam["state"]
  postcodeParam = locationParam["postcode"]
  streetParam = locationParam["street"]
  dobParam = obj["dob"]["date"]
  phoneParam = obj["phone"]
  cellParam = obj["cell"]
  emailParam = obj["email"]

  fullname.innerText = fullnameParam
  street.innerText = streetParam
  city.innerText = cityParam
  state.innerText = stateParam
  postcode.innerText = postcodeParam
  phone.innerText = phoneParam
  cell.innerText = cellParam
  date_of_birth.innerText = dobParam
  email.innerText = emailParam


}

addData = () => {
  return fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(appendInfo)
}

let butt = document.querySelector('button')

butt.addEventListener("click", addData)






