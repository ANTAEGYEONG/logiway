import {defineStore} from "pinia"
import {useLocalStorage} from "@vueuse/core";

export const usescrollstore = defineStore("menuscroll",{
    state : () => (
        {
            scrolltop : useLocalStorage("scrolltop", 0),
            currentsection : useLocalStorage("currentsection", ""),
            scrollsection :  useLocalStorage("scrollsection", ""),

        }
    ),
    actions : {
        setscrolltop(value){ // 테스트용
            this.scrolltop = value;
        },
        setcurrentsection(value){ // 테스트용
            this.currentsection = value;
        },
        setscrollsection(value){
            this.scrollsection = value;
        }
    },
    getters : {
       /* doublecount(state){ // 테스트용
            return state.count * 2
        },
*/
        getscrolltop(state){
            return state.scrolltop
        },
        getcurrentsection(state){
            return state.currentsection
        },
        getscrollsection(state){
            return state.scrollsection
        },
    }
})
