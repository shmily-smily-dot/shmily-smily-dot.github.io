var posts=["2025/10/21/这是一篇新的博文-md/","2025/10/21/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };