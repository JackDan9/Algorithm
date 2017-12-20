# _*_ coding: UTF-8 _*_

import scrapy

class QuoteSpider(scrapy.Spider):
    name = "quote_spider"
    start_urls = [
        "http://quotes.toscrape.com/"
    ]
    def parse(self, response):
        for quote in response.xpath('//div[@class="quote"]'):
            yield {
                'text': quote.xpath('./span[@class="text"]/text()').extract_first(),
                'author': quote.xpath('.//small[@class="author"]/text()').extract_first(),
                'tags': quote.xpath('.//div[@class="tags"]/a[@class="tag"]/text()').extract()
            }
        next_page_url = response.xpath('//li[@class="next"]/a/@href').extract_first()
        if next_page_url is not None:
            yield scrapy.Request(response.urljoin(next_page_url))
            print(response.urljoin(next_page_url))
