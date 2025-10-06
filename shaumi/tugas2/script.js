let maximalScore = 3;

function tambahScoreP1() {
	const p1display= document.getElementById("p1display");
    const p2display= document.getElementById("p2display");
    
    let angkaP1Terakhir= p1display.textContent;
    
    let totalScore= Number(angkaP1Terakhir) + 1;
    
    p1display.textContent = totalScore;

    if(totalScore == maximalScore){
        p1display.style.color = "green";
        p2display.style.color = "red";
    }
}



function tambahScoreP2(){
    const p1display= document.getElementById("p1display");
	const p2display= document.getElementById("p2display");
    
    let angkaP2Terakhir= p2display.textContent;
    
    let totalScore= Number(angkaP2Terakhir) + 1;
    
    p2display.textContent = totalScore;
    
    if(totalScore == maximalScore){
        p1display.style.color = "red";
        p2display.style.color = "green";
    }
}

function reset(){
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.style.color = "black"
    p2display.style.color = "black"
}
