

async function giveRandom1(){
    var randomImg = document.getElementById("randomImg1")
    randomImg.src = "images/loading_ball.gif"
    var type = document.getElementById("typing1"); 
    var typeValue = type.value; 
    var type2 = document.getElementById("typing12")
    var typeValue2 = type2.value
    var response = await fetch("https://pokeapi.co/api/v2/type/" + typeValue);
    var pokeData = await response.json();
    var randomMon = []
    // pokeData is the object we access for all the pokemon of that type EX. "normal"
    if (typeValue2 <= 0){
        var random = pokeData.pokemon[(Math.floor(Math.random() * pokeData.pokemon.length))]
        var randomUrl = random.pokemon.url
        var randomresponse = await fetch(randomUrl)
        var randomData = await randomresponse.json();
        randomImg.src = randomData.sprites.front_default
        var randomName = document.getElementById("randomName1")
        randomName.innerText = randomData.name
        document.getElementById("finalImg1").src = randomData.sprites.front_default
        
    }
    try{
    if (typeValue2 > 0){
            var response2 = await fetch("https://pokeapi.co/api/v2/type/" + typeValue2)
            var pokeData2 = await response2.json();
            for(var i=0; i<pokeData.pokemon.length; i++){
                typeCheck = await fetch (pokeData.pokemon[i].pokemon.url)
                checkData = await typeCheck.json();
                //pokeData.pokemon[].pokemon.url get to the data of that mon at that index
                //checkData is our object with data of the mon
                if (checkData.types.length > 1){
                    if ((checkData.types[0].type.name == (pokeData.name || pokeData2.name)) && (checkData.types[1].type.name == (pokeData2.name || pokeData.name))){
                        randomMon.push(pokeData.pokemon[i].pokemon.url)
                    }
                }
            }
            var random2 = randomMon[(Math.floor(Math.random() * randomMon.length))]
            var randomresponse2 = await fetch(random2)
            var randomData2 = await randomresponse2.json();
            var randomImg = document.getElementById("randomImg1")
            randomImg.src = randomData2.sprites.front_default
            var randomName = document.getElementById("randomName1")
            randomName.innerText = randomData2.name
            document.getElementById("finalImg1").src = randomData2.sprites.front_default

}
}
catch{
    errModal.style.display = "block"
    randomImg.src = "images/missing.gif"
    
}
}

