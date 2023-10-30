import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
createApp(App).mount('#app')
const input = document.getElementById("input")
const button = document.getElementById("stat")
button.onclick = function () {
    stat.className = "button is-success is-loading";
    let name = input.value;

    axios.get(`https://api.api-ninjas.com/v1/cars?limit=2&model=${name}`, {
        headers: {
            'X-Api-Key': 'vcKUOPPdrUkIsxD7cjj/UA==LF6JKNqu0l3I4UUB'
        }
    }).then((res) => {
        let [model, year, drive, transmission, mpg, fuel] = [res.data[0].make + " " + res.data[0].model, res.data[0].year, res.data[0].drive, res.data[0].transmission, Math.round(378.5 / (res.data[0].combination_mpg * 1.609)) + "л/100км", res.data[0].fuel_type]
        document.querySelector("#model").innerHTML = model
        document.querySelector("#year").innerHTML = year
        switch (drive) {
            case 'fwd':
                document.querySelector("#drive").innerHTML = "Передний";
                break;
            case 'rwd':
                document.querySelector("#drive").innerHTML = "Задний";
                break;
            case 'awd':
            case '4wd':
                document.querySelector("#drive").innerHTML = "Полный";
                break;
        }
        switch (transmission) {
            case 'm':
                document.querySelector("#drive").innerHTML = "МКПП";
                break;
            case 'a':
                document.querySelector("#transmission").innerHTML = "АКПП";
                break;
        }
        document.querySelector("#mpg").innerHTML = mpg
        switch (fuel) {
            case 'gas':
                document.querySelector("#fuel").innerHTML = "Бензин";
                break;
            case 'diesel':
                document.querySelector("#fuel").innerHTML = "Дизель";
                break;
            case 'electricity':
                document.querySelector("#fuel").innerHTML = "Электро";
                break;
        }
        axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDvbL24s32QoD8BbdJj70f62ARqvr9-kRc&searchType=image&cx=e6981af369f6343e2&q=${model} ${year}`).then((res) => {
            console.log(res)
            document.querySelector("#picture").src = res.data.items[0].link
          })
        stat.className = "button is-success is-focused";
    })

}









