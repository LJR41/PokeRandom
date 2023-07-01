

async function giveRandom1(){
    var randomImg = document.getElementById("randomImg1")
    randomImg.src = "images/loading_ball.gif"
    var randomName = document.getElementById("randomName1")
        randomName.innerText = "Searching..."
    var type = document.getElementById("typing1"); 
    var typeValue = type.value; 
    var type2 = document.getElementById("typing12")
    var typeValue2 = type2.value
    var response = await fetch("https://pokeapi.co/api/v2/type/" + typeValue);
    var pokeData = await response.json();
    var randomMon = []
    // pokeData is the object we access for all the pokemon of that type EX. "normal"
    if (typeValue2 <= 0){
        for(var i=0; i<pokeData.pokemon.length; i++){
        typeCheck = await fetch (pokeData.pokemon[i].pokemon.url)
        checkData = await typeCheck.json();
        if (checkData.types.length == 1){
            randomMon.push(pokeData.pokemon[i].pokemon.url)
        }
    }
        var random = randomMon[(Math.floor(Math.random() * randomMon.length))]
        var randomresponse = await fetch(random)
        var randomData = await randomresponse.json();
        randomImg.src = randomData.sprites.front_default
        randomName.innerText = randomData.name
        document.getElementById("finalImg1").src = randomData.sprites.front_default
        document.querySelector('.notFull1').src = randomData.sprites.front_default
        document.getElementById('errImg1').src = randomData.sprites.front_default
        
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
            randomName.innerText = randomData2.name
            document.getElementById("finalImg1").src = randomData2.sprites.front_default
            document.querySelector('.notFull1').src = randomData2.sprites.front_default
            document.getElementById('errImg1').src = randomData2.sprites.front_default

}
}
catch{
    errModal.style.display = "block"
    randomImg.src = "images/missing.gif"
    document.getElementById("finalImg1").src = "images/missing.gif"
    document.querySelector('.notFull1').src = "images/missing.gif"
    document.getElementById('errImg1').src = "images/missing.gif"
    document.getElementById("randomName1").innerText = "ERROR"
    
}
}