async function giveRandom2(){
    var randomImg = document.getElementById("randomImg2")
    randomImg.src = "images/loading_ball.gif"
    var type = document.getElementById("typing2"); 
    var typeValue = type.value; 
    var type2 = document.getElementById("typing22")
    var typeValue2 = type2.value
    var response = await fetch("https://pokeapi.co/api/v2/type/" + typeValue);
    var pokeData = await response.json();
    var randomMon = []
    // pokeData is the object we access all the pokemon of that type EX. "normal"
    if (typeValue2 <= 0){
        var random = pokeData.pokemon[(Math.floor(Math.random() * pokeData.pokemon.length))]
        var randomUrl = random.pokemon.url
        var randomresponse = await fetch(randomUrl)
        var randomData = await randomresponse.json();
        randomImg.src = randomData.sprites.front_default
        var randomName = document.getElementById("randomName2")
        randomName.innerText = randomData.name
        document.getElementById("finalImg2").src = randomData.sprites.front_default
    }
    try{
    if (typeValue2 > 0){
            var response2 = await fetch("https://pokeapi.co/api/v2/type/" + typeValue2)
            var pokeData2 = await response2.json();
            for(var i=0; i<pokeData.pokemon.length; i++){
                typeCheck = await fetch (pokeData.pokemon[i].pokemon.url)
                checkData = await typeCheck.json();
                //pokeData.pokemon[].pokemon.url get to the data of that mon at that index
                //checkData is our object with data of the mon
                if (checkData.types.length > 1){
                    if ((checkData.types[0].type.name == (pokeData.name || pokeData2.name)) && (checkData.types[1].type.name == (pokeData2.name || pokeData.name))){
                        randomMon.push(pokeData.pokemon[i].pokemon.url)
                    }
                }
            }
            var random2 = randomMon[(Math.floor(Math.random() * randomMon.length))]
            var randomresponse2 = await fetch(random2)
            var randomData2 = await randomresponse2.json();
            var randomImg = document.getElementById("randomImg2")
            randomImg.src = randomData2.sprites.front_default
            var randomName = document.getElementById("randomName2")
            randomName.innerText = randomData2.name
            document.getElementById("finalImg2").src = randomData2.sprites.front_default

}
}
catch{
    errModal.style.display = "block"
    randomImg.src = "images/missing.gif"
}
}
async function giveRandom3(){
    var randomImg = document.getElementById("randomImg3")
    randomImg.src = "images/loading_ball.gif"
    var type = document.getElementById("typing3"); 
    var typeValue = type.value; 
    var type2 = document.getElementById("typing32")
    var typeValue2 = type2.value
    var response = await fetch("https://pokeapi.co/api/v2/type/" + typeValue);
    var pokeData = await response.json();
    var randomMon = []
    // pokeData is the object we access all the pokemon of that type EX. "normal"
    if (typeValue2 <= 0){
        var random = pokeData.pokemon[(Math.floor(Math.random() * pokeData.pokemon.length))]
        var randomUrl = random.pokemon.url
        var randomresponse = await fetch(randomUrl)
        var randomData = await randomresponse.json();
        randomImg.src = randomData.sprites.front_default
        var randomName = document.getElementById("randomName3")
        randomName.innerText = randomData.name
        document.getElementById("finalImg3").src = randomData.sprites.front_default
    }
    try{
    if (typeValue2 > 0){
            var response2 = await fetch("https://pokeapi.co/api/v2/type/" + typeValue2)
            var pokeData2 = await response2.json();
            for(var i=0; i<pokeData.pokemon.length; i++){
                typeCheck = await fetch (pokeData.pokemon[i].pokemon.url)
                checkData = await typeCheck.json();
                //pokeData.pokemon[].pokemon.url get to the data of that mon at that index
                //checkData is our object with data of the mon
                if (checkData.types.length > 1){
                    if ((checkData.types[0].type.name == (pokeData.name || pokeData2.name)) && (checkData.types[1].type.name == (pokeData2.name || pokeData.name))){
                        randomMon.push(pokeData.pokemon[i].pokemon.url)
                    }
                }
            }
            var random2 = randomMon[(Math.floor(Math.random() * randomMon.length))]
            var randomresponse2 = await fetch(random2)
            var randomData2 = await randomresponse2.json();
            var randomImg = document.getElementById("randomImg3")
            randomImg.src = randomData2.sprites.front_default
            var randomName = document.getElementById("randomName3")
            randomName.innerText = randomData2.name
            document.getElementById("finalImg3").src = randomData2.sprites.front_default

}
}
catch{
    errModal.style.display = "block"
    randomImg.src = "images/missing.gif"
}
}

