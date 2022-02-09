/*function getData() {
    let url = 'https://restcountries.com/v3.1/all';
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function () {
        if (this.status == 200) {
            let countries = JSON.parse(this.responseText);
            console.log(countries);
            let thead = table.createTHead();
            let row = thead.insertRow();
            for (var i = 0; i < 6; i++) {
                let th = document.createElement("th");
                let text = document.createTextNode("Column");
                th.appendChild(text);
                row.appendChild(th);
            }

            for (let country of countries) {
                countriesTable.innerHTML += `<li>${country.capital}</li>`;
            }
        }
    }
}*/

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table) {
    let url = 'https://restcountries.com/v3.1/all';
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function () {
        if (this.status == 200) {
            let countries = JSON.parse(this.responseText);
            for (let country of countries) {
                let row = table.insertRow();
                for (var i = 0; i < 6; i++) {
                    if (i == 0) {
                        let cell = row.insertCell();
                        let text = document.createTextNode(country.name.official);
                        cell.appendChild(text);
                    }
                    if (i == 1) {
                        let cell = row.insertCell();
                        let text = document.createTextNode(country.capital);
                        cell.appendChild(text);
                    }
                    if (i == 2) {
                        let cell = row.insertCell();
                        let text = document.createTextNode(country.region);
                        cell.appendChild(text);
                    }
                    if (i == 3) {
                        let cell = row.insertCell();
                        let text = document.createTextNode(Object.values(country.languages));
                        cell.appendChild(text);
                    }
                    if (i == 4) {
                        let cell = row.insertCell();
                        let text = document.createTextNode(country.population);
                        cell.appendChild(text);
                    }
                    if (i == 5) {
                        let cell = row.insertCell();
                        let text = document.createTextNode(country.flag);
                        cell.appendChild(text);
                    }
                }

            }

        }
    }
}

let example = [
    { Official_name: "Monte Falco", Capital: 1658, Region: "Parco Foreste Casentinesi", Language: "", Popopulation: "", Flag: "" },
];
let table = document.querySelector("table");
let data = Object.keys(example[0]);
generateTableHead(table, data);
generateTable(table);