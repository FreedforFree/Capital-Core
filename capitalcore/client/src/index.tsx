import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import Header from "./Components/Header.tsx";
import Hero from "./Components/Hero.tsx";
import Main from "./Components/Main.tsx";
import Info from "./Components/Info.tsx";

class App extends React.Component{
    render() {
        return (
            <React.StrictMode>
                <Header />
                <main>
                    <Hero />
                </main>
                <Main />
                <Info />
            </React.StrictMode>
        )
    }
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);