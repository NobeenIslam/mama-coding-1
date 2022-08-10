const words: string = "mama";

function addCoins(coins: number): number {
  console.log("hello world");
  return coins + 2;
}

function nameChecker(name:string){
    let statement = "mama is not here"
    if(name === "Mama"){
        statement = "mama is here"
    }
    return statement 
}
console.log(nameChecker("nobeen"));
