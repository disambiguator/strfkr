const scale = 15

function setup() {
    createCanvas(windowWidth, windowHeight)
    noFill()
    strokeWeight(2)
    frameRate(15)
}

function draw() {
    const numTriangles = windowHeight/scale

    for(var i=0; i<numTriangles; i++) {
        fill(randomColor())
         	triangle(
			0, windowHeight/2,
			windowWidth/2, i*scale,
			windowWidth/2, i*scale + scale
		)

        fill(randomColor())
         	triangle(
			windowWidth/2, i*scale,
			windowWidth/2, i*scale + scale,
			windowWidth, windowHeight/2
		)
    }
}

function randomColor() {
    r = random(255)
    g = random(255)
    b = random(255)

    return color(r,g,b)
}
