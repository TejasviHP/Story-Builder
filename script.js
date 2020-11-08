

    
function submit1() {
    array_display=[];
    for (i=1; i<=6; i++ ) {
        var sentence_names=document.getElementById("team1_"+i).value;
        array_display.push(sentence_names);
        console.log(array_display);
    }
    document.getElementById("team_1_output").innerHTML= array_display.join(". ");
}
function submit2() {
    array_display=[];
    for (i=1; i<=6; i++ ) {
        var sentence_names=document.getElementById("team2_"+i).value;
        array_display.push(sentence_names);
        console.log(array_display);
    }
    document.getElementById("team_2_output").innerHTML= array_display.join(". ");
}
 


