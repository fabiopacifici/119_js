export function makePostMarkup(post, index) {

  const { title, image, summary, likes } = post
  console.log(title, image, summary, likes);
  return `<div class="col">
            <div class="card border-0">
              <img class="card-img-top" src="${image}" alt="Post image ${title}" />
              <div class="card-body bg-dark">
                <h4 class="card-title">${title}</h4>
                <p class="card-text">${summary}</p>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <button class="like btn btn-danger" data-post-id="${index}">Likes &hearts;</button>
                <span class="likes-counter text-dark">${likes}</span>
              </div>
            </div>
          </div>`
}


/**
 * 
 * @param {Array} posts 
 * @param {Element} domEl 
 */
export function generateCards(posts, domEl) {

  // given a posts list
  // loop foreach to iterate the posts
  console.log(posts, domEl);

  // for each post generate the post card
  posts.forEach((post, index) => {
    const markupEl = makePostMarkup(post, index)

    // appned the generated card to the dom

    domEl.insertAdjacentHTML('beforeend', markupEl)

  })

}