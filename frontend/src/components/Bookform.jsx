import Input from "./Input";
import '../css/form.css';
import { useState } from "react";
import axios from "axios"

const Bookform = ({formState, setFormState}) => { 
    const [formdata, setFormdata] = useState({ // formbase state
        name: "",
        email:"",
        contactNumber: "",
        instituteName: "",
        requirements:""
    })

    // handling the inputs which has passed to the components in ui
    const updateForm = (e) => {
        setFormdata(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
        console.log(formdata)
    }

    // On submission of form
    const submitData = async (e) => {
        e.preventDefault();

        const response = await axios.post("http://localhost:4400/", formdata)
        console.log(response)
    }

    return (
        <form className="form" onSubmit={submitData} style={{display: formState? "flex" : "none"}}>
            <h2>Get In Touch <span onClick={() => setFormState(false)} style={{cursor:"pointer"}}><i className="fa-solid fa-xmark"></i></span></h2>
            <p>Have questions about our Products? Fill out the form below to get a call with us.</p>
            <Input title={"Name"} name={"name"} updateForm={updateForm} />
            <Input title={"Email"} name={"email"} updateForm={updateForm} />
            <Input title={"Contact Number"} name={"contactNumber"} updateForm={updateForm} />
            <Input title={"Institution Name"} name={"instituteName"} updateForm={updateForm} />
            <Input title={"Requirements"} name={"requirements"} updateForm={updateForm} textArea={true} />
            <input type="submit" value={"Submit"} />
        </form>
    )
}

export default Bookform