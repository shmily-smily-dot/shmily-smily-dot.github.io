var posts=["2025/10/24/Introduction/","2025/10/23/欢迎光临/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };