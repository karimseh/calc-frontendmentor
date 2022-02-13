const theme_trigger_1 = document.querySelector('#state-1');
const theme_trigger_2 = document.querySelector('#state-2');
const theme_trigger_3 = document.querySelector('#state-3');

const Numbers = document.querySelectorAll('[data-num]');
const Operations = document.querySelectorAll('[data-op]');
const screen  = document.querySelector('#result');
const equal  = document.querySelector('#equal');
const reset  = document.querySelector('#reset');
const del  = document.querySelector('#del');

const THEME1 = {
     BACKGROUND_COLOR: "hsl(222, 26%, 31%)",
     KEYPAD_COLOR : "hsl(223, 31%, 20%)",
     RESULT_COLOR : "hsl(224, 36%, 15%)",
     KEY_BACKGROUND_1 : "hsl(30, 25%, 89%)",
     KEY_BACKGROUND_TOGGLE : "hsl(6, 63%, 50%)",
     KEY_BACKGROUND_2 : "hsl(225, 21%, 49%)",
     KEY_SHADOW_1 : "hsl(28, 16%, 65%)",
     KEY_SHADOW_TOGGLE : "hsl(6, 70%, 34%)",
     KEY_SHADOW_2: "hsl(224, 28%, 35%)",
     TEXT_COLOR_1: "hsl(221, 14%, 31%)",
     TEXT_COLOR_2: "white",
     TEXT_COLOR_3: "white",
     EQUAL_COLOR_3: "white",
}

const THEME2 = {
     BACKGROUND_COLOR: "hsl(0, 0%, 90%)",
     KEYPAD_COLOR : "hsl(0, 5%, 81%)",
     RESULT_COLOR : "hsl(0, 0%, 93%)",
     KEY_BACKGROUND_1 : "hsl(45, 7%, 89%)",
     KEY_BACKGROUND_TOGGLE : "hsl(25, 98%, 40%)",
     KEY_BACKGROUND_2 : "hsl(185, 42%, 37%)",
     KEY_SHADOW_1 : "hsl(35, 11%, 61%)",
     KEY_SHADOW_TOGGLE : "hsl(25, 99%, 27%)",
     KEY_SHADOW_2: "hsl(185, 58%, 25%)",
     TEXT_COLOR_1: "hsl(60, 10%, 19%)",
     TEXT_COLOR_2: "hsl(60, 10%, 19%)",
     TEXT_COLOR_3: "white",
     EQUAL_COLOR_3: "white",
}
const THEME3 = {
     BACKGROUND_COLOR: "hsl(268, 75%, 9%)",
     KEYPAD_COLOR : "hsl(268, 71%, 12%)",
     RESULT_COLOR : "hsl(268, 71%, 12%)",
     KEY_BACKGROUND_1 : "hsl(268, 47%, 21%)",
     KEY_BACKGROUND_TOGGLE : "hsl(176, 100%, 44%)",
     KEY_BACKGROUND_2 : "hsl(281, 89%, 26%)",
     KEY_SHADOW_1 : "hsl(290, 70%, 36%)",
     KEY_SHADOW_TOGGLE : "hsl(177, 92%, 70%)",
     KEY_SHADOW_2: "hsl(285, 91%, 52%)",
     TEXT_COLOR_1: "hsl(52, 100%, 62%)",
     TEXT_COLOR_2: "hsl(52, 100%, 62%)",
     TEXT_COLOR_3: "white",
     EQUAL_COLOR_3: "hsl(198, 20%, 13%)",
}



function applyTheme(theme){
    let root = document.documentElement;
    root.style.setProperty('--BACKGROUND_COLOR',theme.BACKGROUND_COLOR);
    root.style.setProperty('--KEYPAD_COLOR',theme.KEYPAD_COLOR);
    root.style.setProperty('--RESULT_COLOR',theme.RESULT_COLOR);
    root.style.setProperty('--KEY_BACKGROUND_1',theme.KEY_BACKGROUND_1);
    root.style.setProperty('--KEY_BACKGROUND_TOGGLE',theme.KEY_BACKGROUND_TOGGLE);
    root.style.setProperty('--KEY_BACKGROUND_2',theme.KEY_BACKGROUND_2);
    root.style.setProperty('--KEY_SHADOW_1',theme.KEY_SHADOW_1);
    root.style.setProperty('--KEY_SHADOW_TOGGLE',theme.KEY_SHADOW_TOGGLE);
    root.style.setProperty('--KEY_SHADOW_2',theme.KEY_SHADOW_2);
    root.style.setProperty('--TEXT_COLOR_1',theme.TEXT_COLOR_1);
    root.style.setProperty('--TEXT_COLOR_2',theme.TEXT_COLOR_2);
    root.style.setProperty('--TEXT_COLOR_3',theme.TEXT_COLOR_3);
    root.style.setProperty('--EQUAL_COLOR_3',theme.EQUAL_COLOR_3);
}

