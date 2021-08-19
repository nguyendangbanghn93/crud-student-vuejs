const express = require('express')
const router = express.Router()
const Student = require('../models/Student')

// @route GET api/students
// @desc Get Student
router.get('/', async (req, res) => {
    try {
        console.log("Vao day roi");
        const students = await Student.find()
        res.status(200).json({ success: true, students })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

// @route POST api/students
// @desc Create student
router.post('/', async (req, res) => {
    try {
        const newStudent = new Student(req.body)
        await newStudent.save({ new: true })

        res.status(200).json({ success: true, message: 'Create student success', student: newStudent })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

// @route PUT api/students
// @desc Update student
router.put('/:id', async (req, res) => {
    try {
        let updateStudent =null;
        updateStudent = await Student.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        if (!updateStudent)
            return res.status(401).json({
                success: false,
                message: 'Student notfound'
            })
        res.status(200).json({
            success: true,
            message: 'Update Student success',
            student: updateStudent
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

// @route DELETE api/students
// @desc Delete student
router.delete('/:id', async (req, res) => {
    try {
        const deletedStudent = await Student.findOneAndDelete({ _id: req.params.id })
        if (!deletedStudent)
            return res.status(401).json({
                success: false,
                message: 'Student not found'
            })

        res.status(200).json({ success: true, student: deletedStudent })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Delete student fail' })
    }
})

// @route Get api/students
// @desc Get detail student
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById({ _id: req.params.id })
        if (!student)
            return res.status(401).json({
                success: false,
                message: 'Student not found'
            })
        res.status(200).json({ success: true, student: student })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
})
module.exports = router
