// JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    const countriesDropdown = document.getElementById("countries");
    const chartCanvas = document.getElementById("chart").getContext("2d");

    
    fetch("https://disease.sh/v3/covid-19/countries")
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            const option = document.createElement("option");
            option.value = country.country;
            option.textContent = country.country;
            countriesDropdown.appendChild(option);
        });
    });

    
    function updateChart(country) {
        fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
        .then(response => response.json())
        .then(data => {
            
        });
    }

    // Event listener for country selection change
    countriesDropdown.addEventListener("change", function() {
        const selectedCountry = this.value;
        updateChart(selectedCountry);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const countriesDropdown = document.getElementById("countries");
    const chartCanvas = document.getElementById("chart").getContext("2d");

    // Fetch list of countries
    fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries")
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            const option = document.createElement("option");
            option.value = country.country;
            option.textContent = country.country;
            countriesDropdown.appendChild(option);
        });
    });

    
    function updateChart(country) {
        fetch(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${country}`)
        .then(response => response.json())
        .then(data => {
            
        });
    }

   
    countriesDropdown.addEventListener("change", function() {
        const selectedCountry = this.value;
        updateChart(selectedCountry);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector("#neighboringTable tbody");

    const countries = ["India", "Sri Lanka", "Bangladesh", "China", "Nepal"];

    countries.forEach(country => {
        fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
        .then(response => response.json())
        .then(data => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${data.country}</td>
                <td>${data.cases}</td>
                <td>${data.deaths}</td>
                <td>${data.recovered}</td>
                <td>${data.todayCases}</td>
                <td>${data.todayDeaths}</td>
                <td>${data.todayRecovered}</td>
            `;
            tableBody.appendChild(row);
        });
    });
});


