const express = require('express');
const router = express.Router();

//@route  GET api/contact
//@desc   Get all users contact
//@access Private

router.get('/', (req, res) => {
  res.send('Get users contact');
});

//@route  POST api/contact
//@desc   Get all users contact
//@access Private

router.post('/', (req, res) => {
  res.send('Add contact');
});

//@route  PUT api/contact/:id
//@desc   update contact
//@access Private

router.put('/:id', (req, res) => {
  res.send('Update contact');
});

//@route  DELETE api/contact/:id
//@desc   delete contact
//@access Private

router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
