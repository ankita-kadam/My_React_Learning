# Package.json

- In all industry projects, be it react, be it different libraries, framework, generally we create scripts to start, build the project
- If you go to a  new company and you don't know how to start the project then just go to package.json and find these scripts and you will get exact command to run the code.
- This is industry standard
- Changes we have one in scripts are as follows:
  "scripts": {
     "start": "parcel index.html",
     "build": "parcel builf index.html",
     "test": "jest"
   },

Now new command instead of 
> npx parcel index.html 
will be to start the project
> npm run start 
    or
> npm start
and to build the project instead of 
> npx parcel build index.html
it will be
> npm run build

- This is because we have configured it in our package.json


# JSX

- JSX => React.createElement =>ReactElement-JS Object => HTMLElement(render)
- Example of JSX:
 const jsxHeading =<h1 id="heading">Namaste React using JSX 🚀</h1>;
- JSX code is transpiled before it reaches the JS engine which is done by parcel(Babel)
- Babel is JS compiler. It is a transpiler. It takes the JSX code and converts into the React code that JS engine understand
- It is very clumsy to create heading each time by React.createElement()
- To help developer community, facebook developers created jsx.
- JSX is not HTML in JavaScript
- JSX is HTML like syntax or XML like syntax
- Browser understand ES6
- In HTML, when we have to give class attribute to tag then we write,
<div id="root" class="head"></div>
- In JSX, when we have to give class attribute to tag then we write,
const heading = <h1 id="heading" className="head">Namaste React using JSX </h1>
- JS engine cannot read JSX code. Parcel (i.e babel ) does transpilation from JSX code to React code
- JSX code is transpiled before it goes to JS engine and JS engine receives the code that browser can understand.


# Note
- See babeljs.io on google read documentation
- Babel is transpiler and JS compiler


- Attributes in JSX should be in camelCase

  HTML Attribute               JSX Attribute
   class                         className
   tabindex                      tabIndex

- If JSX is in multiple lines then u have to wrap JSX in () round  brackets to know where jsx starting and ending.
<!-- Normal React Element -->
const heading = (<h1 id="heading" className="head">
Namaste React using JSX 
</h1> );
- Here name of React element is in small letter

# React Component

- Always write name of React component starting with capital letter

1. Class Based Component - Old

2. Functional Component - New
  - It is just a normal JS function which returns JSX element
 Example - 
 1.
  const HeadingComponent = () => {
       return <h1 className="heading">Namaste  React Functional Component</h1>
  };

 2. 
 const HeadingComponent2 = () => (
     <h1 className="heading> Namaste React Functional Component </h1>
 );

- To render functional component Syntax is
  root.render(<HeadingComponent/>);

# Component Composition

- Composing one component into another
- Example : 
const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX🚀
    </h1>
);


const HeadingComponent= () => (
    <div id="container">
        <Title/>
        <h1 className="heading">Namaste React using Functional Component🚀</h1>
    </div>
);


# Cross Site Scripting Attack
- As we know JS engine runs code
- So there is a possibility that attackers might send malicious data onto your browser 
- So attackers can read cookies,password
- But, JSX takes care of injection attacks
- JSX escapes/sanitizes malicious data 
