function prufen(){
var antwort=document.losung.antwort.value;
if(antwort==11){
document.losung.auswertung.value="Das ist richtig. Man erh\u00e4lt elf St\u00fcck, wenn jeder Schnitt alle bisherigen Schnitte kreuzt, aber sich niemals mehr als zwei Schnitte in einem Punkt treffen."
}
else{
document.losung.auswertung.value="Das ist falsch. Versuche es erneut, so schwer ist die Aufgabe nicht."
}
if(antwort == "elf"){
document.losung.auswertung.value="Das ist richtig. Man erh\u00e4lt elf St\u00fcck, wenn jeder Schnitt alle bisherigen Schnitte kreuzt, aber sich niemals mehr als zwei Schnitte in einem Punkt treffen."
}
if(antwort == ""){
document.losung.auswertung.value="Du musst schon etwas eingeben!"
}
}