import { LOCALE_SET } from "../types/locale";

let lg = "en";
if(navigator.language.startsWith("fr") || navigator.userLanguage.startsWith("fr")){
    lg = "fr"
}

export default function locale(state={lang:lg}, action={}){
    switch(action.type){
        case LOCALE_SET:
            return {lang: action.lang};
        default: 
            return state;
    }
}