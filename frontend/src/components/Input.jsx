const Input = ({ title, textArea, updateForm, name }) => {

    return (
        <div className="input">
            <label htmlFor={title}>{title} *</label>
            {textArea ?
                <textarea placeholder={title} onChange={updateForm} name={name} rows={4}></textarea>
                : <input type="text" placeholder={title} onChange={updateForm} name={name} id={title} />
            }
        </div>
    )
}

export default Input