## class based components vs functional components
- syntax
- lifecycle methods
- state
- props
- performance
- reusability
- readability
- The syntax of class components is more complex than functional components.
- Example of class component to increase the count of a number:
```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increaseCount}>Increase</button>
      </div>
    );
  }
}

export default Counter;
```

- Example of functional component to increase the count of a number:
```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};


export default Counter;
```

- Class based components
```jsx
class MyComponent extends React.Component {
    componentDidMount() {
        console.log('Component did mount');
        //perform setup or fetch data
    }
    componentDidUnmount() {
        console.log('Component did unmount');
        //perform cleanup
    }
    render() {
        return <div>My Component</div>
    }
}
```
- Functional components
```jsx
const MyComponent = () => {
    useEffect(() => {
        console.log('Component did mount');
        //perform setup or fetch data
        return () => {
            console.log('Component did unmount');
            //perform cleanup
        }
    }, []);
    return <div>My Component</div>
}
```

## What are custom hooks
- Custom hooks are JavaScript functions that utilize hooks to enable the reuse of stateful logic in functional components.
- Uses another hook internaaly(like useState, useEffect, etc)
- A few good use cases for custom hooks are:
  - Fetching data
  - Animations
  - Forms
  - Event listeners
  - Websockets
  - Local storage
  - Media queries
  - Dark mode
  - Debouncing
  - Throttling
  - etc

## Learnings in the class
1. React Pagination
 - Pagination is a technique to divide the content into multiple pages.
 - Pagination is used to display a large number of records in a single page.
 - The Example of Pagination in React:
```jsx
import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  //posts fetched from an API
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {currentPosts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => paginate(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
```
