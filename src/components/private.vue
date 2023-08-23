<template>
  <div>
    <div>
      <p>
        개인정보개인정보개인정보개인정보개인정보<br/>
        개인정보개인정보개인정보개인정보개인정보<br/>
        개인정보개인정보개인정보개인정보개인정보<br/>
        개인정보개인정보개인정보개인정보개인정보<br/>
        개인정보개인정보개인정보개인정보개인정보<br/>
        개인정보개인정보개인정보개인정보개인정보<br/>
        개인정보개인정보개인정보개인정보개인정보<br/>
        개인정보개인정보개인정보개인정보개인정보<br/>
        개인정보개인정보개인정보개인정보개인정보<br/>
      </p>
    </div>
    <footer>
      <inquirycontent @triggerFadeIn="contentfadein('last')" :persec="1"><div></div></inquirycontent>
      <img class="footer_img" src="@/assets/images/logo_w.png">
<!--      <ul>
        <li>개인정보처리방침</li>
      </ul>-->
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
    </footer>
  </div>
</template>

<script>
export default {
  name: "private",
  data(){
    return{

    }
  }
}
</script>

<style scoped>
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
  border: 1px solid #000;
}
</style>
