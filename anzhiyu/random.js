var posts=["2025/10/23/这是一篇新的博文-md/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };