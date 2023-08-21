import {defineStore} from "pinia"
import {useLocalStorage} from "@vueuse/core";

export const useloginstore = defineStore("login",{
    state : () => (
        {
            loginstate : useLocalStorage("loginstate", false),
            accesstoken : useLocalStorage("accesstoken", ""),


            count : useLocalStorage("count", 0),
        }
    ),
    actions : {
        increment(){ // 테스트용
            this.count++;
        },
        decrement(){ // 테스트용
            this.count--;
        },
        reset(){
          this.count = 0;
        },

        settingloginstate(loginstate){
            this.loginstate = loginstate
        },
    },
    getters : {
        doublecount(state){ // 테스트용
            return state.count * 2
        },

        getloginstate(state){
            return state.loginstate
        },
    }
})
