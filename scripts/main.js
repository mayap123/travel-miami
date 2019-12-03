  // map 1 -->
let map = L.map('mapOne').setView([25.797148, -80.150761 ], 10.40);

L.tileLayer('https://api.mapbox.com/styles/v1/mayap123/ck37zrijr7xez1cmm5rtwxz2e/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF5YXAxMjMiLCJhIjoiY2sydjBudmMxMDA1OTNsbnV1Y3p6Nm82NCJ9.80d5ljkZN3evSn4emAobIA', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(map);

let southpointe = L.marker([25.766640, -80.135370]).addTo(map);
let fairchild = L.marker([25.676140, -80.275841]).addTo(map);
let boardwalk = L.marker([25.795662, -80.126774]).addTo(map);
let virginiakey = L.marker([25.736387, -80.156182]).addTo(map);
let crandon = L.marker([25.714447, -80.157450]).addTo(map);

southpointe.bindPopup("South Pointe Park Pier");
fairchild.bindPopup("Fairchild Tropical Botanic Garden");
boardwalk.bindPopup("Miami Beach Boardwalk");
virginiakey.bindPopup("Virginia Key Beach Park");
crandon.bindPopup("Crandon Park");

  // map 2 -->
  let mapsecond = L.map('mapTwo').setView([25.797148, -80.150761 ], 10.40);

  L.tileLayer('https://api.mapbox.com/styles/v1/mayap123/ck3ai2j4j16m71cmqazc9efqn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF5YXAxMjMiLCJhIjoiY2sydjBudmMxMDA1OTNsbnV1Y3p6Nm82NCJ9.80d5ljkZN3evSn4emAobIA', {
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18
 }).addTo(mapsecond);

 let wynwoodwalls = L.marker([25.801138, -80.199326]).addTo(mapsecond);
 let pam = L.marker([25.785997, -80.186333]).addTo(mapsecond);
 let fillmore = L.marker([25.792431, -80.132042]).addTo(mapsecond);
 let arsht = L.marker([25.787621, -80.189873]).addTo(mapsecond);
 let mana = L.marker([25.798490, -80.202704]).addTo(mapsecond);

 wynwoodwalls.bindPopup("Wynwood Walls");
 pam.bindPopup("Pérez Art Museum");
 fillmore.bindPopup("The Fillmore Miami Beach");
 arsht.bindPopup("Adrienne Arsht Center for the Performing Arts");
 mana.bindPopup("Mana Wynwood");


// map 3 -->
let mapthird = L.map('mapThree').setView([25.797148, -80.150761 ], 10.40);

L.tileLayer('https://api.mapbox.com/styles/v1/mayap123/ck3ai2j4j16m71cmqazc9efqn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF5YXAxMjMiLCJhIjoiY2sydjBudmMxMDA1OTNsbnV1Y3p6Nm82NCJ9.80d5ljkZN3evSn4emAobIA', {
 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
 maxZoom: 18
}).addTo(mapthird);

let vizcaya = L.marker([25.744452, -80.210403]).addTo(mapthird);
let barnacle = L.marker([25.725420, -80.242650]).addTo(mapthird);
let deco = L.marker([25.780649, -80.130013]).addTo(mapthird);
let havana = L.marker([25.765440, -80.220780]).addTo(mapthird);
let haiti = L.marker([25.830400, -80.191310]).addTo(mapthird);

vizcaya.bindPopup("Vizcaya Museum & Gardens");
barnacle.bindPopup("The Barnacle Historic State Park");
deco.bindPopup("Art Deco Historic District");
havana.bindPopup("Little Havana");
haiti.bindPopup("Little Haiti");

// map 4 -->
let mapfourth = L.map('mapFour').setView([25.797148, -80.150761 ], 10.40);

L.tileLayer('https://api.mapbox.com/styles/v1/mayap123/ck3ai2j4j16m71cmqazc9efqn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF5YXAxMjMiLCJhIjoiY2sydjBudmMxMDA1OTNsbnV1Y3p6Nm82NCJ9.80d5ljkZN3evSn4emAobIA', {
 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
 maxZoom: 18
}).addTo(mapfourth);

let downtownmia = L.marker([25.784540, -80.193138]).addTo(mapfourth);
let wyn = L.marker([25.801241, -80.199158]).addTo(mapfourth);
let liv = L.marker([25.817043, -80.122208]).addTo(mapfourth);
let basement = L.marker([25.805120, -80.124107]).addTo(mapfourth);
let wharf = L.marker([25.772660, -80.199890]).addTo(mapfourth);

downtownmia.bindPopup("Downtown Miami");
wyn.bindPopup("Wynwood");
liv.bindPopup("Liv @ Fountainbleu Miami Beach");
basement.bindPopup("Basement Miami @ The Miami Beach EDITION");
wharf.bindPopup("The Wharf Miami");

// map 5 -->
let mapfifth = L.map('mapFive').setView([25.797148, -80.150761 ], 10.40);

L.tileLayer('https://api.mapbox.com/styles/v1/mayap123/ck3ai2j4j16m71cmqazc9efqn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF5YXAxMjMiLCJhIjoiY2sydjBudmMxMDA1OTNsbnV1Y3p6Nm82NCJ9.80d5ljkZN3evSn4emAobIA', {
 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
 maxZoom: 18
}).addTo(mapfifth);

let seaq = L.marker([25.7343, -80.1649]).addTo(mapfifth);
let jungle = L.marker([25.786079, -80.175049]).addTo(mapfifth);
let childrens = L.marker([25.784640, -80.176580]).addTo(mapfifth);
let venetian = L.marker([25.745700, -80.273390]).addTo(mapfifth);
let zoo = L.marker([25.626841, -80.394577]).addTo(mapfifth);

seaq.bindPopup("Miami Seaquarium");
jungle.bindPopup("Jungle Island");
childrens.bindPopup("Miami Children’s Museum");
venetian.bindPopup("Venetian Pool");
zoo.bindPopup("Zoo Miami");

// map 6 -->
let mapsixth = L.map('mapSix').setView([25.797148, -80.150761 ], 10.40);

L.tileLayer('https://api.mapbox.com/styles/v1/mayap123/ck3ai2j4j16m71cmqazc9efqn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF5YXAxMjMiLCJhIjoiY2sydjBudmMxMDA1OTNsbnV1Y3p6Nm82NCJ9.80d5ljkZN3evSn4emAobIA', {
 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
 maxZoom: 18
}).addTo(mapsixth);

let citycentre = L.marker([25.767825, -80.192777]).addTo(mapsixth);
let designdistrict = L.marker([25.813460, -80.192091]).addTo(mapsixth);
let lincoln = L.marker([25.790490, -80.141140]).addTo(mapsixth);
let balharbour = L.marker([25.888378, -80.125237]).addTo(mapsixth);
let merrick = L.marker([25.731831, -80.261597]).addTo(mapsixth);

citycentre.bindPopup("Brickell City Centre");
designdistrict.bindPopup("Miami Design District ");
lincoln.bindPopup("Lincoln Road South Beach");
balharbour.bindPopup("Bal Harbour Shops");
merrick.bindPopup("Shops at Merrick Park");




  let maphidden= document.querySelectorAll('.hidemap');
  let categories = document.querySelectorAll('.buttoncateg');
  let infobox = document.querySelectorAll('.content');
  let clickhere = document.querySelectorAll('.clickmarker');

  function hideAll() {
    maphidden.forEach(function(el) {
      el.style.display = 'none';
    });

    infobox.forEach(function(el) {
      el.style.display = 'none';
    });

    clickhere.forEach(function(el) {
      el.style.display = 'none';
    });

  }

  hideAll();


  categories.forEach(function(el) {
    el.onclick = (e) => {
      hideAll();

      switch (e.target.getAttribute('id')) {
            case 'outdoors':
            document.querySelector('.clickmarker')
            .style.display = 'block';
            document.querySelector('#mapOne')
            .style.display = 'block';
            document.querySelector('#contentOne')
            .style.display = 'block';
              break;
            case 'art':
              document.querySelector('#mapTwo')
              .style.display = 'block';
              document.querySelector('#contentTwo')
              .style.display = 'block';
              break;
            case 'historical':
              document.querySelector('#mapThree')
              .style.display = 'block';
              document.querySelector('#contentThree')
              .style.display = 'block';
              break;
            case 'nightlife':
              document.querySelector('#mapFour')
              .style.display = 'block';
              document.querySelector('#contentFour')
              .style.display = 'block';
                break;
            case 'kids':
              document.querySelector('#mapFive')
              .style.display = 'block';
              document.querySelector('#contentFive')
              .style.display = 'block';
                break;
            case 'shopping':
              document.querySelector('#mapSix')
              .style.display = 'block';
              document.querySelector('#contentSix')
              .style.display = 'block';
              break;
          }

           }
           });
