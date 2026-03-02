const url = 'travel_recommendation_api.json';

fetch(url)
.then((response) => response.json())
.then((data) => {

    console.log("Data loaded:", data);

    const btnSearch = document.getElementById('btnSearch');
    const btnReset = document.getElementById('btnReset'); 
    const resultsContainer = document.getElementById('resultsContainer'); 


    btnSearch.addEventListener('click', () => {
        const input = document.getElementById('conditionInput').value.toLowerCase();
        
   
        resultsContainer.innerHTML = '';

        if (input === 'beach' || input === 'beaches') {
            displayResults(data.beaches);
        } 
        else if (input === 'temple' || input === 'temples') {
            displayResults(data.temples);
        } 
        else if (input === 'country' || input === 'countries') {
      
            let cities = [];
            data.countries.forEach(country => {
                cities = cities.concat(country.cities);
            });
            displayResults(cities);
        } 
        else {
            alert('Please enter "beach", "temple", or "country"');
        }
    });


    btnReset.addEventListener('click', () => {
        document.getElementById('conditionInput').value = ''; 
        resultsContainer.innerHTML = ''; 
        console.log("Results cleared.");
    });


    function displayResults(items) {
        items.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('result-card'); 

            card.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <button class="btn-visit">Visit</button>
            `;
            resultsContainer.appendChild(card);
        });
    }
})
.catch((error) => {
    console.log('Error:', error);
});