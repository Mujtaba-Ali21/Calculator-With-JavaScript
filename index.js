let ans = "";

let buttons = document.querySelectorAll("span");

Array.from(buttons).forEach(item => {
    item.addEventListener("click", (item) => {

        if (item.target.innerHTML == "=") {
            ans = eval(ans)
            document.querySelector("input").value = ans
        }

        else if(item.target.innerHTML == "C"){
            ans = ""
            document.querySelector("input").value = ans
        }

         else {
            ans = ans + item.target.innerHTML;
            document.querySelector("input").value = ans
        }

    });
});