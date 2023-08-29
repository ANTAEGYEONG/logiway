<template>
  <div>
    <div class="private_div">
      <h2>개인정보 수집 및 이용 동의</h2>
      <br>
      <p>
        로지웨이㈜는 아래와 같이 개인정보를 수집 이용합니다
      </p>
      <table style="overflow-x:auto;">
        <thead>
          <tr>
            <th>수집 이용 목적</th>
            <th>수집 이용 항목(필수)</th>
            <th>보유 및 이용기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>홈페이지 내 견적 및 상담문의</td>
            <td>이름, 연락처, 이메일주소</td>
            <td>
              제공동의일로부터 이용목적 달성할때까지<br/>
              (단, 다른 법령에 따라 보존하여야 하는 경우에는 예외)
            </td>
          </tr>
        </tbody>
      </table>
      <p>개인정보 수집 이용에 동의를 거부하실 수 있으나, 동의 거부 시 서비스 이용이 제한됩니다. 그 밖의 사항은 로지웨이㈜의 개인정보 처리방침을 따릅니다.</p>
    </div>
    <!-- <footer>
      <inquirycontent @triggerFadeIn="contentfadein('last')" :persec="1"><div></div></inquirycontent>
      <img class="footer_img" src="@/assets/images/logo_w.png">
      <div class="footer_p">
        <p>로지웨이 주식회사&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;대표 : 이윤조&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;주소 : 경기도 안양시 동안구 평촌대로 239, 4층 421호(비산동, 신안메트로칸)<br>
          사업자등록번호 : 520-86-00639&nbsp;&nbsp;&nbsp;<br>
          메일 : logiway@logiway.co.kr
        </p>
      </div>
      <div class="footer_txt">
        <p>© 2023 LOGIWAY. All Rights Reserved</p>
        <select @change="familysitechange($event)">
          <option value="0">FAMILY SITE</option>
          <option value="1">인성데이타</option>
          <option value="2">로지올</option>
          <option value="3">바이크뱅크</option>
          <option value="4">닷스테이션</option>
        </select>
      </div>
    </footer> -->

<!--    <footer>
    <div class="footer_P">
      <img class="footer_img" src="@/assets/images/logo_w.png">
      <ul>
        <li @click="private">개인정보처리방침</li>
      </ul>
      <div class="footer_p">
        <p>로지웨이 주식회사&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;대표 : 이윤조&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;주소 : 경기도 안양시 동안구 평촌대로 239, 4층 421호(비산동, 신안메트로칸)<br>
          사업자등록번호 : 520-86-00639&nbsp;&nbsp;&nbsp;<br>
          메일 : logiway@logiway.co.kr
        </p>
      </div>
      <div class="footer_txt">
        <p>© 2023 LOGIWAY. All Rights Reserved</p>
        <select @change="familysitechange($event)">
          <option value="0">FAMILY SITE</option>
          <option value="1">인성데이타</option>
          <option value="2">로지올</option>
          <option value="3">바이크뱅크</option>
          <option value="4">닷스테이션</option>
        </select>
      </div>
    </div>
    <div class="footer_T">
      <img class="footer_img" src="@/assets/images/logo_w.png">
      <ul>
        <li @click="private">개인정보처리방침</li>
      </ul>
      <div class="footer_p">
        <div class="footer_p">
          <p>로지웨이 주식회사</p>
          <p>대표 : 이윤조</p>
          <p>주소 : 경기도 안양시 동안구 평촌대로 239, 4층 421호(비산동, 신안메트로칸)</p>
          <p>사업자등록번호 : 520-86-00639</p>
          <p>메일 : logiway@logiway.co.kr</p>
        </div>
      </div>
      <div class="footer_txt">
        <p>© 2023 LOGIWAY. All Rights Reserved</p>
        <select @change="familysitechange($event)">
          <option value="0">FAMILY SITE</option>
          <option value="1">인성데이타</option>
          <option value="2">로지올</option>
          <option value="3">바이크뱅크</option>
          <option value="4">닷스테이션</option>
        </select>
      </div>
    </div>
    <div class="footer_M">
      <img class="footer_img" src="@/assets/images/logo_w.png">
      <div class="footer_p">
        <p>로지웨이 주식회사</p>
        <p>대표 : 이윤조</p>
        <p>주소 : 경기도 안양시 동안구 평촌대로 239, 4층 421호(비산동, 신안메트로칸)</p>
        <p>사업자등록번호 : 520-86-00639</p>
        <p>메일 : logiway@logiway.co.kr</p>
      </div>
      <p class="copyright">© 2023 LOGIWAY. All Rights Reserved</p>
      <ul>
        <li @click="private">개인정보처리방침</li>
      </ul>
        <select @change="familysitechange($event)">
          <option value="0">FAMILY SITE</option>
          <option value="1">인성데이타</option>
          <option value="2">로지올</option>
          <option value="3">바이크뱅크</option>
          <option value="4">닷스테이션</option>
        </select>
    </div>
  </footer>-->
  </div>
</template>

<script>
export default {
  name: "private",
  data(){
    return{

    }
  },
  methods : {
    familysitechange(event){

      if(event.target.value == 1){
        window.open("https://www.insungdata.com/")
      }else if(event.target.value == 2){
        window.open("https://logiall.com/")
      }else if(event.target.value == 3){
        window.open("http://www.bikebank.kr/")
      }else if(event.target.value == 4){
        window.open("https://www.dotstation.kr/")
      }
    },

    private(){
      let vm = this
      let routerdata = vm.$router.resolve({ name: 'private' })
      window.open(routerdata.href, '_blank');
    },
  }
}
</script>

