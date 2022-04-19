var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox");

function start() {
    Textbox.innerHTML = "";
    recognition.start();

}
recognition.onresult = function run(event) {

    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    Textbox.innerHTML = content;
    if (content == "take my selfie") {
        console.log("taking selfie");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speakdata = "taking your selfie in 5 seconds";
    var utter = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000);
}
Webcam.set({
    width: 300,
    height: 200,
    image_format: 'png',
    png_quality: 90

});
camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_img" src="' + data_uri + '"/>';

    });

}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.clcik();
}