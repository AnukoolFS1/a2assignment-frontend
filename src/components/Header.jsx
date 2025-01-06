import '../css/header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {


    return (
        <header>
            <div className='header1'>
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
            </div>
            <div className='header2'>
                <h1><img src="https://a2developers.org/images/logo1.png" alt="a2Developer" />A2 Developers</h1>
                <nav>
                    <ul>
                        <li> <a href="#">Home</a></li>
                        <li> <a href="#">About</a></li>
                        <li> <a href="#">Product</a></li>
                        <li> <a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header