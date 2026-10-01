# 📚 Episode 2: Igniting Our App

In this episode, I learned how to set up a React application using npm and Parcel.

In this episode, I covered:

- What is npm
- What is `package.json`
- What is a package and dependency
- What is a bundler
- Difference between React and a bundler
- How to install Parcel
- What is `package-lock.json`
- Difference between `package.json` and `package-lock.json`
- What are direct and transitive dependencies
- What is `node_modules`
- What is Semantic Versioning
- Difference between `^` and `~`
- What is `npx`
- How to run Parcel
- Parcel development server
- Hot Module Replacement (HMR)
- File watching
- Caching
- Image optimization
- Minification
- Bundling
- Compression
- Tree shaking
- Code splitting
- Differential bundling
- Diagnostics and error handling
- HTTPS
- Development and production builds

---

# 1. 📦 Initialize Project using npm

To create a `package.json` file, we use:

```bash
npm init -y
```

This command creates a `package.json` file for our project.

---

# 2. 📄 What is package.json?

`package.json` is a configuration file for npm.

It contains information about our project, such as:

- Project name
- Version
- Scripts
- Dependencies

Example:

```json
{
  "name": "namaste-react",
  "version": "1.0.0",
  "scripts": {},
  "dependencies": {}
}
```

### Important

> `package.json` tells npm what our project needs.

---

# 3. 📚 What is a Package?

A package is reusable code that we can install and use in our project.

Examples:

- React
- Parcel
- Lodash
- Express

We can install a package using npm.

Example:

```bash
npm install parcel
```

---

# 4. 🧑‍💻 What is npm?

`npm` stands for **Node Package Manager**.

It is used to:

- Install packages
- Remove packages
- Update packages
- Manage dependencies
- Run project scripts

Example:

```bash
npm install parcel
```

Here, npm downloads Parcel and its required dependencies.

---

# 5. 📦 What is a Bundler?

A bundler is a tool that takes the files and modules used by our application and prepares them for the browser.

Our application can contain:

- JavaScript
- CSS
- Images
- React
- Other modules

The bundler processes these files and creates files that the browser can load efficiently.

Examples of bundlers:

- Webpack
- Parcel
- Vite

### Important Note

A bundler is **not React**.

React is a library for building UI.

A bundler is a development/build tool that prepares our application for the browser.

```text
React
  ↓
Build UI

Bundler
  ↓
Prepare application for browser
```

---

# 6. 📥 Install Parcel

We can install Parcel using:

```bash
npm install -D parcel
```

Here:

```text
npm
 ↓
Package Manager

install
 ↓
Install package

-D
 ↓
Development dependency

parcel
 ↓
Package
```

After installation, Parcel is added to `package.json`.

Example:

```json
{
  "devDependencies": {
    "parcel": "^2.x.x"
  }
}
```

---

# 7. 📄 package.json vs package-lock.json

When we install a package, npm creates or updates:

```text
package.json
package-lock.json
```

## package.json

`package.json` tells npm what our project needs.

It defines the dependencies and their version ranges.

Example:

```json
{
  "devDependencies": {
    "parcel": "^2.15.0"
  }
}
```

## package-lock.json

`package-lock.json` records the exact dependency versions resolved during installation.

It helps make the installation reproducible.

### Simple Difference

```text
package.json
      ↓
What the project needs
      ↓
Version range

package-lock.json
      ↓
What was resolved
      ↓
Exact versions
```

---

# 8. 🔗 What are Dependencies?

A dependency is a package that our project needs.

For example:

```text
Our Project
    ↓
  Parcel
```

If our project uses Parcel, then Parcel is a dependency of our project.

---

# 9. 🌳 What are Transitive Dependencies?

Sometimes our project depends on one package, and that package depends on other packages.

Example:

```text
Our Project
    ↓
  Parcel
    ↓
 Package A
    ↓
 Package B
```

Here:

- Parcel is a direct dependency.
- Package A and Package B can be transitive dependencies.

### Simple Definition

> Transitive dependencies are dependencies required by our dependencies.

---

# 10. 📁 What is node_modules?

When we install packages using:

```bash
npm install
```

npm downloads the required packages into:

```text
node_modules/
```

Example:

```text
project/
│
├── node_modules/
├── package.json
├── package-lock.json
└── index.html
```

`node_modules` can contain many packages because our dependencies can also have their own dependencies.

### Important

We normally **do not push `node_modules` to Git**.

Instead, we push:

```text
package.json
package-lock.json
```

Another developer can run:

```bash
npm install
```

