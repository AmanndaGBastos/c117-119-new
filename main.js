function setup(){
    canvas=createCanvas(280,280)
    canvas.center()
    background("white");
    canvas.mouseReleased(classifyCanvas)
    synth=window.speechSynthesis//ativa a voz da pagina
} 
function preload(){
    classifier=ml5.imageClassifier('DoodleNet')//analisa rabiscos
}
function clearCanvas(){
    background("white");
}
function draw(){
    strokeWeight(13)
    stroke(0)
    if (mouseIsPressed) {
    line(pmouseX,pmouseY,mouseX,mouseY)
    } 
    //pmouseX guarda a cordenada do começo da linha(*---------------*)       
   
}
 function classifyCanvas(){
    classifier.classify(canvas,gotResult)
 }
 function gotResult(error,results){
    if(error){
        console.error(error)
    }
    console.log(results)

    document.getElementById("label").innerHTML='Label: '+results[0].label
    document.getElementById("accuracy").innerHTML='Accuracy: '+Math.round(results[0].accuracy*100)

    utterThis = new SpeechSynthesisUtterance(results[0].label); 
    synth.speak(utterThis);

 }
   

 
