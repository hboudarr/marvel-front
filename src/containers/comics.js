// package import
import axios from "axios";
import { useState, useEffect } from "react";

// Component import
import Card from "../conponents/Card";

// link import
// import { Link } from "react-router-dom";

const Comics = () => {
    // states
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // data refrech
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://marvel-back-bdr.herokuapp.com/comics"
                );
                // set Data, and isLoading falsy
                setData(response.data);
                // console.log(data);
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
        <div className="home container">
            {data.map((elem, index) => {
                return <Card elem={elem} id={elem._id} />;
            })}
        </div>
    );
};

export default Comics;
