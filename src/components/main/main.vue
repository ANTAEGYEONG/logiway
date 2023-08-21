<template>
  <div class="main" ref="main" id="main">
    <div class="main_bg" ref="swipersection">
      <maincontent @triggerFadeIn="contentfadein('main')" :persec="1"><div></div></maincontent>
      <swiper
          :slidesPerView="1"
          :spaceBetween="0"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :navigation="true"
          :modules="modules"
          class="mySwiper bg_swiper" ref="top"
      >
        <swiper-slide>
          <div class="swiper_bg">
            <div class="bg_txt">
              <h3 class="bg_txt_b">
                <b>화물 플랫폼의 기술력<p>과</p></b><br>
                <b>운송 전문성<p>의 결합</p></b>
                <b>로지웨이</b>
              </h3>
              <p class="bg_txt_p">
                화물 플랫폼의 최신기술과 운송 전문성이 결합된<br/>
                로지웨이만의 최적화된 물류 서비스를 만나보세요.
              </p>
            </div>
            <div class="swiper_bg_img">
              <img class="swiper_bg_main swiper_bg_main1" src="@/assets/images/illust1.png">
              <img class="swiper_bg_sub" src="@/assets/images/atom.png">
            </div>
          </div>
          <maincontent @triggerFadeIn="contentfadein('main')" :persec="1"><div></div></maincontent>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper_bg">
            <div class="bg_txt">
              <h3 class="bg_txt_b">
                <div class="bg_1920"><b>플랫폼 기반<p>의 즉시 배차</p></b><br></div>
                <!-- <div class="bg_1280"><b>플랫폼 기반<p>의</p></b><p>즉시 배차</p><br></div> -->
                <div class="bg_1280"><b>플랫폼 기반<p>의 즉시 배차</p></b><br></div>
                <b><p>원하는</p>&nbsp;때,</b><br>
                <b><p>원하는</p>&nbsp;곳<p>으로!</p></b>
              </h3>
              <p class="bg_txt_p">작은 박스 하나라도 필요한 곳 어디든<br>안전하고 신속하게 운송해 드립니다.</p>
            </div>
            <div class="swiper_bg_img">
              <img class="swiper_bg_main swiper_bg_main2" src="@/assets/images/illust2.png">
              <img class="swiper_bg3_sub swiper_bg3_sub_4" src="@/assets/images/speech_bub4.png">
              <img class="swiper_bg3_sub swiper_bg3_sub_5" src="@/assets/images/speech_bub5.png">
              <img class="swiper_bg3_sub swiper_bg3_sub_6" src="@/assets/images/speech_bub6.png">
              <img class="swiper_bg3_sub swiper_bg3_sub_7" src="@/assets/images/speech_bub7.png">
            </div>
          </div>
          <maincontent @triggerFadeIn="contentfadein('main')" :persec="1"><div></div></maincontent>
        </swiper-slide>
        <swiper-slide>

          <div class="swiper_bg">
            <div class="bg_txt">
              <h3 class="bg_txt_b">
                <b>고객과</b><br>
                <b><p>기사의</p>&nbsp;연결<p>을</p></b><br>
                <b><p>더</p>&nbsp;쉽고&nbsp;<p>더</p>&nbsp;빠르게</b>
              </h3>
              <p class="bg_txt_p">복잡하고 어려운 절차는 이제 그만 !<br>물류, 이제 로지웨이에서 해결하세요.</p>
            </div>
            <div class="swiper_bg_img">
              <img class="swiper_bg_main swiper_bg_main3" src="@/assets/images/illust3.png">
              <img class="swiper_bg2_sub swiper_bg2_sub_1" src="@/assets/images/speech_bub1.png">
              <img class="swiper_bg2_sub swiper_bg2_sub_2" src="@/assets/images/speech_bub2.png">
              <img class="swiper_bg2_sub swiper_bg2_sub_3" src="@/assets/images/speech_bub3.png">
            </div>
          </div>
          <maincontent @triggerFadeIn="contentfadein('main')" :persec="1"><div></div></maincontent>
        </swiper-slide>
      </swiper>
    </div>
    <div class="logi_intro" ref="introsection">
      <div class="logi_intro_con">
        <secondcontent @triggerFadeIn="contentfadein('second')" :persec="1"><div></div></secondcontent>
        <div class="logi_intro_L"></div>
        <div class="logi_intro_R">
          <b>로지웨이는</b>
          <p class="logi_intro_R_1920">
            화물 플랫폼의 운송 네트워크 및 위치관제를 활용하여 운송 인프라를 키우고<br>
            1톤~25톤까지 다양한 화물 트럭은 물론, 이륜차까지 활용하여<br>
            어떠한 종류의 화물도 즉시 운송 가능합니다.<br>
            또한, 계열사(인성데이타, 로지올, 바이크뱅크) 시너지를 통해<br>
            로지웨이만의 운송 전문성을 극대화하고 사업을 확장하고 있습니다.<br>
            로지웨이는 차별화된 물류 서비스 제공을 위해 끊임없이 도전하며 연구할 것을 약속합니다.<br>
          </p>
          <p class="logi_intro_R_1280">
            화물 플랫폼의 운송 네트워크 및 위치관제를 활용하여 운송 인프라를 키우고
            1톤~25톤까지 다양한 화물 트럭은 물론, 이륜차까지 활용하여
            어떠한 종류의 화물도 즉시 운송 가능합니다.<br>
            또한, 계열사(인성데이타, 로지올, 바이크뱅크) 시너지를 통해
            로지웨이만의 운송 전문성을 극대화하고 사업을 확장하고 있습니다.<br>
            로지웨이는 차별화된 물류 서비스 제공을 위해 끊임없이 도전하며 연구할 것을 약속합니다.<br>
          </p>
        </div>
      </div>
      <secondcontent @triggerFadeIn="contentfadein('second')" :persec="1"><div></div></secondcontent>
    </div>

  <div>
    <secondcontent @triggerFadeIn="contentfadein('second')" :persec="1"><div></div></secondcontent>
    <introobserver @triggerFadeIn="introfadeIn" :persec="0.4"> <!--@triggerFadeOut="introfadeOut" -->
        <div class="single_phrase">
          <div class="single_bg">
          <b class="notice">계열사 소개</b>
            <div class="single_phrase_img">
              <img class="single_phrase_back" src="@/assets/images/illust4.png">
              <img class="car" src="@/assets/images/123.png">
              <img class="car2" src="@/assets/images/car2.png">
              <img class="car3" src="@/assets/images/car3.png">
            </div>
          <transition name="introfade">
            <a href="https://www.insungdata.com/" target="_blank" class="phrase_work_1 phrase_work" v-show="introshow">
              <img src="@/assets/images/insung.png">
              <b>(주)인성데이타</b>
              <p>
                최신 기술의 화물 플랫폼 운영<br/> 전국 운송 네트워크 보유
              </p>
              <button class="introfade_btn">홈페이지 바로가기</button>
            </a>
          </transition>
          <transition name="introfade">
            <a href="http://www.bikebank.kr/" target="_blank" class="phrase_work_2 phrase_work" v-show="introshow">
              <img src="@/assets/images/bike_bank.png">
              <b>(주)바이크뱅크</b>
              <p>
                이륜차 렌탈, 판매, 정비<br/>
                전기바이크 유통, 생산, 판매 전문
              </p>
              <button class="introfade_btn">홈페이지 바로가기</button>
            </a>
          </transition>
          <transition name="introfade">
            <a href="https://logiall.com/" target="_blank" class="phrase_work_3 phrase_work" v-show="introshow">
              <img src="@/assets/images/logiall.png">
              <b>(주)로지올</b>
              <p>국내 1위 푸드/소화물 딜리버리<br/>플랫폼 운영</p>
              <button class="introfade_btn">홈페이지 바로가기</button>
            </a>
          </transition>
        </div>
      </div>
    </introobserver>
    <secondcontent @triggerFadeIn="contentfadein('second')" :persec="1"><div></div></secondcontent>
    <div class="logi_history">
        <b class="notice">한눈에 보는&nbsp;<span class="red_b">로지웨이</span> 히스토리</b>
        <secondcontent @triggerFadeIn="contentfadein('second')" :persec="1"><div></div></secondcontent>
        <logihisobserver @triggerFadeIn="logilinefadein" :persec="1"> <!-- @triggerFadeOut="logilinefadeout" -->
          <div class="logi_history_con">
          <transition name="logilinefade">
            <div class="logi_line" v-show="logilineshow"></div>
          </transition>

            <div class="logi_his_list">
              <div class="logi_line_div line_div_1">
                <transition name="logidiv1dot">
                  <div class="line_div_dot line_div_1_dot" v-show="logilineshow"></div>
                </transition>
                <transition name="logidiv1img">
                  <img class="logi_line_div_img line_div_img_1" src="@/assets/images/history1.png" v-show="logilineshow">
                </transition>
                <transition name="logidiv1txt">
                  <div class="logi_line_div_txt line_div_txt_1" v-show="logilineshow">
                    <ul class="logi_line_ul">
                      <b>2017</b>
                      <li class="logi_line_li">화물 운송 주선 사업으로 법인 설립</li>
                    </ul>
                  </div>
                </transition>
              </div>

              <div class="logi_line_div line_div_2">
                <transition name="logidiv2dot">
                  <div class="line_div_dot line_div_2_dot" v-show="logilineshow"></div>
                </transition>
                <transition name="logidiv2img">
                  <img class="logi_line_div_img line_div_img_2" src="@/assets/images/history2.png" v-show="logilineshow">
                </transition>
                <transition name="logidiv2txt">
                  <div class="logi_line_div_txt line_div_txt_2" v-show="logilineshow">
                    <ul class="logi_line_ul">
                      <b>2019</b>
                      <li class="logi_line_li">화물 공유 기사망 확대</li>
                      <li class="logi_line_li">직영 차량/기사 확대 운영</li>
                    </ul>
                  </div>
                </transition>
              </div>
              <div class="logi_line_div line_div_3">
                <transition name="logidiv3dot">
                  <div class="line_div_dot line_div_3_dot" v-show="logilineshow"></div>
                </transition>
                <transition name="logidiv3img">
                  <img  class="logi_line_div_img line_div_img_3" src="@/assets/images/history3.png" v-show="logilineshow">
                </transition>
                <transition name="logidiv3txt">
                  <div class="logi_line_div_txt line_div_txt_3" v-show="logilineshow">
                    <ul class="logi_line_ul">
                      <b>2021~2022</b>
                      <li class="logi_line_li logi_line_li_1920">기업 물류 운송 강화 (동원 홈푸드, 경동사 등)</li>
                      <li class="logi_line_li logi_line_li_1920">대형 화주 수주 및 운송 (경동나비엔 등)</li>
                      <li class="logi_line_li logi_line_li_1280">기업 물류 운송 강화<br> (동원 홈푸드, 경동사 등)</li>
                      <li class="logi_line_li logi_line_li_1280">대형 화주 수주 및 운송<br> (경동나비엔 등)</li>
                    </ul>
                  </div>
                </transition>
              </div>
              <div class="logi_line_div line_div_4">
                <transition name="logidiv4dot">
                  <div class="line_div_dot line_div_4_dot" v-show="logilineshow"></div>
                </transition>
                <transition name="logidiv4img">
                  <img  class="logi_line_div_img line_div_img_4" src="@/assets/images/history4.png" v-show="logilineshow">
                </transition>
                <transition name="logidiv4txt">
                  <div class="logi_line_div_txt line_div_txt_4" v-show="logilineshow">
                    <ul class="logi_line_ul">
                      <b>2023</b>
                      <li class="logi_line_li">로지웨이 주식회사로 사명 변경</li>
                    </ul>
                  </div>
                </transition>
              </div>
            </div>
        </div>
        </logihisobserver>
      <secondcontent @triggerFadeIn="contentfadein('second')" :persec="1"><div></div></secondcontent>
    </div>
  </div>
  <div class="logo_intro">
    <secondcontent @triggerFadeIn="contentfadein('second')" :persec="1"><div></div></secondcontent>
    <b class="notice">기업 로고(CI) 소개</b>
    <img class="logostory" src="@/assets/images/logostory.png">
    <div class="logo_intro_txt">
      <div class="logo_intro_t logo_intro_t1">
        <b>로고 스토리</b>
        <div>
          <img class="logostory_sub" src="@/assets/images/logostory_sub.png">
          <p class="pc_1920_txt">
            로지웨이의 심볼은 기업의 이니셜 (LW)과 이동하는 화물차의 모습을 표현하며,<br>
            볼드하고 견고한 이탈릭의 서체는 서비스의 유동성과 속도감을 나타내고 도로의 모양을 상징합니다.<br>
            메인색상의 밝은 오렌지는 모던하며 강렬한 로지웨이의 이미지를 전달합니다.
          </p>
          <p class="pc_1280_txt">
            로지웨이의 심볼은 기업의 이니셜 (LW)과 이동하는 화물차의 모습을 표현하며,<br>
            볼드하고 견고한 이탈릭의 서체는 서비스의 유동성과 속도감을 나타내고 도로의 모양을 상징합니다.
            메인색상의 밝은 오렌지는 모던하며 강렬한 로지웨이의 이미지를 전달합니다.
          </p>
        </div>
      </div>
      <div class="logo_intro_t logo_intro_t2">
        <b>메인컬러</b>
        <div class="main_color color_orange">
          <div class="main_color_txt_up">
            <b class="main_color_eg">Logiway<br>Orange</b>
            <b class="main_color_num">#ff5819</b>
          </div>
          <div class="main_color_txt_down">
            <div><b class="main_color_num">Pantone 165</b></div>
            <div><b class="main_color_num">RGB</b><p>255 88 25</p></div>
            <div><b class="main_color_num">CMYK</b><p>0 75 90 0</p></div>
          </div>
        </div>
        <div class="main_color color_navy">
          <div class="main_color_txt_up">
            <b class="main_color_eg">CITY<br>navy</b>
            <b class="main_color_num">#303d51</b>
          </div>
          <div class="main_color_txt_down">
            <div><b class="main_color_num">Pantone 546</b></div>
            <div><b class="main_color_num">RGB</b><p>48 61 81</p></div>
            <div><b class="main_color_num">CMYK</b><p>85 65 45 40</p></div>
          </div>
        </div>
      </div>
      <div class="filebox">
        <a href="/files/logiway_CI_png.zip" id="filedown" download>
          <label for="filedown">CI 다운로드</label>
        </a>
      </div>
    </div>
    <secondcontent @triggerFadeIn="contentfadein('second')" :persec="1"><div></div></secondcontent>
  </div>
  <div class="logi_work" ref="businesssection">
    <businesscontent @triggerFadeIn="contentfadein('third')" :persec="1"><div></div></businesscontent>
    <b class="notice">로지웨이가 하는 일</b>
    <div class="logi_work_con">
      <div class="logi_work_img">
        <img src="@/assets/images/logi_work.png" class="logi_work_img_main">
        <div class="logi_work_sub">
          <div class="logi_work_sub_img sub_img_1">
            <img src="@/assets/images/work_sub1.png">
            <p>전문성과 기술력을 겸비한 운송 사업</p>
          </div>
          <div class="logi_work_sub_img sub_img_2">
            <img src="@/assets/images/work_sub2.png">
            <p>화물 네트워크를<br>활용한 주선 사업</p>
          </div>
          <div class="logi_work_sub_img sub_img_3">
            <img src="@/assets/images/work_sub3.png">
            <p>차량 및<br>기사 관리 서비스</p>
          </div>
          <div class="logi_work_sub_img sub_img_4">
            <img src="@/assets/images/work_sub4.png">
            <p>고객 맞춤형<br>위치 관제 서비스</p>
          </div>
        </div>
      </div>
      <div class="logi_txt">빅데이터 기반의 종합 물류 플랫폼 로지웨이</div>
    </div>
    <businesscontent @triggerFadeIn="contentfadein('third')" :persec="1"><div></div></businesscontent>
  </div>
  <div class="logi_service">
    <businesscontent @triggerFadeIn="contentfadein('third')" :persec="1"><div></div></businesscontent>
    <div class="trans_ser trans_ser_1">
      <!-- <div class="trans_ser_L"><img class="trans_ser_img" src="@/assets/images/transport.png"></div> -->
      <div class="trans_ser_L"><div class="trans_ser_img"></div></div>
      <div class="trans_ser_R">
        <b class="logi_ser_b">운송 서비스</b>
        <p class="logi_ser_p logi_ser_p_1920">
          운송, 보관, 패키지 등 기업물류에 필요한 모든 물류서비스를 제공합니다.<br>
          1톤~25톤까지 다양한 차량으로 운송 가능하며, 화물의 종류와 상관없이<br> 고객 니즈에 맞는 운송서비스를 제공합니다.
        </p>
        <p class="logi_ser_p logi_ser_p_1280">
          운송, 보관, 패키지 등 기업물류에 필요한 모든 물류서비스를 제공합니다.<br>
          1톤~25톤까지 다양한 차량으로 운송 가능하며, 화물의 종류와 상관없이 고객 니즈에 맞는 운송서비스를 제공합니다.
        </p>
        <div class="trans_ser_boxes">
          <div class="trans_ser_boxes_4">
            <div class="trans_ser_box">
              <img src="@/assets/images/ser_1.png">
              <p>1톤 카고</p>
            </div>
            <div class="trans_ser_box">
              <img src="@/assets/images/ser_2.png">
              <p>1톤 탑차</p>
            </div>
            <div class="trans_ser_box">
              <img src="@/assets/images/ser_3.png">
              <p>1톤 냉장/냉동</p>
            </div>
            <div class="trans_ser_box">
              <img src="@/assets/images/ser_4.png">
              <p>1.5톤 윙바디</p>
            </div>
          </div>
          <div class="trans_ser_boxes_4">
            <div class="trans_ser_box">
              <img src="@/assets/images/ser_5.png">
              <p>2톤</p>
            </div>
            <div class="trans_ser_box">
              <img src="@/assets/images/ser_6.png">
              <p>5톤</p>
            </div>
            <div class="trans_ser_box">
              <img src="@/assets/images/ser_7.png">
              <p>8톤</p>
            </div>
            <div class="trans_ser_box">
              <img src="@/assets/images/ser_8.png">
              <p>25톤</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="trans_ser trans_ser_2">
      <div class="trans_ser_L">
        <b class="logi_ser_b">주선 서비스</b>
        <p class="logi_ser_p logi_ser_p_1920">
          로지웨이는 인성데이타의 빅데이터 기반 종합물류 플랫폼을 통해<br>
          화주와 기사와의 합리적인 주선 매칭서비스를 제공합니다.<br>
          또한, 실시간 상담원 배차 상황실 보유를 통해 보다 신속하고 정확한<br>
          커뮤니케이션을 진행하고 있습니다.
        </p>
        <p class="logi_ser_p logi_ser_p_1280">
          로지웨이는 인성데이타의 빅데이터 기반 종합물류 플랫폼을 통해
          화주와 기사와의 합리적인 주선 매칭서비스를 제공합니다.<br>
          또한, 실시간 상담원 배차 상황실 보유를 통해 보다 신속하고 정확한
          커뮤니케이션을 진행하고 있습니다.
        </p>
        <img class="trans_ser_sub_img" src="@/assets/images/transport3.png">
      </div>
      <div class="trans_ser_R">
        <div class="trans_ser_img"></div>
      </div>
    </div>
    <businesscontent @triggerFadeIn="contentfadein('third')" :persec="1"><div></div></businesscontent>
  </div>
  <div class="logi_compititon">
    <b class="notice">로지웨이의 경쟁력</b>
    <div class="logi_con">
      <div class="logi_con_div">
        <b  class="logi_con_div_1920">운송 전문<span>&nbsp;로지웨이</span> & 물류 플랫폼 <span>인성데이타</span></b>
        <b  class="logi_con_div_1280">운송 전문<span>&nbsp;로지웨이</span> & <br>물류 플랫폼 <span>인성데이타</span></b>
        <p class="logi_con_div_1920">인성데이타의 기술력과 로지웨이의 화물 운송 노하우를<br> 결합하여 빈틈 없는 서비스를 제공하고 있어요.</p>
        <p class="logi_con_div_1280">인성데이타의 기술력과 로지웨이의 화물 운송 노하우를 결합하여 빈틈 없는 서비스를 제공하고 있어요.</p>
        <img src="@/assets/images/compotition_1.png">
      </div>
      <div class="logi_con_div">
        <b class="logi_con_div_1920">AI를 통한 최적화 된<span> 배차 시스템</span></b>
        <b class="logi_con_div_1280">AI를 통한 최적화 된<span><br>배차 시스템</span></b>
        <p class="logi_con_div_1920">전국 4,000여 개 협력사 네트워크망과<br> AI를 기반으로 효율적인 배차를 경험할 수 있어요.</p>
        <p class="logi_con_div_1280">전국 4,000여 개 협력사 네트워크망과 AI를 기반으로 효율적인 배차를 경험할 수 있어요.</p>
        <img src="@/assets/images/compotition_2.png">
      </div>
      <div class="logi_con_div">
        <b class="logi_con_div_1920">고객을 만족시키는<span> 다양한 물류 서비스</span></b>
        <b class="logi_con_div_1280">고객을 만족시키는<span><br>다양한 물류 서비스</span></b>
        <p class="logi_con_div_1920">소형부터 대형 화물까지<br> 크기와 특성에 제약 없이 모든 운송 지원이 가능해요.</p>
        <p class="logi_con_div_1280">소형부터 대형 화물까지 크기와 특성에 제약 없이 모든 운송 지원이 가능해요.</p>
        <img src="@/assets/images/compotition_3.png">
      </div>
    </div>
  </div>
     <businesscontent @triggerFadeIn="contentfadein('third')" :persec="1"><div></div></businesscontent>
  <div class="logi_partner">
    <b class="notice">로지웨이와 함께하는 고객사</b>
    <div class="partner_swiper">
      <businesscontent @triggerFadeIn="contentfadein('third')" :persec="1"><div></div></businesscontent>
        <swiper
        :slidesPerView="5"
        :spaceBetween="0"
        :loop="true"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
        }"
        :speed="5000"
        :modules="modules"
        class="mySwiper part_swiper"
      >
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-01.png"></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-02.png"></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-03.png"></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-04.png"></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-05.png"></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-06.png"></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-07.png"></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-08.png"></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-09.png"></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-10.png"></swiper-slide>
      </swiper>
      <swiper
        :slidesPerView="5"
        :spaceBetween="0"
        :loop="true"
        :loopedSlides = "1"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }"
        :modules="modules"
        :speed="4000"
        class="part_swiper mySwiper"
      >
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-11.png"></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-12.png"></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-13.png"></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-14.png"></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-15.png"></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-16.png"></swiper-slide>
        <swiper-slide class="swiper-slide"><img src="@/assets/images/logo_1/png/clients_logo_230810-17.png"></swiper-slide>
      </swiper>
    </div>
    <businesscontent @triggerFadeIn="contentfadein('third')" :persec="1"><div></div></businesscontent>
  </div>
  <div class="logi_counseling" ref="estimatesection">
    <inquirycontent @triggerFadeIn="contentfadein('last')" :persec="1"><div></div></inquirycontent>
    <div class="logi_counseling_bg">
      <b class="logi_counseling_b">견적 및 상담문의</b>
      <p class="logi_counseling_p">똑똑한 종합물류 서비스, 로지웨이와 함께하세요</p>
      <inquirycontent @triggerFadeIn="contentfadein('last')" :persec="1"><div></div></inquirycontent>
      <div class="counsel_con">
        <div class="counsel_div">
          <input class="counsel_inq" placeholder="제목" v-model="title">
          <input class="counsel_name" placeholder="회사명/이름" v-model="company">
          <input class="counsel_num" placeholder="연락처" v-model="phone" type="text" maxlength="12" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
          <input class="counsel_add" placeholder="이메일 주소" v-model="email">
          <textarea class="counsel_content" placeholder="문의내용을 입력해 주세요." v-model="content"></textarea>
          <div class="check_div">
            <div class="check_box">
              <input type="checkbox" id="check1" v-model="check">
            <label for="check1">개인정보처리방침 동의(필수)</label>
            </div>
            <button class="counsel_btn" :class="{act : check}" @click="mailsubmit">문의신청</button>
          </div>
        </div>
        <img class="counsel_img" src="@/assets/images/footer.png">
      </div>
    </div>
    <inquirycontent @triggerFadeIn="contentfadein('last')" :persec="1"><div></div></inquirycontent>
  </div>
  <footer>
    <inquirycontent @triggerFadeIn="contentfadein('last')" :persec="1"><div></div></inquirycontent>
    <img class="footer_img" src="@/assets/images/logo_w.png">
    <ul>
      <li>개인정보처리방침</li>
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
  </footer>
  </div>
