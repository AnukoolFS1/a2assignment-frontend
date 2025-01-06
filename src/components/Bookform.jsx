import Input from "./Input";
import '../css/form.css';

const Bookform = () => { 

    return (
        <form className="form">
            <h2>Get In Touch</h2>
            <p>Have questions about our Products? Fill out the form below to get a call with us.</p>
            <Input name={"Name"} />
        </form>
    )
}

export default Bookform