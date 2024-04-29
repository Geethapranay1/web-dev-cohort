## React Routing
- React Router is a collection of navigational components that compose declaratively with your application.
- React Router is a standard library for routing in React.
- It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps UI in sync with the URL.
- React Router uses component structure to call components, which display the appropriate information.
- React Router is a collection of navigational components that compose declaratively with your application.
- The most common components are:
  - BrowserRouter
  - Route
  - Link
  - Switch
  - Redirect
- The syntax of BrowserRouter is as follows:
```jsx
import { BrowserRouter } from 'react-router-dom';
<BrowserRouter>
  <App />
</BrowserRouter>
```
- The syntax of Route is as follows:
```jsx
import { Route } from 'react-router-dom';
<Route path="/about" component={About} />
```
- The syntax of Link is as follows:
```jsx
import { Link } from 'react-router-dom';
<Link to="/about">About</Link>
```
- The syntax of Switch is as follows:
```jsx
import { Switch } from 'react-router-dom';
<Switch>
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
</Switch>
```
- The syntax of Redirect is as follows:
```jsx
import { Redirect } from 'react-router-dom';
<Redirect to="/about" />
```
- Routes are used to define the navigation paths in the application.
- Links are used to navigate to different routes in the application.
- Switch is used to render the first child Route or Redirect that matches the location.
- Redirect is used to redirect to a different route in the application.
- useNavigate is a hook that returns a navigate function to navigate to a different route.
- The syntax of useNavigate is as follows:
```jsx
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/about');
```
- useParams is a hook that returns an object of the URL parameters.
- The syntax of useParams is as follows:
```jsx
import { useParams } from 'react-router-dom';
const { id } = useParams();
```
```jsx
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Landing from './Landing';
import Dashboard from './Dashboard';

const App = () => {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    // Use navigate function instead of window.location.href
    navigate('/dashboard');
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Use the navigateToDashboard function for navigation */}
            <button onClick={navigateToDashboard}>Go to Dashboard</button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
```

- difference between link and useNavigate
  - Link is a component that renders a hyperlink to a route in the application.
  - useNavigate is a hook that returns a navigate function to navigate to a different route.
  - Link is used to navigate to different routes by clicking on the link.
  - useNavigate is used to navigate to different routes programmatically.
  - Link is used in the JSX code to render a hyperlink.
  - useNavigate is used in the JavaScript code to navigate to a different route.

---

## Lazy Loading
- Lazy loading is a technique in which the application loads only the required resources or components when they are needed.
- Lazy loading helps in reducing the initial load time of the application by loading the resources or components on demand.
- React.lazy is a function that enables lazy loading of components in a React application.
- The syntax of React.lazy is as follows:
```jsx
const MyComponent = React.lazy(() => import('./MyComponent'));
```
- Suspense is a component that is used to wrap the lazy loaded component and handle the loading state.
- The syntax of Suspense is as follows:
```jsx
<Suspense fallback={<Loading />}>
  <MyComponent />
</Suspense>
```