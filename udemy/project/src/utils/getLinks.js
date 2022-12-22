// write a function getLinks that takes as input a URL, and prints out a json object structured with a key and value
import cheerio from 'cheerio';

const GetLinks = (url) => {
  const links = [];
  const $ = cheerio.load(url);
  $('a').each((i, el) => {
    links.push($(el).attr('href'));
  });
  return links;
}

export default GetLinks;
