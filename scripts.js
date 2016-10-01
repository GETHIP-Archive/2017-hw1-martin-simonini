function problemOne() {
  //Get all the numbers from the form.
  var i;
  let score = [parseFloat(document.getElementById('num1').value),parseFloat(document.getElementById('num2').value),
              parseFloat(document.getElementById('num3').value),parseFloat(document.getElementById('num4').value),
              parseFloat(document.getElementById('num5').value),parseFloat(document.getElementById('num6').value)];
  //Find the average, not including the lowest score.
  var lowest = 9007199254740992; //higest possible number in javascript so this is worst case
  var lowest_index = -1;
  for(i = 0; i < 6;i++){
    if(score[i] < lowest){
      lowest = score[i];
      lowest_index = i;
    }
  }
  var raw = 0;
  for(i = 0; i < 6; i++){
    if(i != lowest_index){
      raw += score[i];
    }
  }
  //Print it to the console.
  console.log("The average score of the 5 higest test was: "+(raw/5));
}

function problemOneBonus(){
  var input = (document.getElementById('mass_scores').value).split(",");
  var scores = [];
  for(i = 0; i < input.length;i++){
    scores[i] = parseFloat(input[i]);
  }
  var lowest = 9007199254740992; //higest possible number in javascript so this is worst case
  var lowest_index = -1;
  for(i = 0; i < scores.length;i++){
    if(scores[i] < lowest){
      lowest = scores[i];
      lowest_index = i;
    }
  }

  let rawAverage = 0;
  for(i = 0; i < scores.length; i++){
    if(i != lowest_index){
      rawAverage += scores[i];
    }
  }
console.log("Your average score was: "+(rawAverage/((scores.length)-1)));
}

function problemTwo() {
  console.log("made it into problem two");
  //Get all the letter grades from the form.
  let grade = [document.getElementById('grade1').value,document.getElementById('grade2').value,
              document.getElementById('grade3').value,document.getElementById('grade4').value,
              document.getElementById('grade5').value,document.getElementById('grade6').value];

  let honors = [document.getElementById('grade1_honors?').value,document.getElementById('grade2_honors?').value,
              document.getElementById('grade3_honors?').value,document.getElementById('grade4_honors?').value,
              document.getElementById('grade5_honors?').value,document.getElementById('grade6_honors?').value];
console.log(honors);
  //Compute the GPA.
  var i;
  var gpa = 0.0;
  for(i = 0; i < grade.length;i++){
    switch (grade[i].toUpperCase()) {
      case "A":
        console.log(grade[i]+" is worth a 4.0");
        gpa += 4.0;
        break;
      case "B":
        gpa += 3.0;
        break;
      case "C":
        gpa += 2.0;
        break;
      case "D":
        gpa += 1.0;
        break;
      default:
        gpa += 0.0;
        break;
    }
  }
    gpa = gpa/grade.length;
    console.log("Your GPA is: "+gpa);
    if(gpa >= 3.0){
      document.getElementById("box").style.backgroundColor = 'green';
    }else {
      document.getElementById("box").style.backgroundColor = "red";
    }
  }

  //Print it to the console.

  //If it is 3.0 or above, turn the div with id="box" green. Otherwise, turn it red.
  // document.getElementById("box").style.backgroundColor = "orange";
