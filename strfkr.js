const colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e']

const scale = 15

function setup() {
    createCanvas(windowWidth, windowHeight)
    noFill()
    strokeWeight(2)
    frameRate(15)
}

function draw() {
        numTriangles = windowHeight/scale	
	for(var i=0; i<numTriangles; i++) {
		fill(randomColor())
         	triangle(
			0, windowHeight/2,
			windowWidth/2, i*scale,
			windowWidth/2, i*scale + scale
		)
	}
	for(var i=0; i<numTriangles; i++) {
		fill(randomColor())
         	triangle(
			windowWidth/2, i*scale,
			windowWidth/2, i*scale + scale,
			windowWidth, windowHeight/2
		)
	}
}

function randomColor() {
    return _.sample(colors)
}
