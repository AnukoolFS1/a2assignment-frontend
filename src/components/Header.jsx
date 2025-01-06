import '../css/header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {


    return (
        <header>
            <div>
                <button>
                    Book A Demo
                </button>
                <div></div>
            </div>
            <div>
                <a href="tel:+918081638914"><i class="fa-solid fa-phone"></i> +91 80816 38914 </a>
                <a href="mailto:contactus@a2developers.org"><FontAwesomeIcon icon="fa-regular fa-envelope" /> contactus@a2developers.org </a>
            </div>
        </header>
    )
}

export default Header