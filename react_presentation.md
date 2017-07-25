title: React
author:
  name: Scott Shumway
  url: https://sshumway.github.io/uppervalleyjs-react/
output: index.html
controls: true
style: style.css
theme: jdan/cleaver-retro

--

# ReactJS
## UI Made Easy
![React logo](images/react-icon-lg.png "React!")

--

### Some background

A JavaScript library for building user interfaces


Developed by ![Facebook logo](images/fb_icon_325x325.png "Developed by Facebook")acebook


Open sourced in March 2015

--

### Since then...

Embraced by the community


So many stars:
![React github stars](images/react_stars.png "So many stars")


So many packages: ![React npm packages](images/npm_react_packages.png "So many packages")


--

### And lots of companies

* Facebook (obviously)
* Microsoft
* Airbnb
* Apple
* The New York Times
* You get the idea

--

### Ok, so what does it do?

The **V** in **MV\***

--

### That sounds great, how does it do it?

* Component tells react what you want to render
* React renders it and updates it when state changes

--

### JSX

Syntax extension to JavaScript

```javascript
const element = <img src={user.avatarUrl}></img>;

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

--

### JSX

Compiles to JavaScript

```javascript
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

--

### Turns into


```javascript 
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
};
```

--

### Virtual DOM

![Virtual DOM](images/vdom_cycle.png "Virtual DOM")

* Batch updates
* Diff changes to minimize DOM updates

--

### Neat, so how do I do it?

1. Create components
2. Compose components
3. Get a declarative, testable, understandable UI

--

### What are components?

* Building blocks of the UI
* The nodes of the virtual DOM

--

### A simple component

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

used like so:

```javascript
const element = <Welcome name="Sara" />;
```

throw it on the page with

```javascript
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

--

### Props

* Arbitrary inputs to component
* Passed into user-defined component as an object "props"
* Read-Only - a component must never modify its own props
* A components configuration

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const element = <Welcome name="Sara" />;
```

--

### State

* Private to the component
* Controlled by the component
* Mutates in time (mostly from user events)
* Change it with `setState`

--

### Using State

```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.incrementCounter = this.updateCounter.bind(this, 1);
    this.decrementCounter = this.updateCounter.bind(this, -1);
  }
    
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <input type='button' value='+' onClick={this.incrementCounter} />
        <input type='button' value='-' onClick={this.decrementCounter} />
      </div>
    );
  }
    
  updateCounter(count) {
    this.setState({count: this.state.count + count});
  }
}
```

--

### Stateless Components



--
* Composing them

--

# Demo time!


## I sure hope this works...

--

### What about the data?

--

--

### Testing

--

### Dev Tools

--

### Beyond the page

--

### What's the gotcha?

--

### More info
