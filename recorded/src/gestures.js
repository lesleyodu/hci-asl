const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;

const aslAGesture = new GestureDescription('A'); // A
const aslBGesture = new GestureDescription('B'); // B
const aslCGesture = new GestureDescription('C'); // C left handed
const aslCRGesture = new GestureDescription('C'); // C right handed
const aslDGesture = new GestureDescription('D'); // D
const aslEGesture = new GestureDescription('E'); // E
const aslFGesture = new GestureDescription('F'); // F
const aslGGesture = new GestureDescription('G'); // G
const aslHGesture = new GestureDescription('H'); // H
const aslIGesture = new GestureDescription('I'); // I
const aslJGesture = new GestureDescription('J'); // J
const aslLGesture = new GestureDescription('L'); // L
const aslOGesture = new GestureDescription('O'); // O
const aslSGesture = new GestureDescription('S'); // S
const aslUGesture = new GestureDescription('U'); // U
const aslVGesture = new GestureDescription('V'); // V
const aslWGesture = new GestureDescription('W'); // W
const aslXGesture = new GestureDescription('X'); // X
const aslYGesture = new GestureDescription('Y'); // Y


//const dontGesture = new GestureDescription('dont'); // 🙅


// ASL A Gesture
//------------------------------------------------------------------------------
//index, middle, ring, pinky: Full curl
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslAGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
}

// thumb: stretched out
aslAGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);



// ASL B Gesture
//------------------------------------------------------------------------------
// thumb: curled
aslBGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
aslBGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
aslBGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.9);


// index, middle,ring, and pinky finger: stretched out
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslBGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0)
  aslBGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
  
}
//accept
aslBGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);

// ASL C Gesture left handed
//------------------------------------------------------------------------------

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
 aslCGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
 aslCGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
}

 aslCGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
 aslCGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

aslCGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
aslCGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
aslCGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

// ASL C Gesture right handed
//------------------------------------------------------------------------------

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
 aslCRGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
 aslCRGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);
}

 aslCRGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
 aslCRGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

aslCRGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
aslCRGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
aslCRGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

// ASL D gesture 
//------------------------------------------------------------------------------

//index: sticking up
aslDGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

//middle, ring, pinky: curled
aslDGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
aslDGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
aslDGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// accept a half curl
aslDGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);
aslDGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);
aslDGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.8);


// ASL E gesture 
//------------------------------------------------------------------------------

// all fingers: half curl
for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslEGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
aslEGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0)
}

// ASL F Gesture
//------------------------------------------------------------------------------
// thumb, index: curled
aslFGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
aslFGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
aslFGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
aslFGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// accept half curl
aslFGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);
aslFGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.8);
aslFGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);

// middle,ring, and pinky finger: stretched out
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslFGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
  aslFGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

  aslFGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9)



// ASL G Gesture right hand
//------------------------------------------------------------------------------
// middle, ring, pinky: curled
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslGGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  aslGGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aslGGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0)
 }
 
 // thumb and index: sticking out 
  aslGGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
  aslGGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
  aslGGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
  aslGGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
  aslGGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);



  // ASL H Gesture right hand
//------------------------------------------------------------------------------
// thumb, ring, pinky: curled/half curled
for(let finger of [ Finger.Ring, Finger.Pinky, Finger.Thumb]) {
  aslHGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  aslHGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aslHGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0)
 }
 
 // middle and index: sticking out 
 for(let finger of [Finger.Middle, Finger.Index]) {
  aslHGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
  aslHGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  aslHGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
 }
// ASL I gesture 
//------------------------------------------------------------------------------
// pinky: sticking up
aslIGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// index, middle, ring: curled
aslIGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
aslIGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
aslIGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);


// ASL J gesture - ending pose
//------------------------------------------------------------------------------

for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslJGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
}

aslJGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
for(let finger2 of [Finger.Index, Finger.Middle, Finger.Ring]) {
 aslJGesture.addCurl(finger2, FingerCurl.FullCurl, 1.0);
}
aslJGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);

aslJGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);
aslJGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9);

// ASL L gesture 
//------------------------------------------------------------------------------
//index and thumb: stretched out
aslLGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
aslLGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

//middle, ring, pinky: curled
aslLGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
aslLGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
aslLGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// accept a half curl
aslLGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);
aslLGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);


// ASL O Gesture
//------------------------------------------------------------------------------

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
 aslOGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
 aslOGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
}

 aslOGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
 aslOGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);



// ASL S Gesture
// -----------------------------------------------------------------------------
// all fingers: curled
for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslSGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  
}
//accept half curl
aslSGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);


// ASL U Gesture
//------------------------------------------------------------------------------
// index and middle finger: sticking up
aslUGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
aslUGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

for(let finger of [Finger.Index, Finger.Middle]) {
  aslUGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0)
  }

// ring: curl
aslUGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
aslUGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curl 
aslUGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
aslUGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);


// ASL V Gesture
//------------------------------------------------------------------------------

// index and middle finger: stretched out
aslVGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
aslVGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring: curl 
aslVGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
aslVGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curl 
aslVGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
aslVGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);


// ASL W gesture 
//------------------------------------------------------------------------------
// index, middle, and ring finger: stretched out
aslWGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
aslWGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
aslWGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);

// pinky: curled
aslWGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
aslWGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

// ASL X gesture 
//------------------------------------------------------------------------------

//index: half curl
aslXGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.9);

//middle, ring, pinky: curled
aslXGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
aslXGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
aslXGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// accept a half curl
aslXGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);
aslXGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);
aslXGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);

// ASL Y Gesture
//------------------------------------------------------------------------------
//index, middle, ring, pinky: Full curl
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  aslYGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aslYGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9); // accept half curl
  aslYGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
  aslYGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 0.9);
}

// thumb, pinky: stretched out
aslYGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslYGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
aslYGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
aslYGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);



// Don't 🙅
//------------------------------------------------------------------------------

/*for(const finger of Finger.all) {
  dontGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
  dontGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8)

  dontGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0)
  dontGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0)

  dontGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0)
  dontGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0)
}
*/


const gestures = [
  aslAGesture, aslBGesture, aslCGesture, aslDGesture, aslEGesture,  aslFGesture, aslGGesture, aslHGesture, aslIGesture, aslJGesture, aslLGesture, 
  aslOGesture, aslSGesture, aslUGesture, aslVGesture, aslWGesture, aslXGesture, aslYGesture,
  aslCRGesture
  //dontGesture
]

export {
    gestures
}