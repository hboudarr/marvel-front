// link import
import { Link, useLocation } from "react-router-dom";

const Card = ({ elem, _id }) => {
    const location = useLocation();
    return (
        <div className="card">
            {location.pathname === "/" ? (
                <Link>
                    <img
                        src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                        alt=""
                    />
                    <div>
                        <span>{elem.name}</span>
                        <p>{elem.description}</p>
                    </div>
                </Link>
            ) : (
                <Link>
                    <img
                        src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                        alt=""
                    />
                    <div>
                        {elem.name ? (
                            <span>{elem.name}</span>
                        ) : (
                            <span>{elem.title}</span>
                        )}

                        <p>{elem.description}</p>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default Card;
