//Variables
var laugh, laughI, sadI, sad, titleI, title, annoyI, annoy, motiI, moti;
var stressI, stress, angryI, angry, backI, back, L, S, A, ST, M ;
var l1, l2, l3, l4, l5, s1, s2, s3, s4, s5, n1, n2, n3, n4, st1, st2, st3 ;
var m1,m2,m3,m4,m5, a1, a2, a3, a4, a5;

function preload(){
//Display button images
	laughI  = loadImage("images/Laugh/laugh.png");
	sadI    = loadImage("images/Sad/sad.png");
	titleI  = loadImage("images/Others/title.png");
	stressI = loadImage("images/Stress/stress.png");
	angryI  = loadImage("images/Angry/angry.png");
	backI   = loadImage("images/Others/back.png");
	motiI   = loadImage("images/Motivation/moti.png");

//Laugh button images
	l1 = loadImage("images/Laugh/l1.png");
	l2 = loadImage("images/Laugh/l2.png");
	l3 = loadImage("images/Laugh/l3.png");
	l4 = loadImage("images/Laugh/l4.png");
	l5 = loadImage("images/Laugh/l5.png");

//Sad button images
	s1 = loadImage("images/Sad/s1.png");
	s2 = loadImage("images/Sad/s2.png");
	s3 = loadImage("images/Sad/s3.png");
	s4 = loadImage("images/Sad/s4.png");
	s5 = loadImage("images/Sad/s5.png");

//Angry button images
	ag1 = loadImage("images/Angry/ag1.png");
	ag2 = loadImage("images/Angry/ag2.png");
	ag3 = loadImage("images/Angry/ag3.png");
	ag4 = loadImage("images/Angry/ag4.png");
	ag5 = loadImage("images/Angry/ag5.png");

//Stress button images
	st1 = loadImage("images/Stress/st1.png");
	st2 = loadImage("images/Stress/st2.png");
	st3 = loadImage("images/Stress/st3.png");

//Motivation button images
	m1 = loadImage("images/Motivation/m1.png");
	m2 = loadImage("images/Motivation/m2.png");
	m3 = loadImage("images/Motivation/m3.png");
	m4 = loadImage("images/Motivation/m4.png");
	m5 = loadImage("images/Motivation/m5.png");

//No click images
	n1 = loadImage("images/Others/nc1.png");
	n2 = loadImage("images/Others/nc2.png");
	n3 = loadImage("images/Others/nc3.png");
	n4 = loadImage("images/Others/nc4.png");

}

function setup() {
	createCanvas(windowWidth, 3000);

	title = createSprite(windowWidth/2, 80)
	title.addImage(titleI)
	title.scale = 0.7;

	laugh = createSprite(windowWidth/2, 270);
	laugh.addImage(laughI);
	laugh.scale = 0.2;

	nc1 = createSprite(windowWidth/2, 550);
	nc1.addImage(n4);
	nc1.scale = 0.2;

	sad = createSprite(windowWidth/2, 830);
	sad.addImage(sadI);
	sad.scale = 0.2;

	nc2 = createSprite(windowWidth/2, 1110);
	nc2.addImage(n1);
	nc2.scale = 0.2;

	moti = createSprite(windowWidth/2, 1390);
	moti.addImage(motiI);
	moti.scale = 0.2;

	nc3 = createSprite(windowWidth/2, 1670);
	nc3.addImage(n2);
	nc3.scale = 0.2;

	stress = createSprite(windowWidth/2, 1950);
	stress.addImage(stressI);
	stress.scale = 0.2;

	nc4 = createSprite(windowWidth/2, 2230);
	nc4.addImage(n3);
	nc4.scale = 0.2;

	angry = createSprite(windowWidth/2, 2510);
	angry.addImage(angryI);
	angry.scale = 0.2;

	nc5 = createSprite(windowWidth/2, 2790);
	nc5.addImage(n4);
	nc5.scale = 0.2;

	back = createSprite(windowWidth/2, 470);
	back.addImage(backI);
	back.scale = 0.2;
	back.visible = false;

//Laugh sprite(random)
	L = createSprite(windowWidth/2,300);
	L.scale = 0.2;
	L.visible = false;

//Sad sprite(random)
	S = createSprite(windowWidth/2,300);
	S.scale = 0.2;
	S.visible = false;

//Angry sprite(random)
	A = createSprite(windowWidth/2,300);
	A.scale = 0.2;
	A.visible = false;

//Stress sprite(random)
	ST = createSprite(windowWidth/2,300);
	ST.scale = 0.2;
	ST.visible = false;

//Motivation sprite(random)
	M = createSprite(windowWidth/2,300);
	M.scale = 0.2;
	M.visible = false;


}

