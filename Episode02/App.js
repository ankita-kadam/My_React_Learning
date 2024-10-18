import React from "react"; //This refers to React from node_modules
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div",{ id: "child1" },[
            React.createElement("h1",{},"This is Namaste React"),
            React.createElement("h2",{},"I am h2 tag")
        ]),
        React.createElement("div",{ id: "child2" },[
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"I am h2 tag")
        ])
    ]
);


console.log(parent); //Gives JS object on console(i.e React Element), not HTML

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // This will put heading inside div tag.
