const axios = require('axios');
const cheerio = require('cheerio');
const querystring = require('querystring');
const puppeteer = require('puppeteer');

class AnalyticsController {

  static getAnalytics(req, res, next) {
    let webReviews,
        report = {};
    axios({
      method: 'GET',
      url: `${req.query.url}/reviews`
    })
    .then(({data}) => {
      let $ = cheerio.load(data);
      $('.ttupper.fs12px').remove()
      webReviews = $('.rev-text').text()
      // console.log(webReviews)
      // fullReviews = apiReviews.concat(webReviews)
      // console.log(webReviews)
      // return axios({
      //   method: 'GET',
      //   url: `https://api.mymemory.translated.net/get?q=${webReviews}&langpair=id|en`,
      // })
      // translatedText = data.responseData.translatedText
      return axios({
        method: 'POST',
        url: `https://api.twinword.com/api/v5/topic/generate/`,
        headers: {
          "X-Twaip-Key": "Lc+LYLxo57i/d71kQ4cV12XBF73loloWYP9rO09Jxpwi1cdEcl9t1XGXY4ve9C+nxx0SLDLXit54zZduvZCXXA==",
          "Host": "api.twinword.com",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: querystring.stringify({
          text: `${webReviews}`
        })
      })
    })
    .then(({ data }) => {
      report.keyword = Object.keys(data.keyword)
      return axios({
        method: 'POST',
        url: `https://api.twinword.com/api/v4/sentiment/analyze/`,
        headers: {
          "X-Twaip-Key": "Lc+LYLxo57i/d71kQ4cV12XBF73loloWYP9rO09Jxpwi1cdEcl9t1XGXY4ve9C+nxx0SLDLXit54zZduvZCXXA==",
          "Host": "api.twinword.com",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: querystring.stringify({
          text: `${webReviews}`
        })
      })
    })
    .then(({ data }) => {
      let arr = []
      data.keywords.forEach(elem => {
        arr.push(elem.word)
      });
      report.sentiment_words = arr;
      report.sentiment = data.type;
      res.status(200).json(report)
    })
    .catch(next)
  }
}

module.exports = AnalyticsController;