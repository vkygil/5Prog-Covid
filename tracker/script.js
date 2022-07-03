const API='https://disease.sh/v3/covid-19/all'
// const API='https://disease.sh/v3/covid-19/countries/Andorra'
const total_cases=document.getElementById('total-cases')
const active_cases=document.getElementById('active-cases')
const recovered_cases=document.getElementById('recovered-cases')
const deaths_cases=document.getElementById('deaths-cases')


async function getDataCovid() {
    const covidData= await fetch(API,{
        headers:{
            'Accept': 'application/json'
        }
    });
    console.log(covidData)
    const covidObj = await covidData.json()
    console.log(covidObj.deaths)
    //total_cases.innerHTML=covidObj.deaths
    total_cases.innerHTML = covidObj.cases  
    active_cases.innerHTML = covidObj.deaths
    recovered_cases.innerHTML = covidObj.recovered
    deaths_cases.innerHTML = covidObj.deaths
    
}
getDataCovid()