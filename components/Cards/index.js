// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Card(article) {
    const cardWrap = document.createElement('div');
    cardWrap.classList.add('card');
    
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = article.headline;

    const author = document.createElement('div');
    author.classList.add('author');

        const authorImgWrap = document.createElement('div');
        authorImgWrap.classList.add('img-container');
        author.appendChild(authorImgWrap);

        const authorImg = document.createElement('img');
        authorImg.setAttribute('src', article.authorPhoto);
        authorImgWrap.appendChild(authorImg);

        const authorName = document.createElement('span');
        authorName.textContent = article.authorName;
        author.appendChild(authorName)

    cardWrap.appendChild(headline);    
    cardWrap.appendChild(author);    

    return cardWrap;
}

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => { 
        const articles = response.data.articles;
        for (let [key] of Object.entries(articles)) {
            articles[key].forEach((article) => {
                //console.log(article.headline);
                cardsContainer.appendChild(Card(article));
            });
        }
    })
    .catch((err) => { 
        console.log(err);
    });