function draw(){
	background(0)

	
//Calling functions
Laugh();
Sad();
Motivation();
Stress();
Angry();

//Back button
		if(mousePressedOver(back)){
			 laugh.visible  = true;
			 stress.visible = true;
			 sad.visible    = true;
			 angry.visible  = true; 
			 moti.visible   = true;
			 L.visible      = false;
			 S.visible      = false;
			 A.visible      = false;
			 ST.visible     = false;
			 M.visible      = false;
			 nc1.visible    = true;
			 nc2.visible    = true;
			 nc3.visible    = true;
			 nc4.visible    = true;
			 nc5.visible    = true;
			 back.visible   = false;
	   }

	   touches.forEach(touch => {
		if ( touch.x > back.x - back.width / 2
			&& touch.x < back.x + back.width / 2
			&& touch.y > back.y - back.height / 2
			&& touch.y < back.y + back.height / 2 ){
			laugh.visible  = true;
			stress.visible = true;
			sad.visible    = true;
			angry.visible  = true; 
			moti.visible   = true;
			L.visible      = false;
			S.visible      = false;
			A.visible      = false;
			ST.visible     = false;
			M.visible      = false;
			nc1.visible    = true;
			nc2.visible    = true;
			nc3.visible    = true;
			nc4.visible    = true;
			nc5.visible    = true;
			back.visible   = false;
		}
		  
	})

drawSprites();

}

function Laugh(){

//On mobile
	touches.forEach(touch => {
		if ( touch.x > laugh.x - laugh.width / 2
			&& touch.x < laugh.x + laugh.width / 2
			&& touch.y > laugh.y - laugh.height / 2
			&& touch.y < laugh.y + laugh.height / 2){
		 L.visible = true;
		  var rand = Math.round(random(1,5));
		  switch(rand) {
			case 1: L.addImage(l1);
					break;
			case 2: L.addImage(l2);
					break;
			case 3: L.addImage(l3);
					break;
			case 4: L.addImage(l4);
					break;
			case 5: L.addImage(l5);
					break;
			default: break;
		}

  laugh.visible  = false;
  stress.visible = false;
  sad.visible    = false;
  angry.visible  = false; 
  nc1.visible    = false;
  nc2.visible    = false;
  nc3.visible    = false;
  nc4.visible    = false;
  nc5.visible    = false;
  back.visible   = true;
  moti.visible   = false;
	  }
  })

//On laptop
  if(mousePressedOver(laugh)){
	L.visible = true;
	var rand = Math.round(random(1,5));
	switch(rand) {
	  case 1: L.addImage(l1);
			  break;
	  case 2: L.addImage(l2);
			  break;
	  case 3: L.addImage(l3);
			  break;
	  case 4: L.addImage(l4);
			  break;
	  case 5: L.addImage(l5);
			  break;
	  default: break;
  }

  laugh.visible  = false;
  stress.visible = false;
  sad.visible    = false;
  angry.visible  = false;
  nc1.visible    = false;
  nc2.visible    = false;
  nc3.visible    = false;
  nc4.visible    = false;
  nc5.visible    = false; 
  back.visible   = true;
  moti.visible   = false;
  }
}


function Sad(){

	//On mobile
		touches.forEach(touch => {
			if (touch.x > sad.x - sad.width / 2
				&& touch.x < sad.x + sad.width / 2
				&& touch.y > sad.y - sad.height / 2
				&& touch.y < sad.y + sad.height / 2 ){
			 S.visible = true;
			  var rand = Math.round(random(1,5));
			  switch(rand) {
				case 1: S.addImage(s1);
						break;
				case 2: S.addImage(s2);
						break;
				case 3: S.addImage(s3);
						break;
				case 4: S.addImage(s4);
						break;
				case 5: S.addImage(s5);
						break;
				default: break;
			}
	
	  laugh.visible  = false;
	  stress.visible = false;
	  sad.visible    = false;
	  angry.visible  = false; 
	  nc1.visible    = false;
	  nc2.visible    = false;
	  nc3.visible    = false;
	  nc4.visible    = false;
	  nc5.visible    = false;
	  back.visible   = true;
	  moti.visible   = false;
		  }
	  })
	
	//On laptop
	  if(mousePressedOver(sad)){
		S.visible = true;
		var rand = Math.round(random(1,5));
		switch(rand) {
		  case 1: S.addImage(s1);
				  break;
		  case 2: S.addImage(s2);
				  break;
		  case 3: S.addImage(s3);
				  break;
		  case 4: S.addImage(s4);
				  break;
		  case 5: S.addImage(s5);
				  break;
		  default: break;
	  }
	
	  laugh.visible  = false;
	  stress.visible = false;
	  sad.visible    = false;
	  angry.visible  = false;
	  nc1.visible    = false;
	  nc2.visible    = false;
	  nc3.visible    = false;
	  nc4.visible    = false;
	  nc5.visible    = false; 
	  back.visible   = true;
	  moti.visible   = false;
	  }
	}

