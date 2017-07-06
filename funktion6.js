function prufen(){
var antwort=document.losung.antwort.value;
if(antwort==10){
document.losung.auswertung.value="Das ist richtig. Denn f\u00fcnf meter nach unten und f\u00fcnf meter nach oben sind zehn meter."
}
else{
document.losung.auswertung.value="Das ist falsch. Versuche es erneut, so schwer ist die Aufgabe nicht."
}
if(antwort == "zehn"){
document.losung.auswertung.value="Das ist richtig. Denn f\u00fcnf meter nach unten und f\u00fcnf meter nach oben sind zehn meter."
}
if(antwort == ""){
document.losung.auswertung.value="Du musst schon etwas eingeben!"
}
}