<template>
    <div class="header">
      <div class="header_bg">
        <div class="head_left" @click="clickcontent('top')">
            <img src="@/assets/images/logo.png">
        </div>
        <ul class="head_right">
          <li :class="{'click_hd' : scrollsection == 'main'}" @click="clickcontent('top')">HOME</li><!--10%-->
          <li :class="{'click_hd' : scrollsection == 'second'}" @click="clickcontent('intro')">회사소개</li><!--45%-->
          <li :class="{'click_hd' : scrollsection == 'third'}" @click="clickcontent('business')">사업소개</li> <!--86.9%-->
          <li :class="{'click_hd' : scrollsection == 'last'}" @click="clickcontent('estimate')">견적문의</li> <!---->
<!--            <li>운송사업</li>
            <li>주선사업</li>-->
        </ul>
        <div class="head_right_m">
          <img class="m_tab" src="@/assets/images/tab.png" @click="headeropen = !headeropen">
          <div class="header_ul" v-show="headeropen">
            <div class="dim" @click="headeropen = false"></div>
            <ul class="head_m_ul">
              <li @click="clickcontent('intro')">회사소개</li>
              <li @click="clickcontent('business')">사업소개</li>
              <li @click="clickcontent('estimate')">견적문의</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import {ref, watch, onMounted, computed} from "vue"

import {usescrollstore} from "@/store/scrollcontent";

export default {
  name: "Header",
  setup() {
    let scrollstore = usescrollstore()

    return {
      scrollstore
    }
  },
  data() {
    return {
      headeropen : false,
    }
  },
  computed : {
    scrolltop :{
      get(){
        //console.log(this.scrollstore.getscrolltop)
        return this.scrollstore.getscrolltop
      }
    },
    scrollsection :{
      get(){
        //console.log(this.scrollstore.getscrolltop)
        return this.scrollstore.getscrollsection
      }
    }
  },
  methods : {
    clickcontent(value){
      let vm = this

      console.log(value)

      function setting(){
        return new Promise((resolve, reject) => {
          vm.scrollstore.setcurrentsection("")
          resolve("1")
        })
      }

      setting().then(function (resolvedData) {
        vm.scrollstore.setcurrentsection(value)

        vm.headeropen = false

        if(value == "top"){
          vm.scrollstore.setscrollsection("main")
        }else if(value == "intro"){
          vm.scrollstore.setscrollsection("second")
        }else if(value == "business"){
          vm.scrollstore.setscrollsection("third")
        }else if(value == "estimate"){
          vm.scrollstore.setscrollsection("last")
        }
      })

    }
  }

}
</script>
<style scoped>
.header{width: 100%; height: 60px; position: sticky; left: 0; top:0; background: #FFF;  z-index: 2;}
.header_bg{width: 100%; margin: 0 auto;display: flex; align-items: center; justify-content: space-between; padding:0 160px; height: 60px;}
.head_left{ cursor : pointer; width:200px;}
.head_left img{width: 100%; height: inherit;}
.head_right{}
.head_right li{float: left; margin-left: 78px; color: #121212; cursor : pointer;}
.head_right li.click_hd{color: #FF5819;}
.head_right li:hover{color: #FF5819;transition: all 0.2s;}
.head_right_m{display:none;}
@media all and (min-width:1920px){
.header_bg{width: 1920px;}
}
@media all and (min-width:767px) and (max-width:1279px){
.header_bg{padding:0px 48px;}
.head_right li{margin-left:48px;}
}
@media all and (min-width:0px) and (max-width:767px){
.dim{background: rgba(0, 0, 0, 0.2); z-index: 49; position: absolute; width: 100%; margin-top: 60px; height: calc(100vh - 60px); left: 0; top: 0;}
.header{position:fixed; z-index:50;}
.header_bg{max-width: 768px; padding:20px 16px; }
.head_left{width:152px;}
.head_left img{width: 100%; height: inherit;}
.head_right{display:none;}
.head_right_m{display:block; background:#fff;}
.m_tab{width:24px; height:24px;}
.head_m_ul{background:#fff; position:absolute; width:100%; left: 0; top: 100%; border-radius: 0 0 20px 20px; padding:0 20px; z-index:50;}
.head_m_ul li{max-width: 768px; position:relative; padding:14px 0; color: #000; font-size: 1rem; font-style: normal; font-weight: 400; line-height: 150%; letter-spacing: -0.64px; left:50%; transform:translateX(-50%);}
.head_m_ul li:after{position:absolute; content:""; left:0; bottom:0; width:100%; height:1px; background:#e0e0e0;}
.head_m_ul li:last-of-type:after{height: 0px;}
}
</style>
