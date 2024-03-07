console.log('It works');
import { db } from "./db.js"
import { generateCards } from "./helpers.js";
//console.log(db);

/* generate the node element for the single post */
//console.log(makePostMarkup(db[0]));
/* add all node elements to the posts grid */


/* const firstPost = db[0]
firstPost.addLike()
firstPost.addLike()
firstPost.addLike()
firstPost.addLike()
firstPost.addLike() */





const postsEl = document.querySelector('.row')
generateCards(db, postsEl)



/* Select all likes button ⚡ (double loop) */
const allPostsButtons = document.querySelectorAll('button.like')
console.log(allPostsButtons);

allPostsButtons.forEach(likeButton => {
  likeButton.addEventListener('click', function () {
    console.log(likeButton.getAttribute('data-post-id'));
    const postId = likeButton.getAttribute('data-post-id')
    db[postId].addLike()
    console.log(db[postId]);
    // get the clicked post
    const currentPost = db[postId];
    // regenerate the dom nodes here ?
    // select the .likes-counter next to the button
    // update the inner html to reflect the likes increment

    
  })
})
