function calculateScore(){
    let total_score = 0
    
    let answer_for_q1 = document.getElementsByName("France");
    
    for(var i = 0; i < answer_for_q1.length; i++){
        if(answer_for_q1[i].checked && answer_for_q1[i].value ==="Paris" ){
            total_score += 1;
        }
    }
   
    let answer_for_q2 = document.getElementsByName("Painting");
    for(var i = 0; i < answer_for_q2.length; i++){
        if(answer_for_q2[i].checked && answer_for_q2[i].value ==="Leonardo Da Vinci" ){
            total_score += 1;
        }
    }

    let answer_for_q3 = document.getElementsByName("Planet");
    for(var i = 0; i < answer_for_q3.length; i++){
        if(answer_for_q3[i].checked && answer_for_q3[i].value ==="Mars"){
            total_score += 1;
        }
    }

    document.getElementById("result").innerHTML = "You scored "+total_score+" out of 3 correct!"
}