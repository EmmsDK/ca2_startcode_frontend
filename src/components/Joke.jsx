import React, { useState, useEffect } from "react";

const Joke = () => {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        const fetchJoke = async () => {
            const response = await fetch("http://localhost:8080/ca2/api/apicall");
            const data = await response.json();
            setJoke(data.joke);
            console.log(response);
        };
        fetchJoke();

        const blurElement = document.getElementById("blurEffectJoke");
        if (blurElement) {
            blurElement.addEventListener("click", function () {
                blurElement.classList.remove("blur");
            });
        }
    }, []);

    return (
        <div>
            <div id="blurEffectJoke" className="joke-container blur">
                <p>{joke}</p>
            </div>
        </div>
    );
};

export default Joke;
