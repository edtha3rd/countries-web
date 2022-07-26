const el = document.getElementById('input')
const errorMessage = document.getElementById('errorMessage')
const selection = document.getElementById('selection')
const results = document.getElementById('results')

const pickCriteria = () => {
  el.placeholder = `Search by ${selection.value}`
}

const showCountry = (country) => {
  // country detail elements
  // create each element. assign it an id and a class name
  const cName = document.createElement('span')
  cName.id = 'country-name'
  cName.className = 'card-title'
  cName.textContent = `${country.name.common}`
  const natName = document.createElement('span')
  natName.id = 'aka'
  natName.textContent = ` ${country.altSpellings[0]}`
  const offName = document.createTextNode(
    `Official Name: ${country.name.official}`
  )
  offName.id = 'aka'
  offName.className = 'card-text'
  const flag = document.createElement('img')
  flag.id = 'flag'
  flag.className = 'card-img-top'
  flag.alt = 'flag'
  flag.src = `${country.flags.png}`
  const cardBody = document.createElement('div')
  cardBody.className = 'card-body'
  const capital = document.createElement('p')
  capital.id = 'capital'
  capital.className = 'card-text'
  capital.textContent = `Capital: ${country.capital}`
  const languages = document.createTextNode(
    `Languages: ${Object.values(country.languages)}`
  )
  languages.id = 'languages'
  languages.className = 'card-text'
  const borders = document.createElement('p')
  borders.id = 'borders'
  borders.className = 'card-text'
  borders.textContent = `Borders: `
  const population = document.createElement('p')
  population.id = 'population'
  population.className = 'card-text'
  population.textContent = `Population: ${country.population}`
  const timezone = document.createElement('p')
  timezone.id = 'timezone'
  timezone.className = 'card-text'
  timezone.textContent = `Timezone(s): ${Object.values(country.timezones)}`
  const continent = document.createElement('p')
  continent.id = 'continent'
  continent.className = 'card-text'
  continent.textContent = `Continent: ${country.region}`

  //create card div element inside results div
  const result = document.createElement('div')
  result.className = 'card'

  result.appendChild(cName)
  result.appendChild(natName)
  result.appendChild(flag)
  cardBody.appendChild(offName)
  cardBody.appendChild(capital)
  cardBody.appendChild(population)
  cardBody.appendChild(continent)
  cardBody.appendChild(timezone)
  cardBody.appendChild(languages)
  result.appendChild(cardBody)

  //append result card to results div
  results.appendChild(result)

  //   cName.textContent = `Country: ${country.name.common}`
  //   offName.textContent = `Country: ${country.name.official}`
  //   flag.textContent = `Flag: ${country.flags.png}`
  //   capital.textContent = `Capital: ${country.capital}`
  //   languages.textContent = `Languages: ${country.languages.toString()}`
  //   borders.textContent = `Borders: ${country.borders.toString()}`
  //   population.textContent = `Population: ${country.name}`
  //   timezone.textContent = `Timezone: ${country.name}`
  //   continent.textContent = `Continent: ${country.name}`
  //   result.appendChild(cName)
  //   result.appendChild(cName)
  //   result.appendChild(cName)
  //   result.appendChild(cName)
  //   result.appendChild(cName)
  //   result.appendChild(cName)
  //   result.appendChild(cName)
  //   result.appendChild(cName)
  //   result.appendChild(cName)
  //   results.appendChild(result)
}

const handleSubmit = () => {
  if (el.value !== '') {
    errorMessage.textContent = ''
    const url = `https://restcountries.com/v3.1/${selection.value}/${el.value}`
    // axios.get(url).then((data) => {
    //   console.log(data)
    //   data.map((item) => {
    //     showCountry(item)
    //   })
    // })
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        data.map((item) => {
          showCountry(item)
        })
      })
      .catch(
        () =>
          (errorMessage.textContent = `${el.value} not found. Check your search query and try again.`)
      )
  } else {
    errorMessage.textContent = 'Please enter a valid country name'
  }
}
