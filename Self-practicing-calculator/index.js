const buttons = document.querySelectorAll(".buttons")
const input = document.getElementById("inputValue")

buttons.forEach(buton => {
    buton.addEventListener("click", () => {
      const value = buton.textContent;

      if(value=="=") {
        try{
            input.value = eval(input.value);
        } catch {
            input.value = "Error"
        }
      } 
      else if (value == "x"){
        input.value = input.value + '*';
      }
      
      else if (value=="C") {

        input.value='';
      }
     
      else {
        input.value += value;
      }
    })
})