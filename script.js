const section = document.querySelector('section');

// DATA REQUEST SECTION
// single day data request
// const requestURL =
//   'https://api.apify.com/v2/datasets/xF9o1iiT0vqTXDy4T/items?format=json&clean=1&limit=1&desc=1';

// multi-day data request
const requestURL =
  'https://api.apify.com/v2/datasets/xF9o1iiT0vqTXDy4T/items?format=json&clean=1';

const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  const cases = request.response;
  showCases(cases);
};
// LOOP THROUGH THE DATA, CREATE HTML ELEMENTS
function showCases(jsonObj) {
  const myCases = jsonObj;
  const rev = myCases.reverse();

  for (let i = 0; i < rev.length; i++) {
    const myArticle = document.createElement('article');

    const myPara1 = document.createElement('p');
    const myH2 = document.createElement('h2');
    const myPara2 = document.createElement('p');
    // const myPara3 = document.createElement('p');
    const myPara4 = document.createElement('p');
    const myLine = document.createElement('HR');
    const betterDate = new Date(myCases[i].time);
    const bestDate = moment(betterDate).format('MM-DD-YYYY, hA');
    const start = betterDate;
    const end = new Date();
    const elapsed = end.getTime() - start.getTime();

    // ADD CLEANED UP DATA TO HTML
    myPara1.textContent = `As of: ${bestDate}`;
    myH2.textContent = `Confirmed Cases: ${myCases[i].cases}`;
    myPara2.textContent = `Deaths: ${myCases[i].deaths}`;
    // myPara3.textContent = `Time Now: ${new Date()}`;
    myPara4.textContent = `${Math.floor(
      elapsed * 0.00000027778
    )} hours since this update`;
    myLine.textContent = myLine;
    // paragraph.appendChild(text);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myH2);

    myArticle.appendChild(myPara2);
    // myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    section.appendChild(myArticle);
    myArticle.appendChild(myLine);

    // CONSOLE DATA FOR DEBUGGING:
  }
}
