# 📚 Episode: HTML, JavaScript and React

In this episode, I learned how to write the **same basic program** using:

- HTML
- JavaScript
- React

The main goal of this episode was to understand **how React works behind the scenes**, before using JSX and React projects.

---

## 📌 Topics Covered

In this episode, I learned:

- How to get React using **CDN**
- How to arrange React code inside an HTML file
- How to write React **without JSX**
- Difference between **React and ReactDOM**
- Parameters of `React.createElement(type, props, children)`
- What a React element looks like when printed in the console
- How React elements are rendered using `ReactDOM`
- What `ReactDOM.createRoot()` does
- What `root.render()` does
- What a **CDN** is
- What **Cross-Origin / crossorigin** means
- Why JSX is useful

---

# 1. 👋 Hello World using HTML

First, I created a simple **Hello World** program using only HTML.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>

  <body>
    <div id="root">
      <h1>Hello World</h1>
    </div>
  </body>
</html>
```

Here, the browser directly understands the HTML and creates the `h1` element in the DOM.

---

# 2. 🟨 Hello World using JavaScript

Next, I created the same program using JavaScript.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>

  <body>
    <div id="root">
      <script>
        const heading = document.createElement("h1");

        heading.innerHTML = "Hello World from JavaScript!!";

        const root = document.getElementById("root");

        root.appendChild(heading);
      </script>
    </div>
  </body>
</html>
```

### What happens here?

1. `document.createElement("h1")` creates an `h1` DOM element.
2. `heading.innerHTML` adds text inside the element.
3. `document.getElementById("root")` gets the root DOM element.
4. `root.appendChild(heading)` adds the `h1` inside the root.

So the browser finally gets:

```html
<div id="root">
  <h1>Hello World from JavaScript!!</h1>
</div>
```

---

# 3. ⚛️ Hello World using React CDN

Now I created the same program using React.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>

  <body>
    <div id="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>

    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    <script>
      const heading = React.createElement("h1", {}, "Hello World from React!!");

      const root = ReactDOM.createRoot(document.getElementById("root"));

      root.render(heading);
    </script>
  </body>
</html>
```

### What happens here?

The basic flow is:

```text
React.createElement()
        ↓
React Element Object
        ↓
ReactDOM.createRoot()
        ↓
React Root
        ↓
root.render()
        ↓
Browser DOM
```

---

# 4. 🌐 What is CDN?

**CDN** stands for **Content Delivery Network**.

A CDN is a network of servers located in different places around the world that delivers files to users.

It can deliver files such as:

- JavaScript
- CSS
- Images
- Libraries
- Other static files

For React, we can use a CDN to directly include React in an HTML file without installing React through npm.

### React CDN

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
```

### ReactDOM CDN

```html
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

### Difference between these two

The first script provides the **React library**.

The second script provides **ReactDOM**, which provides the APIs needed to connect React with the browser DOM.

```text
React
 ↓
Creates / describes UI

ReactDOM
 ↓
Connects React UI with Browser DOM
```

---

# 5. ⚛️ What is React?

React is a JavaScript library used to build user interfaces.

One important function of React is:

```javascript
React.createElement();
```

It creates a **React element**.

The basic form is:

```javascript
React.createElement(type, props, children);
```

It takes three main arguments:

```text
type
props
children
```

---

## 5.1 `type`

`type` tells React **what type of element or component** should be created.

Example:

```javascript
React.createElement("h1");
```

Here:

```text
type = "h1"
```

Another example:

```javascript
React.createElement("div");
```

Here:

```text
type = "div"
```

---

## 5.2 `props`

`props` is an object that contains properties or attributes for the element.

Example:

```javascript
React.createElement("h1", { className: "title", id: "heading" }, "Hello World");
```

Here:

```javascript
{
  className: "title",
  id: "heading"
}
```

are the props.

If there are no props, we can use:

```javascript
null;
```

Example:

```javascript
React.createElement("h1", null, "Hello World");
```

---

## 5.3 `children`

`children` is the content inside the element.

Example:

```javascript
React.createElement("h1", null, "Hello World");
```

Here:

```text
children = "Hello World"
```

The child can also be another React element.

Example:

```javascript
React.createElement("div", null, React.createElement("h1", null, "Hello"));
```

This represents:

```html
<div>
  <h1>Hello</h1>
</div>
```

---

# 6. 👨‍👩‍👧 Multiple Children

A React element can have multiple children.

Example:

```javascript
const element = React.createElement(
  "div",
  { className: "container" },

  React.createElement("h1", null, "Hello"),

  React.createElement("p", null, "Welcome"),
);
```

This represents:

```html
<div class="container">
  <h1>Hello</h1>
  <p>Welcome</p>
</div>
```

Children can also be provided as an array.

---

# 7. 🌳 Nested HTML Structure with React

### HTML version

```html
<div id="parent">
  <div id="child1">
    <h1>I am H1</h1>
    <h2>I am H2</h2>
  </div>

  <div id="child2">
    <h1>I am H1</h1>
    <h2>I am H2</h2>
  </div>