to install the required dependencies.

---

# 11. 🔢 What is Semantic Versioning?

Packages use versions such as:

```text
18.2.0
```

This follows **Semantic Versioning (SemVer)**.

The format is:

```text
MAJOR.MINOR.PATCH
```

Example:

```text
18.2.0
│  │ │
│  │ └── PATCH
│  └──── MINOR
└─────── MAJOR
```

### Major

A major version can contain breaking changes.

Example:

```text
18 → 19
```

### Minor

A minor version usually adds new features without breaking existing functionality.

Example:

```text
18.2 → 18.3
```

### Patch

A patch version usually contains bug fixes.

Example:

```text
18.2.0 → 18.2.1
```

---

# 12. `^` and `~` in Version

Example:

```json
"parcel": "^2.15.0"
```

The `^` allows compatible updates within the same major version.

For example:

```text
2.x.x
```

but not:

```text
3.x.x
```

---

## `~` Version

Example:

```text
~2.15.0
```

The `~` allows patch updates within the same minor version.

For example:

```text
2.15.1
2.15.2
2.15.3
```

but not:

```text
2.16.0
```

### Simple Difference

```text
^
 ↓
Minor + Patch updates
within same major version

~
 ↓
Patch updates
within same minor version
```

---

# 13. 🚀 What is npx?

`npx` is used to execute a package command.

Example:

```bash
npx parcel index.html
```

Here, `npx` runs the Parcel command for our project.

It can use the Parcel version installed in our project.

---

# 14. 🏃 Run Parcel

To start the development server:

```bash
npx parcel index.html
```

Here:

```text
index.html
    ↓
Parcel takes it as entry point
    ↓
Parcel processes the application
    ↓
Development server starts
```

Parcel then gives us a local development server where we can open our application in the browser.

---

# 15. 🌐 Parcel Development Server

When we run:

```bash
npx parcel index.html
```

Parcel starts a local development server.

It helps us during development because we can:

- Run the application locally
- See changes quickly
- Get development errors
- Use HMR

---

# 16. 🔥 Hot Module Replacement (HMR)

HMR stands for **Hot Module Replacement**.

It allows Parcel to update the application when we change our code without manually restarting the development server.

Example:

```text
Write code
   ↓
Save file
   ↓
Parcel detects change
   ↓
Updates application
   ↓
Browser shows changes
```

This makes development faster.

---

# 17. 👀 File Watching

Parcel watches our project files for changes.

For example:

```text
index.html
App.js
style.css
```

If we change one of these files, Parcel detects the change and processes the required files again.

---

# 18. ⚡ Caching

Parcel uses caching to make the development and build process faster.

It can reuse previously processed information instead of doing the same work again.

This helps make repeated builds faster.

---

# 19. 🖼️ Image Optimization

Parcel can process and optimize images used by the application.

This can help reduce the size of assets and improve application performance.

---

# 20. 📦 Bundling

Bundling means processing and combining the required modules and files into bundles that can be served to the browser.

Example:

```text
App.js
  ↓
Component A
  ↓
Component B
  ↓
CSS
  ↓
Other modules
  ↓
Parcel
  ↓
Bundle
```

The browser can then load the generated files.

---

# 21. 🗜️ Minification

Minification removes unnecessary characters from files.

Example:

```javascript
const message = "Hello World";
console.log(message);
```

A minified version can remove unnecessary spaces and formatting.

The main goal is to make the file smaller.

```text
Less file size
     ↓
Less data to download
     ↓
Faster loading
```

---

# 22. 📦 Compression

Compression reduces the amount of data that needs to be transferred between the server and browser.

Example:

```text
Large file
   ↓
Compression
   ↓
Smaller data
   ↓
Browser
```

---

# 23. 🌳 Tree Shaking

Tree shaking removes code that is not being used.

Example:

```javascript
function add() {}
function subtract() {}
function multiply() {}
```

If our application only uses:

```javascript
add();
```

unused code may be removed from the production bundle.

```text
Used code
   ↓
Keep

Unused code
   ↓
Remove
```

This helps reduce the bundle size.

---

# 24. ✂️ Code Splitting

Code splitting means splitting our application code into smaller pieces instead of sending everything together.

Example:

```text
Application
     ↓
 ┌─────────┬─────────┬─────────┐
 Home      About     Profile
```

The browser can load the required code when it is needed.

This can help improve the initial loading time of a large application.

---

# 25. 🌍 Differential Bundling

Differential bundling means creating different bundles for different browser capabilities.

Example:

