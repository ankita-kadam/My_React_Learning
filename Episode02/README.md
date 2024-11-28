# NPM
- NPM does not have a full form
- NPM is everything except Node Package Manager
- NPM manages Node packages but it does not stand for Node Package Manager
- Command :
 npm init   <!-- This will create package.json file -->
 
# package.json
- It is configuration for NPM
- The most imporatant package in our project is bundler
- When we have files such as App.js,index.html our whole code need to be minified, bundled, cached ,cleaned
- Bundler helps to do so.
- Bundler packages/bundles the app so that it can be shift to production
- when we write create-react-app , it behinds the scenes uses web pack bundler
- bundlers : Parcel, Webpack, Vite
- In create-react-app, the bundler used is webpack
- Bundlers are packages. If we want to use a package in our code, we have to use a package manager.
- We use a package manager known as npm or yarn
 
> npm init
- It creates a package.json file
- Now to install parcel we will do
> npm install -D parcel
- Now we will get a package-lock.json file and node modules
- We have installed parcel as a dev dependency(i.e why we used -D while installing parcel)

- There are 2 dependencies which a app can have
1. Dev dependencies
 - required in development phase
2. Normal Dependency
 - used in production also

# Notation name: 
In package.json we have symbol infront of parcel
 1. ~  -> tilde
  - Suppose tomarrow a new version(major version) 2.14.0 comes then parcel will automatically updates its version That's why we used parcel(~) 
  But its not safe to use as it will break a lot of things in our app
 2. ^  -> caret
 - Suppose tomarrow a new version(minor version) 2.12.4 comes then parcel will automatically updates its version That's why we used caret(^)

# How many package.json and package-lock.json are there in a project?
- Each dependency in node module contains package.json and it has its own dependencies

# package-lock.json
- It keeps the track of all the versions
- A lot of developers says, it is working on my machine(i.e on local), I don't know how it breaks on production. So how does it happens? What kind of sorcery is this?
 Basically to avoid that package-lock.json keeps a Hash (you can see that in parcel in integrity) to verify whatever is there on my dev machine is the same version which is being deployed on to the production


# package-lock.json vs package.json
1. package.json
 - keeps approx version of packages
 - can have the caret or tilde
 - It is a configuration for NPM.
 - Whatever packages our project needs, we install those packages using 
 > npm install <packageName>.
 - Once package installation is complete, their versions and 
   configuration related information is stored as dependencies 
   inside package.json file
2. package-lock.json
 - have/locks the exact version of packages being used in the project

#  Difference between package.json and package.lock.json
 - In package. json we have information about generic version of installed packages whereas in package.lock.json we have information about the specific or exact version of installed packages. 

# node_modules
- contains all the code that we fetched from npm
- It is a collection of dependencies
- Which gets installed is like a database for the npm.
- Every dependency in node_module will have its package.json.
- Node modules are very heavy so we should always put this in git ignore.
  Note:  Never touch node_modules and package-lock.json

# .gitignore
- will ignore all the files inside it
- It constains all the files which we don't want to push to github
- It is not required to push node_modules 
Thus we have written node_modules in .gitignore
- It is required to put package.json and package-lock.json on to git

- It you delete node_modules,then you can reinstall it. By using command:
> npm install

# Hot Module Replacement (HMR):
- It means that parcel will keep a track of all the files which you are  updating.
- There is File Watcher Algorithm (written in C++). It keeps track of all the files which are changing realtime and it tells the server to reload.
- These are all done by PARCEL

# parcel-cache:
- Parcel caches code all the time.
- When we run the application, a build is created which takes some time in ms.
- If we make any code changes and save the application, another build will be triggered which might take even less time than the previous build.
- This reduction of time is due to parcel cache.
- Parcel immediately loads the code from the cache every time there is a subsequent build.
- On the very first build parcel creates a folder .parcel cache where it stores the caches in binary codeformat.
- Parcel gives faster build, faster developer experience because of caching

# dist:
- It keeps the files minified for us.
- When bundler builds the app, the build goes into a folder called dist.
- The `/dist` folder contains the minimized and optimised version the source code.
- Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.
- When we run command:
  > npx parcel index.html
- This will create a faster development version of our project and serves it on the server.
- When I tell parcel to make a production build:
  > npx parcel build index.html

- It creates a lot of things, minify your file.
- And the parcel will build all the production files to the dist folder

# npx
- executing a package
- To ignite/start our app 
> npx parcel index.html
- npx means ‘execute using npm’
- index.html is the entry point

# Note :
- It not a prefered way to bring react, react-dom into your project
- Because we don't have to make another network call to get react. We already have it in node_module.
- Install react as a normal dependency
> npm install react

- Ways to get React into our app
1. CDN links (Not a prefered way)
2. npm
 > npm install react
 > npm i react-dom 
     OR
 > npm install react-dom
 - After installing this we no longer need CDN
  But it still gives error that it doesn't know from where this React word is coming from
 - Thus we have to import React in our App

> npx parcel build index.html
> npx parcel index.html

# Note : (If having an error) 
If it gives any error then
- manually delete .parcel-cache or give command
> rm -r .parcel-cache
and again give below command to build app 
> npx parcel index.html


# Parcel features at a glance:
- Hot Module Replacement (HMR)
  - As soon we make changes in file it builds the server again 
- File Watcher Algorithm - written in C++
- Bundling
- Minify Code
- Cleaning our code
- Development and production build
- Super fast build algorithm
- Image Optimization
- Caching while development gives faster builds
- Compression
- Compatible with older browser versions
- Https on dev
- Image Optimization (this is most expensive thing(i.e to upload images))
- Port No
- Consistency Hashing Algorithm
- Zero Config
- Tree shaking - remove unused code
- Code splitting
- Differential Bundling - support older browsers
- Diagnostic 
- Error handling
- HTTPs
- Parcel is creating dev build for you
- Parcel is creating local server for you.
- Parcel is giving energy to our app
  (just like muscles to our skeleton/bones)
- Parcel uses other library also  


# Transitive Dependencies :
- We have our package manager which takes care of our transitive dependencies of our code.
- If we’ve to build a production ready app which uses all optimisations (like minify, bundling, compression, etc), we need to do all these.
- But we can’t do this alone, we need some dependencies on it. 
- Those dependencies are also dependent on other dependencies.

#  Browserslist:
- Browserslist is a tool that specifies which browsers should be supported/compatible in your frontend app.
- It makes our code compatible for a lot of browsers.
- In package.json file do:

# Tree Shaking:
- Tree shaking is a process of removing the unwanted code that we do not use while developing the application. 
- In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.

# Note
- See parceljs.org website
- See Browserlist onn google