<style scoped>
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-size: 1.125rem;
  font-weight: bold;
}

#mapContainer {
  width: 100vw;
  height: 50vh;
}
.private_list{overflow-x: auto; display: block; width: fit-content;  max-width: 100%; border: 1px solid #000;}
.private_list thead, .private_list thead tr, .private_list thead th{border-top:0px;}
/* .private_list thead th{border-top:0px;} */
.private_list thead th:first-child, .private_list td:first-child{border-left:0px;}
.private_list thead th:last-child, .private_list td:last-child{border-right:0px;}
.private_list tr{border-left: 0px; border-right: 0px;}
.private_list tr:last-child, .private_list tr:last-child td, .private_list tr:nth-last-child(2) td:first-child{border-bottom:0px;}
table{margin:6px 0; border: 1px solid #e0e1e3;background: #fff ; }
tr ,th, td{
  font-size: 15px !important;
  padding: 4px 8px !important;
  color: #000 !important;
  text-align: left;
  border: 1px solid #000;
  vertical-align: middle;
}
tbody{overflow-x: scroll;}
.private_div{padding:20px; text-align: left; word-break: keep-all;}
h2{font-size: 20px;}


/* footer */

footer{background: var(--main-navy, #262E40); padding: 100px 160px; text-align:left;}
.footer_img{width: 264px; margin-bottom: 40px;}
.footer_p p{color: #8B95A1; font-size: 1rem;font-weight: 500; line-height: 220%; letter-spacing: -0.64px;}
footer ul{width: 100%; display: block; overflow: hidden; margin-bottom:40px;}
footer ul li{float:left; font-weight:bold; color:#fff; padding-right:40px; font-size:1.125rem; cursor: pointer;}
.footer_txt{color: #8B95A1; margin-top:22px; display: flex; justify-content: space-between; align-items: flex-end;}
.footer_txt p{color: #8B95A1;}
.footer_txt select{-webkit-appearance:none; -moz-appearance:none; appearance:none; background:url(@/assets/images/arrow.png) no-repeat 95% 50% #262E40; background-size: 20px 20px; color: #999; font-size: 1rem; font-style: normal; font-weight: 500; line-height: 160%; letter-spacing: -0.64px;width: 226px; padding: 16px;  border-radius: 8px; border: 1px solid #8B95A1; height: 56px;;}
select::-ms-expand{display:none;}
.footer_txt select option{}

@media all and (min-width:1920px){
  .footer_P{display:block;}
  .footer_T{display:none;}
  .footer_M{display:none;}
}

@media all and (min-width:1280px) and (max-width:1850px){
.footer_P{display:block;}
.footer_T{display:none;}
.footer_M{display:none;}
}

@media all and (min-width:768px) and (max-width:1280px) {
  /* footer */
footer{background: var(--main-navy, #262E40); padding: 100px 48px; text-align:left;}
.footer_M{display:none;}
.footer_img{width: 264px; margin-bottom: 40px;}
.footer_p p{color: #8B95A1; font-size: 1rem;font-weight: 500; line-height: 220%; letter-spacing: -0.64px;}
footer ul{width: 100%; display: block; overflow: hidden; margin-bottom:40px;}
footer ul li{float:left; font-weight:bold; color:#fff; padding-right:40px; font-size:1.125rem; cursor: pointer;}
.footer_txt{color: #8B95A1; margin-top:22px; display: flex; justify-content: space-between; align-items: flex-end;}
.footer_txt p{color: #8B95A1;}
.footer_txt select{-webkit-appearance:none; -moz-appearance:none; appearance:none; background:url(@/assets/images/arrow.png) no-repeat 95% 50% #262E40; background-size: 20px 20px; color: #999; font-size: 1rem; font-style: normal; font-weight: 500; line-height: 160%; letter-spacing: -0.64px;width: 226px; padding: 16px;  border-radius: 8px; border: 1px solid #8B95A1; height: 56px;;}
select::-ms-expand{display:none;}
.footer_txt select option{}

.footer_P{display:none;}
.footer_T{display:block;}
.footer_M{display:none;}
}

@media all and (max-width:768px) {
  /* footer */
footer{padding:60px 20px;}
.footer_P{display:none;}
.footer_M{display:block;}
.footer_img{width:160px; height:inherit;}
footer ul{margin-bottom:32px;}
footer ul li{font-size:1rem; margin-top:20px;}
.footer_p{}
.footer_p p{word-break:keep-all; font-size: 0.875rem; font-weight: 400; line-height: inherit; letter-spacing: -0.04em; text-align: left; margin-bottom:8px;}
.footer_p p:last-child{margin-bottom:0px;}
.copyright{word-break: keep-all; font-size: 0.875rem; font-weight: 400; line-height: inherit; letter-spacing: -0.04em; text-align: left; color: #8B95A1; margin-top:20px; }
.footer_M select{width:100%; -webkit-appearance:none; -moz-appearance:none; appearance:none; background:url(@/assets/images/arrow.png) no-repeat 95% 50% #262E40; background-size: 20px 20px; color: #999; font-size: 1rem; font-style: normal; font-weight: 500; line-height: 160%; letter-spacing: -0.64px; padding: 14px 16px;  border-radius: 8px; border: 1px solid #8B95A1; height: 56px;;}
select::-ms-expand{display:none;}
.footer_M select option{}
.footer_P{display:none;}
.footer_T{display:none;}
.footer_M{display:block;}
}

</style>
