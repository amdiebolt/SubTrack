const router = require('express').Router();
const { User, Sub } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    let logged_in = req.session.logged_in

    let data = await Sub.findAll({
      include:[
        {model: User, as :"user"}
      ]
    })

    let serializedData = data.map(sub=> sub.get({plain:true}))

   res.render("sub", {data:serializedData, logged_in})
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/newuser', (req,res)=>{
  console.log("kjshdkjshd")
  res.render('newAccount')
})

router.get('/dashboard', withAuth, (req, res)=>{ 
  res.render("dashboard")
})
module.exports = router;
