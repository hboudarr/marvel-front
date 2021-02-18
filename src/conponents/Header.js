import logo from "../assets/Marvel.jpg";
import { Link } from "react-router-dom";

// fontAwesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <header>
            <div className="left">
                {" "}
                <img src={logo} alt="" />{" "}
                <div class="search">
                    &nbsp; <FontAwesomeIcon icon="search" color="#red" /> &nbsp;
                    &nbsp;<span>Search</span>
                </div>
            </div>

            <div className="right">
                <Link to="/characters">
                    <button>CHARACTERS</button>
                </Link>
                <Link to="/comics">
                    <button>COMICS</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
