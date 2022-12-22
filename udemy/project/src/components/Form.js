// write a function that takes as input a URL, and prints out a json object structured with a key and value
// with cheerio, and axios
import React, { useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';



const Form = () => {
 const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);

  // const GetLinks = (url) => {
  //   const links = [];
  //   const $ = cheerio.load(url);
  //   $('a').each((i, el) => {
  //     links.push($(el).attr('href'));
  //   });
  //   return links;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    async function getLinks() {
      const res = await axios.get(url);
      const $ = cheerio.load(res.data);
      const links = [];
      $('a').each((i, el) => {
        links.push($(el).attr('href'));
      });
      setLinks(links);
    }
    // getLinks();


    // axios.get(url)
    // .then((res) => {
    //   const $ = cheerio.load(res.data);
    //   const links = [];
    //   $('a').each((i, el) => {
    //     links.push($(el).attr('href'));
    //   });
    //   setLinks(links);
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {links.map((link, i) => {
          return <li key={i}>{link}</li>
        })}
      </ul>
    </div>
  )
}

export default Form;
