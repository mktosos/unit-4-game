$(document).ready(function(){
    var mathRandom = Math.floor(Math.random());
    var wins = 0;
    var losses = 0;
    var total = 0;
    $(".losses").text(losses);
    $(".wins").text(wins);
    //Returns a random number between min (inclusive) and max (exclusive)
    function randomNumF(min, max) {
        return Math.floor(Math.random() * (max-min) + min);
    };
    $(".randomNum").text(randomNumF(19,120));

    const jewelArr=[".jewel1", ".jewel2", ".jewel3", ".jewel4"];

    ///accesses value attr in .jewelxxx
    var jewel1 =$('.jewel1').val();
    var jewel2 =$('.jewel2').val();
    var jewel3 =$('.jewel3').val();
    var jewel4 =$('.jewel4').val();
 
    //sets a value for each jewel
    jewel1 = randomNumF(1,13);
    console.log(jewel1);
    jewel2 = randomNumF(1,13);
    console.log(jewel2);
    jewel3 = randomNumF(1,13);
    console.log(jewel3);
    jewel4 = randomNumF(1,13);
    console.log(jewel4);

   $(".jewel1").on('click', function() {
    $("#totalJewels").text(jewel1);

    
   });
    



});

