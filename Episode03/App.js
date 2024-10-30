import React from "react"; //This refers to React from node_modules
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement("h1",{id:"heading"},"Namaste React 🚀");
// Core React will create this element

console.log(heading);

//jsx
const jsxHeading =<h1 id="heading">Namaste React using JSX 🚀</h1>;
console.log(jsxHeading);


const elem = <span>React Element</span>;

// Normal JS function
const title1 =  (
    <h1 className="head" tabIndex="5">
        {elem}
        Namaste React using normal JSX function🚀
    </h1>
);


// React Functional Component
const Title = () => ( 
    <h1 className="head" tabIndex="5">
        Namaste React using JSX🚀
    </h1>
);

const number = 10000;


//Component Composition
const HeadingComponent= () => (
    <div id="container">
        <h2>{number}</h2>
        <h2>{title1}</h2>
        {Title()} 
        {/* or */}
        <Title/>        
        <h1 className="heading">Namaste React using Functional Component🚀</h1>
    </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
//For displaying onto the browser we have to use ReactDOM.createRoot

// root.render(heading);
// root.render(jsxHeading);


root.render(<HeadingComponent/>);