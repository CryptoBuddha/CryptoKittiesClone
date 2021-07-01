
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
    $('.ear').css('background', '#' + color)  //This changes the color of the cat
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
            //normalEars()
            $('#eyePositionName').html('Basic')
            break
        case 2:
            $(".ear").removeClass("ear left_ear right_ear")
			$(".inner_ear").removeClass("inner_ear")
			$(".ear")addClass("ear1")
            $('#eyePositionName').html('Left Downwards')
			//earsType1()
            break
        case 3:
            //normalEars()
            $('#eyePositionName').html('Right Upwards')
			//earsType2()
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

async function normalEars() {
    await $('.inner_eyes').css('border', 'none')
}

function earsType1() {
	$(".inner_eyes").css({"border-top": "5px solid", "border-color": "transparent"})
}

function earsType2() {
	$(".inner_eyes").css({"border-left": "5px solid", "border-color": "transparent"})
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
	