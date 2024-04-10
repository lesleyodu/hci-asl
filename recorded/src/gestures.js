const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;

const aslAGesture = new GestureDescription('A'); // A left handed
const aslARGesture = new GestureDescription('A'); // A right handed
const aslBGesture = new GestureDescription('B'); // B
const aslCGesture = new GestureDescription('C'); // C left handed
const aslCRGesture = new GestureDescription('C'); // C right handed
const aslDGesture = new GestureDescription('D'); // D
const aslEGesture = new GestureDescription('E'); // E
const aslFGesture = new GestureDescription('F'); // F
const aslGGesture = new GestureDescription('G'); // G
const aslGLGesture = new GestureDescription('G'); // G left handed
const aslHGesture = new GestureDescription('H'); // H right handed
const aslHLGesture = new GestureDescription('H'); // H left handed
const aslIGesture = new GestureDescription('I'); // I
const aslJGesture = new GestureDescription('J'); // J
const aslKGesture = new GestureDescription('K'); // K
const aslLGesture = new GestureDescription('L'); // L right handed
const aslLLGesture = new GestureDescription('L'); // L left handed
const aslMGesture = new GestureDescription('M'); // M right handed
const aslMLGesture = new GestureDescription('M'); // M left handed
const aslNGesture = new GestureDescription('N'); // N
const aslNLGesture = new GestureDescription('N'); // N left handed
const aslOGesture = new GestureDescription('O'); // O left hand
const aslORGesture = new GestureDescription('O'); // O right hand
const aslPGesture = new GestureDescription('P'); // P left hand
const aslPRGesture = new GestureDescription('P'); // P right hand
const aslQGesture = new GestureDescription('Q'); // Q
const aslQRGesture = new GestureDescription('Q'); // Q right hand
const aslRGesture = new GestureDescription('R'); // R right hand
const aslRLGesture = new GestureDescription('R'); // R left hand
const aslSGesture = new GestureDescription('S'); // S
const aslTGesture = new GestureDescription('T'); // T left hand
const aslTRGesture = new GestureDescription('T'); // T right hand
const aslUGesture = new GestureDescription('U'); // U right hand
const aslULGesture = new GestureDescription('U'); // U left hand
const aslVGesture = new GestureDescription('V'); // V right hand
const aslVLGesture = new GestureDescription('V'); // V left hand
const aslWGesture = new GestureDescription('W'); // W
const aslXGesture = new GestureDescription('X'); // X right hand
const aslXLGesture = new GestureDescription('X'); // X left hand
const aslYGesture = new GestureDescription('Y'); // Y left hand
const aslYRGesture = new GestureDescription('Y'); // Y right hand


//const dontGesture = new GestureDescription('dont'); // 🙅


// ASL A Gesture (left)
//------------------------------------------------------------------------------
//index, middle, ring, pinky: Full curl
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslAGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
}

// thumb: stretched out

aslAGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

aslAGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
aslAGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
aslAGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
aslAGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
aslAGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
aslAGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.9)

aslAGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9)


// ASL A Gesture (right)
//------------------------------------------------------------------------------
//index, middle, ring, pinky: Full curl
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslARGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
}

// thumb: stretched out

aslARGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

aslARGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
aslARGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
aslARGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
aslARGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
aslARGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
aslARGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.9)

aslARGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9)



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
aslDGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0)

//middle, ring, pinky: curled
for(let finger of [Finger.Pinky, Finger.Middle, Finger.Ring, Finger.Thumb]) {
aslDGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
aslDGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}


// ASL E gesture 
//------------------------------------------------------------------------------

// all fingers: half curl/full curl
for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslEGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aslEGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
}



// ASL F Gesture
//------------------------------------------------------------------------------
// thumb, index: curled
aslFGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
aslFGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);

// accept half curl
aslFGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);
aslFGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.8);
aslFGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);


// middle,ring, and pinky finger: stretched out
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslFGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
}

for(let finger of [Finger.Middle, Finger.Ring]) {
  aslFGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);

}

// ASL G Gesture (right hand)
//------------------------------------------------------------------------------
// middle, ring, pinky, thumb: curled
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslGGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  aslGGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aslGGesture.addDirection(finger, FingerDirection.HorizontalLeft, 0.9)

 }

 aslGGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9)
 aslGGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)

 //index: sticking out 
 aslGGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
 aslGGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);



// ASL G Gesture (left hand)
//------------------------------------------------------------------------------
// middle, ring, pinky, thumb: curled
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslGLGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  aslGLGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aslGLGesture.addDirection(finger, FingerDirection.HorizontalRight, 0.9)

 }

 aslGLGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9)
 aslGLGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)

 //index: sticking out 
 aslGLGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
 aslGLGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);


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
  aslHGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  aslHGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
 }


   // ASL H Gesture left hand
