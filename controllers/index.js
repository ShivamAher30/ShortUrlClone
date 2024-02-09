const shortid = require("shortid")
const {Dataentry,Redirecturl} = require("../dbentry/index")
function GetShortUrl(req,res)
{
    const shorturl = shortid(7);
    console.log(shorturl)
    Dataentry(req,res,shorturl)
}

module.exports = {GetShortUrl,Redirecturl}