const containerEl = document.querySelector(".container");

fetch("https://fakestoreapi.com/products", {
  method: "GET",
  headers: {
    "Content-type": "application/json; charset='UTF-8'",
  },
})
  .then((respons) => respons.json())
  .then((data) => {
    data.forEach((e) => {
      const img = document.createElement("img");
      const p = document.createElement("p");
      const pw = document.createElement("p")
      const div = document.createElement("div");
      const div2 = document.createElement("div");
      const button1 = document.createElement("button");
      const button2 = document.createElement("button");

      img.src = e.image;
      p.innerHTML = e.price;
      pw.innerHTML = e.description
      button1.innerHTML = `<i class="bi bi-trash3-fill"></i>`;
      img.className = "images";
      button1.className = "button1"
      div2.className = "div2"
      p.className = "text";
      pw.className = "texta"
      div.className = "card";
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(pw)
      div2.appendChild(button1)
      div.appendChild(div2)
      containerEl.append(div);
    });
  });

