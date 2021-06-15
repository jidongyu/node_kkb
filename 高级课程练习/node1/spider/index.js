/*
 * @Description: 凤凰新闻网数据爬取
 * @Author: jidongyu
 * @Date: 2021-06-15 14:47:22
 * @LastEditTime: 2021-06-15 18:07:13
 * @LastEditors: jidongyu
 * @Reference: 
 */
const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio');

const webURL = "https://news.ifeng.com/";

https.get(webURL, res => {
    let ts = '';
    res.on("data", chunck => {
        ts += chunck;
    });
    res.on('end', () => {
        // console.log(ts)
        formateData(ts)
    })
})

function formateData(html) {
    const $ = cheerio.load(html);
    let arr = [];
    // console.log('$(news-stream-basic-news-list)',$(".news-stream-basic-news-list li"));
    $(".news-stream-basic-news-list li").each((k, v) => {
        let obj = {
            id: k + 1,
            title: $(v).find('a').text(),
            img: 'https' + $(v).find('img').attr('src'),
            from: $(v).find(".news-stream-newsStream-mr10").text(),
            newTime: $(v).find("time").text()
        }
        arr.push(obj);
    })
    fs.writeFileSync('./data.json',JSON.stringify(arr));
}