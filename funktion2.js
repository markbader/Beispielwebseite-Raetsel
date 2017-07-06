function prufen(){
var antwort=document.losung.antwort.value;
if(antwort==14){
document.losung.auswertung.value="Das ist richtig, da nicht, wie man es zuerst vermutet, die halbe Zahl der Code ist sondern die Buchstabenanzahl."
}
else{
document.losung.auswertung.value="Das ist falsch! Denke noch einmal nach, das ist gar nicht so einfach."
}
if(antwort=="vierzehn"){
document.losung.auswertung.value="Das ist richtig, da nicht, wie man es zuerst vermutet, die halbe Zahl der Code ist sondern die Buchstabenanzahl."
}
if(antwort == ""){
document.losung.auswertung.value="Du musst schon etwas eingeben!"
}
if(antwort==12){
document.losung.auswertung.value="Durch diese Antwort ist der Ritter erstochen worden! Du solltest noch einmal nachdenken!"
}
}