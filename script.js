console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

function order(words){
  if(words !== ""){
    let arrOfWords  = words.split(" ");
    let numberArr = [];
    for(let i = 0 ; i <arrOfWords.length; i++){
      numberArr.push(arrOfWords[i].split("").filter(Number).join(""))
    }
    numberArr = numberArr.map(el => Number(el) - 1)
    
    let result = numberArr.map(i => arrOfWords[i])
    return result.join(" ")
    }else{
    return ""
  }
}