// async function showPostsComments() {
//     const response = await fetch(`/api/posts/${id}`, {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' }
//     });
  
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert(response.statusText);
//     }
//   }
  
//   document.querySelector('#posts-comments').addEventListener('click', showPostsComments);