//------------------------------------------------------------------------------
// thumb, ring, pinky: curled/half curled
for(let finger of [ Finger.Ring, Finger.Pinky, Finger.Thumb]) {
  aslHLGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  aslHLGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aslHLGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0)
 }
 
 // middle and index: sticking out 
 for(let finger of [Finger.Middle, Finger.Index]) {
  aslHLGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  aslHLGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
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



// ASL K Gesture
//------------------------------------------------------------------------------
// index, middle, thumb: stretched up
for (let finger of [Finger.Index, Finger.Middle, Finger.Thumb]){
aslKGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
aslKGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0)
}

aslKGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);

// ring and pinky: curl 
for (let finger of [Finger.Ring, Finger.Pinky]) {
  aslKGesture.addCurl(finger,FingerCurl.FullCurl, 1.0);
  aslKGesture.addCurl(finger,FingerCurl.HalfCurl, 0.9);

aslKGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
aslKGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);
}

// ASL L gesture (right hand)
//------------------------------------------------------------------------------
//index and thumb: stretched out
aslLGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
aslLGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslLGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0)
aslLGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0)

//middle, ring, pinky: curled
aslLGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
aslLGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
aslLGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// accept a half curl
aslLGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);
aslLGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);


// ASL L gesture (left hand)
//------------------------------------------------------------------------------
//index and thumb: stretched out
aslLLGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
aslLLGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslLLGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0)
aslLLGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0)

//middle, ring, pinky: curled
aslLLGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
aslLLGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
aslLLGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
aslLLGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
aslLLGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.9);
aslLLGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
aslLLGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

// accept a half curl
aslLLGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);
aslLLGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);



// ASL M Gesture (right)
// -----------------------------------------------------------------------------
// all fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  aslMGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aslMGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0)
}

aslMGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9)

aslMGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


// ASL M Gesture (left)
// -----------------------------------------------------------------------------
// all fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  aslMLGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aslMLGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0)
}

aslMLGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0)
aslMLGesture.addDirection(Finger.Inde, FingerDirection.DiagonalUpRight, 1.0)

aslMLGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);



// ASL N Gesture (right)
// -----------------------------------------------------------------------------
// all fingers: curled
for(let finger of [Finger.Index, Finger.Middle]) {
  aslNGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aslNGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0)
}

aslNGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9)

aslNGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
aslNGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.9)

aslNGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);


// ASL N Gesture (left)
// -----------------------------------------------------------------------------
// all fingers: curled
for(let finger of [Finger.Index, Finger.Middle]) {
  aslNLGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  //aslNLGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

//aslNLGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
aslNLGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);

aslNLGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
aslNLGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
aslNLGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
aslNLGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

aslNLGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
aslNLGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);



// ASL O Gesture left hand
//------------------------------------------------------------------------------

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
 aslOGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
 aslOGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
}

 aslOGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
 aslOGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);


// ASL O Gesture right hand
//------------------------------------------------------------------------------

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslORGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  aslORGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);
 }
 
  aslORGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
  aslORGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);


// ASL P Gesture left hand
//------------------------------------------------------------------------------
aslPGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
 aslPGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

aslPGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
 aslPGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

aslPGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
 aslPGesture.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 1.0);

aslPGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

aslPGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
 ;
 aslPGesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.9);

aslPGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

 aslPGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.9);



 // ASL P Gesture right hand
//------------------------------------------------------------------------------
aslPRGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslPRGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

aslPRGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
aslPRGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

aslPRGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
aslPRGesture.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 1.0);

aslPRGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

aslPRGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
;
aslPRGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.9);

aslPRGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

aslPRGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.9);



// ASL Q Gesture left hand
//------------------------------------------------------------------------------
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
 aslQGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
 aslQGesture.addDirection(finger, FingerDirection.DiagonalDownRight, 1.0);
}


 aslQGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
 aslQGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 1.0);


 aslQGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
 aslQGesture.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 1.0);


 // ASL Q Gesture right hand
//------------------------------------------------------------------------------
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslQRGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aslQRGesture.addDirection(finger, FingerDirection.DiagonalDownLeft, 1.0);
 }
 
 
  aslQRGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
  aslQRGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);
 
 
  aslQRGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
  aslQRGesture.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 1.0);


 // ASL R Gesture right hand
//------------------------------------------------------------------------------

// index: stretched out
  aslRGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
  aslRGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
  aslRGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);

// middle: half curl behind index
aslRGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

//ring, pinky: curl
for (let finger of [Finger.Ring, Finger.Pinky]) {
  aslRGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aslRGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
}

aslRGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);



 // ASL R Gesture left hand
//------------------------------------------------------------------------------

// index: stretched out
aslRLGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
aslRLGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
aslRLGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);

// middle: half curl behind index
aslRLGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);

//ring, pinky: curl
for (let finger of [Finger.Ring, Finger.Pinky]) {
aslRLGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
aslRLGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
}

aslRLGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);


// ASL S Gesture
// -----------------------------------------------------------------------------
// all fingers: curled
for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslSGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  
}

aslSGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)


// ASL T Gesture left hand
//------------------------------------------------------------------------------
//index, middle, ring, pinky: Full curl
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslTGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
}

// thumb: stretched out
aslTGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

aslTGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
aslTGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
aslTGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
aslTGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
aslTGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);


// ASL T Gesture right hand
//------------------------------------------------------------------------------
//index, middle, ring, pinky: Full curl
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslTRGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
}

// thumb: stretched out
aslTRGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

aslTRGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
aslTRGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
aslTRGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
aslTRGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
aslTRGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);


// ASL U Gesture right hand
//------------------------------------------------------------------------------
// index and middle finger: sticking up
aslUGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
aslUGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

for(let finger of [Finger.Index, Finger.Middle]) {
  aslUGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0)
  }

// ring, pinky, thumb: curl
for(let finger of [Finger.Ring, Finger.Pinky]) {
aslUGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
aslUGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

aslUGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

aslUGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9)


// ASL U Gesture left hand
//------------------------------------------------------------------------------
// index and middle finger: sticking up
aslULGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
aslULGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

for(let finger of [Finger.Index, Finger.Middle]) {
  aslULGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0)
  }

// ring, pinky, thumb: curl
for(let finger of [Finger.Ring, Finger.Pinky, Finger.Thumb]) {
aslULGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
aslULGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

aslULGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9)


// ASL V Gesture right hand
//------------------------------------------------------------------------------

// index and middle finger: stretched out
for (let finger of [Finger.Index, Finger.Middle]){
aslVGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

aslVGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.9)

// ring and pinky: curl 
aslVGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
aslVGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

aslVGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
aslVGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);


// ASL V Gesture left hand
//------------------------------------------------------------------------------

// index and middle finger: stretched out
for (let finger of [Finger.Index, Finger.Middle]){
  aslVLGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  }
  
  aslVLGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.9)
  
  // ring and pinky: curl 
  aslVLGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
  aslVLGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);
  
  aslVLGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
  aslVLGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);


// ASL W gesture 
//------------------------------------------------------------------------------
// index, middle, and ring finger: stretched out
aslWGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
aslWGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
aslWGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);

// pinky: curled
aslWGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
aslWGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);


// ASL X gesture right hand
//------------------------------------------------------------------------------
//index: half curl
aslXGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);

//middle, ring, pinky: curled
for(let finger of [Finger.Pinky, Finger.Middle, Finger.Ring, Finger.Thumb]) {
  aslXGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aslXGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
  aslXGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.9);
}

aslXGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);


// ASL X gesture left hand
//------------------------------------------------------------------------------
//index: half curl
aslXGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);

//middle, ring, pinky: curled
for(let finger of [Finger.Pinky, Finger.Middle, Finger.Ring, Finger.Thumb]) {
  aslXGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aslXGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
  aslXGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 0.9);
}

aslXGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);


// ASL Y Gesture (left)
//------------------------------------------------------------------------------
//index, middle, ring, pinky: Full curl
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  aslYGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aslYGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9); // accept half curl

}

// thumb, pinky: stretched out
aslYGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslYGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
aslYGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
aslYGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);



// ASL Y Gesture (right)
//------------------------------------------------------------------------------
//index, middle, ring, pinky: Full curl
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  aslYRGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aslYRGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9); // accept half curl

}

// thumb, pinky: stretched out
aslYRGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aslYRGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
aslYRGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
aslYRGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);




const gestures = [
  aslAGesture, aslARGesture, aslBGesture, aslCGesture, aslDGesture, aslEGesture,  aslFGesture, aslGGesture, aslGLGesture,
  aslHGesture, aslHLGesture, aslIGesture, aslJGesture, aslKGesture, aslLGesture, aslLLGesture, aslMGesture, aslMLGesture, 
  aslNGesture, aslNLGesture, aslOGesture, aslORGesture, aslPGesture, aslPRGesture, aslQGesture, aslQRGesture, aslRGesture, aslRLGesture,
  aslSGesture, aslTGesture, aslTRGesture, aslUGesture, aslULGesture,
  aslVGesture, aslVLGesture, aslWGesture, aslXGesture, aslXLGesture, aslYGesture,aslYRGesture, aslCRGesture
]

export {
    gestures
}