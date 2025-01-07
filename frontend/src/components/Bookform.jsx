import Input from "./Input";
import '../css/form.css';

const Bookform = () => { 

    return (
        <form className="form">
            <h2>Get In Touch <span><i class="fa-solid fa-xmark"></i></span></h2>
            <p>Have questions about our Products? Fill out the form below to get a call with us.</p>
            <Input name={"Name"} />
            <Input name={"Email"} />
            <Input name={"Contact Number"} />
            <Input name={"Institution Name"} />
            <Input name={"Requirements"} textArea={true} />
            <input type="submit" value={"Submit"} />
        </form>
    )
}

export default Bookform