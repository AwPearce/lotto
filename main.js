function generateLotto() {
  var lottoArr = ["1","2","3","4","5","6"], userArr = [];
  var lottoJackpot;
  var len = lottoArr.length;

  for(let i = 0; i < document.forms["lottoEntry"].length; i++){                 //pulls user entered numbers into their own array.
  userArr[i] = document.forms["lottoEntry"].elements[i].value;
  }

  var lotto = lottoArr.map(function(n){                                         //gernerates 6 numbers between 1 and 49.
    return Math.floor(Math.random() * 49) + 1;
  });

  userArr.sort(function(a, b){return a-b});
  lotto.sort(function(a, b){return a-b});                                       //sort lotto array acendingly
  document.getElementById("results").innerHTML = lotto;                         //send results to page
  console.log(userArr);
  console.log(lotto);
}
