const Input = ({name}) => {

    return (
        <div className="input">
            <label htmlFor={name}>{name} *</label>
            <input type="text" placeholder={name} name={name} id={name} />
        </div>
    )
}

export default Input