</div>
```

The same structure can be created using React:

```javascript
const parent = React.createElement(
  "div",
  { id: "parent" },

  [
    React.createElement(
      "div",
      { id: "child1" },

      [
        React.createElement("h1", {}, "I am H1"),

        React.createElement("h2", {}, "I am H2"),
      ],
    ),

    React.createElement(
      "div",
      { id: "child2" },

      [
        React.createElement("h1", {}, "I am H1"),

        React.createElement("h2", {}, "I am H2"),
      ],
    ),
  ],
);
```

It creates the same type of structure as the HTML version.

---

# 8. 🔍 What happens when we print a React Element?

When we create an element:

```javascript
const heading = React.createElement("h1", {}, "Hello World");
```

`heading` is **not an actual DOM element**.

It is a **JavaScript object that describes the UI**.

If we print it:

```javascript
console.log(heading);
```

we see an object containing information about the element.

For example, conceptually:

```text
{
  type: "h1",
  props: {
    children: "Hello World"
  }
}
```

The exact object contains additional internal React information and can vary by React version.

### Important

```text
React Element
      ↓
JavaScript Object
```

It is a **description of what React should create**, not the actual browser DOM node.

---

# 9. 🔵 What is ReactDOM?

**ReactDOM is the library that provides the integration between React and the browser DOM.**

React is responsible for describing the UI.

ReactDOM provides the APIs needed to render that UI into the browser DOM.

Think of it like this:

```text
React
 ↓
Creates / describes UI

ReactDOM
 ↓
Connects React UI with Browser DOM
```

---

# 10. 🏠 What is `ReactDOM.createRoot()`?

`ReactDOM.createRoot()` creates a React root associated with a DOM container.

First, we have a normal HTML element:

```html
<div id="root"></div>
```

Then:

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
```

Now React has a **root connected to the DOM container**.

### Important

`createRoot()` itself does **not** render the UI.

It creates the React root.

---

# 11. 🚀 What is `root.render()`?

`root.render()` tells React which React element should be rendered into the root.

Example:

```javascript
const heading = React.createElement("h1", null, "Hello World");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
```

Now React takes the React element and renders the UI into the browser DOM.

---

# 12. 🔄 Complete React Flow

The complete flow is:

```text
React.createElement()
        ↓
React Element Object
        ↓
ReactDOM.createRoot()
        ↓
React Root
        ↓
root.render(element)
        ↓
React Rendering Process
        ↓
Browser DOM
```

### Important Difference

```text
React Element
      ↓
JavaScript Object
      ↓
Description of UI
```

while:

```text
DOM Element
      ↓
Actual Node in Browser DOM
```

So:

> **React Element is a description/object, while DOM Element is the actual element in the browser.**

---

# 13. 🧩 Complete Nested React Example

```javascript
const parent = React.createElement(
  "div",
  { id: "parent" },

  [
    React.createElement(
      "div",
      { id: "child1" },

      [
        React.createElement("h1", {}, "I am H1"),

        React.createElement("h2", {}, "I am H2"),
      ],
    ),

    React.createElement(
      "div",
      { id: "child2" },

      [
        React.createElement("h1", {}, "I am H1"),

        React.createElement("h2", {}, "I am H2"),
      ],
    ),
  ],
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
```

Here:

```text
React.createElement()
        ↓
Creates React element objects
        ↓
createRoot()
        ↓
Creates React root
        ↓
root.render()
        ↓
React renders the UI
        ↓
Browser DOM
```

---

# 14. 📝 React Without JSX

React can be written without JSX.

For example:

```javascript
const heading = React.createElement("h1", null, "Hello World");
```

This works.

But when the UI becomes larger and more nested, it becomes difficult to read.

Example:

```javascript
React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Hello"),
  React.createElement("p", null, "Welcome"),
);
```

It is difficult to read and maintain.

This is one of the reasons **JSX** is useful.

With JSX, the same UI can be written in a more HTML-like and readable way:

```jsx
<div>
  <h1>Hello</h1>
  <p>Welcome</p>
</div>
```

### Main idea

```text
React without JSX
        ↓
Works
        ↓
But can become difficult to read
        ↓
JSX
        ↓
More readable and maintainable UI code
```

---

# 15. 🌍 What is Cross-Origin?

An **origin** consists of:

```text
Protocol + Domain + Port
```

For example:

```text
https://myapp.com
```

and:

```text
https://unpkg.com
```

are different origins.

When a resource is loaded from another origin, it is a **cross-origin resource**.

---

## `crossorigin` attribute

Example:

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
```

The `crossorigin` attribute tells the browser how to make the cross-origin request.

It is a **browser/HTML feature**.

It is not specific to React.

---

# 16. 🧠 What I Learned

In this episode, I understood that the same UI can be created in different ways.

### HTML

```text
HTML
 ↓
Browser
 ↓
DOM
```

### JavaScript

```text
JavaScript
 ↓
Create DOM Element
 ↓
Append to DOM
```

### React

```text
React.createElement()
 ↓
React Element Object
 ↓
ReactDOM.createRoot()
 ↓
root.render()
 ↓
Browser DOM
```

---

# 🎯 Key Takeaways

- **CDN** allows us to load libraries directly from a network of servers.
- **React** is used to create/describe the UI.
- `React.createElement()` creates a **React element**.
- `React.createElement()` takes:
  - `type`
  - `props`
  - `children`

- A **React element is a JavaScript object**, not a DOM element.
- **ReactDOM** connects React with the browser DOM.
- `ReactDOM.createRoot()` creates a React root.
- `root.render()` renders the React element into the root.
- React can work **without JSX**.
- JSX makes React code more **readable and maintainable**.
- `crossorigin` is a browser/HTML feature used when working with cross-origin resources.

---

## 📚 My Learning Flow

```text
HTML
 ↓
JavaScript DOM
 ↓
React CDN
 ↓
React.createElement()
 ↓
React Element
 ↓
ReactDOM
 ↓
createRoot()
 ↓
root.render()
 ↓
JSX
```

> 🚀 **Next:** Continue learning React and understand **JSX, components, and how React code becomes JavaScript.** 
