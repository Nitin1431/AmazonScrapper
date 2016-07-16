var cheerio = require('cheerio');
var request = require('request');

var pagesToScrape = [
	'https://www.amazon.co.uk/gp/product/B00K4DTTLY/ref=s9_simh_gw_g23_i2_r?ie=UTF8&fpl=fresh&pf_rd_m=A3P5ROKL5A1OLE&pf_rd_s=desktop-1&pf_rd_r=GDQBZ8Q75JXEZF052MRW&pf_rd_t=36701&pf_rd_p=26de8ef0-2ad7-412c-8634-6cd03b7b73e2&pf_rd_i=desktop',
	'https://www.amazon.co.uk/LG-55-Ultra-Smart-WebOS/dp/B01EBXER1O/ref=sr_1_2?s=electronics&ie=UTF8&qid=1468659887&sr=1-2&keywords=tv',
	'https://www.amazon.co.uk/Apple-MMGF2B-MacBook-13-Inch-Graphics/dp/B01ELG6B38/ref=sr_1_6?s=electronics&ie=UTF8&qid=1468659905&sr=1-6&keywords=mac',
	'https://www.amazon.co.uk/Book-Desktop-External-Drive-WDBYCC0030HBK-EESN/dp/B00FHQO75Q/ref=sr_1_11?s=electronics&ie=UTF8&qid=1468659922&sr=1-11&keywords=mac'
];


for(var i = 0; i < pagesToScrape.length; i++) {
	
	request(pagesToScrape[i], function (error, response, body) {

		if (!error && response.statusCode == 200) {
	    
			$ = cheerio.load(body);

			var amazonData = {};
			
			amazonData['name']          = $('meta[name="title"]').attr('content');
			amazonData['description']   = $('meta[name="description"]').attr('content');
			amazonData['Price']     = $('#priceblock_ourprice').text();
			amazonData['image']         = $(".a-dynamic-image").attr('src');

        	console.log(amazonData);
		}

	})
}


