import { useEffect, useState } from "react";

export const Joke = () => {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        const fetchJoke = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setJoke(data.value);
            } catch (error) {
                console.error("Failed to fetch the joke:", error);
            }
        };
        fetchJoke();
    }, []);

    return (
        <section className="joke">
            <p>
                <span data-testid="jokeHeadline">{joke}</span>
                <span> - api.chucknorris.io</span>
            </p>
        </section>
    );
};
