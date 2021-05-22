import React from "react";
import {Link} from "react-router-dom";

const people = [
    "Toshkent Xalqlar do'stligi",
    "Toshkent Qo'yliq dehqon bozori",
    "Toshkent Malika bozori",
    "Toshkent Abu-saxiy (Ippodrom)",
    "Toshkent Hilton Tashkent City",
    "Toshkent Amir Temur park",
    "Toshkent Anhor Lokamativ parki",
    "Toshkent Chorsu"
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
                    searchTerm.length===0?"":
                   <li className="list-item"><Link to="/map"><span className="icon location"></span>{item}</Link></li>
                ))}
            </ul>
        </div>
    );
}