const Formdata = require("../model/formdata");

// error handling in case of the error
const errorHandle = (err, res) => {
    console.error(err);
    res.status(500).json({ msg: "Internal server err" })
}

// form data handling
const handleFormData = async (req, res) => {
    const data = req.body;
    try {
        const formdata = new Formdata(data);
        await formdata.save()
        res.status(201).json({ msg: "data recieved" })
    } catch (err) {
        errorHandle(err, res)
    }
}


// query controller
const getRequirements = async (req, res) => {
    try {
        const data = await Formdata.find();
        res.status(200).json(data)
    } catch (err) {
        errorHandle(err, res)
    }
}

module.exports = { handleFormData, getRequirements }