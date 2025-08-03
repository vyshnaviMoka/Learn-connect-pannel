// File: backend/routes/course.js
const express = require('express');
const router = express.Router();

// Dummy course data (you can replace with DB calls later)
const courses = [
  {
    id: 1,
    title: 'Basics of Programming',
    description: 'Learn variables, loops, and functions.',
    progress: 60,
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'HTML, CSS, JavaScript basics.',
    progress: 30,
  },
];

// Get all courses
router.get('/', (req, res) => {
  res.json(courses);
});

module.exports = router;
