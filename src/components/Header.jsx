import '../css/header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {


    return (
        <header>
            <div className='bookdemo'>
                <button>
                    Book A Demo <span className='right-icon'></span>
                </button>
                <button className='btnanim'>Book A Demo</button>
            </div>
            <div className='contacts'>
                <a href="tel:+918081638914"><i class="fa-solid fa-phone"></i> +91 80816 38914 </a>
                <a href="mailto:contactus@a2developers.org"><i class="fa-solid fa-envelope"></i> contactus@a2developers.org </a>
            </div>
        </header>
    )
}

export default Header