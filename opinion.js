// Function to fetch opinion articles
async function fetchOpinionArticles() {
    const apiKey = '50da8eedce064477917f6cd63b3d1000'; // Replace with your actual API key
    const response = await fetch(`https://newsapi.org/v2/everything?q=opinion&apiKey=${apiKey}`);
    const data = await response.json();
    displayOpinionArticles(data.articles);
}

// Function to display opinion articles
function displayOpinionArticles(articles) {
    const opinionNewsGrid = document.getElementById('opinion-news-grid');
    opinionNewsGrid.innerHTML = ''; // Clear existing content

    articles.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');

        newsCard.innerHTML = `
            <img src="${article.urlToImage}" alt="${article.title}">
            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
            <p>${article.description}</p>
        `;

        opinionNewsGrid.appendChild(newsCard);
    });
}

// Call the fetchOpinionArticles function when the page loads
window.onload = fetchOpinionArticles;

// Function to handle search functionality
async function handleSearch(event) {
    event.preventDefault(); // Prevent form submission reload

    const query = document.getElementById('search-input').value.trim();
    const searchButton = document.querySelector('#search-form button');

    if (!query) {
        alert('Please enter a search term!');
        return;
    }

    // Update button state to show loading
    searchButton.textContent = 'Searching...';
    searchButton.disabled = true;

    const apiKey = '50da8eedce064477917f6cd63b3d1000'; // Your valid API key
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;

    const newsGrid = document.querySelector('.news-grid');
    newsGrid.innerHTML = '<p>Searching for news...</p>';

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);

        const data = await response.json();
        if (data.articles.length > 0) {
            displaySearchResults(data.articles);
        } else {
            newsGrid.innerHTML = '<p>No results found for your search.</p>';
        }
    } catch (error) {
        console.error('Search Error:', error);
        newsGrid.innerHTML = '<p>Failed to fetch search results. Try again later.</p>';
    } finally {
        // Reset the search button
        searchButton.textContent = 'Search';
        searchButton.disabled = false;
    }
}

// Function to display search results
function displaySearchResults(articles) {
    const newsGrid = document.querySelector('.news-grid');
    newsGrid.innerHTML = ''; // Clear previous results

    articles.forEach((article) => {
        const articleCard = document.createElement('div');
        articleCard.classList.add('news-card');
        articleCard.innerHTML = `
            <img src="${article.urlToImage || 'https://via.placeholder.com/300x200'}" alt="News Image">
            <h3>${article.title}</h3>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more...</a>
        `;
        newsGrid.appendChild(articleCard);
    });
}