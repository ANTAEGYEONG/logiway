<template>
  <div id="mapContainer" class="mapContainer"> <!-- style="height:600px; width:800px"-->
    <button @click="onofftable">테이블 보이기</button><br/>

    <transition name="tablecontent" appear>
      <div class="info" style="width : 45%; float : right; z-index : 2;" v-show="tableshow">
        <div style="float: right; background: white;">
          <span>Center: {{ center }}</span><br/>
          <span>Zoom: {{ zoom }}</span><br/>
          <span>total: {{ total }}</span><br/>
          <span>count: {{ loginstore.count }}</span><br/>
          <button @click="countup">up</button><br/>
          <button @click="countdown">down</button><br/>
          <button @click="reset">reset</button><br/>
          <button @click="clickbutton">아래로</button><br/>

          <button @click="onofftable">테이블 숨기기</button><br/>
        </div>


<!--        <div class="tableDiv">
          <table>
            <colgroup>
              <col v-for="(item, index) in headers" :key="'size-' + index" />
            </colgroup>
            <thead>
            <tr>
              <th v-for="(item, index) in headers" :key="'header-' + index">{{item.text}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in items" :key="'item-' + index">
              <td v-for="(itemcon, idx) in headers" :key="'item-key-' + idx">
                {{getlistvalue(item, idx, itemcon)}}
              </td>
            </tr>
            </tbody>
          </table>

        </div>
        <pager_table :pass="pager"></pager_table>-->
      </div>
    </transition>
    <div class="info" style="height: 80%;width: 50%; z-index : 1;">
      <l-map
          ref="map"
          :max-zoom="19"
          :zoom="zoom"
          :center="center"
          :bounds="bounds"
          @update:zoom="zoomUpdated"
          @update:center="centerUpdated"
          @update:bounds="boundsUpdated"
      >

        <l-tile-layer
            :url="url"
            :attribution="attribution"

        ></l-tile-layer>

        <l-marker ref="marker" v-for="(marker, index) in markers" v-bind:key="marker" :lat-lng="marker.latlng" @ready="clickmarker($event, index, marker)">
          <l-popup>
            관광지 : {{marker.item.tourspotNm}}<br/>
            전화번호 : {{marker.item.refadNo}}<br/>
            주소 : {{marker.item.tourspotAddr}}<br/>
            이용시간 : {{marker.item.mngTime}}<br/>
          </l-popup>
          <l-tooltip>
            관광지 : {{marker.item.tourspotNm}}<br/>
            전화번호 : {{marker.item.refadNo}}<br/>
            주소 : {{marker.item.tourspotAddr}}<br/>
            이용시간 : {{marker.item.mngTime}}<br/>
          </l-tooltip>
        </l-marker>
      </l-map>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/><br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div  ref="content"></div>
      <DreamObserver @triggerFadeIn="fadeIn" @triggerFadeOut="fadeOut">
        <transition name="fade-slide" appear>
          <div v-show="show" ref="dreamWrapper" class="dreamWrapper">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </transition>

        <transition name="fade-slide" appear>
          <div v-show="show2">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <p>가나다라마바사</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </transition>

      </DreamObserver>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

<!--      <div style="float : left;height: 90%;width: 50%;" v-if="content != null">
        <span>관광지 : {{marker.item.tourspotNm}}</span><br/>
        <span>전화번호 : {{marker.item.refadNo}}</span><br/>
        <span>주소 : {{marker.item.tourspotAddr}}</span><br/>
        <span>이용시간 : {{marker.item.mngTime}}</span><br/>

      </div>-->
    </div>

  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LMarker, LTileLayer,LPopup, LTooltip } from "@vue-leaflet/vue-leaflet";
import L from 'leaflet';

import { useEventListener } from '@vueuse/core'

import Pager from "@/components/common/pager.vue";

import {useloginstore} from "@/store/login";
import {usescrollstore} from "@/store/scrollcontent";

import TriggerObserver from "@/components/common/triggerObserver";


