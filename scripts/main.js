  // map 1 -->
let map = L.map('mapOne').setView([25.797148, -80.150761 ], 10.40);

L.tileLayer('https://api.mapbox.com/styles/v1/mayap123/ck37zrijr7xez1cmm5rtwxz2e/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF5YXAxMjMiLCJhIjoiY2sydjBudmMxMDA1OTNsbnV1Y3p6Nm82NCJ9.80d5ljkZN3evSn4emAobIA', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(map);


let southpointe = L.marker([25.766640, -80.135370]).addTo(map);
let contentA = "\
<h2>South Pointe Park Pier</h2>\
<p>1 Washington Ave, Miami Beach, FL 33139</p>\
<p>South Pointe is a beautiful park that leads to South Beach. It has a dog park and kids area. It is also home to the Smith and Wollensky steakhouse.</p>\
<img src='images/south_pointe.jpg' alt='South Pointe Photo'>\
";
let fairchild = L.marker([25.676140, -80.275841]).addTo(map);
let contentB = "\
<h2>Fairchild Tropical Botanic Garden</h2>\
<p>10901 Old Cutler Rd, Coral Gables, FL 33156</p>\
<p>Fairchild Gardens is a botanic conservation garden. It has exhibits including a butterfly garden and events like the International Mango Festival and Orchid Festival.</p>\
<img src='images/fairchild.jpg' alt='Fairchild Garden Photo'>\
";

let boardwalk = L.marker([25.795662, -80.126774]).addTo(map);
let contentC = "\
<h2>Miami Beach Boardwalk</h2>\
<p>Miami Beach, FL 33140</p>\
<p>The Miami Beach Boardwalk is a scenic pathway where you can see the beach on one side and the luxurious South Beach hotels and condos on the other. It is a popular place to go running, and also has places to eat. The end of it leads to Lincoln Road, a pedestrian mall.</p>\
<img src='images/beach_boardwalk.jpg' alt='Miami Beach Boardwalk Photo'>\
";

let virginiakey = L.marker([25.736387, -80.156182]).addTo(map);
let contentD = "\
<h2>Virginia Key Beach Park</h2>\
<p>4020 Virginia Beach Dr, Miami, FL 33149</p>\
<p>Located off the Rickenbacker Causeway, Virginia Key has trails to explore and nice areas to picnic. </p>\
<img src='images/virginia_key.jpg' alt='Virginia Key Photo'>\
";

let crandon = L.marker([25.714447, -80.157450]).addTo(map);
let contentE = "\
<h2>Crandon Park</h2>\
<p>6747 Crandon Blvd, Key Biscayne, FL 33149 </p>\
<p>Crandon Park Beach has a Family Amusement Center, a Nature Center and a place to rent cabanas. It also has a golf course and tennis courts. </p>\
<img src='images/crandon.jpg' alt='Crandon Park Photo'>\
";

southpointe.bindPopup(contentA);
fairchild.bindPopup(contentB);
boardwalk.bindPopup(contentC);
virginiakey.bindPopup(contentD);
crandon.bindPopup(contentE);

  // map 2 -->
  let mapsecond = L.map('mapTwo').setView([25.797148, -80.150761 ], 10.40);

  L.tileLayer('https://api.mapbox.com/styles/v1/mayap123/ck3ai2j4j16m71cmqazc9efqn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF5YXAxMjMiLCJhIjoiY2sydjBudmMxMDA1OTNsbnV1Y3p6Nm82NCJ9.80d5ljkZN3evSn4emAobIA', {
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18
 }).addTo(mapsecond);

 let wynwoodwalls = L.marker([25.801138, -80.199326]).addTo(mapsecond);
 let contentF = "\
 <h2>Wynwood Walls</h2>\
 <p>2520 NW 2nd Ave, Miami, FL 33127</p>\
 <p>Outdoor murals created by artists from all over the world. The area also has different art galleries and restaurants.</p>\
 <img src='images/wynwood_walls.jpg' alt='Wynwood Walls Photo'>\
 ";

 let pam = L.marker([25.785997, -80.186333]).addTo(mapsecond);
 let contentG = "\
 <h2>Pérez Art Museum</h2>\
 <p>1103 Biscayne Blvd, Miami, FL 33132</p>\
 <p>A modern and contemporary art museum with a beautiful outdoor area and a nice restaurant.</p>\
 <img src='images/perez.jpg' alt='PAM Photo'>\
 ";

 let fillmore = L.marker([25.792431, -80.132042]).addTo(mapsecond);
 let contentH = "\
 <h2>The Fillmore Miami Beach</h2>\
 <p>1700 Washington Ave, Miami Beach, FL 33139</p>\
 <p>Concert venue in Miami Beach near Lincoln Road that hosts music, comedy and more.</p>\
 <img src='images/fillmore.jpg' alt='Fillmore Photo'>\
 ";

 let arsht = L.marker([25.787621, -80.189873]).addTo(mapsecond);
 let contentI = "\
 <h2>Adrienne Arsht Center for the Performing Arts</h2>\
 <p>1300 Biscayne Blvd, Miami, FL 33132</p>\
 <p>In the heart of downtown Miami, the Arsht Center is one of the largest performing arts centers in the United States <a href='https://www.arshtcenter.org/About-Us/Facts--History/'>(Arsht Center)</a>.</p>\
 <img src='images/arsht.jpg' alt='Arsht Center Photo'>\
 ";

 let mana = L.marker([25.798490, -80.202704]).addTo(mapsecond);
 let contentJ = "\
 <h2>Mana Wynwood</h2>\
 <p>318 NW 23rd St, Miami, FL 33127</p>\
 <p>Mana Wynwood is an event space located in Miami's bustling Wynwood art district. It hosts music concerts and  events like Art Basel ones in December.</p>\
 <img src='images/mana.jpg' alt='Mana Wynwood Photo'>\
 ";

 wynwoodwalls.bindPopup(contentF);
 pam.bindPopup(contentG);
 fillmore.bindPopup(contentH);
 arsht.bindPopup(contentI);
 mana.bindPopup(contentJ);


// map 3 -->
let mapthird = L.map('mapThree').setView([25.797148, -80.150761 ], 10.40);

L.tileLayer('https://api.mapbox.com/styles/v1/mayap123/ck3ai2j4j16m71cmqazc9efqn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF5YXAxMjMiLCJhIjoiY2sydjBudmMxMDA1OTNsbnV1Y3p6Nm82NCJ9.80d5ljkZN3evSn4emAobIA', {
 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
 maxZoom: 18
}).addTo(mapthird);

let vizcaya = L.marker([25.744452, -80.210403]).addTo(mapthird);
let contentK = "\
<h2>Vizcaya Museum & Gardens</h2>\
<p>3251 S Miami Ave, Miami, FL 33129</p>\
<p>The Vizcaya Museum used to be businessman James Deering's villa and estate. It offers tours and beautiful views.</p>\
<img src='images/vizcaya.jpg' alt='Vizcaya Photo'>\
";

let barnacle = L.marker([25.725420, -80.242650]).addTo(mapthird);
let contentL = "\
<h2>The Barnacle Historic State Park</h2>\
<p>3485 Main Hwy, Miami, FL 33133</p>\
<p>Located on the scenic Biscayne Bay, The Barnacle is one of the oldest houses in Miami. You can visit and tour to see what life was like when one could only travel to Miami by boat.</p>\
<img src='images/barnacle.jpg' alt='Barnacle Photo'>\
";

let deco = L.marker([25.780649, -80.130013]).addTo(mapthird);
let contentM = "\
<h2>Art Deco Historic District</h2>\
<p>1001 Ocean Dr, Miami Beach, FL 33139</p>\
<p>The Art Deco District, located in South Beach,  showcases Art Deco architecture. It has many lively hotels and restaurants right on the beach. The area was well known as the place where Italian fashion designer Gianni Versace resided in his mansion on Ocean Drive.</p>\
<img src='images/artdeco.jpg' alt='Art Deco Photo'>\
";

let havana = L.marker([25.765440, -80.220780]).addTo(mapthird);
let contentN = "\
<h2>Little Havana</h2>\
<p>1600 SW 8th St, Miami, FL 33135</p>\
<p>Little Havana is Miami’s famous Cuban neighborhood. Here you can find cafes, restaurants, clubs, art galleries and locals playing dominoes at Domino Park.</p>\
<img src='images/littlehavana.jpg' alt='Little Havana Photo'>\
";

let haiti = L.marker([25.830400, -80.191310]).addTo(mapthird);
let contentO = "\
<h2>Little Haiti</h2>\
<p>212 NE 59th Terrace Miami, FL 33137 </p>\
<p>Miami’s Little Haiti neighborhood has galleries, museums and markets. It has a growing art scene as well.</p>\
<img src='images/littlehaiti.jpg' alt='Little Haiti Photo'>\
";


vizcaya.bindPopup(contentK);
barnacle.bindPopup(contentL);
deco.bindPopup(contentM);
havana.bindPopup(contentN);
haiti.bindPopup(contentO);

// map 4 -->
let mapfourth = L.map('mapFour').setView([25.797148, -80.150761 ], 10.40);

L.tileLayer('https://api.mapbox.com/styles/v1/mayap123/ck3ai2j4j16m71cmqazc9efqn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF5YXAxMjMiLCJhIjoiY2sydjBudmMxMDA1OTNsbnV1Y3p6Nm82NCJ9.80d5ljkZN3evSn4emAobIA', {
 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
 maxZoom: 18
}).addTo(mapfourth);

let downtownmia = L.marker([25.784540, -80.193138]).addTo(mapfourth);
let contentP = "\
<h2>Downtown Miami</h2>\
<p>34 NE 11th St, Miami, FL 33132</p>\
<p>Downtown Miami has many rooftop bars and popular clubs like Club Space and E11even.</p>\
<img src='images/downtownmia.jpg' alt='Downtown Miami Photo'>\
";

let wyn = L.marker([25.801241, -80.199158]).addTo(mapfourth);
let contentQ = "\
<h2>Wynwood</h2>\
<p>2531 NW 2nd Ave, Miami, FL 33127</p>\
<p>Although not as fancy as Miami’s nightclubs in Downtown or on South Beach, Wynwood has a popular night life scene with bars and restaurants. Places like the Asian food hall 1-800-Lucky or the secret backdoor room at Coyo Taco are unconventional bars/dance venues.</p>\
<img src='images/nightwyn.jpg' alt='Wynwood Photo'>\
";

let liv = L.marker([25.817043, -80.122208]).addTo(mapfourth);
let contentR = "\
<h2>Liv @ Fountainbleu Miami Beach</h2>\
<p>4441 Collins Ave, Miami Beach, FL 33140</p>\
<p>Liv is a popular nightclub at the Fountainbleu Hotel that often attracts celebrities and VIPs.</p>\
<img src='images/liv.jpg' alt='Liv Club Photo'>\
";

let basement = L.marker([25.805120, -80.124107]).addTo(mapfourth);
let contentS = "\
<h2>Basement Miami @ The Miami Beach Edition Hotel</h2>\
<p>2901 Collins Ave, Miami Beach, FL 33140</p>\
<p>Basement Miami is a nightclub that also has an ice-skating rink and bowling alley.</p>\
<img src='images/basement.jpg' alt='Basement Miami Photo'>\
";

let wharf = L.marker([25.772660, -80.199890]).addTo(mapfourth);
let contentT = "\
<h2>The Wharf Miami</h2>\
<p>114 SW North River Dr. Miami, FL 33130</p>\
<p>On the Miami River, The Wharf is an outdoor event space with food, drinks and live music.</p>\
<img src='images/wharf.jpg' alt='The Wharf Photo'>\
";

downtownmia.bindPopup(contentP);
wyn.bindPopup(contentQ);
liv.bindPopup(contentR);
basement.bindPopup(contentS);
wharf.bindPopup(contentT);

// map 5 -->
let mapfifth = L.map('mapFive').setView([25.797148, -80.150761 ], 10.40);

L.tileLayer('https://api.mapbox.com/styles/v1/mayap123/ck3ai2j4j16m71cmqazc9efqn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF5YXAxMjMiLCJhIjoiY2sydjBudmMxMDA1OTNsbnV1Y3p6Nm82NCJ9.80d5ljkZN3evSn4emAobIA', {
 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
 maxZoom: 18
}).addTo(mapfifth);

let seaq = L.marker([25.7343, -80.1649]).addTo(mapfifth);
let contentU = "\
<h2>Miami Seaquarium</h2>\
<p>4400 Rickenbacker Causeway, Miami, FL 33149</p>\
<p>Miami Seaquarium is an aquarium and marine park. It offers animal encounters such as swimming with dolphins and exhibits like rescue and rehabilitation of manatees.</p>\
<img src='images/seaq.jpg' alt='Miami Seaquarium Photo'>\
";

let jungle = L.marker([25.786079, -80.175049]).addTo(mapfifth);
let contentV = "\
<h2>Jungle Island</h2>\
<p>1111 Parrot Jungle Trail, Miami, FL 33132</p>\
<p>Jungle Island is an animal park with rides and animal exhibitions.</p>\
<img src='images/jungle.jpg' alt='Jungle Island Photo'>\
";

let childrens = L.marker([25.784640, -80.176580]).addTo(mapfifth);
let contentW = "\
<h2>Miami Children’s Museum</h2>\
<p>980 MacArthur Causeway, Miami, FL 33132</p>\
<p>The Miami Children’s Museum includes galleries, play areas and exhibits related to arts and the community.</p>\
<img src='images/kidsmuseum.jpg' alt='Museum Photo'>\
";

let venetian = L.marker([25.745700, -80.273390]).addTo(mapfifth);
let contentX = "\
<h2>Venetian Pool</h2>\
<p>2701 De Soto Blvd, Coral Gables, FL 33134</p>\
<p>The Venetian Pool is a historic U.S. public swimming pool perfect for a family outing. It has a waterfall and kiddie pool as well. Kids under 3 years old are not admitted.</p>\
<img src='images/venetianpool.jpg' alt='Venetian Pool Photo'>\
";

let zoo = L.marker([25.626841, -80.394577]).addTo(mapfifth);
let contentY = "\
<h2>Zoo Miami</h2>\
<p>12400 SW 152nd St Miami, FL 33177</p>\
<p>Zoo Miami is the largest zoo in Florida and fifth largest in the United States <a href='https://www.zoomiami.org/about-the-zoo'>(Zoo Miami)</a>.</p>\
<img src='images/zoomiami.jpg' alt='Zoo Photo'>\
";

seaq.bindPopup(contentU);
jungle.bindPopup(contentV);
childrens.bindPopup(contentW);
venetian.bindPopup(contentX);
zoo.bindPopup(contentY);

// map 6 -->
let mapsixth = L.map('mapSix').setView([25.797148, -80.150761 ], 10.40);

L.tileLayer('https://api.mapbox.com/styles/v1/mayap123/ck3ai2j4j16m71cmqazc9efqn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF5YXAxMjMiLCJhIjoiY2sydjBudmMxMDA1OTNsbnV1Y3p6Nm82NCJ9.80d5ljkZN3evSn4emAobIA', {
 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
 maxZoom: 18
}).addTo(mapsixth);

let citycentre = L.marker([25.767825, -80.192777]).addTo(mapsixth);
let contentZ = "\
<h2>Brickell City Centre</h2>\
<p>701 S Miami Ave. Miami, FL 33131</p>\
<p>The City Centre in Downtown Miami has shops and restaurants, in addition to an upscale movie theatre. I recommend eating at Pubbelly Sushi! <a href='https://www.brickellcitycentre.com/whats-here/directory'>Store Directory</a></p>\
<img src='images/citycent.jpg' alt='City Centre Photo'>\
";

let designdistrict = L.marker([25.813460, -80.192091]).addTo(mapsixth);
let contentAA = "\
<h2>Miami Design District</h2>\
<p>140 NE 39th St. Miami, FL 33137</p>\
<p>The Design District is a neighborhood known for fashion and design. There are many high-end stores to shop at, along with restaurants, galleries, coffee shops and interesting architecture. St. Roch Market is a great gourmet food hall to eat at. <a href='https://www.miamidesigndistrict.net/shops/'>Store Directory</a></p>\
<img src='images/design.jpg' alt='Design District Photo'>\
";

let lincoln = L.marker([25.790490, -80.141140]).addTo(mapsixth);
let contentBB = "\
<h2>Lincoln Road South Beach</h2>\
<p>1120 Lincoln Rd Mall, Miami Beach, FL 33139</p>\
<p>Lincoln Road on South Beach has streets with shopping, dining and entertainment. <a href='https://lincolnrd.com/directory'>Store Directory</a></p>\
<img src='images/lincolnrd.jpg' alt='Lincoln Road Photo'>\
";

let balharbour = L.marker([25.888378, -80.125237]).addTo(mapsixth);
let contentCC = "\
<h2>Bal Harbour Shops</h2>\
<p>9700 Collins Ave, Bal Harbour, FL 33154</p>\
<p>Bal Harbour Shops is a luxurious outdoor mall with a lot of greenery. It has some well known fancy restaurants like a Japanese one called Makoto. <a href='https://www.balharbourshops.com/store-directory/'>Store Directory</a></p>\
<img src='images/balharb.jpg' alt='Bal Harbour Photo'>\
";

let merrick = L.marker([25.731831, -80.261597]).addTo(mapsixth);
let contentDD = "\
<h2>Shops at Merrick Park</h2>\
<p>358 San Lorenzo Ave, Coral Gables, FL 33146</p>\
<p>The Shops at Merrick Park is a very beautiful upscale outdoor shopping mall. <a href='https://www.shopsatmerrickpark.com/en/directory/'>Store Directory</a></p>\
<img src='images/merrick.jpg' alt='Merrick Park Photo'>\
";

citycentre.bindPopup(contentZ);
designdistrict.bindPopup(contentAA);
lincoln.bindPopup(contentBB);
balharbour.bindPopup(contentCC);
merrick.bindPopup(contentDD);



  let maphidden= document.querySelectorAll('.hidemap');
  let categories = document.querySelectorAll('.buttoncateg');
  let clickhere = document.querySelectorAll('.clickmarker');

  function hideAll() {
    maphidden.forEach(function(el) {
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
            document.querySelector('#mapOne')
            .style.display = 'block';
              break;
            case 'art':
              document.querySelector('#mapTwo')
              .style.display = 'block';
              break;
            case 'historical':
              document.querySelector('#mapThree')
              .style.display = 'block';
              break;
            case 'nightlife':
              document.querySelector('#mapFour')
              .style.display = 'block';
                break;
            case 'kids':
              document.querySelector('#mapFive')
              .style.display = 'block';
                break;
            case 'shopping':
              document.querySelector('#mapSix')
              .style.display = 'block';
              break;
          }

           }
           });


let sources = document.querySelector('.bib');
let mySources = document.getElementById("bib-text");

mySources.style.display='none';

  sources.onclick = () => {
    if (mySources.style.display === "none") {
     mySources.style.display = "block";
     } else {
     mySources.style.display = "none";
     }
     }
