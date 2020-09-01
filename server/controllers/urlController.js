const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const { Url } = require("../models/urls");

// Accept link from frontend, check in DB if someone has used the shortened code they want
router.post("/newLink", async (req, res) => {
  const urlIsNotAvailable = await Url.findOne(
    { shortenedLinkCode: req.body.shortenedLinkCode },
    function (err) {
      if (err) {
        console.log(err);
        res.send(err);
      }
    }
  );

  if (urlIsNotAvailable) {
    res.send({ errorMessage: "sorry that url is taken!" });
  } else {
    const url = new Url({
      directedLink: req.body.directedLink,
      shortenedLinkCode: req.body.shortenedLinkCode,
    });

    url.save((err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        res.send(err);
      }
    });
  }
});

// When someone navigates to a "page" on our website we check the db for the shortenedLink and direct them accordingly

// Accept shortened code and new directed link for update

// Post is used to add in a object to the database
// with post request there is a body, which is JSON

// get request is to get something from the database without changing it
// no body along with this request

// put, patch, delete

module.exports = router;
