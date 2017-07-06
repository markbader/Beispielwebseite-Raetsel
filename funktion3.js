function prufen(){
var antwort=document.losung.antwort.value;
if(antwort==2){
document.losung.auswertung.value="Das ist richtig. Man teilt das Geld in drei Haufen. \u2799 Man wiegt zwei haufen. \u2799 Nimmt schwereren oder dritten Haufen. \u2799 Man wiegt zwei M\u00fcnzen. \u2799 Schwerere oder dritte M\u00fcnze ist gef\u00e4lscht."
}
else{
document.losung.auswertung.value="Das ist falsch. Versuche es erneut, so schwer ist die Aufgabe nicht."
}
if(antwort == "zwei"){
document.losung.auswertung.value="Das ist richtig. Man teilt das Geld in drei Haufen. \u2799 Man wiegt zwei haufen. \u2799 Nimmt schwereren oder dritten Haufen. \u2799 Man wiegt zwei M\u00fcnzen. \u2799 Schwerere oder dritte M\u00fcnze ist gef\u00e4lscht."
}
if(antwort == ""){
document.losung.auswertung.value="Du musst schon etwas eingeben!"
}
}