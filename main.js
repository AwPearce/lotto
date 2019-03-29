function generateLotto() {
  let lottoArr = ["1","2","3","4","5","6"];
  let lottoJackpot;
  let len = lottoArr.length;
  let i = 0;
  do{
    lottoArr[i] = Math.floor(Math.random() * 49) + 1;                           //generate random numbers between 1-49
    for(let x = 0; x > lottoArr.length; x++){                                   //for each index of an array
      if(lottoArr[i] == lottoArr[i-x])
        lottoArr[i] = Math.floor(Math.random() * 49) + 1;
    }
    console.log(lottoArr[i]);
    len--;
    i++;
  } while (len > 0);
  lottoArr.sort(function(a, b){return a-b});                                    //sort lotto array acendingly
  document.getElementById("results").innerHTML = lottoArr;                      //send results to page
  console.log(lottoArr);
  console.log(len);
}
