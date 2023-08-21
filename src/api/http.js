//2022.01.07 J.J.Park 최초생성

import axios from 'axios'

const instance = axios.create({
    baseURL:process.env.VUE_APP_BASE_URL,     //'env.파일명' 에 따라서 서버의 접속 주소가 달라짐
    headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});


instance.interceptors.request.use(
    config => {

        return config;

    },
    error => Promise.reject(error)
);

// //참고 : instance.interceptors.""  --> 서버로 부터 받은 응답을 코드로 내려보내기 전에 처리할 수 있다. ㅓ.
instance.interceptors.response.use(

    //http status가 200인 경우
    async (response) => {
        console.log("instance.interceptors.response 진입")
        response.headers['Access-Control-Allow-Origin'] = "*"

        /*console.log(response.headers.Authorization)*/
        return await response;
    },

    //http status가 200 이외의 "에러"로 들어왔을 경우
    async (error) => {
        const errorAPI = error.config;      //에러를 처리 한 후 다시 되돌리기 위해 호출된 API를 저장해 둔다.
/*error.response.status != 900*/
        //console.log(error);

        if (error != null) {

            console.log(error)

            // if (error.response.data['result_info']['code'] == 3000) {      //3000 : 엑세스 토큰 재 발급 요청
            //     console.log(error.response.data['result_info']['code'])
            //     errorAPI.retry = true;
            //
            //     //access token을 재발급 받아 저장합니다.
            //     await memberAPI.oauth_new_access_token().then((res) => {      // 여기에 awiat를 꼭 넣어 줘야 다 실행 될때 까지 기다린다.
            //
            //         ////// 정상일 경우
            //         console.log("res.data = ",res.data);
            //         if(res.data['result_info']['code'] == 1000){
            //             console.log('oauth_new_access_token() 호출했습니다.access-token을 받아옵니다.')
            //             console.log(res.data)       // "앞에 텍스트를 넣으면 res [object Object] 라고 나온다.
            //             console.log(res.headers)
            //             console.log(store.getters["getRefreshToken"])
            //             console.log(res.headers['authorization'])
            //             console.log(res.headers['authorization-refresh'])
            //
            //             //header에서 받아온 새로운 토큰으로 store의 access_token 값을 바꾸어줍니다. 이 토큰은 계속 request에서 사용됩니다.set으로 저장한다.
            //             /*store.commit('setAccessToken',res.headers['authorization'])*/
            //             /*store.commit('setAccessToken',res.headers.Authorization)*/
            //
            //             store.commit('setAccessToken',res.headers['authorization']);
            //             store.commit('setRefreshToken',res.headers['authorization-refresh']);
            //             store.commit('setLoginData',res.headers['authorization']);
            //
            //
            //
            //             console.log("다시 저장한 토큰 store.state.access_token:" + store.state.token.accessToken);
            //             console.log("다시 저장한 토큰 store.state.refreshToken:" + store.state.token.refreshToken);
            //
            //             //!!새로넣음//!!
            //             //로그인인지 여부를 true로 바꾸어준다.
            //             //this.isLogin=true
            //         }else{
            //             console.log("error.response.data['result_info']['code'] : "+error.response.data['result_info']['code'])
            //             console.log("로그아웃 처리를 하고 해당 페이지로 이동합니다.")
            //
            //             store.commit("setLogoutData")
            //
            //             //!!새로넣음//!!
            //             //로그인인지 여부를 false로 바꾸어준다
            //
            //             store.commit('setLoginState', false)
            //
            //         }
            //
            //     }).catch((error)=>{
            //         console.log("before login : ", this.isLogin);
            //         console.log(error);
            //
            //         console.log("로그아웃 처리를 하고 해당 페이지로 이동합니다.")
            //
            //         store.commit("setLogoutData")
            //
            //         //!!새로넣음//!!
            //         //로그인인지 여부를 false로 바꾸어준다.
            //
            //         store.commit('setLoginState', false)
            //
            //
            //     })
            //     return await instance(errorAPI);  //원래 호출했던 APi로 돌아가도록 한다.
            // }

            //3010,3020,3030,3040,3050일경우 (리프레시 토큰이거나 탈퇴된 경우)
            // if (error.response.data['result_info']['code'] != 3000) {
            //     console.log("error.response.data['result_info']['code']:"+error.response.data['result_info']['code'])
            //     console.log("로그아웃 처리를 하고 해당 페이지로 이동합니다.")
            //
            //     store.commit("setLogoutData")
            //
            //     store.commit('setLoginState', false)
            // }

        }
        // else{
        //     console.log("로그아웃 처리를 하고 해당 페이지로 이동합니다.")
        //
        //     store.commit("setLogoutData")
        //
        //     store.commit('setLoginState', false)
        // }
        return await Promise.reject(error);

    });

export default instance     //axios 객체를 export 할때 전달한다.
