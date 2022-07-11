let input = document.querySelectorAll("input")

function saveData() {
    for(i = 0; i< input.length; i++) {
        console.log(input[i].innerText)
    }
  
}