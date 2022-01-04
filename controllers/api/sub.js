const router = require('express').Router();
const { Sub } = require('../../models');

router.post('/createsub', async (req,res)=> { 
  try { 

    console.log(req.session.user_id)
    console.log(req.body)
      
    let newSub = { 
      ...req.body, 
      subbed_id: req.session.user_id
    }

    console.log(newSub)
    let newSubData = await Sub.create(newSub)
      res.json({ newSubData, message: 'Subscription added!' });

} catch (err) {
  res.status(400).json(err);
}
})
 
module.exports = router