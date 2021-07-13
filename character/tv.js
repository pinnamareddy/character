let searchshow = document.getElementById("input");
let searchBtn = document.getElementById("search");
let bodydiv = document.createElement("div");
bodydiv.classList.add("bodydiv");
searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let key = searchshow.value;
    let url = `http://api.tvmaze.com/search/shows?q=${key}`;
    bodydiv.innerHTML = "";
    console.log(url);
    async function tvshow() {
        let tvshw = await fetch(url);
        let tvres = await tvshw.json();
        tvres.forEach((data) => {
            console.log(data.show);
            let inerdiv = document.createElement("div");
            inerdiv.classList.add("inerdiv");
            let Image = document.createElement("img");
            Image.src = data.show.image.medium;
            let name = document.createElement("h5");
            name.innerText = data.show.name;
            name.classList.add("name");
            let genre = document.createElement("p");
            genre.innerText = `Genre:${data.show.genres[0]}`;
            let premieredData = document.createElement("p");
            premieredData.innerText = `Premeried on: ${data.show.premiered}`;
            let time = document.createElement("p");
            time.innerText = `Show time: ${data.show.schedule.time}`;
            let network = document.createElement("p");
            network.innerText = `See it on: ${data.show.network.name}`;
            inerdiv.appendChild(Image);
            inerdiv.appendChild(name);
            inerdiv.appendChild(genre);
            inerdiv.appendChild(premieredData);
            inerdiv.appendChild(time);
            inerdiv.appendChild(network);
            bodydiv.appendChild(inerdiv);
            document.body.appendChild(bodydiv);



        })
    }
    tvshow();

});
