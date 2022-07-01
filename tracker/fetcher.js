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

    //selector añadir todos los countries
    let selectorCountry = document.querySelector("#selectorCountry")
    if (selectorCountry) {
        html = ''
        for (let i = 0; i < topcountries.length; i++) {
            const country = topcountries[i];
            html += `
            <option>${country.country}</option> 
            `
        }
        selectorCountry.innerHTML = html

        // Mostrar datos del ocuntry al seleccionar el country
        selectorCountry.addEventListener("change", function () {
            selectCountry(this.value);
        })

        //mostrar datos de USA al cargar la pagina
        selectCountry("USA")
    }

}
getAllCountryData() 
async function getAllData2() {
    let covidAll = await fetch("https://disease.sh/v3/covid-19/all")
        .then(response => response.json())
    document.querySelector("#ListTotalCase").innerHTML = covidAll.cases
    document.querySelector("#ListActiveCase").innerHTML = covidAll.active
    document.querySelector("#ListRecoveredCase").innerHTML = covidAll.recovered
    document.querySelector("#ListDeathCase").innerHTML = covidAll.deaths
}
getAllData2()

function getCountryInfo(c){
    return topcountries.find(el=>el.country == c)
}

let wiseCountries
async function getAllCountryData2() {

    wiseCountries = await fetch("https://disease.sh/v3/covid-19/countries?sort=cases")
        .then(response => response.json())

    //mostras todos los countries 
    let html2 = ''
    for (let i = 0; i < 9; i++) {
        const country = wiseCountries[i];
        html2 = html2 + `
            
        <div class="row g-5 tarjetaPais" data-country="${country.country}">
                <div class="col-md-4">
                    <img src="${country.countryInfo.flag}" class="img-fluid rounded-start" alt="...">
                </div>
            <div class="col-md-1">
                    <div class="card-body">
                        <h5>${country.country}</h5>
                    </div>
            </div>
        </div>
            `
    }

    document.querySelector("#wise-countries").innerHTML = html2

    selectCountry("USA")

    var element = document.getElementsByClassName('tarjetaPais');
    for (let j = 0; j < 9; j++) {

        element[j].addEventListener("click", function (e) {
            
            console.log(element[j].dataset.country);
            selectCountry(element[j].dataset.country);
        }, false);
    }

} 

getAllCountryData2()
