async function loadPosts() {
    const output = document.getElementById('output');
    output.textContent = 'Loading...';
  
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
  
    try {
      const response = await fetch('https://dummyjson.com/posts', {
        signal: controller.signal
      });
  
      clearTimeout(timeoutId);
  
      if (!response.ok) throw new Error('Failed to fetch data');
  
      const data = await response.json();
      const posts = data.posts.map(post => `• ${post.title}`).join('\n\n');
      output.textContent = posts;
  
    } catch (error) {
      if (error.name === 'AbortError') {
        output.textContent = 'Error: Operation timed out.';
      } else {
        output.textContent = `Error: ${error.message}`;
      }
    }
  }
  