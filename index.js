// server.js
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const PORT = process.env.PORT || 3001;

let currentBid = 0;
let bidderName = '';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/current-bid', (req, res) => {
    res.render('bidder1', { currentBid, bidderName }); // Render the EJS template
  });

// Define a route to handle bid submission
app.post('/submit-bid', (req, res) => {
    // Get bid values from the request body
    const bidder1Bid = parseFloat(req.body.bidder1Bid);
    const bidder2Bid = parseFloat(req.body.bidder2Bid);

    // Calculate the highest bid
    const highestBid = Math.max(bidder1Bid, bidder2Bid);

    // Store bid values and highest bid in a local variable
    const bidder = {
        bidder1: bidder1Bid,
        bidder2: bidder2Bid,
        highestBid: highestBid
    };
    console.log(bidder);
    // Render the bidder.ejs template with the bidder data
    res.render('bidder1.ejs', { bidder: bidder });
});


app.post('/raise-bid', (req, res) => {
  const { bid, name } = req.body;

  if (bid > currentBid) {
    currentBid = bid;
    bidderName = name;
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Bid must be higher than the current bid.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