function Motivation(){

		//On mobile
			touches.forEach(touch => {
				if (touch.x > moti.x - moti.width / 2
					&& touch.x < moti.x + moti.width / 2
					&& touch.y > moti.y - moti.height / 2
					&& touch.y < moti.y + moti.height / 2 ){
				   M.visible = true;
				  var rand = Math.round(random(1,5));
				  switch(rand) {
					case 1: M.addImage(m1);
							break;
					case 2: M.addImage(m2);
							break;
					case 3: M.addImage(m3);
							break;
					case 4: M.addImage(m4);
							break;
					case 5: M.addImage(m5);
							break;
					default: break;
				}
		
		  laugh.visible  = false;
		  stress.visible = false;
		  sad.visible    = false;
		  angry.visible  = false; 
		  nc1.visible    = false;
		  nc2.visible    = false;
		  nc3.visible    = false;
		  nc4.visible    = false;
		  nc5.visible    = false;
		  back.visible   = true;
		  moti.visible   = false;
			  }
		  })
		
		//On laptop
		  if(mousePressedOver(moti)){
			M.visible = true;
			var rand = Math.round(random(1,5));
			switch(rand) {
			  case 1: M.addImage(m1);
					  break;
			  case 2: M.addImage(m2);
					  break;
			  case 3: M.addImage(m3);
					  break;
			  case 4: M.addImage(m4);
					  break;
			  case 5: M.addImage(m5);
					  break;
			  default: break;
		  }
		
		  laugh.visible  = false;
		  stress.visible = false;
		  sad.visible    = false;
		  angry.visible  = false;
		  nc1.visible    = false;
		  nc2.visible    = false;
		  nc3.visible    = false;
		  nc4.visible    = false;
		  nc5.visible    = false; 
		  back.visible   = true;
		  moti.visible   = false;
		  }
		}

function Stress(){
			//On mobile
				touches.forEach(touch => {
					if ( touch.x > stress.x - stress.width / 2
						&& touch.x < stress.x + stress.width / 2
						&& touch.y > stress.y - stress.height / 2
						&& touch.y < stress.y + stress.height / 2  ){
					 ST.visible = true;
					  var rand = Math.round(random(1,3));
					  switch(rand) {
						case 1: ST.addImage(st1);
								break;
						case 2: ST.addImage(st2);
								break;
						case 3: ST.addImage(st3);
								break;
						default: break;
					}
			
			  laugh.visible  = false;
			  stress.visible = false;
			  sad.visible    = false;
			  angry.visible  = false; 
			  nc1.visible    = false;
			  nc2.visible    = false;
			  nc3.visible    = false;
			  nc4.visible    = false;
			  nc5.visible    = false;
			  back.visible   = true;
			  moti.visible   = false;
				  }
			  })
			
			//On laptop
			  if(mousePressedOver(stress)){
				ST.visible = true;
				var rand = Math.round(random(1,3));
				switch(rand) {
				  case 1: ST.addImage(st1);
						  break;
				  case 2: ST.addImage(st2);
						  break;
				  case 3: ST.addImage(st3);
						  break;
				  default: break;
			  }
			
			  laugh.visible  = false;
			  stress.visible = false;
			  sad.visible    = false;
			  angry.visible  = false;
			  nc1.visible    = false;
			  nc2.visible    = false;
			  nc3.visible    = false;
			  nc4.visible    = false;
			  nc5.visible    = false; 
			  back.visible   = true;
			  moti.visible   = false;
			  }
			}

function Angry(){
				//On mobile
					touches.forEach(touch => {
						if ( touch.x > angry.x - angry.width / 2
							&& touch.x < angry.x + angry.width / 2
							&& touch.y > angry.y - angry.height / 2
							&& touch.y < angry.y + angry.height / 2 ){
						 A.visible = true;
						  var rand = Math.round(random(1,5));
						  switch(rand) {
							case 1: A.addImage(ag1);
									break;
							case 2: A.addImage(ag2);
									break;
							case 3: A.addImage(ag3);
									break;
							case 4: A.addImage(ag4);
									break;
							case 5: A.addImage(ag5);
									break;
							default: break;
						}
				
				  laugh.visible  = false;
				  stress.visible = false;
				  sad.visible    = false;
				  angry.visible  = false; 
				  nc1.visible    = false;
				  nc2.visible    = false;
				  nc3.visible    = false;
				  nc4.visible    = false;
				  nc5.visible    = false;
				  back.visible   = true;
				  moti.visible   = false;
					  }
				  })
				
				//On laptop
				  if(mousePressedOver(angry)){
					A.visible = true;
					var rand = Math.round(random(1,5));
					switch(rand) {
					  case 1: A.addImage(ag1);
							  break;
					  case 2: A.addImage(ag2);
							  break;
					  case 3: A.addImage(ag3);
							  break;
					  case 4: A.addImage(ag4);
							  break;
					  case 5: A.addImage(ag5);
							  break;
					  default: break;
				  }
				
				  laugh.visible  = false;
				  stress.visible = false;
				  sad.visible    = false;
				  angry.visible  = false;
				  nc1.visible    = false;
				  nc2.visible    = false;
				  nc3.visible    = false;
				  nc4.visible    = false;
				  nc5.visible    = false; 
				  back.visible   = true;
				  moti.visible   = false;
				  }
				}