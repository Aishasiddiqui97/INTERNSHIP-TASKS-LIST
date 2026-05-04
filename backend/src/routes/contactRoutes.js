const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - Create new contact message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ 
        error: 'Please provide a valid email address' 
      });
    }

    if (message.length < 10) {
      return res.status(400).json({ 
        error: 'Message must be at least 10 characters long' 
      });
    }

    // Create new contact
    const contact = new Contact({
      name,
      email,
      message
    });

    await contact.save();

    res.status(201).json({ 
      success: true, 
      message: 'Message submitted successfully',
      data: contact
    });
  } catch (error) {
    console.error('Error submitting contact:', error);
    res.status(500).json({ 
      error: 'Failed to submit message' 
    });
  }
});

module.exports = router;