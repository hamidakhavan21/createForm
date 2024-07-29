const express = require('express');
const router = express.Router();
const Form = require('../models/form.model');

// Create Form
router.post('/createForm', async (req, res) => {
    const { formName, isPublished, formData } = req.body;
    const userId = req.headers['userid'];

    if (!formName || typeof isPublished !== 'boolean' || !formData || !userId) {
        return res.status(400).send({ message: "Bad Request" });
    }

    try {
        const newForm = new Form({
            formName,
            isPublished,
            formData,
            userId
        });
        
        await newForm.save();
        
        res.status(201).send(newForm);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
