const axios = require("axios");
const router = require("express").Router();

router.get("/", (req, res) => {
  axios
    .get("https://trefle.io/api/plants?token=ZFdFY0hhRFJPVE1BdWszd0h5cHpzdz09&", { params: req.query} )
    .then(({data:results}) => {
      res.json(results)
      //console.log(results)
    })
    .catch(err =>{ res.status(422).json(err),console.log(err)});
});

router.get("/:id", (req, res) => {
  axios
    .get("https://trefle.io/api/plants/"+req.params.id+"?token=ZFdFY0hhRFJPVE1BdWszd0h5cHpzdz09&")//, { params: req.query} )
    .then(({data:results}) => {
      res.json(results)
      console.log(results.id+" Recieved")
  })
    .catch(err =>{ res.status(422).json(err),console.log(err)});
});
module.exports = router;
//, { params: req.query}{ data: { results } }
//<button id="ydQiDQAAQBAJ" class="btn btn-lg btn-success input-lg">Save to Database</button>
//ZFdFY0hhRFJPVE1BdWszd0h5cHpzdz09
//https://www.googleapis.com/books/v1/volumes?&printType=books&maxResults=10