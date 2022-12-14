const fetchEconomicPravdaContent = require("./contentFetchers/fetchEconomicPravdaContent");
const fetchJucikaContent = require("./contentFetchers/fetchJucikaContent");
const createJucikaPost = require("./postCreators/createJucikaPost");
const createEconomicPravdaPost = require("./postCreators/createEconomicPravdaPost");
const fetchImdbContent = require("./contentFetchers/fetchImdbContent");
const createImdbPost = require("./postCreators/createImdbPost");
const fetchUareviewContent = require("./contentFetchers/fetchUareviewContent");
const createUareviewPost = require("./postCreators/createUareviewPost");

(async () => {
  // jucika
  const targetUrl = "https://jucika.com.ua";
  const content = await fetchJucikaContent(targetUrl);
  console.log(content);
  console.log(await createJucikaPost(targetUrl, content));
  // epravda
  // const targetUrl = "https://www.epravda.com.ua/";
  // const content = await fetchEconomicPravdaContent(targetUrl);
  // console.log(content);
  // console.log(await createEconomicPravdaPost(targetUrl, content));
  // imdb
  // const targetUrl = "https://www.imdb.com/calendar/";
  // const content = await fetchImdbContent(targetUrl);
  // console.log(content);
  // console.log(await createImdbPost(targetUrl, content));
  // uareview
  // const targetUrl = "https://uareview.com/";
  // const content = await fetchUareviewContent(targetUrl);
  // console.log(content);
  // console.log(await createUareviewPost(targetUrl, content));
})();
