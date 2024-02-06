const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp

const rockGesture = new GestureDescription('rock') // ✊️
const paperGesture = new GestureDescription('paper') // 🖐
const scissorsGesture = new GestureDescription('scissors') // ✌️
const dontGesture = new GestureDescription('dont') // ✌️
const aslWGesture = new GestureDescription('W'); // 3️⃣
const aslIGesture = new GestureDescription('I'); // ℹ️

// Rock
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
rockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
rockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5)

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  rockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
  rockGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}


// Paper
// -----------------------------------------------------------------------------

// no finger should be curled
for (let finger of Finger.all) {
  paperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
}


// Scissors
//------------------------------------------------------------------------------

// index and middle finger: stretched out
scissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
scissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)

// ring: curled
scissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
scissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9)

// pinky: curled
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9)


// dontGesture🙅
//------------------------------------------------------------------------------
for (let finger of Finger.all) {
  
  dontGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
  dontGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8)
  dontGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0)
  dontGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0)

  dontGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0)
  dontGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0)
}

// ASL W gesture 
//------------------------------------------------------------------------------

// index, middle, and ring finger: stretched out
aslWGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
aslWGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
aslWGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);

// pinky: curled
aslWGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
aslWGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

// ASL I gesture 
//------------------------------------------------------------------------------

// pinky: stretched out 
aslIGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// index, middle, ring: curled
aslIGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
aslIGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
aslIGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

const gestures = [
  rockGesture, paperGesture, scissorsGesture, dontGesture, aslWGesture, aslIGesture
]
export {
  gestures
}
