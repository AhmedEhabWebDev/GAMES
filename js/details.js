import { Ui } from "./ui.js";

export class Details {

  constructor (id) {
    this.ui = new Ui()

    document.getElementById("btnClose").addEventListener("click", () => {
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });

    this.getDetails(id)
  }

  async getDetails(games) {
    
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b2595d7647msh23a587f21bdaf8dp134d43jsn521adb542d9a',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${games}`, options);
    const result = await response.json();
    this.ui.displayDetails(result)
    loading.classList.add("d-none")
  }
}
