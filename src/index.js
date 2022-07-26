const el = document.getElementById('input')
const errorMessage = document.getElementById('errorMessage')
const selection = document.getElementById('selection')
const results = document.getElementById('results')

const pickCriteria = () => {
  el.placeholder = `Search by ${selection.value}`
}

const showCountry = (country) => {
  console.log('Data: ', country)

  const cName = document.createTextNode(`${country.name.common}`)
  cName.id = 'country-name'
  cName.className = 'card-title'
  // country detail elements
  // create each element. assign it an id and a class name

  // const natName = document.createElement('span')
  // natName.id = 'aka'
  // const offName = document.createElement('p')
  // offName.id = 'official'
  // offName.className = 'card-text'
  // const flag = document.createElement('img')
  // flag.id = 'flag'
  // flag.className = 'card-img-top'
  // flag.alt = 'flag'
  // const cardBody = document.createElement('div')
  // cardBody.className = 'card-body'
  // const capital = document.createElement('p')
  // capital.id = 'capital'
  // capital.className = 'card-text'
  // const languages = document.createElement('p')
  // languages.id = 'languages'
  // languages.className = 'card-text'
  // const borders = document.createElement('p')
  // borders.id = 'borders'
  // borders.className = 'card-text'
  // const population = document.createElement('p')
  // population.id = 'population'
  // population.className = 'card-text'
  // const timezone = document.createElement('p')
  // timezone.id = 'timezone'
  // timezone.className = 'card-text'
  // const continent = document.createElement('p')
  // continent.id = 'continent'
  // continent.className = 'card-text'

  //create card div element inside results div
  const result = document.createElement('div')
  result.className = 'card'

  result.appendChild(cName)

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
          setTimeout(() => {
            showCountry(item)
          }, '1000')
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
