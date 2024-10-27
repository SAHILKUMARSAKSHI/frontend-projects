// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/education-website', { useNewUrlParser: true, useUnifiedTopology: true });

// Define API routes
app.get('/api/photos', getPhotos);
app.post('/api/photos', createPhoto);
app.get('/api/contact-info', getContactInfo);
app.post('/api/contact-info', updateContactInfo);
app.get('/api/events', getEvents);
app.post('/api/events', createEvent);

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// API route handlers
async function getPhotos(req, res) {
  const photos = await Photo.find().exec();
  res.json(photos);
}

async function createPhoto(req, res) {
  const photo = new Photo(req.body);
  await photo.save();
  res.json(photo);
}

// ... implement other API route handlers ...