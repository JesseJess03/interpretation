function setup() {

	createCanvas(1400, 2000) //Black Bachground 
	fill(0, 0, 0)
	rect(0, 0, 1400, 720)

	fill(255, 255, 255) //White box on the left
	rect(50, 50, 350, 600)

	fill(255, 255, 255)
	rect(1010, 50, 350, 600) //White box on the right 

	fill(145, 98, 58)
	rect(175, 218, 80, 80) //Head of left Steve  

	fill(0, 0, 0)
	rect(110, 304, 210, 30) //Shoulders of Left Steve 

	fill(0, 0, 0)
	rect(171, 334, 90, 100) //Chest of left Steve 

	fill(0, 0, 0)
	rect(110, 334, 55, 31) //Left sleve of left Steve 

	fill(0, 0, 0)
	rect(266, 332, 54, 20) //Right sleve of left Steve 

	fill(145, 98, 58)
	rect(118, 365, 40, 20) //Left hand of Left Steve 

	fill(145, 98, 58)
	rect(319, 310, 20, 35) //Right hand of left Steve 

	fill(0, 0, 0)
	rect(175, 434, 40, 85) //Left leg of left Steve 

	fill(0, 0, 0)
	rect(218, 434, 40, 85) //Right leg on left Steve 

	//Clothing details for left Steve 

	fill(255, 255, 255)
	rect(185, 304, 60, 85) //White undershirt for left Steve 

	fill(0, 0, 0,)
	rect(188, 305, 10, 10) //Left part of the tie for left steve  

	fill(145, 98, 58)
	rect(197, 304, 35, 11) //Chest showing for left steve 

	fill(0, 0, 0)
	rect(232, 305, 10, 10) //Right part of tie for left Steve 

	fill(0, 0, 0)
	rect(203, 315, 22, 60) //Tie for left Steve 

	fill(146, 146, 146)
	rect(206, 389, 16, 10) //Belt for left Steve 

	fill(255, 255, 255)
	rect(117, 365, 41, 5) //Left sleve for left Steve 

	fill(255, 255, 255)
	rect(319, 310, 5, 35) //Right sleve for left Steve 

	fill(146, 146, 146)
	rect(175, 504, 40, 15) //Left shoe for left Steve 

	fill(146, 146, 146)
	rect(218, 505, 40, 15) //Right shoe for left Steve 

	//Face of left Steve 

	fill(84, 44, 0) 
	noStroke()
	rect(184, 218, 62, 12) //Middle part of hair of left Steve 

	fill(84, 44, 0)
	noStroke()
	rect(174, 218, 10, 17) //Left part of hair on left Steve 

	fill(84, 44, 0)
	noStroke()
	rect(245, 218, 10, 17) //Right part of the hair on Steve

	fill(255, 255, 255)
	rect(182, 249, 10, 10) //Left white part of eye of left Steve 

	fill(65, 8, 102)
	rect(192, 249, 10, 10) //Left purple part of eye of left Steve 

	fill(255, 255, 255)
	rect(235, 249, 10, 10) //Right white part of eye of left Steve 

	fill(65, 8, 102)
	rect(226, 249, 10, 10) 



}
function mouseClicked() {
	print(int(mouseX), int(mouseY))
}