function fetchPosts() {
    const output = document.getElementById('output');
    output.textContent = 'Loading...';
  
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject('Operation timed out.'), 5000)
    );
  
    const fetchPromise = fetch('https://dummyjson.com/posts')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
      });
  
    Promise.race([fetchPromise, timeout])
      .then(data => {
        const posts = data.posts
          .map(post => `• ${post.title}`).join('\n\n');
        output.textContent = posts;
      })
      .catch(error => {
        output.textContent = `Error: ${error}`;
      });
  }
  