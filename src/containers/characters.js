// package import
import axios from "axios";
import { useState, useEffect } from "react";

// link import
// import { Link } from "react-router-dom";

// import components
import Card from "../conponents/Card";
import Hero from "../conponents/Hero";

const Characters = () => {
    // states
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // data refrech
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://marvel-back-bdr.herokuapp.com/characters"
                );
                // set Data, and isLoading falsy
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log({ error: error.message });
            }
        };
        fetchData();
    }, []);

    return isLoading ? (
        <div>En chargement ... </div>
    ) : (
        <div>
            <Hero />
            <div className="home container">
                {data.results.map((elem, index) => {
                    return <Card elem={elem} _id={elem._id} />;
                })}
            </div>
        </div>
    );
};

export default Characters;
