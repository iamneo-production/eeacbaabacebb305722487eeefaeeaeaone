function calculateScore(){
    let total_score = 0
    
    let answer_for_q1 = document.getElementsByName("France").value;
    if(answer_for_q1 === "Paris"){
        total_score+= 1
    }

    let answer_for_q2 = document.getElementsByName("Painting").value;
    if(answer_for_q2 === "Pablo Picasso"){
        total_score+= 1
    }

    let answer_for_q3 = document.getElementsByName("Planet").value;
    if(answer_for_q3 === "Mars"){
        total_score+= 1
    }

    document.getElementById("result").innerHTML = "You scored "+ total_score+" out of 3 correct!"
}