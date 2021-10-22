Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach("#camera");

function Click_pic() {
    Webcam.snap(
        function (Cam_pic) {
            document.getElementById("result").innerHTML = '<img src="' + Cam_pic + '" id="cam">';
        }
    );
speak()
}
console.log("ml5 version", ml5.version);
model=ml5.imageClassifier("",modelLoaded);
 function modelLoaded(){
     console.log("model loaded succesfully");
 }
 prediction_1="";
 
 function speak(){
speak_data="prediction 1 is "+prediction_1;
speak_audio=new SpeechSynthesisUtterance(speak_data);
window.speechSynthesis.speak(speak_audio);
 }
 