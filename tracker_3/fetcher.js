let topcountries
async function getAllCountryData() {
    //hacer fetch de countries
    topcountries = await fetch("https://disease.sh/v3/covid-19/countries?sort=cases")
        .then(response => response.json())

    //mostras todos los countries en lista de top 10
    let html = ''
    for (let i = 0; i < 15; i++) {
        const country = topcountries[i];
        html = html + `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <img src="${country.countryInfo.flag}">
                    ${country.country}
                </div>
                <span>${country.cases}</span>
            </li>
            `
    }
    document.querySelector("#top-countries").innerHTML = html

    let flags = ``;
    for (let i = 0; i < topcountries.length; i++) {
        const country = topcountries[i];
        flags = flags + `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <img src="${country.countryInfo.flag}">
                    ${country.country}
            </li>
            `
        }

   

  
 
}
getAllCountryData()
async function getAllData() {
    let covidAll = await fetch("https://disease.sh/v3/covid-19/all")
        .then(response => response.json())
    // document.querySelector("#ListTotalCase").innerHTML = covidAll.cases
    document.querySelector("#ListTotalConfirmed").innerHTML = covidAll.cases
    document.querySelector("#ListActiveCase").innerHTML = covidAll.active
    document.querySelector("#ListRecoveredCase").innerHTML = covidAll.recovered
    document.querySelector("#ListRecoveredCase2").innerHTML = covidAll.recovered
    document.querySelector("#ListDeathCase").innerHTML = covidAll.deaths
    document.querySelector("#ListDeathCase2").innerHTML = covidAll.deaths
    document.querySelector("#ListNewDeathCase").innerHTML = covidAll.todayDeaths
}
// getAllData()
