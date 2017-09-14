var context;
try {context = new AudioContext()}
catch(e) {alert("Web Audio API is not supported in this browser")}

var bufferLoader = new BufferLoader(
    context,
    ["sounds/01.mp3", "sounds/02.mp3",
    "sounds/03.mp3", "sounds/04.mp3",
    "sounds/05.mp3", "sounds/06.mp3",
    "sounds/07.mp3", "sounds/08.mp3",
    "sounds/09.mp3", "sounds/10.mp3"],
    finishedLoading);
bufferLoader.load();

var buffSour = []
function finishedLoading(bufferList) {
  // Create sources and buffers
  for (var i = 0; i < 10; i++) {
    buffSour[i] = context.createBufferSource();
    buffSour[i].buffer = bufferList[i]
    buffSour[i].connect(context.destination);
  }
}

function play() {
  for (var i = 0; i < 10; i++) {
    buffSour[i].start(0);
  }
}

function stop() {
  for (var i = 0; i < 10; i++) {
    buffSour[i].stop(context.currentTime); // stop the source immediately
  }
}
