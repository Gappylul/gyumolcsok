console.log(fruits);

fruits.map((fruit) => {
    document.getElementById('sel').innerHTML += `
        <option value="${fruit.id}">${fruit.name}</option>
    `;
})

const onFruitChange = () => {
    let selectedFruit = document.getElementById("sel").value;
    let fruit = fruits.find((fru) => fru.id == selectedFruit);
    if (document.querySelector("img").id == "baseFruitPic") {
        document.querySelector("img").id = "fruitPic"
    }
    document.getElementById("fruitPic").src = "./img/" + fruit.image;
    document.getElementById("headText").innerText = fruit.name;
    document.getElementById("bodyText").innerText = fruit.descr;
    if (document.getElementById("texts")) {
        document.getElementById("texts").id = "textsc"
    }
}