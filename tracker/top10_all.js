const APItopCountries="https://disease.sh/v3/covid-19/countries"
async function getDataCases(){
  let html = ''
    const order="cases"
    topcountries = await fetch(APItopCountries+"?sort="+order)
        .then(response => response.json())
        for (let i = 0; i < 10; i++) {
            const country = topcountries[i];
            html += `
                <div class="card mb-3 container-cards" style="max-width: 540px;">
                <div class="row g-0 ">
                  <div class="col-md-4">
                    <img src="${country.countryInfo.flag}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="">
                      <h5 class="card-title">${country.country}</h5>
                      <p class="card-text">${country.cases}</p>
                    </div>
                  </div>
                </div>
              </div>      `
        }
        document.querySelector("#container-top-case").innerHTML = html

}
getDataCases()

async function getDataTodayCases(){
  let html = ''
    const order="todayCases"
    topcountries = await fetch(APItopCountries+"?sort="+order)
        .then(response => response.json())

        for (let i = 0; i < 10; i++) {
            const country = topcountries[i];
            html += `
            <div class="card mb-3 container-cards" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${country.countryInfo.flag}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="">
                      <h5 class="card-title">${country.country}</h5>
                      <p class="card-text">${country.todayCases}</p>
                    </div>
                  </div>
                </div>
              </div>      `
        }
        document.querySelector("#container-today-case").innerHTML = html
}
getDataTodayCases()

async function getDataTodayDeaths(){
  let html = ''
    const order="todayDeaths"
    topcountries = await fetch(APItopCountries+"?sort="+order)
        .then(response => response.json())

        for (let i = 0; i < 10; i++) {
            const country = topcountries[i];
            html += `
            <div class="card mb-3 container-cards" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${country.countryInfo.flag}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="">
                      <h5 class="card-title">${country.country}</h5>
                      <p class="card-text">${country.todayDeaths}</p>
                    </div>
                  </div>
                </div>
              </div>      `
        }
        document.querySelector("#container-today-death").innerHTML = html
}
getDataTodayDeaths()

async function getDataTodayRecovered(){
  let html = ''
    const order="todayRecovered"
    topcountries = await fetch(APItopCountries+"?sort="+order)
        .then(response => response.json())
    
        for (let i = 0; i < 10; i++) {
            const country = topcountries[i];
            html += `
            <div class="card mb-3 container-cards" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${country.countryInfo.flag}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="">
                      <h5 class="card-title">${country.country}</h5>
                      <p class="card-text">${country.todayRecovered}</p>
                    </div>
                  </div>
                </div>
              </div>      `
        }
        document.querySelector("#container-today-recovered").innerHTML = html
}
getDataTodayRecovered()

async function getDataActive(){
  let html = ''
    const order="active"
    topcountries = await fetch(APItopCountries+"?sort="+order)
        .then(response => response.json())
    
        for (let i = 0; i < 10; i++) {
            const country = topcountries[i];
            html += `
            <div class="card mb-3 container-cards" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${country.countryInfo.flag}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="">
                      <h5 class="card-title">${country.country}</h5>
                      <p class="card-text">${country.active}</p>
                    </div>
                  </div>
                </div>
              </div>      `
        }
        document.querySelector("#container-top-active").innerHTML = html
}
getDataActive()

async function getDataRecovered(){
  let html = ''
    const order="recovered"
    topcountries = await fetch(APItopCountries+"?sort="+order)
        .then(response => response.json())
    
        for (let i = 0; i < 10; i++) {
            const country = topcountries[i];
            html += `
            <div class="card mb-3 container-cards" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${country.countryInfo.flag}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="">
                      <h5 class="card-title">${country.country}</h5>
                      <p class="card-text">${country.recovered}</p>
                    </div>
                  </div>
                </div>
              </div>      `
        }
        document.querySelector("#container-top-recover").innerHTML = html
}
getDataRecovered()