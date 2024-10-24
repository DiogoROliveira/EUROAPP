document.addEventListener("DOMContentLoaded", (e) => {
  const button = document.getElementById("genBtn");

  button.addEventListener("click", (e) => {
    genNewBet();
  });
});

function genNewBet() {
  fetch("http://localhost:3000/generateBet")
    .then((response) => response.json())
    .then((data) => {
      console.log("Received bet data from server:", data);

      const { numbers, stars, date, time } = data;

      const ticketDate = document.getElementById("ticket-date");
      ticketDate.innerText = "Date: " + date;

      const ticketTime = document.getElementById("ticket-time");
      ticketTime.innerText = "Time: " + time;

      const theOLNumbers = document.getElementById("olMain");
      theOLNumbers.innerHTML = "";

      const theOLStars = document.getElementById("olStars");
      theOLStars.innerHTML = "";

      numbers.forEach((number) => {
        const newli = document.createElement("li");
        newli.innerText = number;
        theOLNumbers.appendChild(newli);
      });

      stars.forEach((star) => {
        const newli = document.createElement("li");
        newli.innerText = star;
        theOLStars.appendChild(newli);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
