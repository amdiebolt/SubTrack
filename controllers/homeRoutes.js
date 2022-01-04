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

   res.render("homepage", {logged_in})
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  let logged_in = req.session.logged_in
  if (req.session.logged_in) {
    res.redirect('subs');
    return;
  }

  res.render('login', {logged_in});
});

router.get('/newuser', (req,res)=>{
  res.render('newAccount')
})


router.get('/subs', withAuth, (req,res)=>{
  let logged_in = req.session.logged_in
  if (req.session.logged_in){
  res.render('subs', {logged_in});
  return;}
  else{
    res.redirect('/login')
  }
})
router.get('/dashboard', withAuth, (req, res)=>{ 
  res.render("dashboard")
})

module.exports = router;
