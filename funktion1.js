function prufen(){
var antwort=document.losung.antwort.value;
if(antwort==99){
document.losung.auswertung.value="Das ist richtig. Da die Seerosen sich jeden Tag verdoppeln, sie werden also jeden Tag mit 2 multipliziert. Man muss also durch zwei teilen, um die Anzahl der Seerosen am 99. Tag zu erfahren."
}
else{document.losung.auswertung.value="Das ist falsch. Versuche es erneut, so schwer ist die Aufgabe nicht."
}
if(antwort>100){
document.losung.auswertung.value="Das ist falsch. Die Zahl muss kleiner als 100 sein."
}
if(antwort==100){
document.losung.auswertung.value="Das ist falsch. Am 100. Tag war der See ganz voll."
}
if(antwort == "neunundneunzigsten"){
document.losung.auswertung.value="Das ist richtig. Da die Seerosen sich jeden Tag verdoppeln, sie werden also jeden Tag mit 2 multipliziert. Man muss also durch zwei teilen, um die Anzahl der Seerosen am 99. Tag zu erfahren."
}
if(antwort == ""){
document.losung.auswertung.value="Du musst schon etwas eingeben!"
}
}