export default {
  name: "map_view",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,

    DreamObserver : TriggerObserver,

    /*Pager,*/
  },
  data() {
    return {
      map: null,

      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      zoom: 12,
      center: [36.32747, 127.400551],
      bounds: null,
      markerLatLng: [36.32747, 127.400551],

      markers : [],

      leafletReady: false,
      leafletObject: null,

      visible: false,
      mapReady : null,
      clickmarker : null,

      headers : [],
      headers2 : [],
      items : [],
      total : 0,

      tableshow : true,

      content : null,

      loginstore : null,
      scrollstore : null,
      target : null,


      show : false,
      show2 : false,

      pager: {
        model: {},
        pageNo: 1,
        pageNum:1,
        totalSize: 100,
        rowSize: 10,
        blockSize: 5,
        endSize:0,
        list: [],
        href:"javascript:void(0);",
        callBack: function (n) {
          //this.model.getBoardList(n);
          //this.model.fnOnPostSearchList(n);
          this.model.getlist(n);

        }
      }

    };
  },
  watch: {
    items(newval){
      let vm = this

      if(newval.length > 0){
        let array = []


          for(let i in newval){

            if(newval[i].mapLat != 0) {
              array.push({
                latlng: L.latLng(newval[i].mapLat, newval[i].mapLot),
                item: newval[i]
              })
            }

          }

        vm.markers = array

       //console.log(vm.markers)


      }else{
        vm.markers = []
      }
    },

    currentPage(newval){
      console.log(newval)
    },
  },
  created(){
    let vm = this



    vm.headers= [
      { text: "관광지"           , value: "tourspotNm"},
      { text: "우편번호"         , value: "tourspotZip"},
      { text: "전화번호"         , value: "refadNo"},
      { text: "주소"            , value: "tourspotAddr"},
      { text: "상세주소"         , value: "tourspotDtlAddr"},
      { text: "장소 소개"        , value: "tourspotSumm"},


    ]

    vm.headers2 = [
      { text: "이용요금"         , value: "tourUtlzAmt"},
      { text: "이용시간"         , value: "mngTime"},
      { text: "주차장"          , value: "pkgFclt"},
      { text: "LON"            , value: "mapLot"},
      { text: "LAT"            , value: "mapLat"},
    ]

    /*
    *       { text: "홈페이지"         , value: "urlAddr"},
    * */

    vm.loginstore = useloginstore();
    vm.scrollstore = usescrollstore();

    vm.scrollstore.setscrolltop(0);
    vm.scrollstore.setcurrentsection("");


    vm.getlist(1)
  },

  mounted() {
    let vm = this

    const addMarker = e => {
      vm.markers.push(e.latlng)
    }
    vm.mapReady = map => {
      map.on('click', addMarker)

    }

    vm.target = document.querySelector('#mapContainer');
    vm.target.addEventListener('scroll', vm.handleScroll);

    /*useEventListener(vm.target, "scroll", (e) => {
      console.log(e)
    })*/




    vm.clickmarker = (marker, index, content) => {

      marker.on("click", function (event) {
        console.log(event, index, content)
        /*vm.content = content*/



      })
    }
  },
  computed: {

  },
  onBeforeUnmount() {
    let vm = this
    if (vm.map) {
      vm.map.remove();
    }
  },
  methods: {
    async onLeafletReady() {
      let vm = this
      await vm.$nextTick();
      vm.leafletObject = vm.$refs.map.leafletObject;
      vm.leafletReady = true;
    },
    zoomUpdated (zoom) {
      let vm = this
      vm.zoom = zoom;
    },
    centerUpdated (center) {
      let vm = this
      vm.center = center;
    },
    boundsUpdated (bounds) {
      let vm = this
      vm.bounds = bounds;
    },

    getlist(page){
      let vm = this


      vm.$axios.get("https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot?serviceKey=5abpcab%2BqMbUX7XB2NKytMrW%2FjLU46c8f7Z5ghIrco6ugSJ8aBd8fzRasEYxQGmGzOLObgep0cdP7x9yXyuzdw%3D%3D&pageNo="+ page + "&numOfRows=10").then(res => {

        let list = res.data.response.body.items

        vm.items = list
        vm.total = res.data.response.body.totalCount

        vm.pager.totalSize = res.data.response.body.totalCount
        vm.pager.pageNum = (vm.pager.pageNo * vm.pager.rowSize) - vm.pager.rowSize;
        Pager.props = Pager.methods.createPager(vm.pager, vm, "list");

      })
    },

    countup(){
      let vm = this

      vm.loginstore.increment()
    },

    countdown(){
      let vm = this

      vm.loginstore.decrement()
    },

    reset(){
      let vm = this

      vm.loginstore.reset()
    },

    handleScroll(e){
      let vm = this

      let scrolltop = e.target.scrollTop

      //console.log(scrolltop)

      vm.scrollstore.setscrolltop(scrolltop)

      //console.log(vm.scrollstore.getscrolltop)
    },


    getlistvalue(item, index, headeritem){
      //let vm = this

      //console.log(index, headeritem)

      let key = headeritem.value

      //let key = vm.headers[index].value


      let content = item[key]

      return content
    },

    clickbutton(){
      let vm = this

      console.log(vm.$refs.content)
      vm.$refs.content.scrollIntoView({behavior : 'smooth', block : 'start'})
    },

    onofftable(){
      this.tableshow = !this.tableshow
    },


    getnewdate(value){
      let str = value.trim()+"00";

      let dt = str.replace(/^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/, '$1-$2-$3 $4:$5:$6');
      /// 날짜 변환을 위해 날짜형식으로 String 변환

      /////let date = new Date(dt) //// 아직 날짜변환까지는 필요없음

      return dt

    },

    enter : function(el){
      console.log("enter try")
      el.style.opacity = 0;
    },

    fadeIn : function(e){
      //console.log(e)
      console.log("fadein try")
      this.show = true
      this.show2 = true
      //this.$refs.dreamWrapper.style = "position: relative; animation: fadeInUp 5s ease-in-out;"
    },

    fadeOut : function(e){
      //console.log(e)
      console.log("fadeOut try")

      this.show = false
      this.show2 = false
      //this.$refs.dreamWrapper.style = "opacity : 0"
    },

  },
}
</script>

<style scoped>



#mapContainer {
  width: 100vw;
  height: 100vh;
}

.tableDiv {
  border-radius: 5px;
  border: 1px solid #e0e1e3;
}
.tableDiv table th {
  font-size: 15px;
  padding: 5px 10px 5px 10px;
  color: #fff;
  background: #9d9fac;
  border: 1px solid #000;

}

.tableDiv table td {
  font-size: 15px;
  padding: 5px 10px 5px 10px;
  text-align: center;
  color: #2e2f30;
  background: #ffffff;
  border: 1px solid #000;
}

.mapContainer{padding: 16px 16px 16px 0; width: calc(100% - 332px);  float: left; height: calc(100vh - 52px); overflow-y: scroll;}


.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 1s ease, transform 1s ease-in-out;
  transform: translateY(0px);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(100px);
}



.tablecontent-enter-active,
.tablecontent-leave-active {
  transition: opacity 1s ease, transform 1s ease-in-out;
  transform: translateY(0px);
}

.tablecontent-enter-from,
.tablecontent-leave-to {
  opacity: 0;
  transform: translateY(100px);
}


@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
}
</style>
