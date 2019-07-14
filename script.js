let total_points = 0;

document.querySelector("#btn-start").addEventListener("click", function () {
  document.querySelector(".colors").scrollIntoView({ behavior: "smooth" });
});

document.querySelector('#blue').addEventListener("click", function(){
  colorSelected(this.id)
});

document.querySelector('#red').addEventListener("click", function(){
  colorSelected(this.id)
});

document.querySelector('#white').addEventListener("click", function(){
  colorSelected(this.id)
});

document.querySelector('#happy').addEventListener("click", function(){
  humorSelected(this.id)
});

document.querySelector('#sad').addEventListener("click", function(){
  humorSelected(this.id)
});

document.querySelector('#angry').addEventListener("click", function(){
  humorSelected(this.id)
});


function colorSelected(color) {
  if (color === 'blue') total_points += 1
  else if (color === 'red') total_points += 2
  else if (color === 'white') total_points += 3

  document.querySelector(".humor").scrollIntoView({ behavior: "smooth" });
}

function humorSelected(humor) {
  if (humor === 'happy') total_points += 1
  else if (humor === 'sad') total_points += 2
  else if (humor === 'angry') total_points += 3

  loadGifs();
  document.querySelector(".result").scrollIntoView({ behavior: "smooth" });
}


  function loadGifs() {
    let q = ''

    switch (total_points) {
      case 1: q = 'love';
        break;
        case 2: q = 'squeak';
        break;
        case 3: q = 'royal';
        break;
        case 4: q = 'base';
        break;
        case 5: q = 'expert';
        break;
        case 6: q = 'flimsy';
        break;
        case 7: q = 'reply';
        break;
        case 8: q = 'delay';
        break;
        case 9: q = 'striped';
        break;
      }

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `//api.giphy.com/v1/gifs/search?api_key=PJb11lDqwChhjShR2e5ScI4eQgpiVFCi&q=${q}&limit=3&random=true`);
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = () => {
      let images = ''

      xhr.response.data.forEach(element => {
        images = images + `<iframe src="${element.embed_url}" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
      });

      document.querySelector("#result").innerHTML = images;
    };

    xhr.onerror = () => {
      console.log('Error')
    };
  }