document.addEventListener('DOMContentLoaded', function () {
    fetch('articles.json')
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
            <a href="CRYPTO/${index}.pdf" target="_blank">Читати детальніше</a>
        `;
        articleElement.classList.add('article-block');
        return articleElement;
    }
});
document.getElementById('contactButton').addEventListener('click', function() {
    alert('У розробці!');
});
document.getElementById('editButton').addEventListener('click', function() {
    alert('У розробці!');
});
