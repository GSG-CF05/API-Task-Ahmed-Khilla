'use strict'
// Declaration
const input = document.querySelector('.input-box');
input.textContent = input.value
const btn = document.querySelector('.input-btn');
const body = document.querySelector('body');
let sum = 0;

const cardSection = document.createElement('section');
body.appendChild(cardSection);
cardSection.classList.add('card');



const countryFlag = document.createElement('img');
cardSection.appendChild(countryFlag);

const countryDescription = document.createElement('div')
cardSection.appendChild(countryDescription)
countryDescription.classList.add('country-description')

const countryHeading = document.createElement('h4');
countryDescription.appendChild(countryHeading)
countryHeading.classList.add = 'heading'

const allContent = document.createElement('div');
countryDescription.appendChild(allContent)

const capital = document.createElement('p'); //
allContent.appendChild(capital);
allContent.classList.add('all-content')



const continents = document.createElement('p');
allContent.appendChild(continents);

const language = document.createElement('p');
allContent.appendChild(language);

const timeZone = document.createElement('p');
allContent.appendChild(timeZone);



btn.addEventListener('click', searchForCountry)
function searchForCountry() {
  fetch(`https://restcountries.com/v3.1/name/${input.value}`).then(resp => {
    return resp.json()
  }).then((data) => {
    if (input.value !== "") {
      sum = 1



      data.forEach((x) => {
        cardSection.classList.add('card-click')
        countryFlag.setAttribute('src', x.flags.png);
        countryHeading.textContent = x.name.common

        capital.innerHTML = ` <span class="content-span" >- capital:</span> ${x.capital}.`
        continents.innerHTML = `<span class="content-span" >- continent:</span> ${x.continents}.`
        language.innerHTML = `<span class="content-span" >- language:</span> ${Object.values(x.languages)[0]}.`
        timeZone.innerHTML = `<span class="content-span" >- timezones:</span> ${x.timezones}.`
      })
    } else {
      return;
    }
  }
  ).catch(x)
}



