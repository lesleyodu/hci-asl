const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;

const aslAGesture = new GestureDescription('A'); // A
const aslBGesture = new GestureDescription('B'); // B
const aslDGesture = new GestureDescription('D'); // D
const aslEGesture = new GestureDescription('E'); // E
const aslIGesture = new GestureDescription('I'); // I
const aslSGesture = new GestureDescription('S'); // S
const aslVGesture = new GestureDescription('V'); // V
const aslWGesture = new GestureDescription('W'); // W


const dontGesture = new GestureDescription('dont'); // 🙅


// ASL A Gesture
//------------------------------------------------------------------------------
//index, middle, ring, pinky: Full curl
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslAGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
}

// thumb: sticking up
aslAGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);



// ASL B Gesture
//------------------------------------------------------------------------------
// thumb: curled
aslBGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
// accept half curl
aslBGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);

// index, middle,ring, and pinky finger: stretched out
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslBGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0)
  aslBGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
  
}


// ASL D gesture 
//------------------------------------------------------------------------------

//index: stretched out
aslDGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

//middle, ring, pinky: curled
aslDGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
aslDGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
aslDGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// accept a half curl
aslDGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.9);
aslDGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);


// ASL E gesture 
//------------------------------------------------------------------------------

// all fingers: half curl
for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslEGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
aslEGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0)
}

// ASL I gesture 
//------------------------------------------------------------------------------

// pinky: stretched out 
aslIGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// index, middle, ring: curled
aslIGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
aslIGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
aslIGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);


// ASL S Gesture
// -----------------------------------------------------------------------------

// all fingers: curled
for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  aslSGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  
}
//accept half curl
aslSGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);


// ASL V Gesture
//------------------------------------------------------------------------------

// index and middle finger: stretched out
aslVGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
aslVGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring: curlet 
aslVGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
aslVGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curlet 
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


// Don't 🙅
//------------------------------------------------------------------------------

for(const finger of Finger.all) {
  dontGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
  dontGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8)

  dontGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0)
  dontGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0)

  dontGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0)
  dontGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0)
}



const gestures = [
  aslAGesture, aslBGesture, aslDGesture, aslEGesture,  aslIGesture, aslSGesture, aslVGesture, aslWGesture, dontGesture
]

export {
    gestures
}