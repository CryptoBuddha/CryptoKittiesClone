
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

function headColor(color,code) {
    $('#head, #body').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function mouthColor(color,code) {
    $('#mouth').css('background', '#' + color)  //This changes the color of the cat
    $('#mouthcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnamouth').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function eyeColor(color,code) {
    $('.inner_eyes').css('background', '#' + color)  //This changes the color of the cat
    $('#eyecode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function earColor(color,code) {
    $('.ear, .ear1, .ear2').css('background', '#' + color)  //This changes the color of the cat
    $('#earcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaears').html(code) //This updates the body color part of the DNA that is displayed below the cat
}


//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyePositionName').html('Basic')
            break
        case 2:
            normalEyes()
            $('#eyePositionName').html('Left Downwards')
			eyesType1()
            break
        case 3:
            normalEyes()
            $('#eyePositionName').html('Right Upwards')
			eyesType2()
            break
    }
}

function earVariation(num) {

    $('#dnaearshape').html(num)
    switch (num) {
        case 1:
            normalEars()
            $('#earShapeName').html('Long')
            break
        case 2:
			earsType1()
            $('#earShapeName').html('Small and Round')
			break
        case 3:
            //normalEars()
            $('#earShapeName').html('Small and Pointy')
			earsType2()
            break
    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
}

//functions that modify the eyes

async function normalEyes() {
    await $('.inner_eyes').css('border', 'none')
}

function eyesType1() {
	$(".inner_eyes").css({"border-top": "5px solid", "border-color": "transparent"})
}

function eyesType2() {
	$(".inner_eyes").css({"border-left": "5px solid", "border-color": "transparent"})
}

//functions that modify the ears

function normalEars() {
	removeEar1()
	removeEar2()
	addNormalEars()
}

function earsType1() {
	removeNormalEar()
	removeEar2()
	addEar1()	
}

function earsType2() {
	removeNormalEar()
	removeEar1()
	addEar2()
}

function addNormalEars() {
    $(".earSelector").addClass("ear");
	$(".leftEarSelector").addClass("left_ear");
	$(".rightEarSelector").addClass("right_ear");
	$(".innerEarSelector").addClass("inner_ear");
}

function removeEar1() {
	$(".earSelector").removeClass("ear1")
	$(".leftEarSelector").removeClass("leftear1")
	$(".rightEarSelector").removeClass("rightear1")
	$(".innerEarSelector").removeClass("innerear1")	
}

function removeEar2() {
	$(".earSelector").removeClass("ear2")
	$(".leftEarSelector").removeClass("leftear2")
	$(".rightEarSelector").removeClass("rightear2")
	$(".innerEarSelector").removeClass("innerear2")	
}

function addEar1() {
	$(".earSelector").addClass("ear1")
	$(".leftEarSelector").addClass("leftear1")
	$(".rightEarSelector").addClass("rightear1")
	$(".innerEarSelector").addClass("innerear1")	
}

function removeNormalEar() {
	$(".earSelector").removeClass("ear")
	$(".earSelector").removeClass("inner_ear")
	$(".earSelector").removeClass("left_ear")
	$(".earSelector").removeClass("right_ear")
}

function addEar2() {
	$(".earSelector").addClass("ear2")
	$(".innerEarSelector").addClass("innerear2")
	$(".leftEarSelector").addClass("leftear2")
	$(".rightEarSelector").addClass("rightear2")
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
	