const express = require('express');
const activityController = express.Router();
const activityModel = require('../models/activity')

// Middle Ware
// activityRouter.use((req, res, next)=>{
//     next();
// })

//Activity Route
activityController.get('/', async (req, res) => {
    const activity = await activityModel.find({});

    try {
        res.send(activity);
    } catch (error) {
        res.status(500).send(error);
    }

})

activityController.get('/:id', async (req, res) => {
    const activity = await activityModel.findById(req.params.id);
    try {
        res.send(activity);
    } catch (error) {
        res.status(500).send(error);
    }

})

activityController.post('/', async (req, res) => {
    console.log(req.body)
    const activity = new activityModel(req.body);
    try {
        await activity.save();
        res.send(activity);
    } catch (error) {
        res.status(500).send(error);
    }
})

activityController.patch('/:id', async (req, res) => {
    try {
        const activity = await activityModel.findByIdAndUpdate(req.params.id, req.body);
        await activity.save();
        res.send(activity);
    } catch (error) {
        res.status(500).send(error);
    }
})


activityController.delete('/:id', async (req, res) => {
    try {
        const activity = await activityModel.findByIdAndDelete(req.params.id);
        res.send(activity);
    } catch (error) {
        res.status(500).send(error);
    }
})



module.exports = activityController;