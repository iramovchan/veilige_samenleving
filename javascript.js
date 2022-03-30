let tekst = document.getElementsByClassName("hover_dinges");

tekst.addEventListener("mouseover", extra_tekst);
tekst.addEventListener("mouseout", tekst_weg);

function extra_tekst(){
    let tekst2 = "e-mail: 25525@edu.msa.nl";
    tekst.innerHTML = tekst2;
}
function tekst_weg(){
    tekst.innerHTML = "Hi, I am Ira and I made this website about our robot - ECR2.0.";
}
