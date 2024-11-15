const apiKey = '50da8eedce064477917f6cd63b3d1000'; //Replace with actual API key

// Fetch and display category news
document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', async function(event) {
        event.preventDefault(); // Prevent the default link behavior
        const category = this.closest('.category-card').getAttribute('data-category'); // Get category
        await fetchAndDisplayCategoryNews(category); // Fetch news for the selected category
    });
});

async function fetchAndDisplayCategoryNews(category) {
    let url;

    // Adjust logic for categories not directly supported by NewsAPI
    if (category === 'education' || category === 'environment') {
        url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}`;
    } else {
        url = `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${apiKey}`;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Fetched data for ${category}:`, data); // Debugging

        if (data.articles && data.articles.length > 0) {
            displayNews(data.articles);
        } else {
            displayNoResultsMessage();
        }
    } catch (error) {
        console.error(`Error fetching news for ${category}:`, error);
        displayErrorMessage();
    }
}

// Function to display the news articles
function displayNews(articles) {
    const newsGrid = document.getElementById('news-grid');
    newsGrid.innerHTML = ''; // Clear existing content

    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.classList.add('news-card');

        // Define the URL for the image or fallback to the custom placeholder
        const imageUrl = article.urlToImage || 'https://via.placeholder.com/300x200'; // Fallback to placeholder if no image
        const customPlaceholder = '/img/photo.jpeg'; // Replace with the path to your custom image

        articleCard.innerHTML = `
            <img src="${imageUrl}" alt="News Image" onerror="this.onerror=null; this.src='${customPlaceholder}'">
            <h3>${article.title}</h3>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more...</a>
        `;
        newsGrid.appendChild(articleCard);
    });
}

// Helper functions to display messages
function displayNoResultsMessage() {
    const newsGrid = document.getElementById('news-grid');
    newsGrid.innerHTML = '<p>No news articles found. Please try again later.</p>';
}

function displayErrorMessage() {
    const newsGrid = document.getElementById('news-grid');
    newsGrid.innerHTML = '<p>There was an error loading the news. Please try again later.</p>';
}

// Fetch default news on page load
async function displayLatestNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    await fetchAndDisplayCategoryNews('latest');
}

// Initial load of news articles
window.addEventListener('DOMContentLoaded', displayLatestNews);