async function giveRandom4(){
    var randomImg = document.getElementById("randomImg4")
    randomImg.src = "images/loading_ball.gif"
    var type = document.getElementById("typing4"); 
    var typeValue = type.value; 
    var type2 = document.getElementById("typing42")
    var typeValue2 = type2.value
    var response = await fetch("https://pokeapi.co/api/v2/type/" + typeValue);
    var pokeData = await response.json();
    var randomMon = []
    // pokeData is the object we access all the pokemon of that type EX. "normal"
    if (typeValue2 <= 0){
        var random = pokeData.pokemon[(Math.floor(Math.random() * pokeData.pokemon.length))]
        var randomUrl = random.pokemon.url
        var randomresponse = await fetch(randomUrl)
        var randomData = await randomresponse.json();
        randomImg.src = randomData.sprites.front_default
        var randomName = document.getElementById("randomName4")
        randomName.innerText = randomData.name
        document.getElementById("finalImg4").src = randomData.sprites.front_default
    }
    try{
    if (typeValue2 > 0){
            var response2 = await fetch("https://pokeapi.co/api/v2/type/" + typeValue2)
            var pokeData2 = await response2.json();
            for(var i=0; i<pokeData.pokemon.length; i++){
                typeCheck = await fetch (pokeData.pokemon[i].pokemon.url)
                checkData = await typeCheck.json();
                //pokeData.pokemon[].pokemon.url get to the data of that mon at that index
                //checkData is our object with data of the mon
                if (checkData.types.length > 1){
                    if ((checkData.types[0].type.name == (pokeData.name || pokeData2.name)) && (checkData.types[1].type.name == (pokeData2.name || pokeData.name))){
                        randomMon.push(pokeData.pokemon[i].pokemon.url) 
                    }
                }
            }
            var random2 = randomMon[(Math.floor(Math.random() * randomMon.length))]
            var randomresponse2 = await fetch(random2)
            var randomData2 = await randomresponse2.json();
            var randomImg = document.getElementById("randomImg4")
            randomImg.src = randomData2.sprites.front_default
            var randomName = document.getElementById("randomName4")
            randomName.innerText = randomData2.name
            document.getElementById("finalImg4").src = randomData2.sprites.front_default

}
}
catch{
    errModal.style.display = "block"
    randomImg.src = "images/missing.gif"
}
}

async function giveRandom5(){
    var randomImg = document.getElementById("randomImg5")
    randomImg.src = "images/loading_ball.gif"
    var type = document.getElementById("typing5"); 
    var typeValue = type.value; 
    var type2 = document.getElementById("typing52")
    var typeValue2 = type2.value
    var response = await fetch("https://pokeapi.co/api/v2/type/" + typeValue);
    var pokeData = await response.json();
    var randomMon = []
    // pokeData is the object we access all the pokemon of that type EX. "normal"
    if (typeValue2 <= 0){
        var random = pokeData.pokemon[(Math.floor(Math.random() * pokeData.pokemon.length))]
        var randomUrl = random.pokemon.url
        var randomresponse = await fetch(randomUrl)
        var randomData = await randomresponse.json();
        randomImg.src = randomData.sprites.front_default
        var randomName = document.getElementById("randomName5")
        randomName.innerText = randomData.name
        document.getElementById("finalImg5").src = randomData.sprites.front_default
    }
    try {
    if (typeValue2 > 0){
            var response2 = await fetch("https://pokeapi.co/api/v2/type/" + typeValue2)
            var pokeData2 = await response2.json();
            for(var i=0; i<pokeData.pokemon.length; i++){
                typeCheck = await fetch (pokeData.pokemon[i].pokemon.url)
                checkData = await typeCheck.json();
                //pokeData.pokemon[].pokemon.url get to the data of that mon at that index
                //checkData is our object with data of the mon
                if (checkData.types.length > 1){
                    if ((checkData.types[0].type.name == (pokeData.name || pokeData2.name)) && (checkData.types[1].type.name == (pokeData2.name || pokeData.name))){
                        randomMon.push(pokeData.pokemon[i].pokemon.url)
                    }
                }
            }
            var random2 = randomMon[(Math.floor(Math.random() * randomMon.length))]
            var randomresponse2 = await fetch(random2)
            var randomData2 = await randomresponse2.json();
            var randomImg = document.getElementById("randomImg5")
            randomImg.src = randomData2.sprites.front_default
            var randomName = document.getElementById("randomName5")
            randomName.innerText = randomData2.name
            document.getElementById("finalImg5").src = randomData2.sprites.front_default

}
}
catch{
    errModal.style.display = "block"
    randomImg.src = "images/missing.gif"
}
}