</template>

<script>
import {ref, watch, onMounted, computed} from "vue"
import { useScroll, whenever } from '@vueuse/core'
//import { storeToRefs } from 'pinia'

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation, Autoplay, Pagination } from 'swiper';

import {usescrollstore} from "@/store/scrollcontent";

import TriggerObserver from "@/components/common/triggerObserver";

import * as mailAPI from '@/api/mail'

export default {
  name: "mainpage",
  components: {
    Swiper,
    SwiperSlide,

    introobserver : TriggerObserver,
    logihisobserver : TriggerObserver,

    maincontent : TriggerObserver,
    secondcontent : TriggerObserver,
    businesscontent : TriggerObserver,
    inquirycontent : TriggerObserver,
  },
  //swiper
  setup() {
    ///////// swiper /////////
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
    ///////// swiper /////////


    ///////// store /////////
    let scrollstore = usescrollstore()
    ///////// store /////////


    ///////// div section /////////
    let app = document.querySelector("#app")
    let introsection = ref(null)
    let swipersection = ref(null)
    let businesssection = ref(null)
    let estimatesection = ref(null)
    ///////// div section /////////
    const { x, y, isScrolling, arrivedState, directions } = useScroll(app)


    scrollstore.setscrolltop(0)
    scrollstore.setscrollsection("main")


    watch(() => y.value,
        async (newval) => {
          scrollstore.setscrolltop(newval/app.scrollHeight)
      }, { deep: true }
    )

    whenever(() => scrollstore.currentsection,
      (newval) => {
        if(newval == "top"){
          swipersection.value.scrollIntoView({behavior : 'smooth', block : 'start'})
        }else if(newval == "intro"){
          introsection.value.scrollIntoView({behavior : 'smooth', block : 'start'})
        }else if(newval == "business"){
          businesssection.value.scrollIntoView({behavior : 'smooth', block : 'start'})
        }else if(newval == "estimate"){
          estimatesection.value.scrollIntoView({behavior : 'smooth', block : 'start'})
        }
      }
    )

    let isintro = ref(false)

    onMounted(() => {
     /* if(!isintro.value){

      }
      requestAnimationFrame(()=>{
        isintro.value = true;
      })*/



    })

    return {
      modules: [Navigation, Autoplay, Pagination],
      onSwiper,
      onSlideChange,

      scrollstore,

      app,
      introsection,
      swipersection,
      businesssection,
      estimatesection,

      isintro,
    };

  },
    //swiper
  data() {
    return {
      target : null,
      //scrollstore : null,

      introshow : false,
      logilineshow : false,

      /////////////////////
      title : "견적 및 상담문의드립니다.",
      company : "",
      phone : "",
      email : "",
      content : "",

      check : "",

      /////////////////////

    }
  },
  watch: {
    currentPage(newval){
      console.log(newval)
    },
  },
  created(){

  },

  mounted() {
    let vm = this

    vm.target = document.querySelector("#main")
    //vm.target.addEventListener("scroll", vm.handlescroll)

    //console.log(vm.$refs.phrase_work_1)

    /*gsap.to(vm.$refs.phrase_work_1,{
      scrollTrigger : {
        trigger : vm.$refs.single_phrase,
        //toggleActions: "resume pause reset pause",
        scrub: true,
        markers : true,
        start : "top center",
      }, opacity : 0.5
    });*/

  },
  onBeforeUnmount() {

  },
  methods: {
    handlescroll(e){
      let vm = this

      let scrolltop = e.target.scrollTop

      vm.scrollstore.setscrolltop(scrolltop)
      //console.log(scrolltop)

    },

    introfadeIn(){
      let vm = this

      vm.introshow = true
    },

    introfadeOut(){
      let vm = this

      vm.introshow = false
      vm.isintro = false
    },

    logilinefadein(){
      let vm = this

      vm.logilineshow = true
    },

    logilinefadeout(){
      let vm = this

      vm.logilineshow = false
    },

    contentfadein(value){
      let vm = this

      vm.scrollstore.setscrollsection(value)
      console.log(vm.scrollstore.getscrollsection)
    },


    mailsubmit(){
      let vm = this

      if(!vm.check){
        return false
      }else{

        if(vm.company == ""){
          alert("회사명/이름 항목이 비어있습니다.")
          return false
        }

        if(vm.phone == ""){
          alert("연락처 항목이 비어있습니다.")
          return false
        }

        if(vm.email == ""){
          alert("이메일 항목이 비어있습니다.")
          return false
        }

        if(vm.contents == ""){
          alert("문의내용 항목이 비어있습니다.")
          return false
        }


        //alert("개인정보처리방침 동의 확인")
        let jsondata = {
          "title": (vm.title == "") ? "견적 및 상담문의드립니다" : vm.title,
          "name": vm.company,
          "phone": vm.phone,
          "email": vm.email,
          "contents": vm.content
        }

        mailAPI.sendmail(jsondata).then((response) => {
          //console.log("response : ",response)

          if(response.data.status){
            alert("견적 및 상담문의 전송이 완료되었습니다.")

            vm.title = "견적 및 상담문의드립니다"
            vm.company = ""
            vm.phone = ""
            vm.email = ""
            vm.content = ""
            vm.check = false

          }else{
            alert("견적 및 상담문의 전송에 실패하였습니다. \n 잠시 후 다시 시도하여주세요.")
          }
        })

      }
    },


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
    }

  },
}
</script>

