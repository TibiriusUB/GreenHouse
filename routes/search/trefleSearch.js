const axios = require("axios");
const router = require("express").Router();

//REST search endpoint for broad search
router.get("/", (req, res) => {
  axios
    .get("https://trefle.io/api/plants?token="+process.env.TREKEY+"&", { params: req.query} )
    .then(({data:results}) => {
      res.json(results)
      console.log(process.env.TREKEY)
      //console.log(results)
    })
    .catch(err =>{ res.status(422).json(err),console.log(err)});
});

//REST search for specific plant
router.get("/:id", (req, res) => {
  axios
    .get("https://trefle.io/api/plants/"+req.params.id+"?token="+process.env.TREKEY)//, { params: req.query} )
    .then(({data:results}) => {
      res.json(results)
      console.log(results.id+" Recieved")
  })
    .catch(err =>{ res.status(422).json(err),console.log(err)});
});

module.exports = router;
