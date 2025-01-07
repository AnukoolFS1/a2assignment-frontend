const Formdata = require("../model/formdata");

const errorHandle = (err, res) => {
    console.error(err);
    res.status(500).json({ msg: "Internal server err" })
}

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

const getRequirements = async (req, res) => {
    try {
        const data = await Formdata.find();
        res.status(200).json(data)
    } catch (err) {
        errorHandle(err, res)
    }
}

module.exports = { handleFormData, getRequirements }