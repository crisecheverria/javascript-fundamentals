// A web worker is a JavaScript running in the background, without affecting the performance of the page.

/*
When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.

A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.
 */

// Creating a Web Worker
// demo_workers.js

var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout('timedCount()', 500);
}

timedCount();

// Create a Web Worker
if (typeof Worker !== 'undefined') {
  // Yes! Web worker support!
  if (typeof w == 'undefined') {
    w = new Worker('demo_workers.js');
    // Then we can send and receive messages from the web worker.
    w.onmessage = function (event) {
      document.getElementById('result').innerHTML = event.data;
    };
  }
} else {
  // Sorry! No Web Worker support..
}

// Full example

<!DOCTYPE html>
<html>
<body>

<p>Count numbers: <output id="result"></output></p>
<button onclick="startWorker()">Start Worker</button>
<button onclick="stopWorker()">Stop Worker</button>

<script>
var w;

function startWorker() {
  if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
      w = new Worker("demo_workers.js");
    }
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
  }
}

function stopWorker() {
  w.terminate();
  w = undefined;
}
</script>

</body>
</html>