```text
Modern Browser
      ↓
Modern JavaScript Bundle

Older Browser
      ↓
Compatible JavaScript Bundle
```

This allows an application to support different browsers while still using modern features where possible.

---

# 26. 🔍 Diagnostics

Parcel provides useful information when something goes wrong.

Example:

```text
Code Error
    ↓
Parcel detects it
    ↓
Shows error information
    ↓
Developer fixes the problem
```

This makes debugging easier during development.

---

# 27. ❌ Error Handling

If there is an error in our code, Parcel can show useful error messages.

Example:

```javascript
const message = ;
```

Parcel can detect the problem and show information about where the error occurred.

This helps us find and fix errors faster.

---

# 28. 🔒 HTTPS

Parcel can also be configured to use HTTPS during development.

Normally, local development uses:

```text
http://localhost
```

HTTPS uses:

```text
https://localhost
```

HTTPS is useful when we need to test features that require a secure connection.

---

# 29. 🏗️ Development Build vs Production Build

There are different types of builds.

## Development

```bash
npx parcel index.html
```

Development mode is mainly used while writing and testing the application.

It provides features such as:

- Development server
- HMR
- Better development errors
- Fast rebuilds

---

## Production

For a production build:

```bash
npx parcel build index.html
```

Production build focuses on creating optimized files for deployment.

It can include:

- Minification
- Tree shaking
- Optimization
- Bundling
- Smaller output files

---

# 30. 🛠️ Parcel Commands

### Start Development Server

```bash
npx parcel index.html
```

### Create Production Build

```bash
npx parcel build index.html
```

Simple difference:

```text
npx parcel index.html
        ↓
Development

npx parcel build index.html
        ↓
Production Build
```

---

# 31. 🧹 Why We Don't Push node_modules

`node_modules` can contain a very large number of files.

We don't need to push all these files to Git.

Instead, we can add:

```text
node_modules/
```

to our `.gitignore` file.

Example:

```gitignore
node_modules/
dist/
.parcel-cache/
```

Then Git will ignore these generated or dependency files.

Another developer can install the dependencies using:

```bash
npm install
```

---

# 32. 🧠 Complete Project Flow

The basic flow of setting up the application is:

```text
Create Project
      ↓
npm init -y
      ↓
package.json
      ↓
Install Parcel
      ↓
npm install -D parcel
      ↓
node_modules
      ↓
package-lock.json
      ↓
Run Parcel
      ↓
npx parcel index.html
      ↓
Development Server
      ↓
Build Application
      ↓
Browser
```

---

# 🎯 Key Takeaways

- `npm init -y` creates a `package.json` file.
- `package.json` is a configuration file for npm.
- npm is used to manage packages and dependencies.
- A **bundler** prepares our application for the browser.
- Parcel is a bundler and build tool.
- React and Parcel are **different things**.
- React is a library for building UI.
- Parcel is a development/build tool.
- `npm install -D parcel` installs Parcel as a development dependency.
- `package.json` defines what the project needs.
- `package-lock.json` records the exact dependency versions resolved during installation.
- `node_modules` contains installed packages.
- `^` generally allows minor and patch updates within the same major version.
- `~` generally allows patch updates within the same minor version.
- `npx` can execute a package command.
- `npx parcel index.html` starts the development server.
- `npx parcel build index.html` creates a production build.
- Parcel provides features like HMR, caching, bundling, minification, tree shaking and code splitting.
- `node_modules` should normally not be pushed to Git.

---

# 📚 Important Files

After setting up the project, we can have files like:

```text
Namaste React/
│
├── node_modules/
├── src/
├── index.html
├── package.json
├── package-lock.json
└── .gitignore
```

| File | Purpose |
|------|---------|
| `package.json` | Defines project information, scripts and dependencies |
| `package-lock.json` | Records the exact dependency versions resolved |
| `node_modules/` | Contains installed packages |
| `index.html` | Entry HTML file |
| `.gitignore` | Tells Git which files/folders to ignore |

---

# 🚀 My Learning Flow

```text
npm
 ↓
npm init
 ↓
package.json
 ↓
Dependencies
 ↓
Install Parcel
 ↓
node_modules
 ↓
package-lock.json
 ↓
Bundler
 ↓
Parcel
 ↓
Development Server
 ↓
HMR + File Watching
 ↓
Production Build
 ↓
Optimization
 ↓
Browser
```

> 💡 **Main Learning:** React is used to build the UI, while a bundler like Parcel helps prepare, build and optimize the application so that it can run efficiently in the browser.