async function giveRandom6(){
    var randomImg = document.getElementById("randomImg6")
    randomImg.src = "images/loading_ball.gif"
    var type = document.getElementById("typing6"); 
    var typeValue = type.value; 
    var type2 = document.getElementById("typing62")
    var typeValue2 = type2.value
    var response = await fetch("https://pokeapi.co/api/v2/type/" + typeValue);
    var pokeData = await response.json();
    var randomMon = []
    // pokeData is the object we access all the pokemon of that type EX. "normal"
    if (typeValue2 <= 0){
        var random = pokeData.pokemon[(Math.floor(Math.random() * pokeData.pokemon.length))]
        var randomUrl = random.pokemon.url
        var randomresponse = await fetch(randomUrl)
        var randomData = await randomresponse.json();
        randomImg.src = randomData.sprites.front_default
        var randomName = document.getElementById("randomName6")
        randomName.innerText = randomData.name
        document.getElementById("finalImg6").src = randomData.sprites.front_default
    }
    try{
    if (typeValue2 > 0){
            var response2 = await fetch("https://pokeapi.co/api/v2/type/" + typeValue2)
            var pokeData2 = await response2.json();
            for(var i=0; i<pokeData.pokemon.length; i++){
                typeCheck = await fetch (pokeData.pokemon[i].pokemon.url)
                checkData = await typeCheck.json();
                //pokeData.pokemon[].pokemon.url get to the data of that mon at that index
                //checkData is our object with data of the mon
                if (checkData.types.length > 1){
                    if ((checkData.types[0].type.name == (pokeData.name || pokeData2.name)) && (checkData.types[1].type.name == (pokeData2.name || pokeData.name))){
                        randomMon.push(pokeData.pokemon[i].pokemon.url)
                    }
                }
            }
            var random2 = randomMon[(Math.floor(Math.random() * randomMon.length))]
            var randomresponse2 = await fetch(random2)
            var randomData2 = await randomresponse2.json();
            var randomImg = document.getElementById("randomImg6")
            randomImg.src = randomData2.sprites.front_default
            var randomName = document.getElementById("randomName6")
            randomName.innerText = randomData2.name
            document.getElementById("finalImg6").src = randomData2.sprites.front_default

}
}
catch{
    errModal.style.display = "block"
    randomImg.src = "images/missing.gif"
}
}

function getTraditional(element){
    var type1 = document.getElementById("typing1")
    var type2 = document.getElementById("typing12")
    var starter = document.getElementById("starter")
    if (element.checked){
        type1.style.display="none"
        type2.style.display="none"
        starter.style.display="inline"
        document.getElementById('type1').innerText = " "
        document.getElementById('type2').innerText = " "
        document.getElementById('startype').style.display = "inline"
        document.getElementById('btn1').style.display = "none"
        document.getElementById('btn2').style.display = "inline"
        
    }
    else{
        type1.style.display="inline"
        type2.style.display="inline"
        starter.style.display="none"
        document.getElementById('type1').innerText = "Type 1"
        document.getElementById('type2').innerText = "Type 2"
        document.getElementById('startype').style.display = "none"
        document.getElementById('btn1').style.display = "inline"
        document.getElementById('btn2').style.display = "none"
    }
}

