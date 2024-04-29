## axios vs fetch
- npm install axios
- axios is a promise based HTTP client for the browser and node.js
- axios is more powerful and flexible than fetch
- axios has more features than fetch
- axios has better error handling than fetch
- axios has better performance than fetch
- axios has better support for older browsers than fetch
- axios has better support for interceptors than fetch
- axios has better support for canceling requests than fetch

- The syntax of fetch is as follows:
```jsx
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

- The syntax of axios is as follows:
```jsx
import axios from 'axios';
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => console.log(response.data))
  .catch(error => console.log(error));
```

- axios supports all HTTP methods (GET, POST, PUT, DELETE, etc.)
- axios supports request and response interceptors

- send body and headers in axios
```jsx
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1
}, {
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
  .then(response => console.log(response.data))
  .catch(error => console.log(error));
```

- In post, put, delete methods, the second argument is the data to be sent in the request body
- The third argument is the configuration object that contains headers
- In get method, the second argument is the configuration object that contains headers