<style scoped>

/* common */
.notice{ display: block; width: 100%; color: var(--black-text, #262E40); text-align: center; font-size: 3.375rem; text-align: center; font-style: normal; font-weight: 700; line-height: 140%; letter-spacing: -2.16px;}
.logi_history>.notice{color: var(--black-text, #fff); margin-bottom:80px; }
.logi_history>.notice span{color: var(--black-text, #FF5819); font-size: 3.375rem; }

/* swiper */

.introfade-enter-active,
.introfade-leave-active {
  transition: opacity 2s ease, transform 1s ease-in-out;
  transform: translateY(0px);
}

.introfade-enter-from,
.introfade-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.bg_swiper{width: 100%; height: 100vh;}
.bg_txt{text-align:left; width:auto;}
.bg_1280{display: none;}
.bg_1920{display: flex;}
.swiper_bg{display: flex; width: 100%; height: 920px; padding: 0 160px; vertical-align: baseline; line-height: 920px; align-items: center; justify-content: space-between; animation: swiper 1s ease-in-out;}
@keyframes swiper {
	0% {
		transform: translatey(30px);
    opacity: 0;
	}
	100% {
		transform: translatey(0px);
    opacity: 1;
	}
}
.swiper_bg_img{position: relative;}
.swiper_bg_img .swiper_bg_main{display: inline-block;  height: auto; object-fit: cover;}
.swiper_bg_img .swiper_bg_main1{width: 800px;}
.swiper_bg_img .swiper_bg_main2{width: 780px;}
.swiper_bg_img .swiper_bg_main3{width: 830px;}
.swiper_bg_img .swiper_bg_sub{position: absolute; left: 29%; top: 8%; width: 96px; height: inherit;	animation: float 4s ease-in-out infinite;}
@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	100% {
		transform: translatey(0px);
	}
}
.swiper_bg2_sub{position: absolute;	animation: bubble 3s ease-in-out infinite;}
.swiper_bg2_sub_1{width: 140px; height: inherit; right:30%; top:8%;}
.swiper_bg2_sub_2{width: 140px; height: inherit; left: 0%; top: 22%; animation: bubble2 3s ease-in-out infinite;}
.swiper_bg2_sub_3{width: 168.457px; height: inherit; left:-10%; top:42%;}
@keyframes bubble {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translate(-10px, -10px);
	}
	100% {
		transform: translatey(0px);
	}
}
@keyframes bubble2 {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
}
.swiper_bg3_sub{position: absolute;	animation: speech1 3s ease-in-out infinite;}
.swiper_bg3_sub_4{width: 140.268px; height: inherit; left:30%; bottom:22%;}
.swiper_bg3_sub_5{width: 140.268px; height: inherit; left: 46%; top: 44%; animation: speech2 3s ease-in-out infinite;}
.swiper_bg3_sub_6{width: 166.133px; height: inherit; right:8%; top:16%; }
.swiper_bg3_sub_7{width: 136.27px; height: inherit; left:43%; top:-2%; animation: speech2 3s ease-in-out infinite;}
@keyframes speech1 {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	100% {
		transform: translatey(0px);
	}
}
@keyframes speech2 {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
}
.bg_txt_b{overflow: hidden;font-family: 'NexonLv1Gothic'; }
.bg_txt_b>b{float:left; font-family: 'NexonLv1Gothic'; font-weight:bold; color: var(--main-navy, #262E40); font-size: 4rem;line-height: 145%; letter-spacing: -2.56px;
}
.bg_txt_b p{color: var(--main-navy, #262E40); font-family: 'NexonLv1Gothic'; font-size: 4rem; font-style: normal; font-weight: 100; line-height: 145%; letter-spacing: -2.72px;}
.bg_txt_p{margin-top:32px; margin-left: 6px; color: var(--main-navy, #262E40);  font-size: 1.125rem; font-style: normal; font-weight: 400; line-height: 180%; letter-spacing: -1px;}
.bg_txt b{font-size: 4rem; display: flex; font-style: normal; overflow: hidden; text-align: left; width: 100%; font-family: 'NexonLv1Gothic'; font-weight: 700;align-items: center;}
.bg_txt p{}
.bg_txt button{width: 247px;}
.single_bg{width:100%; position:relative;}
.swiper-slide {text-align: center; font-size: 1.125rem; background: #fff; display: flex; justify-content: center; align-items: center;}
.swiper-slide img{}
.swiper_txt{text-align:left; float:left; width:inherit}
.swiper_txt b{color: #fff; font-size: 1.875rem;}
.swiper_txt p{color: #fff;}
/* @media screen and (max-aspect-ratio: 1219/685) {.background_video {width: auto;height: 100%;}} */

/* single_phrase */
.single_phrase{position:relative; padding: 120px 0 132px 0; border-bottom:1px solid #ddd; background: #F2F3F7;}
.single_pha{margin-bottom:24px; display: block; color: var(--main-orange, #FF3B00); text-align: center; font-size: 1.5rem; font-family: Fugaz One; font-style: normal; font-weight: 400; line-height: 140%; letter-spacing: 7.2px; text-transform: uppercase;}
.single_pha_p{color: var(--lighter-navy, #4F5D71); text-align: center; font-size: 1.375rem; font-style: normal; font-weight: 400; line-height: 150%; letter-spacing: -0.88px;}
.single_phrase_img{padding: 0 187px; position: relative;}
.single_phrase_img .single_phrase_back{width:100%; margin-top: 56px;}
.single_phrase_img .car{width:6.2%; position:absolute;  height: inherit; left:61%; top:38.2%;  animation: car 3s ease-in-out infinite;}
@keyframes car {
	0% {
		transform: translate(0px,0px);
    opacity: 0%;
	}
	40%{opacity: 100%;}
	100% {
		transform: translate(180px,-108px);
    opacity: 0%;
	}
}
.single_phrase_img .car2{width:6.2%; position:absolute;  height: inherit; left:39%; top:32%;  animation: car2 3s ease-in-out infinite;}
@keyframes car2 {
	0% {
		transform: translate(0px,0px);
    opacity: 0%;
	}
	40%{opacity: 100%;}
	100% {
		transform: translate(-180px,-100px);
    opacity: 0%;
	}
}
.single_phrase_img .car3{width:6.2%; position:absolute;  height: inherit; right:57%; bottom:31.2%;  animation: car3 3s ease-in-out infinite;}
@keyframes car3 {
	0% {
		transform: translate(0px,0px);
    opacity: 0%;
	}
	8%{opacity: 100%;}
	100% {
		transform: translate(-240px,140px);
    opacity: 0%;
	}
}
.single_phrase_work{}
.phrase_work{position: absolute; padding: 20px 30px; width: 300px; height: inherit; border-radius: 20px; background: #FFF; box-shadow: 0px 7px 16px 0px rgba(0, 32, 112, 0.20);}
.phrase_work:hover{border: 4px solid; width:304px; transition: 0.1s ease-in-out;}
.phrase_work_1:hover{border-color:#009FDA; }
.phrase_work_1:hover .introfade_btn{background: #009FDA; color: #fff; transition: 0.1s ease-in-out;}
.phrase_work_2:hover{border-color:#FAAC18; bottom: 13%; left: 13%;}
.phrase_work_2:hover .introfade_btn{background: #FAAC18; color: #fff; transition: 0.1s ease-in-out;}
.phrase_work_3:hover{border-color:#E20613;}
.phrase_work_3:hover .introfade_btn{background: #E20613; color: #fff; transition: 0.1s ease-in-out;}
.introfade_btn{margin-top:12px; padding:10px 20px; border-radius:10px; border:1px solid; font-size: 16px; font-style: normal; font-weight: 500; line-height: 150%;letter-spacing: -0.64px; text-align: center;}
.phrase_work_1 .introfade_btn{border-color: #009FDA; color: #009FDA;}
.phrase_work_2 .introfade_btn{border-color: #FAAC18; color: #FAAC18;}
.phrase_work_3 .introfade_btn{border-color: #E20613; color: #E20613;}
.phrase_work .reset{
  width : 0% !important;
}
.phrase_work .complete{
  animation-name : slidein;
  animation-duration : 3s;
}

.phrase_work img{width: 158px; height: auto; display: block; margin: 0 auto;}
.phrase_work b{color: #000; text-align: center; font-size: 1.25rem;font-weight: 700; line-height: 150%;letter-spacing: -0.8px; padding-bottom: 8px; display: block;}
.phrase_work p{color: #000; text-align: center; font-size: 1.125rem; font-weight: 400; line-height: 160%; letter-spacing: -1.2px;}
.phrase_work_1{top: 13%; left: 11%;}
.phrase_work_2{bottom: 14%; left: 13%;}
.phrase_work_3{top: 21%; right: 233px;}

/* logi_intro */
.logi_intro{padding: 160px 160px 200px 160px;}
.logi_intro_con{overflow:hidden; display: flex; width: 100%; justify-content: space-between; align-items: center; height: 25.625em; flex-wrap: nowrap;}
.logi_intro_con div{display: inline-block;}
.logi_intro_L{width: 56.6rem; height:inherit; margin-right: 100px; background: url(@/assets/images/inrtroduce.png) no-repeat center #F2F3F7; background-size:contain; border-radius: 20px; padding: 40px 60px;}
.logi_intro_L img{width:100%; opacity:0;}
.logi_intro_R{text-align: left; width: 595px;}
.logi_intro_R b{color: var(--main-orange, #FF5819); font-size: 2.5rem; font-style: normal; font-weight: 700; line-height: 140%; letter-spacing: -1.6px; margin-bottom:20px; display:block;}
.logi_intro_R p{width:100%; color: var(--main-navy, #262E40); font-size: 1.125rem; font-style: normal; font-weight: 400; line-height: 160%; letter-spacing: -0.72px; white-space: nowrap;}

/* logi_history */
.logi_history{padding: 120px 0;background: #5950EE;}
/* .logi_history>.notice{color: #FFF; text-align: center; font-size: 3.375rem; font-style: normal; font-weight: 700; line-height: 140%; letter-spacing: -2.16px; margin-bottom: 80px; display: block;} */
/* .logi_history>.notice span{color: var(--main-orange, #FF5819);font-size: 3.375rem;} */
.logi_history_con{padding-top:200px;}
.logi_his_list{padding:0px 187px;}
.logi_line{width: 100%; height: 2px; transform-origin: left; background: #fff;}
@keyframes line {
	0% {transform: scaleX(0);}
	20% {transform: scaleX(0.2);}
	40% {transform: scaleX(0.4);}
	60% {transform: scaleX(0.6);}
	80% {transform: scaleX(0.8);}
	100%{transform: scaleX(1); background-color: #fff;}
}

.logilinefade-enter-active,
.logilinefade-leave-active {
  width: 100%;
  height: 2px;
  transform-origin: left;
  transform-style: preserve-3D;
  background: #fff;
  animation: line 2.6s linear;
}

.logilinefade-enter-from,
.logilinefade-leave-to {
  opacity: 0;
}
.logi_line_div{width: 24%; margin-right:12px; display: inline-block; position: relative; min-height:212px;vertical-align: top;}
.logi_line_div:last-child{margin-right:0px;}
.line_div_dot{position:relative; content: ""; width: 16px; height: 16px; background:#FF5819; border-radius:50%; left: 50%; top: 0%; transform: translate(-50%,-50%);}
/*.line_div_1_dot{animation: line_div_1 3s;}*/
/*.line_div_2_dot{animation: line_div_2 3s;}*/
/*.line_div_3_dot{animation: line_div_3 3s;}*/
/*.line_div_4_dot{animation: line_div_4 3s;}*/
.logidiv1dot-enter-active, .logidiv1dot-leave-active {animation: line_div_1 3s;}
.logidiv1dot-enter-from, .logidiv1dot-leave-to {opacity: 0;}
.logidiv2dot-enter-active, .logidiv2dot-leave-active {animation: line_div_2 3s;}
.logidiv2dot-enter-from, .logidiv2dot-leave-to {opacity: 0;}
.logidiv3dot-enter-active, .logidiv3dot-leave-active { animation: line_div_3 3s;}
.logidiv3dot-enter-from, .logidiv3dot-leave-to { opacity: 0;}
.logidiv4dot-enter-active, .logidiv4dot-leave-active { animation: line_div_4 3s;}
.logidiv4dot-enter-from,.logidiv4dot-leave-to {opacity: 0;}
.logi_line_div_img{width: 140px; height: inherit; position: absolute; left: 50%; transform:translatex(-50%); transform-origin: top; top: -84%;}
.logi_line_div_txt{margin-top: 54px; display: flex; align-items: center; flex-wrap: nowrap; justify-content: center;}
.logi_line_ul{}
.logi_line_ul b{color: #FFF; text-align: center; font-family: 'NexonLv1Gothic'; font-size: 2.75rem; font-style: normal; font-weight: 700; line-height: 150%; margin-bottom:34px;overflow: hidden;display: block; letter-spacing: 0;}
.logi_line_li{white-space: nowrap; list-style:disc; color: #FFF; text-align: left; font-size: 1.125rem; font-style: normal; font-weight: 300; line-height: 160%;letter-spacing: -0.72px; width: fit-content;}
/*.line_div_img_1{animation: line_div_img_1 2.5s;}*/
.logidiv1img-enter-active, .logidiv1img-leave-active {animation: line_div_img_1 2.5s;}
.logidiv1img-enter-from, .logidiv1img-leave-to {opacity: 0;}
/*.line_div_txt_1{animation: line_div_txt_1 3s;}*/
.logidiv1txt-enter-active, .logidiv1txt-leave-active {animation: line_div_txt_1 3s;}
.logidiv1txt-enter-from, .logidiv1txt-leave-to {opacity: 0;}
.logidiv2img-enter-active, .logidiv2img-leave-active {animation: line_div_img_2 3s;}
.logidiv2img-enter-from,.logidiv2img-leave-to {opacity: 0;}
/*.line_div_img_2{animation: line_div_img_2 3s;}*/
.logidiv2txt-enter-active, .logidiv2txt-leave-active {animation: line_div_txt_2 3s;}
.logidiv2txt-enter-from, .logidiv2txt-leave-to {opacity: 0;}
/*.line_div_txt_2{animation: line_div_txt_2 3s;}*/
.logidiv3img-enter-active, .logidiv3img-leave-active {animation: line_div_img_3 3s;}
.logidiv3img-enter-from, .logidiv3img-leave-to {opacity: 0;}
/*.line_div_img_3{animation: line_div_img_3 3s;}*/
.logidiv3txt-enter-active, .logidiv3txt-leave-active {animation: line_div_txt_3 3s;}
.logidiv3txt-enter-from, .logidiv3txt-leave-to {opacity: 0;}
/*.line_div_txt_3{animation: line_div_txt_3 3s;}*/
.logidiv4img-enter-active, .logidiv4img-leave-active {animation: line_div_img_4 3s;}
.logidiv4img-enter-from, .logidiv4img-leave-to {opacity: 0;}
/*.line_div_img_4{animation: line_div_img_4 3s;}*/
.logidiv4txt-enter-active, .logidiv4txt-leave-active {animation: line_div_txt_4 3s;}
.logidiv4txt-enter-from,.logidiv4txt-leave-to {opacity: 0;}
/*.line_div_txt_4{animation: line_div_txt_4 3s;}*/
@keyframes line_div_img_1 {
  0% {opacity: 0%;}
	10% {transform: translate(-50%,-00%); opacity: 0%; left: 50%;}
	20% {transform: translate(-50%,-20%); opacity: 0%; left: 50%;}
}
@keyframes line_div_txt_1 {
  0% {opacity: 0%;}
	10% {transform: translateY(-0%); opacity: 0%;}
	20%{transform: translateY(20%); opacity: 0%;}
}
@keyframes line_div_1 {0%{opacity: 0%;} 10% {opacity: 0%;} 20%{opacity: 0%;}}
@keyframes line_div_img_2 {
  0% {opacity: 0%;}
	20%{transform: translate(-50%,-00%); opacity: 0%; left: 50%;}
	30%{transform: translate(-50%,-20%); opacity: 0%; left: 50%;}
}
@keyframes line_div_txt_2 {
  0% {opacity: 0%;}
	20% {transform: translateY(-0%); opacity: 0%;}
	30%{transform: translateY(20%); opacity: 0%;}
}
@keyframes line_div_2 {0% {opacity: 0%;} 20%{opacity: 0%;} 30%{opacity: 0%;}}
@keyframes line_div_img_3 {
  0% {opacity: 0%;}
	30% {transform: translate(-50%,-00%); opacity: 0%; left: 50%;}
	40%{transform: translate(-50%,-20%); opacity: 0%; left: 50%;}
}
@keyframes line_div_txt_3 {
  0% {opacity: 0%;}
	30% {transform: translateY(-0%); opacity: 0%;}
	40%{transform: translateY(20%); opacity: 0%;}
}
@keyframes line_div_3 {0% {opacity: 0%;} 30%{opacity: 0%;} 40%{opacity: 0%;}}
@keyframes line_div_img_4 {
  0% {opacity: 0%;}
	40% {transform: translate(-50%,-00%); opacity: 0%; left: 50%;}
	50%{transform: translate(-50%,-20%); opacity: 0%; left: 50%;}
}
@keyframes line_div_txt_4 {
  0% {opacity: 0%;}
	40% {transform: translateY(-0%); opacity: 0%;}
	50%{transform: translateY(20%); opacity: 0%;}
}
@keyframes line_div_4 {0% {opacity: 0%;} 40%{opacity: 0%;} 50%{opacity: 0%;}}

/* logi_work */
.logi_work{background: #F2F3F7; padding:120px;}
.logi_work_con{margin-top: 337px;}
.logi_work_img{position: relative; width: 560px; margin: 0 auto;}
.logi_work_img_main{width: 560px; height: 420px;}
.logi_work_sub{}
.logi_work_sub_img{position: absolute; padding:10px 16px; background: #fff;border-radius: 50px; width: auto; display:flex; align-items: center; justify-content: space-between;}
.logi_work_sub_img img{width:120px; height:120px; float:left;}
.logi_work_sub_img p{width:154px; margin-left:14px; font-size: 20px; color: var(--black-text, #121212); line-height: 160%; letter-spacing: -0.72px; font-style: normal; font-weight: 800; text-align: left;}
.sub_img_1{left: -300px; top: -20px;}
.sub_img_1::after{content: "";position: absolute;top: 50%;right: -16%;transform: rotateZ(-90deg) translate(20%,-91%);border-bottom: 0px solid transparent;border-left: 28px solid transparent;border-right: 28px solid transparent;border-top: 28px solid #fff;}
.sub_img_2{ left: -40px; top: -230px;}
.sub_img_2::after{content: ""; position: absolute; bottom: -30px; right: 39%; transform: translateY(-50%); border-bottom: 0px solid transparent; border-left: 28px solid transparent; border-right: 28px solid transparent; border-top: 28px solid #fff;}
.sub_img_3{ right: -84px; top: -230px;}
.sub_img_3::after{content: ""; position: absolute; bottom: -30px; right: 39%; transform: translateY(-50%); border-bottom: 0px solid transparent; border-left: 28px solid transparent; border-right: 28px solid transparent; border-top: 28px solid #fff;}
.sub_img_4{right: -300px; top: -20px;}
.sub_img_4::after{content: ""; position: absolute; top: 50%; left: -16%; transform: rotateZ(90deg) translate(-15%,-79%); border-bottom: 0px solid transparent; border-left: 28px solid transparent; border-right: 28px solid transparent; border-top: 28px solid #fff;}
.sub_img_2{}
.sub_img_3{}
.sub_img_4{}
.logi_txt{border-radius: 32px; background: var(--main-navy, #262E40); width: 445px; padding:14px 30px;color: #FFF; text-align: center; font-size: 24px; font-style: normal; font-weight: 700; line-height: 150%; letter-spacing: -0.96px; margin: 0 auto; margin-top: 56px;;}


/* logi_compititon */
.logi_compititon{background: #5950EE; padding:120px 192px 180px 192px;}
.logi_compititon>.notice{color: var(--black-text, #fff); margin-bottom: 80px;width:100%;}
.logi_compititon>.notice span{color: var(--black-text, #FF5819); font-size: 3.375rem; }
.logi_con{width:100%; overflow:hidden; display: flex; align-items: center; justify-content: center;}
.logi_con>div{width:480px; margin-right:48px; background:#fff; border-radius: 20px; padding:48px 40px; height:500px;}
.logi_con>div:last-child{margin-right:0;}
.logi_con>div b{color: var(--main-navy, #262E40);font-size: 24px; font-style: normal; font-weight: 700; line-height: 150%; letter-spacing: -1.85px; width: 100%; display: block; text-align: left;}
.logi_con>div b span{color: var(--main-orange, #FF5819);font-size: 24px;font-style: normal;font-weight: 700;line-height: 150%;letter-spacing: -0.96px;}
.logi_con>div p{word-break:keep-all; margin-top: 24px; color: var(--lighter-navy, #4F5D71); font-size: 18px; font-style: normal; font-weight: 400; line-height: 160%; /* 28.8px */ letter-spacing: -0.72px; text-align: left;}
.logi_con>div img{width: 220px; height: 220px; margin-top:40px;}

/* lgo_intro */
.logo_intro{display:block; padding: 160px 0;}
.logo_intro .logostory{width: 100%; padding: 80px 316px;}
.logo_intro_txt{padding: 0 252px; overflow: hidden;}
.logo_intro_txt div{display:inline-block;}
.logo_intro_txt .logo_intro_t1{width: inherit; margin-right: 34px;}
.logo_intro_txt .logo_intro_t2{width: inherit;}
.logo_intro_txt .logo_intro_t{}
.pc_1280_txt{display: none;}
.logo_intro_txt>.logo_intro_t>b{color: var(--black-text, #121212); margin-bottom: 24px; font-size: 22px; letter-spacing: -0.88px; text-align: left; line-height: 150%; font-weight: 700; display: block; width: 100%;}
.logo_intro_t1 div{float:left; border-radius: 20px; border: 1.5px solid #E0E0E0; background: #FFF; width: auto; height: inherit; padding: 70px 49px 48px 56px;}
.logostory_sub{max-width:450px; width:100%;}
.logo_intro_t1 div p{color: var(--black-text, #121212); font-size: 1.125rem; font-style: normal; font-weight: 400; line-height: 160%; letter-spacing: -1.4px; margin-top:64px; text-align: left;}
.main_color{border-radius: 20px; padding: 32px; text-align: left; float: left; position:relative; width: 300px; height: 320px; color: #fff;}
.color_orange{background: var(--main-orange, #FF5819);  margin-right:20px;}
.color_navy{background: var(--main-navy, #262E40);}
.main_color div b, p{color: #fff;}
.main_color_txt_up{position:absolute;}
.main_color_eg{width: 100%; display: block;  font-size: 1.25rem; font-style: normal; font-weight: 900;line-height: 150%; letter-spacing: 0.8px;text-transform: uppercase; margin-bottom:4px;}
.main_color_txt_down{position:absolute; bottom:32px;}
.main_color_num{font-size: 16px; font-style: normal; font-weight: 700; line-height: 150%; display: block; letter-spacing: 0;}
.main_color_txt_down div{width: 100%; display: flex; align-items:center;}
.main_color_txt_down div b{float:left;}
.main_color_txt_down div:nth-child(2) b{margin-right: 34px;}
.main_color_txt_down div:nth-child(3) b{margin-right: 18px;}
.filebox{margin-top:80px; width: 100%;}
.filebox label{margin-top:110px; display: block; margin:0 auto;width: 270px;padding: 16px 30px;border-radius: 10px;border: 1.5px solid var(--main-orange, #FF5819); color:#FF5819; cursor: pointer; text-align: center;font-size: 22px;font-style: normal;font-weight: 400;line-height: 150%;letter-spacing: -0.88px;}
.filebox label:hover{background: #FF5819; color: #fff;transition: all 0.1s;}
.filebox input[type="file"]{position: absolute; width: 0;height: 0;padding: 0;overflow: hidden;border: 0;}

/* logi_service */
.logi_service{padding: 218px 250px; overflow:hidden;}
.trans_ser{width:100%; overflow:hidden; display: flex;justify-content: space-between;}
.trans_ser_2{margin-top: 215px;}
.trans_ser div{display:inline-block; float:left; text-align: left; }
.trans_ser_1 .trans_ser_L{width:calc(60% - 60px);}
.trans_ser_2 .trans_ser_R{width:calc(60% - 60px);}
.trans_ser_1 .trans_ser_L{background:url(@/assets/images/transport.png) no-repeat center; background-size:cover; border-radius:20px;}
.trans_ser_img{border-radius: 20px;width: 100%; height: 500px;}
.trans_ser_2 .trans_ser_R{background:url(@/assets/images/transport2.png) no-repeat center; background-size:cover; border-radius:20px;}
.trans_ser_R{width:calc(40% - 60px);}
.logi_ser_b{color: var(--black-text, #121212); font-size: 54px; font-style: normal; font-weight: 700; line-height: 140%; letter-spacing: -2.16px;} 
.logi_ser_p{word-break:keep-all; color: var(--black-text, #121212); font-size: 18px; font-style: normal; font-weight: 400; line-height: 160%; letter-spacing: -0.72px; margin-top: 22px;}
.trans_ser_boxes{margin-top: 46px;}
.trans_ser_boxes_4{width:100%;}
.trans_ser_box{flex-wrap: wrap; border-radius: 10px; background: #F2F3F7; width: 110px !important; height: 120px; padding: 8px 0; margin-right: 20px; display: flex !important; align-items: flex-end; justify-content: center;}
.trans_ser_box:nth-child(4n){margin-right: 0;}
.trans_ser_boxes_4:first-child{margin-bottom: 32px;}
.trans_ser_box p{width:100%; color: var(--black-text, #121212); text-align: center;font-size: 18px; font-style: normal; font-weight: 400; line-height: 160%;letter-spacing: -0.72px;}
.trans_ser_box img{width: 68px; height: 68px; display:block; overflow:hidden;}
.trans_ser_sub_img{width: 500px; height: inherit;border-radius: 20px; margin-top: 38px;}

.logi_partner{overflow:hidden; padding-top:240px;}
.logi_partner_up{display: block; color: var(--main-orange, #FF3B00); text-align: center; font-size: 1.5rem; font-family: Fugaz One; font-style: normal; font-weight: 400; line-height: 140%; letter-spacing: 7.2px; text-transform: uppercase;}
.logi_partner_up_b{display: block; color: var(--black-text, #000); text-align: center; font-size: 3.375rem;  font-style: normal; font-weight: 700; line-height: 140%; letter-spacing: -2.16px;}
.logi_partner_up_p{color: var(--lightest-navy, #8B95A1); text-align: center; font-size: 1.375rem;  font-style: normal; font-weight: 400; line-height: 150%; letter-spacing: -0.88px; margin-top:40px;}
.partner_swiper{margin: 100px 0 200px 0;}
.part_swiper{margin-bottom: 20px; height: 193px;}
.part_swiper .swiper-slide{ height: 193px;}
.part_swiper .swiper-slide img{width:320px !important; height:inherit; object-fit:contain;}

.logi_counseling{background: #5950EE; overflow:hidden; }
.logi_counseling_bg{overflow: hidden;padding:120px 250px;}
.logi_counseling_b, .logi_counseling_p{text-align: left; width:100%; display:block;}
.logi_counseling_b{color: #FFF; font-size: 54px; font-style: normal; font-weight: 700; line-height: 140%; letter-spacing: -2.16px;}
.logi_counseling_p{color: #FFF; font-size: 18px; font-style: normal; font-weight: 400; line-height: 160%; letter-spacing: -0.72px; margin-top:16px;}
.counsel_con{display: flex; align-items: center; justify-content: space-between;}
.counsel_div{text-align:left; margin-top:64px; float:left;}
.counsel_div>input, textarea{margin-bottom:16px; border:none; border-radius:10px; width:548px; height: 55px; padding: 13px 24px; box-sizing: border-box; font-size:18px; font-style: normal; font-weight: 400; display: block;}
.counsel_div textarea{height: 192px; font-size:18px; font-style: normal; font-weight: 400; font-family: 'SUIT'; margin-bottom:24px; border-radius:10px;}
.counsel_name{}
.counsel_num{}
.counsel_content{}
.counsel_btn{color: #FFF; text-align: center; height: 60px; font-size: 1.25rem;font-weight: 500; line-height: 150%; letter-spacing: -1.04px; padding: 0px 30px; width:212px;border-radius: 10px; background: #D1D1D1;}
.counsel_btn.act{background:#FF5819;}
.counsel_img{width: 500px; height:500px;}
.check_box{display:flex; align-items: center;}
.check_div{display: flex; align-items: center; justify-content: space-between;}
.check_div input[type="checkbox"] {
    -webkit-appearance: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    width: 32px;
    height: 32px;
    cursor: pointer;
    background:url(../../../src/assets/images/check.png) no-repeat center;
    background-size:cover;
    outline: none !important;
    vertical-align: middle;
}
.check_div input[type="checkbox"]:checked {background:url(../../../src/assets/images/checked.png) no-repeat center;background-size:cover;}
.check_div label{
  color: #FFF;font-size: 20px;font-style: normal;font-weight: 700;line-height: 150%;letter-spacing: -0.8px; margin-left:16px;}
/* footer */
footer{background: var(--main-navy, #262E40); padding: 100px 160px; text-align:left;}
.footer_img{width: 264px; margin-bottom: 40px;}
.footer_p p{color: #8B95A1; font-size: 1rem;font-weight: 500; line-height: 220%; letter-spacing: -0.64px;}
footer ul{width: 100%; display: block; overflow: hidden; margin-bottom:40px;}
footer ul li{float:left; font-weight:bold; color:#fff; padding-right:40px; font-size:1.125rem; cursor: pointer;}
.footer_txt{color: #8B95A1; margin-top:22px; display: flex; justify-content: space-between; align-items: flex-end;}
.footer_txt p{color: #8B95A1;}
.footer_txt select{-webkit-appearance:none; -moz-appearance:none; appearance:none; background:url(../../../src/assets/images/arrow.png) no-repeat 95% 50% #262E40; background-size: 20px 20px; color: #999; font-size: 1rem; font-style: normal; font-weight: 500; line-height: 160%; letter-spacing: -0.64px;width: 226px; padding: 16px;  border-radius: 8px; border: 1px solid #8B95A1; height: 56px;;}
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



/* 현PC 그 이상 */
@media all and (min-width:1920px){
  .main{}
  .com_pro_com_2{margin: 0 120px;}
  .com_pro_com .com_pro_b{font-size: 2rem;}
  .com_pro_com .com_pro_shape{width: 500px; height:705px;}
  .main_bg{width:1920px; margin: 0 auto;}
  .single_bg{width:1920px; margin: 0 auto; position: relative; }
  .logi_intro{width:1920px; margin: 0 auto; }
  .logo_intro .logostory{width: 1920px; margin:0 auto;}
  .logi_service{width: 1920px; margin:0 auto;}
  .notice{ margin:0 auto;}
  .logi_his_list{width: 1920px; margin:0 auto;}
  .logi_counseling_bg{width: 1920px; margin:0 auto;}
  .logi_intro_R_1280{display: none;}
  .logi_ser_p_1920{display:block;}
  .logi_ser_p_1280{display:none;}
  .logi_con_div_1920{display:block !important;}
  .logi_con_div_1280{display:none !important;}
  .logi_line_li_1920{display:list-item;}
  .logi_line_li_1280{display:none;}
}
/* 구PC */
@media all and (min-width:1280px) and (max-width:1920px){
.bg_txt_b b{font-size: 3.333vw;}
.bg_txt_b p{font-size: 3.333vw;}
.swiper-slide{font-size: 0.938vw;}
.swiper_txt b{font-size: 1.563vw;}
.notice{font-size: 2.813vw;}
.notice>span{font-size: 2.813vw !important;}
/* .logi_history>.notice{font-size: 2.813vw;} */
/* .logi_history>.notice span{font-siz               e: 2.813vw;} */
.single_phrase_img{padding: 0 160px;}
.logi_his_list{padding: 0 160px;}
.pc_1920_txt{display: none;}
.pc_1280_txt{display: block;}
.com_pro_com_2{margin: 0 120px;}
.logo_intro_txt{padding: 0 160px;}
.com_pro_com .com_pro_shape{width: inherit; height:705px;}
.logi_line_ul b{font-size: 2.292vw;}
.logo_intro_t1 div{padding: 64px 29px 38px 29px; max-width:640px; width:auto; height: 300px;}
.logo_intro .logostory{padding: 80px 230px;}
.main_color{height:300px; width:240px;}
.swiper_bg_img .swiper_bg_main{width:100%;}
.swiper_bg_img{width:52%;}
.logi_compititon{padding:120px 160px 180px 160px;}
.logi_counseling_bg{overflow: hidden;padding:120px 160px;}
.logi_con>div{width: calc(33.3% - 24px); position: relative;}
.logi_con>div img[data-v-5e2104ef] {width: 60%; height: auto; position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);}
.logi_service{padding: 218px 160px;}
.trans_ser_1 .trans_ser_L{width: calc(55% - 30px);}
.trans_ser_1 .trans_ser_R{width: calc(45% - 30px); float:right !important;}
.trans_ser_2 .trans_ser_R{width: calc(55% - 30px);}
.trans_ser_2 .trans_ser_L{width: calc(45% - 30px);}
.logi_intro_R_1280{display: none;}
.logi_ser_p_1280{display:none;}
.logi_intro{padding: 160px 160px 200px 160px;}
.counsel_div>input, textarea{width:100%;}
.counsel_div{width: 45%;}
.counsel_img{width: 40%; height: inherit;}
.logi_con_div_1280{display:none !important;}
.logi_line_li_1920{display:list-item;}
.logi_line_li_1280{display:none;}

}
@media all and (min-width:1280px) and (max-width:1850px){
.logi_con_div_1920{display:none !important;}
.logi_con_div_1280{display:block !important;}
.logi_intro_L{width: -webkit-fill-available;}
.logi_intro_R{text-align: left; width: 54vw;}
.logi_line_li_1920{display:list-item;}
  .logi_line_li_1280{display:none;}
}
@media all and (min-width:1280px) and (max-width:1624px){
  
  .swiper_bg_img .swiper_bg_sub{width: 13%; height: inherit;}
  .swiper_bg3_sub_4{width: 120.268px; height: inherit; left:30%; bottom:22%;}
  .swiper_bg3_sub_5{width: 120.268px; height: inherit; left: 46%; top: 34%;}
  .swiper_bg3_sub_6{width: 146.133px; height: inherit; right:8%; top:16%; }
  .swiper_bg3_sub_7{width: 116.27px; height: inherit; left:43%; top:-2%;}
  .swiper_bg2_sub_1{width: 120px; height: inherit;}
  .swiper_bg2_sub_2{width: 120px; height: inherit;}
  .swiper_bg2_sub_3{width: 148.457px; height: inherit;top: 52%; left: -20%;}
  .logi_intro_R_1280{display: none;}
  .logi_intro_R_1920{display: inline-block; width: 32.99vw; overflow:hidden;}
  .phrase_work_2{left: 200px; bottom: -8%;}
  .logi_line_div{min-height:272px;}
  .logi_ser_p_1920{display:none;}
  .logi_ser_p_1280{display:block;}
  .trans_ser_sub_img{width:80%;}
  .trans_ser_boxes{margin-top: 26px;}
.trans_ser_boxes_4:first-child{margin-bottom: 12px;}
.trans_ser_box{width: calc(25% - 12px) !important; height: 100px; margin-right: 12px;}
.trans_ser_box img{width: 62px; height:auto;}
.trans_ser_box p{font-size: 14px;}
.logi_ser_b{font-size: 42px;}
.check_div{display:block;}
.counsel_btn{width:100%; display: block; margin-top:24px;}
.part_swiper .swiper-slide img{width:210px !important; height:inherit; object-fit:contain;}
.logi_line_div_img{top: -64%;}
.logi_intro_R p{font-size: 1.125rem;}
.logi_line_li_1920{display:none;}
.logi_line_li_1280{display:list-item;}
.trans_ser_img{border-radius: 20px;width: 100%; height: inherit;}
}
@media all and (min-width:1280px) and (max-width:1500px){
  
.logo_intro_txt .logo_intro_t1{margin-right: 0;}
.logo_intro_txt .logo_intro_t{width: 100%;}
.logo_intro_t1 div{width:100%; min-width:100%; height: auto;}
.pc_1920_txt{display: block; margin: 0 auto;text-align: center !important;}
.pc_1280_txt{display: none;}
.bg_1920{display: none;}
.bg_1280{display: flex;}
.phrase_work_1{left: 100px;}

.phrase_work_3{right: 133px;}
.logo_intro .logostory{padding: 80px 160px;}
.logo_intro_txt .logo_intro_t2{margin-top: 37px;}
.color_orange{margin-right: 0;}
.color_navy{float:right;}
.main_color{width: calc(50% - 10px); height: 300px;}
@keyframes car {
	0% {transform: translate(0px,0px);opacity: 0%;}
	40%{opacity: 100%;}
	60%{opacity: 0%;}
	100% {transform: translate(180px,-108px);opacity: 0%;}
}
@keyframes car2 {
	0% {transform: translate(0px,0px);opacity: 0%;}
	40%{opacity: 100%;}
  60%{opacity: 0%;}
	100% {transform: translate(-180px,-100px);opacity: 0%;}
}
@keyframes car3 {
	0% {transform: translate(0px,0px); opacity: 0%;}
	8%{opacity: 100%;}
  60%{opacity: 0%;}
	100% {transform: translate(-240px,140px);opacity: 0%;}
}
}
@media all and (min-width:1024px) and (max-width:1279px){

  .bg_txt_b b{font-size: 3.333vw;}
.bg_txt_b p{font-size: 3.333vw;}
.swiper-slide{font-size: 0.938vw;}
.swiper_txt b{font-size: 1.563vw;}
.notice{font-size: 2.813vw;}
.notice>span{font-size: 2.813vw !important;}
/* .logi_history>.notice{font-size: 2.813vw;} */
/* .logi_history>.notice span{font-siz               e: 2.813vw;} */
.single_phrase_img{padding: 0 160px;}
.logi_his_list{padding: 0 160px;}
.pc_1920_txt{display: none;}
.pc_1280_txt{display: block;}
.com_pro_com_2{margin: 0 120px;}
.logo_intro_txt{padding: 0 160px;}
.com_pro_com .com_pro_shape{width: inherit; height:705px;}
.logi_line_ul b{font-size: 2.292vw;}
.logo_intro_t1 div{padding: 64px 29px 38px 29px; max-width:640px; width:auto; height: 300px;}
.logo_intro .logostory{padding: 80px 230px;}
.main_color{height:300px; width:240px;}
.swiper_bg_img .swiper_bg_main{width:100%;}
.swiper_bg_img{width:52%;}
.logi_compititon{padding:120px 160px 180px 160px;}
.logi_counseling_bg{overflow: hidden;padding:120px 160px;}
.logi_con>div{width: calc(33.3% - 24px); position: relative;}
.logi_con>div img[data-v-5e2104ef] {width: 60%; height: auto; position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);}
.logi_service{padding: 218px 160px;}
.trans_ser_1 .trans_ser_L{width: calc(55% - 30px);}
.trans_ser_1 .trans_ser_R{width: calc(45% - 30px); float:right !important;}
.trans_ser_2 .trans_ser_R{width: calc(55% - 30px);}
.trans_ser_2 .trans_ser_L{width: calc(45% - 30px);}
.logi_intro_R_1280{display: none;}
.logi_ser_p_1280{display:none;}
.logi_intro{padding: 160px 160px 200px 160px;}
.counsel_div>input, textarea{width:100%;}
.counsel_div{width: 45%;}
.counsel_img{width: 40%; height: inherit;}
.logi_con_div_1280{display:none !important;}.logi_con_div_1920{display:none !important;}
.logi_con_div_1280{display:block !important;}
.logi_intro_L{width: -webkit-fill-available;}
.logi_intro_R{text-align: left; width: 54vw;}
.swiper_bg_img .swiper_bg_sub{width: 13%; height: inherit;}
.swiper_bg3_sub_4{width: 120.268px; height: inherit; left:30%; bottom:22%;}
.swiper_bg3_sub_5{width: 120.268px; height: inherit; left: 46%; top: 34%;}
.swiper_bg3_sub_6{width: 146.133px; height: inherit; right:8%; top:16%; }
.swiper_bg3_sub_7{width: 116.27px; height: inherit; left:43%; top:-2%;}
.swiper_bg2_sub_1{width: 120px; height: inherit;}
.swiper_bg2_sub_2{width: 120px; height: inherit;}
.swiper_bg2_sub_3{width: 148.457px; height: inherit;top: 52%; left: -20%;}
.logi_intro_R_1280{display: none;}
.logi_intro_R_1920{display: inline-block; width: 32.99vw; overflow:hidden;}
.phrase_work_2{left: 200px; bottom: -8%;}
.logi_line_div{min-height:272px;}
.logi_ser_p_1920{display:none;}
.logi_ser_p_1280{display:block;}
.trans_ser_sub_img{width:80%;}
.trans_ser_boxes{margin-top: 26px;}
.trans_ser_boxes_4:first-child{margin-bottom: 12px;}
.trans_ser_box{width: calc(25% - 12px) !important; height: 100px; margin-right: 12px;}
.trans_ser_box img{width: 62px; height:auto;}
.trans_ser_box p{font-size: 14px;}
.logi_ser_b{font-size: 42px;}
.check_div{display:block;}
.counsel_btn{width:100%; display: block; margin-top:24px;}
.part_swiper .swiper-slide img{width:210px !important; height:inherit; object-fit:contain;}
.logi_line_div_img{top: -64%;}
.logi_intro_R p{font-size: 1.125rem;}

.logo_intro_txt .logo_intro_t1{margin-right: 0;}
.logo_intro_txt .logo_intro_t{width: 100%;}
.logo_intro_t1 div{width:100%; min-width:100%; height: auto;}
.pc_1920_txt{display: block; margin: 0 auto;text-align: center !important;}
.pc_1280_txt{display: none;}
.bg_1920{display: none;}
.bg_1280{display: flex;}
.phrase_work_1{left: 100px;}

.phrase_work_3{right: 133px;}
.logo_intro .logostory{padding: 80px 160px;}
.logo_intro_txt .logo_intro_t2{margin-top: 37px;}
.color_orange{margin-right: 0;}
.color_navy{float:right;}
.main_color{width: calc(50% - 10px); height: 300px;}
@keyframes car {
	0% {transform: translate(0px,0px);opacity: 0%;}
	40%{opacity: 100%;}
	60%{opacity: 0%;}
	100% {transform: translate(180px,-108px);opacity: 0%;}
}
@keyframes car2 {
	0% {transform: translate(0px,0px);opacity: 0%;}
	40%{opacity: 100%;}
  60%{opacity: 0%;}
	100% {transform: translate(-180px,-100px);opacity: 0%;}
}
@keyframes car3 {
	0% {transform: translate(0px,0px); opacity: 0%;}
	8%{opacity: 100%;}
  60%{opacity: 0%;}
	100% {transform: translate(-240px,140px);opacity: 0%;}
}
}
@media all and (min-width:1023px) and (max-width:1279px){
  .com_pro_com .com_pro_shape{width: inherit; height:480px;}
  .com_pro_com_2{margin: 0 60px;}
}

/* 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width:768px) and (max-width:1023px) {
  .com_pro_com_2{margin: 0 60px;}
.com_pro_com .com_pro_b{font-size: 2rem;}
.com_pro_com .com_pro_shape{width: inherit; height:480px;}
}

/* 모바일 가로, 테블릿 세로 (해상도 480px ~ 767px)*/
@media all and (min-width:480px) and (max-width:768px) {
  .com_pro_com_2{margin: 0 30px;}
  .com_pro_com .com_pro_shape{width: inherit; height:480px;}
}

/* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
@media all and (max-width:479px) {
  .com_pro_com_2{margin: 0 30px;}
  .com_pro_com .com_pro_shape{width: inherit; height:480px;}
}


</style>
