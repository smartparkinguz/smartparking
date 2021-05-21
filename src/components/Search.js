import React from "react";

const people = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
];

export default function Search() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    React.useEffect(() => {
        const results = people.filter(person =>
            person.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <div className="search">
            <input className="input-search"
                   type="text"
                   placeholder="Qayerga bormoqchisiz?"
                   value={searchTerm}
                   onChange={handleChange}
            />
            <ul className="list">
                {searchResults.map(item => (
                    <li className="list-item">{item}</li>
                ))}
            </ul>
        </div>
    );
}