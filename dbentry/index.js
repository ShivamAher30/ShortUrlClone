const mongoose = require("mongoose")
const { URL, User } = require("../connection/index")
async function Dataentry(req, res, shorturl) {
  const body = req.body;
  console.log("thisis ", body.url)
  if (!body.url) {
    return res.status(400).json({
      msg: "URL required"
    })
  }


  const variable = await URL.create({
    shortid: shorturl,
    urltoredirect: body.url,
    visitedhistory: []
  })
  console.log(variable)
  res.end(`The shortend URL is - > localhost:980/url/${shorturl}`)
}
async function Redirecturl(req, res) {
  const enteredbitly = req.params.enteredid;
  console.log(`the params id is ${enteredbitly}`)
  const document = await URL.findOne({ shortid: enteredbitly });

  const entry = await URL.findOneAndUpdate(
    {
      shortid:enteredbitly
    },
    {
      $push: {
        visitedhistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true, lean: true }
  );
  console.log(`the entry is ${entry}`)

  console.log(`the entry is ${document}`)
  // res.redirect(entry.urltoredirect)



}
module.exports = { Dataentry, Redirecturl }
