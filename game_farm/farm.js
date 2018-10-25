var garden = [
  'pepper', //0
  '', //1
  'corn', //2
  'corn', //3
  'pumpkin', //4
  '', //5
  '', //6
  '', //7
  '', //8
  '' //9
];

var price= {corn : 10,           // object of prices
            cucumber : 18,
            onion : 7,
            pepper: 25,
            pumpkin: 13
          }

var vegetable = [ 'corn',            // array of vegetables
                  'cucumber',
                  'onion',
                  'pepper',
                  'pumpkin'
                ];

var total = 0;

function showParcel(i) {
  var div = document.getElementById('garden');

    if(garden[i] != ""){
    div.innerHTML += <div><img src="images/${garden[i]}.png" onclick="sell(${i})"></div>;
  }
  else {
    div.innerHTML += <div id="empty" onclick = 'seed(${i})'></div>;
  }
}

function showGarden( i ){
  var div = document.getElementById('garden');
  div.innerHTML = "";
  for (var i = 0; i < garden.length; i++) {
    showParcel(i);
    myMoney(total);
  }
}


function sell( i ){                             // function for selling
  var yesNo = confirm(Do you want to buy ${garden[i]}?);
  if (yesNo) {
      var resp = garden[i];
      total +=price[resp];
      garden[i]="";
      alert(You have to pay ${price[resp]} bucks);
      showGarden(garden.length);
    }

}

function seed( i ){
  var yesNo = confirm("Do you want to seed something?");
  if (yesNo) {
    var s = +prompt('What do you want to seed here?\n 1.Corn \n2.Cucumber \n3.Onion \n4.Pepper \n 5.Pumpkin ');
    garden[i] = vegetable[s-1];
    showGarden(garden.length);
  }                                //function for seeding

}

function myMoney(v){
  var p = document.getElementById('total');
  p.innerHTML = Ai cistigat de tot ${total} dolari canadieni;
}


//////////////////////////////////////

showGarden(garden.length);
