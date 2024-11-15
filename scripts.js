const apiKey = '50da8eedce064477917f6cd63b3d1000';

async function fetchNews(url, callback) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        callback(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

function displayArticles(articles) {
    const newsGrid = document.querySelector('.news-grid');
    newsGrid.innerHTML = articles.map(article => `
        <div class="news-card">
            <img src="${article.urlToImage || 'https://via.placeholder.com/300x200'}" alt="News Image">
            <h3>${article.title}</h3>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more...</a>
        </div>
    `).join('');
}

function handleSearch(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        const searchUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;
        fetchNews(searchUrl, displayArticles);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    fetchNews(topHeadlinesUrl, displayArticles);
});