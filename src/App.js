import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Search from "./Search/Search";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        fetchLocationData();
    }, []);

    const fetchLocationData = () => {
        fetch(
            "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=New%20York",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host":
                        "devru-latitude-longitude-find-v1.p.rapidapi.com",
                    "x-rapidapi-key":
                        "PRKBJwiXc4msh406GkWw8lTpvzcxp1mqattjsnk9MkBvFmHwom",
                },
            }
        )
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="App">
            <Header />
            <Search />
        </div>
    );
}

export default App;