theme_trigger_1.addEventListener('change', ()=>{
    if(theme_trigger_1.checked){
        applyTheme(THEME1);
    }
})
theme_trigger_2.addEventListener('change', ()=>{
    if(theme_trigger_2.checked){
        applyTheme(THEME2);
    }
})
theme_trigger_3.addEventListener('change', ()=>{
    if(theme_trigger_3.checked){
        applyTheme(THEME3);
    }
})


var first_operand ;
var ope;
Operations.forEach((op)=>{
    op.addEventListener('click', ()=>{
        
        switch(op.innerHTML){
        case "+":
            first_operand ? first_operand += Number(screen.innerHTML) : first_operand= Number(screen.innerHTML);
            ope = "+"
            screen.innerHTML = "0";
        break;
        case "-":
            first_operand ? first_operand -= Number(screen.innerHTML) :first_operand= Number(screen.innerHTML);
            ope = "-"
            screen.innerHTML = "0";
        break;
        case "/":
            first_operand ? first_operand /= Number(screen.innerHTML) :first_operand= Number(screen.innerHTML);
            ope = "/"
            screen.innerHTML = "0";
        break;
        case "x":
            first_operand ? first_operand *= Number(screen.innerHTML) : first_operand= Number(screen.innerHTML);
            ope = "x"
            screen.innerHTML = "0";
        break;
            }
        op.blur()
    })
    

})
Numbers.forEach((num)=>{
    num.addEventListener('click',()=>{
        screen.innerHTML === "0" && num.innerHTML !== "." ? screen.innerHTML = num.innerHTML : screen.innerHTML += num.innerHTML;
        num.blur();
    })
})
equal.addEventListener("click", ()=>{
    if(first_operand){

        let second_operand = Number(screen.innerHTML);
        let result;
        switch(ope){
            case "+":
                result = second_operand + first_operand;
                screen.innerHTML = result;
                first_operand = undefined;
            break;
            case "-":
                result = first_operand - second_operand;
                screen.innerHTML = result;
                first_operand = undefined;
            break;
            case "/":
                result = first_operand / second_operand;
                screen.innerHTML = result;
                first_operand = undefined;
            break;
            case "x":
                result = second_operand * first_operand;
                screen.innerHTML = result;
                first_operand = undefined;
            break;
        }
    }
    
})
reset.addEventListener('click',()=>{
    first_operand = undefined;
    ope= undefined;
    screen.innerHTML = "0";
    reset.blur()

})

del.addEventListener("click",()=>{
    if(screen.innerHTML !== "0"  && screen.innerHTML.length != 1){
    screen.innerHTML = screen.innerHTML.slice(0, -1)
        
    }else {
        screen.innerHTML = "0"
    }
    del.blur();
})

document.addEventListener('keydown', (event) => {
        
        Numbers.forEach((num)=>{
            if(num.innerHTML === event.key){
                num.click()
            }
        })
        Operations.forEach((op)=>{
            if(op.innerHTML === event.key){
               
                op.click()
            }else if(op.innerHTML === "x" && event.key === "*"){
                op.click()
            }
        })
        if(event.key === "Backspace"){
           
            del.click()
        }
        if(event.key === "Enter"){
            
            equal.click()
        }

  }, false);

  document.querySelector('.__result').addEventListener('click',()=>{
      navigator.clipboard.writeText(screen.innerHTML);
      document.querySelector('.__copy_to_clipboard').style.display = "flex";
      setTimeout(()=>{
        document.querySelector('.__copy_to_clipboard').style.display = "none";
      },5000)
  })