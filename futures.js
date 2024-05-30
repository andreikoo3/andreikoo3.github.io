document.addEventListener('DOMContentLoaded', function () {
    fetch('articles_futures.json')
        .then(response => response.json())
        .then(data => {
            const articlesContainer = document.getElementById('articles-container');

            data.articles.forEach((article, index) => {
                const articleElement = createArticleElement(article, index);
                articlesContainer.appendChild(articleElement);
            });
        })
        .catch(error => console.error('Error fetching articles:', error));

    function createArticleElement(article, index) {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.summary}</p>
            <a href="FUTURES/${index}.pdf" download>Читати детальніше</a>
        `;
        articleElement.classList.add('article-block');
        return articleElement;
    }
});

