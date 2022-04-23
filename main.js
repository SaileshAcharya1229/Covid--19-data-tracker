const btn = document.querySelector('#btnSubmit'),
search = document.getElementById('country'),
nc = document.getElementById('nc'),
nr = document.getElementById('nr'),
nd = document.getElementById('nd'),
tc = document.getElementById('tc'),
tr = document.getElementById('tr'),
td = document.getElementById('td');

btn.onclick = function(){
     
    if (search.value!="") {
        url = `https://corona.lmao.ninja/v2/countries/${search.value}`;
        fetch(url).then(response => response.json()).then(data => {
            nc.innerText = data.todayCases;
            nr.innerText = data.todayRecovered;
            nd.innerText = data.todayDeaths;
            tc.innerText = data.cases;
            tr.innerText = data.recovered;
            td.innerText = data.deaths;
            search.value = "";
        });
    }
    else {
        alert("Enter Country Name!");
    }
}