async function giveRandom2(){
    var randomImg = document.getElementById("randomImg2")
    randomImg.src = "images/loading_ball.gif"
    var randomName = document.getElementById("randomName2")
        randomName.innerText = "Searching..."
    var type = document.getElementById("typing2"); 
    var typeValue = type.value; 
    var type2 = document.getElementById("typing22")
    var typeValue2 = type2.value
    var response = await fetch("https://pokeapi.co/api/v2/type/" + typeValue);
    var pokeData = await response.json();
    var randomMon = []
    // pokeData is the object we access all the pokemon of that type EX. "normal"
    if (typeValue2 <= 0){
        for(var i=0; i<pokeData.pokemon.length; i++){
            typeCheck = await fetch (pokeData.pokemon[i].pokemon.url)
            checkData = await typeCheck.json();
            if (checkData.types.length == 1){
                randomMon.push(pokeData.pokemon[i].pokemon.url)
            }
        }
        var random = randomMon[(Math.floor(Math.random() * randomMon.length))]
        var randomresponse = await fetch(random)
        var randomData = await randomresponse.json();
        randomImg.src = randomData.sprites.front_default
        randomName.innerText = randomData.name
        document.getElementById("finalImg2").src = randomData.sprites.front_default
        document.querySelector('.notFull2').src = randomData.sprites.front_default
        document.getElementById('errImg2').src = randomData.sprites.front_default
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
            randomName.innerText = randomData2.name
            document.getElementById("finalImg2").src = randomData2.sprites.front_default
            document.querySelector('.notFull2').src = randomData2.sprites.front_default
            document.getElementById('errImg2').src = randomData2.sprites.front_default

}
}
catch{
    errModal.style.display = "block"
    randomImg.src = "images/missing.gif"
    document.getElementById("finalImg2").src = "images/missing.gif"
    document.querySelector('.notFull2').src = "images/missing.gif"
    document.getElementById('errImg2').src = "images/missing.gif"
    document.getElementById("randomName2").innerText = "ERROR"
}
}
async function giveRandom3(){
    var randomImg = document.getElementById("randomImg3")
    randomImg.src = "images/loading_ball.gif"
    var randomName = document.getElementById("randomName3")
        randomName.innerText = "Searching..."
    var type = document.getElementById("typing3"); 
    var typeValue = type.value; 
    var type2 = document.getElementById("typing32")
    var typeValue2 = type2.value
    var response = await fetch("https://pokeapi.co/api/v2/type/" + typeValue);
    var pokeData = await response.json();
    var randomMon = []
    // pokeData is the object we access all the pokemon of that type EX. "normal"
    if (typeValue2 <= 0){
        for(var i=0; i<pokeData.pokemon.length; i++){
            typeCheck = await fetch (pokeData.pokemon[i].pokemon.url)
            checkData = await typeCheck.json();
            if (checkData.types.length == 1){
                randomMon.push(pokeData.pokemon[i].pokemon.url)
            }
        }
        var random = randomMon[(Math.floor(Math.random() * randomMon.length))]
        var randomresponse = await fetch(random)
        var randomData = await randomresponse.json();
        randomImg.src = randomData.sprites.front_default
        randomName.innerText = randomData.name
        document.getElementById("finalImg3").src = randomData.sprites.front_default
        document.querySelector('.notFull3').src = randomData.sprites.front_default
        document.getElementById('errImg3').src = randomData.sprites.front_default
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
            randomName.innerText = randomData2.name
            document.getElementById("finalImg3").src = randomData2.sprites.front_default
            document.querySelector('.notFull3').src = randomData2.sprites.front_default
            document.getElementById('errImg3').src = randomData2.sprites.front_default

}
}
catch{
    errModal.style.display = "block"
    randomImg.src = "images/missing.gif"
    document.getElementById("finalImg3").src = "images/missing.gif"
    document.querySelector('.notFull3').src = "images/missing.gif"
    document.getElementById('errImg3').src = "images/missing.gif"
    document.getElementById("randomName3").innerText = "ERROR"
}
}
async function giveRandom4(){
    var randomImg = document.getElementById("randomImg4")
    randomImg.src = "images/loading_ball.gif"
    var randomName = document.getElementById("randomName4")
        randomName.innerText = "Searching..."
    var type = document.getElementById("typing4"); 
    var typeValue = type.value; 
    var type2 = document.getElementById("typing42")
    var typeValue2 = type2.value
    var response = await fetch("https://pokeapi.co/api/v2/type/" + typeValue);
    var pokeData = await response.json();
    var randomMon = []
    // pokeData is the object we access all the pokemon of that type EX. "normal"
    if (typeValue2 <= 0){
        for(var i=0; i<pokeData.pokemon.length; i++){
            typeCheck = await fetch (pokeData.pokemon[i].pokemon.url)
            checkData = await typeCheck.json();
            if (checkData.types.length == 1){
                randomMon.push(pokeData.pokemon[i].pokemon.url)
            }
        }
        var random = randomMon[(Math.floor(Math.random() * randomMon.length))]
        var randomresponse = await fetch(random)
        var randomData = await randomresponse.json();
        randomImg.src = randomData.sprites.front_default
        randomName.innerText = randomData.name
        document.getElementById("finalImg4").src = randomData.sprites.front_default
        document.querySelector('.notFull4').src = randomData.sprites.front_default
        document.getElementById('errImg4').src = randomData.sprites.front_default
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
            randomName.innerText = randomData2.name
            document.getElementById("finalImg4").src = randomData2.sprites.front_default
            document.querySelector('.notFull4').src = randomData2.sprites.front_default
            document.getElementById('errImg4').src = randomData2.sprites.front_default

}
}
catch{
    errModal.style.display = "block"
    randomImg.src = "images/missing.gif"
    document.getElementById("finalImg4").src = "images/missing.gif"
    document.querySelector('.notFull4').src = "images/missing.gif"
    document.getElementById('errImg4').src = "images/missing.gif"
    document.getElementById("randomName4").innerText = "ERROR"
}
}
async function giveRandom5(){
    var randomImg = document.getElementById("randomImg5")
    randomImg.src = "images/loading_ball.gif"
    var randomName = document.getElementById("randomName5")
        randomName.innerText = "Searching..."
    var type = document.getElementById("typing5"); 
    var typeValue = type.value; 
    var type2 = document.getElementById("typing52")
    var typeValue2 = type2.value
    var response = await fetch("https://pokeapi.co/api/v2/type/" + typeValue);
    var pokeData = await response.json();
    var randomMon = []
    // pokeData is the object we access all the pokemon of that type EX. "normal"
    if (typeValue2 <= 0){
        for(var i=0; i<pokeData.pokemon.length; i++){
            typeCheck = await fetch (pokeData.pokemon[i].pokemon.url)
            checkData = await typeCheck.json();
            if (checkData.types.length == 1){
                randomMon.push(pokeData.pokemon[i].pokemon.url)
            }
        }
        var random = randomMon[(Math.floor(Math.random() * randomMon.length))]
        var randomresponse = await fetch(random)
        var randomData = await randomresponse.json();
        randomImg.src = randomData.sprites.front_default
        randomName.innerText = randomData.name
        document.getElementById("finalImg5").src = randomData.sprites.front_default
        document.querySelector('.notFull5').src = randomData.sprites.front_default
        document.getElementById('errImg5').src = randomData.sprites.front_default
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
            randomName.innerText = randomData2.name
            document.getElementById("finalImg5").src = randomData2.sprites.front_default
            document.querySelector('.notFull5').src = randomData2.sprites.front_default
            document.getElementById('errImg5').src = randomData2.sprites.front_default

}
}
catch{
    errModal.style.display = "block"
    randomImg.src = "images/missing.gif"
    document.getElementById("finalImg5").src = "images/missing.gif"
    document.querySelector('.notFull5').src = "images/missing.gif"
    document.getElementById('errImg5').src = "images/missing.gif"
    document.getElementById("randomName5").innerText = "ERROR"
}
}
async function giveRandom6(){
    var randomImg = document.getElementById("randomImg6")
    randomImg.src = "images/loading_ball.gif"
    var randomName = document.getElementById("randomName6")
        randomName.innerText = "Searching..."
    var type = document.getElementById("typing6"); 
    var typeValue = type.value; 
    var type2 = document.getElementById("typing62")
    var typeValue2 = type2.value
    var response = await fetch("https://pokeapi.co/api/v2/type/" + typeValue);
    var pokeData = await response.json();
    var randomMon = []
    // pokeData is the object we access all the pokemon of that type EX. "normal"
    if (typeValue2 <= 0){
        for(var i=0; i<pokeData.pokemon.length; i++){
            typeCheck = await fetch (pokeData.pokemon[i].pokemon.url)
            checkData = await typeCheck.json();
            if (checkData.types.length == 1){
                randomMon.push(pokeData.pokemon[i].pokemon.url)
            }
        }
        var random = randomMon[(Math.floor(Math.random() * randomMon.length))]
        var randomresponse = await fetch(random)
        var randomData = await randomresponse.json();
        randomImg.src = randomData.sprites.front_default
        randomName.innerText = randomData.name
        document.getElementById("finalImg6").src = randomData.sprites.front_default
        document.querySelector('.notFull6').src = randomData.sprites.front_default
        document.getElementById('errImg6').src = randomData.sprites.front_default
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
            randomName.innerText = randomData2.name
            document.getElementById("finalImg6").src = randomData2.sprites.front_default
            document.querySelector('.notFull6').src = randomData2.sprites.front_default
            document.getElementById('errImg6').src = randomData2.sprites.front_default

}
}
catch{
    errModal.style.display = "block"
    randomImg.src = "images/missing.gif"
    document.getElementById("finalImg6").src = "images/missing.gif"
    document.querySelector('.notFull6').src = "images/missing.gif"
    document.getElementById('errImg6').src = "images/missing.gif"
    document.getElementById("randomName6").innerText = "ERROR"
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
        document.getElementById("tradstart").innerText = " "
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
        document.getElementById("tradstart").innerText = "Original Starter"
        document.getElementById('type1').innerText = "1st Type"
        document.getElementById('type2').innerText = "2nd Type"
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
            document.querySelector('.notFull1').src = randomStarter.sprites.front_default
            document.getElementById('errImg1').src = randomStarter.sprites.front_default
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
            document.querySelector('.notFull1').src = randomStarter.sprites.front_default
            document.getElementById('errImg1').src = randomStarter.sprites.front_default
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
        randomImg.src = randomStarter.sprites.front_default
    var randomName = document.getElementById("randomName1")
        randomName.innerText = randomStarter.name
        document.getElementById("finalImg1").src = randomStarter.sprites.front_default
        document.querySelector('.notFull1').src = randomStarter.sprites.front_default
        document.getElementById('errImg1').src = randomStarter.sprites.front_default
    }
    if(typeValue == 4){
        var starters = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        var pikaStart = await starters.json();
            randomImg.src = pikaStart.sprites.front_default
        var randomName = document.getElementById("randomName1")
            randomName.innerText = pikaStart.name
            document.getElementById("finalImg1").src = pikaStart.sprites.front_default
            document.querySelector('.notFull1').src = pikaStart.sprites.front_default
            document.getElementById('errImg1').src = pikaStart.sprites.front_default
    }
    if(typeValue == 5){
        var starters = await fetch("https://pokeapi.co/api/v2/pokemon/eevee")
        var evStart = await starters.json();
            randomImg.src = evStart.sprites.front_default
        var randomName = document.getElementById("randomName1")
            randomName.innerText = evStart.name
            document.getElementById("finalImg1").src = evStart.sprites.front_default
            document.querySelector('.notFull1').src = evStart.sprites.front_default
            document.getElementById('errImg1').src = evStart.sprites.front_default
}
}
// Get the modal
var modal = document.getElementById("myModal");
var errModal = document.getElementById("errModal")
var notFull = document.getElementById("notfullmodal")
var none = document.getElementById("nonemodal")
var finalerr = document.getElementById("finalerr")
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var errspan = document.getElementsByClassName("errclose")[0];
var notspan = document.getElementsByClassName("notclose")[0];
var nonespan = document.getElementsByClassName("noneclose")[0];
var finalspan = document.getElementsByClassName("finalclose")[0];
// When the user clicks on the button, open the modal
function getFinal() {
    var pokeImage = document.querySelector('.notFinal1 > img').src;
    var pokeImage2 = document.querySelector('.notFinal2 > img').src;
    var pokeImage3 = [document.querySelector('.notFull1').src, document.querySelector('.notFull2').src, document.querySelector('.notFull3').src, document.querySelector('.notFull4').src, document.querySelector('.notFull5').src, document.querySelector('.notFull6').src ]

    function checkImgs(){
        var total = 0

    for (var i = 0; i < pokeImage3.length; i++){
        if(pokeImage3[i] == 'images/tallgrass.png'){
            total += 1            
        }
    }
    return total
}
    function checkErr(){
        var error = 0
        for (var i = 0; i < pokeImage3.length; i++){
            if(pokeImage3[i] == "images/missing.gif"){
                error += 1
            }    
        }
        return error
}

    var result = checkImgs()
    var erresult = checkErr()
    console.log(result,erresult)
    console.log(erresult)
    if(erresult > 0){
        console.log(erresult)
        finalerr.style.display = "block"
    }
    if(result < 6 && result > 0 && erresult == 0){
        console.log(erresult)
        notFull.style.display = "block"
    }
    if(result == 6){
        none.style.display = "block"
    }
    if(result == 0 && erresult == 0){
        modal.style.display = "block";
    }
}
// When the user clicks on <span> (x), close it
span.onclick = function() {
modal.style.display = "none"
}
errspan.onclick = function() {
errModal.style.display = "none"
}

