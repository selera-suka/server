const axios = require("axios")
const querystring = require('querystring')
const puppeteer = require('puppeteer')

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  await page.goto(`${req.query.url}/reviews`)
  
  await page.setViewport({ width: 1236, height: 589 })
  
  await page.waitForSelector('.notifications-content > .clearfix > .clearfix > #selectors > .everyone')
  await page.click('.notifications-content > .clearfix > .clearfix > #selectors > .everyone')
  
  await page.waitForSelector('.res-reviews-container > .zs-load-more-container > .mt0 > .load-more > .zred')
  await page.click('.res-reviews-container > .zs-load-more-container > .mt0 > .load-more > .zred')
  
  await page.waitForSelector('.res-reviews-container > .zs-load-more-container > .mt0 > .load-more > .zred')
  await page.click('.res-reviews-container > .zs-load-more-container > .mt0 > .load-more > .zred')
  
  await page.waitForSelector('.res-reviews-container > .zs-load-more-container > .mt0 > .load-more > .zred')
  await page.click('.res-reviews-container > .zs-load-more-container > .mt0 > .load-more > .zred')
  
  await page.waitForSelector('.res-reviews-container > .zs-load-more-container > .mt0 > .load-more > .zred')
  await page.click('.res-reviews-container > .zs-load-more-container > .mt0 > .load-more > .zred')
  
  await page.waitForSelector('.notifications-content > .res-reviews-container > .res-reviews-container > .zs-load-more-container > .mt0')
  await page.click('.notifications-content > .res-reviews-container > .res-reviews-container > .zs-load-more-container > .mt0')
  
  await page.waitForSelector('.res-reviews-container > .res-reviews-container > .zs-load-more-container > .mt0 > .load-more')
  await page.click('.res-reviews-container > .res-reviews-container > .zs-load-more-container > .mt0 > .load-more')
  
  let url = await page.evaluate(() => {
    let data = [];
    let reviews = document.querySelectorAll('div.rev-text');
    reviews.forEach(review => {
      data.push(review)
    })
    // review.forEach((elem) => {
    //     let reviewJson = {};
    //     try {
    //         reviewJson.name = hotelelement.querySelector('span.sr-hotel__name').innerText;
    //         hotelJson.reviews = hotelelement.querySelector('span.review-score-widget__subtext').innerText;
    //         hotelJson.rating = hotelelement.querySelector('span.review-score-badge').innerText;
    //         if(hotelelement.querySelector('strong.price')){
    //             hotelJson.price = hotelelement.querySelector('strong.price').innerText;
    //         }
    //     }
    //     catch (exception){

    //     }
    //     hotels.push(hotelJson);
    // });
});

  console.log(data);

  await browser.close()
})()

// axios({
//   method: 'POST',
//   url: `https://api.twinword.com/api/v5/topic/generate/`,
//   headers: {
//     "X-Twaip-Key": "Lc+LYLxo57i/d71kQ4cV12XBF73loloWYP9rO09Jxpwi1cdEcl9t1XGXY4ve9C+nxx0SLDLXit54zZduvZCXXA==",
//     "Host": "api.twinword.com",
//     "Content-Type": "application/x-www-form-urlencoded"
//   },
//   data: querystring.stringify({
//     text: `The menu and price point are not that much different with Sushi Hiro. I ordered couple of sushi enough to make up 1 small bridge, avocado salad, maze udon and gyudon. My friends ordered some other things but I forgot the name and didnt take any picture. The sushi tasted okay, they gave generous slice of fish so that’s good. I had high expectation for the maze udon, but turned out it wasn’t my taste, it wasn’t bad, it was just “eh”. The gyudon was also so so, the meat slices were a bit too chewy for me, but I liked that they use (maybe) truffle oil for the crispy vegetable side dish.`
//   })
// })
// .then(function(data) {
//   console.log(data)
// })
// .catch(function(err) {
//   console.log(err)
// })