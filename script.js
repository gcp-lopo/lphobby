// 获取最新文章列表

const postsList = document.getElementById('postsList');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    for (let i = 0; i < 3; i++) { const post = posts[i];
  const li = document.createElement('li');
  const link = document.createElement('a');
  link.href = `/post.html?id=${post.id}`;
  link.textContent = post.title;
  li.appendChild(link);
  postsList.appendChild(li);
}
})
.catch(error => console.error(error));

