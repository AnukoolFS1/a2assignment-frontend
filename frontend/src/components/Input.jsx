const Input = ({name, textArea}) => {

    return (
        <div className="input">
            <label htmlFor={name}>{name} *</label>
            {textArea?
            <textarea placeholder={name} rows={4}></textarea>
            :<input type="text" placeholder={name} name={name} id={name} />
        }
        </div>
    )
}

export default Input