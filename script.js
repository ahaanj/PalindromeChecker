const checkButton = document.getElementById("check-btn");
const userinput = document.getElementById("text-input");
const result = document.getElementById("result");

checkButton.addEventListener("click", checkPalindrome);

function checkPalindrome() {
  if (userinput.value === "") {
    alert("Please input a value");
    result.innerHTML = "";
    return;
  }

  const filterStr = userinput.value.replace(/[\W_]/g,"").toLowerCase();
  let isPalindrome = true;

  for (let i = 0; i <Math.floor(filterStr.length / 2); i++){
    if (filterStr[i] !== filterStr[filterStr.length - 1 - i]){
      isPalindrome = false; 
      break;

    }
  }

  if(isPalindrome){
    result.innerHTML = userinput.value + " is a palindrome";

  } else {
    result.innerHTML = userinput.value + " is not a palindrome";
  }




}
