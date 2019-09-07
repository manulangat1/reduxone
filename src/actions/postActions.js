import {FETCH_POSTS,NEWPOSTS} from './types'

export const fetchPosts = () => dispatch =>{
  console.log("fetching")
    fetch('https://jsonplaceholder.typicode.com/posts')
         .then(res => res.json())
         .then(posts => dispatch({
           type:FETCH_POSTS,
           payload: posts
         }))
}
export const createPost = (postData) => dispatch => {
  console.log("action")
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(postData)
  })
       .then(res => res.json())
       .then(post=>
         dispatch({
         type: NEWPOSTS,
         payload:post
       }))
}
