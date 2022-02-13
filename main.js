const theme_trigger_1 = document.querySelector('#state-1');
const theme_trigger_2 = document.querySelector('#state-2');
const theme_trigger_3 = document.querySelector('#state-3');

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