async function randomStar(){
    var randomImg = document.getElementById("randomImg1")
    randomImg.src = "images/loading_ball.gif"
    var type = document.getElementById("starter"); 
    var typeValue = type.value; 
    if (typeValue == 1){
        var starters = await Promise.all([
            fetch("https://pokeapi.co/api/v2/pokemon/1/").then((startData) => startData.json() ),
            fetch("https://pokeapi.co/api/v2/pokemon/152").then((startData) => startData.json() ),
            fetch("https://pokeapi.co/api/v2/pokemon/252").then((startData) => startData.json() ),
            fetch("https://pokeapi.co/api/v2/pokemon/387").then((startData) => startData.json() ),
            fetch("https://pokeapi.co/api/v2/pokemon/495").then((startData) => startData.json() ),
            fetch("https://pokeapi.co/api/v2/pokemon/650").then((startData) => startData.json() ),
            fetch("https://pokeapi.co/api/v2/pokemon/722").then((startData) => startData.json() ),
            fetch("https://pokeapi.co/api/v2/pokemon/810").then((startData) => startData.json() ),
            fetch("https://pokeapi.co/api/v2/pokemon/906").then((startData) => startData.json() ),
        ])
        var randomStarter = starters[(Math.floor(Math.random() * starters.length))]
            randomImg.src = randomStarter.sprites.front_default
        var randomName = document.getElementById("randomName1")
            randomName.innerText = randomStarter.name
            document.getElementById("finalImg1").src = randomStarter.sprites.front_default
    }
    if (typeValue == 2){
        var starters = await Promise.all([
            fetch("https://pokeapi.co/api/v2/pokemon/charmander").then((startData) => startData.json() ),
            fetch("https://pokeapi.co/api/v2/pokemon/cyndaquil").then((startData) => startData.json() ),
            fetch("https://pokeapi.co/api/v2/pokemon/torchic").then((startData) => startData.json() ),
            fetch("https://pokeapi.co/api/v2/pokemon/chimchar").then((startData) => startData.json() ),
            fetch("https://pokeapi.co/api/v2/pokemon/tepig").then((startData) => startData.json() ),
            fetch("https://pokeapi.co/api/v2/pokemon/fennekin").then((startData) => startData.json() ),
            fetch("https://pokeapi.co/api/v2/pokemon/litten").then((startData) => startData.json() ),
            fetch("https://pokeapi.co/api/v2/pokemon/scorbunny").then((startData) => startData.json() ),
            fetch("https://pokeapi.co/api/v2/pokemon/fuecoco").then((startData) => startData.json() ),
        ])
        var randomStarter = starters[(Math.floor(Math.random() * starters.length))]
            randomImg.src = randomStarter.sprites.front_default
        var randomName = document.getElementById("randomName1")
            randomName.innerText = randomStarter.name
            document.getElementById("finalImg1").src = randomStarter.sprites.front_default
    }
    if(typeValue == 3){
    var starters = await Promise.all([
        fetch("https://pokeapi.co/api/v2/pokemon/squirtle").then((startData) => startData.json() ),
        fetch("https://pokeapi.co/api/v2/pokemon/totodile").then((startData) => startData.json() ),
        fetch("https://pokeapi.co/api/v2/pokemon/mudkip").then((startData) => startData.json() ),
        fetch("https://pokeapi.co/api/v2/pokemon/piplup").then((startData) => startData.json() ),
        fetch("https://pokeapi.co/api/v2/pokemon/oshawott").then((startData) => startData.json() ),
        fetch("https://pokeapi.co/api/v2/pokemon/froakie").then((startData) => startData.json() ),
        fetch("https://pokeapi.co/api/v2/pokemon/popplio").then((startData) => startData.json() ),
        fetch("https://pokeapi.co/api/v2/pokemon/sobble").then((startData) => startData.json() ),
        fetch("https://pokeapi.co/api/v2/pokemon/quaxly").then((startData) => startData.json() ),
    ])
    var randomStarter = starters[(Math.floor(Math.random() * starters.length))]
    console.log(randomStarter)
        randomImg.src = randomStarter.sprites.front_default
    var randomName = document.getElementById("randomName1")
        randomName.innerText = randomStarter.name
        document.getElementById("finalImg1").src = randomStarter.sprites.front_default
    }
    if(typeValue == 4){
        var starters = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        var pikaStart = await starters.json();
            randomImg.src = pikaStart.sprites.front_default
        var randomName = document.getElementById("randomName1")
            randomName.innerText = pikaStart.name
            document.getElementById("finalImg1").src = pikaStart.sprites.front_default
    }
    if(typeValue == 5){
        var starters = await fetch("https://pokeapi.co/api/v2/pokemon/eevee")
        var evStart = await starters.json();
            randomImg.src = evStart.sprites.front_default
        var randomName = document.getElementById("randomName1")
            randomName.innerText = evStart.name
            document.getElementById("finalImg1").src = evStart.sprites.front_default
}
}

// Get the modal
var modal = document.getElementById("myModal");
var errModal = document.getElementById("errModal")
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var errspan = document.getElementsByClassName("errclose")[0];
// When the user clicks on the button, open the modal
function getFinal() {
modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none"
}

errspan.onclick = function() {
errModal.style.display = "none"
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none"
}
} 

window.onclick = function(event) {
if (event.target == errModal) {
    errModal.style.display = "none"
}
} 




