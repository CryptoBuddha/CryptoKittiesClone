
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 10,
    "mouthColor" : 13,
    "eyeColor" : 33,
    "earColor" : 10,
    //Cattributes
    "eyePosition" : 1,
    "earShape" : 1,
    "legShape" : 1,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyeColor);
  $('#dnaears').html(defaultDNA.earsColor);
    
   $('#dnashape').html(defaultDNA.eyePosition)
   $('#dnaearshape').html(defaultDNA.earShape)
   $('#dnalegshape').html(defaultDNA.legShape)
   $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
   $('#dnaanimation').html(defaultDNA.animation)
   $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnaearshape').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor);
    $('#bodycolor').val(dna.headcolor);
	
	mouthColor(colors[dna.mouthColor],dna.mouthColor);
	$("#mouthcolor").val(dna.mouthColor);

	eyeColor(colors[dna.eyeColor],dna.eyeColor);
	$("#eyecolor").val(dna.eyeColor);
	
	earColor(colors[dna.earColor],dna.earColor);
	$("#earcolor").val(dna.earColor);
	
	eyeVariation(dna.eyePosition);
	$("#eyePosition").val(dna.eyePosition);
	
	earVariation(dna.earShape);
	$("#earShape").val(dna.earShape);
	
	legVariation(dna.legShape);
	$("#legShape").val(dna.legShape);
	
	animationVariation(dna.animation);
	$("#animation").val(dna.animation);
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})

//Change mouth color
$('#mouthcolor').change(()=>{
    var colorVal = $('#mouthcolor').val()
    mouthColor(colors[colorVal],colorVal)
})

//Change eye color
$('#eyecolor').change(()=>{
    var colorVal = $('#eyecolor').val()
    eyeColor(colors[colorVal],colorVal)
})

//Change ear color
$('#earcolor').change(()=>{
    var colorVal = $('#earcolor').val()
    earColor(colors[colorVal],colorVal)
})

//Change eye position
$("#eyePosition").change(()=> {
	var position = parseInt($("#eyePosition").val())
	eyeVariation(position)
})

//Change ear shape
$("#earShape").change(()=>{
	var shape = parseInt($("#earShape").val())
	earVariation(shape)
})

//Change leg shape
$("#legShape").change(()=>{
	var shape = parseInt($("#legShape").val())
	legVariation(shape)
})

//Change animation
$("#animation").change(()=>{
	var animationVal = parseInt($("#animation").val())
	animationVariation(animationVal);
})


// Generate a random kitty on clicking the "Get Random" button
$("#getRandom").click(()=>{
	randomHeadColor = Math.floor(Math.random() * 89) + 10;
	randomMouthColor = Math.floor(Math.random() * 89) + 10;
	randomEyeColor = Math.floor(Math.random() * 89) + 10;
	randomEarColor = Math.floor(Math.random() * 89) + 10;
	randomEyePosition = Math.floor(Math.random() * 4) + 1;
	randomEarShape = Math.floor(Math.random() * 4) + 1;
	randomLegShape = Math.floor(Math.random() * 4) + 1;
	randomAnimations = Math.floor(Math.random() * 5) + 1;
	
	var randomDNA = {
    "headcolor" : 10,
    "mouthColor" : 13,
    "eyeColor" : 33,
    "earColor" : 10,
    //Cattributes
    "eyePosition" : 1,
    "earShape" : 1,
    "legShape" : 1,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }
	
	randomDNA.headcolor = randomHeadColor;
	randomDNA.mouthColor = randomMouthColor;
	randomDNA.eyeColor = randomEyeColor;
	randomDNA.earColor = randomEarColor;
	randomDNA.eyePosition = randomEyePosition;
	randomDNA.earShape = randomEarShape;
	randomDNA.legShape = randomLegShape;
	randomDNA.animation = randomAnimations;
	
	renderCat(randomDNA);
})

$("#getDefault").click(()=>{
	  renderCat(defaultDNA);
})
