express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'))


app.get('/ola', function(req, res) {
  console.log("a responder em /");
  res.send('Hello Express!');
});


function genRandomNumbers(n, min, max) {
  let numbers = [];
  while (numbers.length < n) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  numbers.sort((a, b) => a - b); 
  return numbers;
}

function genBet(){
  const numbers = genRandomNumbers(5, 1, 50); // 5 números de 1 a 50
  const stars = genRandomNumbers(2, 1, 12);   // 2 estrelas de 1 a 12

  const betData = {
    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    date: new Date().toLocaleDateString("pt-PT"),
    time: new Date().toLocaleTimeString("pt-PT"),
    numbers: numbers,
    stars: stars,
  };

  return betData;
}


app.get("/generateBet", (req, res) => {
  res.set("content-type", 'application/json');
  betData = genBet();
  res.json(betData);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