notspan.onclick = function() {
    notFull.style.display = "none"
    }
nonespan.onclick = function() {
    none.style.display = "none"
}

finalspan.onclick = function(){
    finalerr.style.display = "none"
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

window.onclick = function(event) {
    if (event.target == notFull) {
        notFull.style.display = "none"
    }
    } 

window.onclick = function(event) {
    if (event.target == none) {
        none.style.display = "none"
    }
} 

window.onclick = function (event) {
    if (event.target == finalerr){
        finalerr.style.display = "none"
    }
}



var body = document.querySelector('body')
var team = document.getElementById('team')
var umbreon = document.getElementById('umbreon')
var espeon = document.getElementById('espeon')
var darkZard = document.getElementById('darkzard')
var lightZard = document.getElementById('lightzard')
var paraOne = document.getElementById('paraOne')
var paraTwo = document.getElementById('paraTwo')

function changeLight(){
        body.style.background = 'black'
        body.style.transition = '2s'
        team.style.background = 'gray'
        umbreon.style.display = 'block'
        espeon.style.display = 'none'
        darkZard.style.display = 'block'
        lightZard.style.display = 'none'
        paraOne.style.backgroundImage = "url(images/nightleft.png)"
        paraOne.style.transition = '2s'
        paraTwo.style.backgroundImage = "url(images/nightright.png)"
        paraTwo.style.transition = "2s"
}


function changeDark(){
        body.style.background = 'white'
        body.style.transition = '2s'
        team.style.background = 'none'
        umbreon.style.display = 'none'
        espeon.style.display = 'block'
        darkZard.style.display = 'none'
        lightZard.style.display = 'block'
        paraOne.style.backgroundImage = "url(images/left.jpeg)"
        paraOne.style.transition = '2s'
        paraTwo.style.backgroundImage = "url(images/right.jpeg)"
        paraTwo.style.transition = "2s"
}