import axios from 'axios';
// const Card = (article) => {
//   // TASK 5
//   // ---------------------
//   // Implement this function, which should return the markup you see below.
//   // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
//   // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
//   // The text inside elements will be set using their `textContent` property (NOT `innerText`).
//   // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//   //
//   // <div class="card">
//   //   <div class="headline">{ headline }</div>
//   //   <div class="author">
//   //     <div class="img-container">
//   //       <img src={ authorPhoto }>
//   //     </div>
//   //     <span>By { authorName }</span>
//   //   </div>
//   // </div>
//   //
// }

// const cardAppender = (selector) => {
//   // TASK 6
//   // ---------------------
//   // Implement this function that takes a css selector as its only argument.
//   // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
//   // However, the articles do not come organized in a single, neat array. Inspect the response closely!
//   // Create a card from each and every article object in the response, using the Card component.
//   // Append each card to the element in the DOM that matches the selector passed to the function.
//   //
// }

// export { Card, cardAppender }

const Card = (article) => {

  //Card
  const card = document.createElement('div')
  card.addEventListener('click', () => {
    card.classList.toggle('selected')

    console.log('.headline');
  })
  card.classList.add('card')

  //Headline
  const articleHeadline = document.createElement('div')
  articleHeadline.textContent = article.headline;
  articleHeadline.classList.add('headline');
  card.appendChild(articleHeadline);

  //Author
  const articleAuthor = document.createElement('div')
  articleAuthor.classList.add('author');
  card.appendChild(articleAuthor);

  //Photo
  const articlePhoto = document.createElement('div')

  articlePhoto.classList.add('img-container');
  articleAuthor.appendChild(articlePhoto);
  const photoElement = document.createElement('img')
  photoElement.src = article['authorPhoto'];
  articlePhoto.appendChild(photoElement)

  //Author Name
  const articleName = document.createElement('span')
  articleName.textContent = `By: ${article['authorName']}`
  // cardAuthName.classList.add(cardAuthName);
  articleAuthor.appendChild(articleName);


  return card


}


const cardAppender = (selector) => {
axios.get(`http://localhost:5000/api/articles`)
 .then(res => {
   Object.keys(res.data.articles).forEach(section => {
     console.log(section);
     res.data.articles[section].forEach(article => {
       console.log(article);
       document.querySelector(selector).appendChild(Card(article))
     })
   })
 })

}

export { Card, cardAppender }