const express = require('express');

const router = express.Router();

const knex = require('../../knex/kenx')

router.get('/', (_, res) => {
  res.send('from answers')
})

router.post('/', async(req, res) => {
  try {
    const {name, email} = req.body
    console.log({name, email})
    const response = await knex('answers').insert({name, email}).returning('*')
    res.status(200).json({msg: 'success'})
    
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
