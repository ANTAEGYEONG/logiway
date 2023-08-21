<template>

  <div class="arrorw">  <!-- v-bind:class="pass.class" -->
    <a class="btn_arrow double_arrow_left none_active" style="cursor : pointer;" v-if="pass.pageNo != 1" v-on:click="onClickPagerNo(1)" @keydown.enter="onClickPagerNo(0)"></a>
    <a class="btn_arrow one_arrow one_arrow_left none_active" style="cursor : pointer;" v-if="pass.pageNo != 1" v-on:click="onClickPagerNo(pass.startBlock-1)" @keydown.enter="onClickPagerNo(pass.startBlock-1)"></a>  <!-- v-bind:href="pass.href" -->
    <ul class="page_num">
      <li class="btn_number" style="cursor : pointer;" :class="{active:item == (pass.pageNo==0 ? 1:pass.pageNo)}" v-for="item in pass.list" v-bind:key="item"> <!-- :class="{on:item == (pass.pageNo==0 ? 1:pass.pageNo)}" -->
        <a v-on:click="onClickPagerNo(item)"  @keydown.enter="onClickPagerNo(item)">{{item}}</a>  <!-- v-bind:href="pass.href" -->
      </li>
    </ul>
    <a class="btn_arrow one_arrow one_arrow_right none_active" style="cursor : pointer;" v-if="pass.pageNo != pass.endSize" v-on:click="onClickPagerNo(pass.nextBlock)" @keydown.enter="onClickPagerNo(pass.nextBlock)"></a>  <!-- v-bind:href="pass.href" -->
    <a class="btn_arrow double_arrow_right none_active" style="cursor : pointer;" v-if="pass.pageNo != pass.endSize"  v-on:click="onClickPagerNo(pass.endSize)" @keydown.enter="onClickPagerNo(pass.endSize)"></a>  <!-- v-bind:href="pass.href" -->
  </div>

</template>
<script>
export default{
  name : "pager_t"
  , props: {
    'pass' : Object
  }
  , methods:{

    onClickPagerNo:function(n){
      let vm = this

      vm.pass.pageNo = (n==0) ? 1:n;
      vm.pass.callBack(n);
    }

    ,createPager:function(pager,vm,cbType){
      pager.callBackType=cbType;
      let _list=[];
      let _prePager = parseInt(pager.totalSize-1);
      let _nxtPager = parseInt(pager.rowSize);
      let _endPager = parseInt( (_prePager / _nxtPager) + 1 );

      //  let _endPagerNo=parseInt((pager.totalSize-1)/pager.rowSize)+1;
      let _endPagerNo = (_endPager == 0) ? 1 : _endPager;
      let _startBlock=parseInt((pager.pageNo-1)/pager.blockSize)*pager.blockSize+1;
      let index=0;
      //let _endBlock=0;
      let _nextBlock=0;

      for(let i=_startBlock;i<=_endPagerNo;i++){

        if(index<pager.blockSize){
          _list.push(i);
          //_endBlock=i;
          if(i<_endPagerNo){
            _nextBlock=i+1;
          }

          index++;
        }else{
          break;
        }
      }//end for

      pager.list=_list;
      pager.model=vm;
      pager.startBlock=_startBlock;
      pager.nextBlock=_nextBlock;
      pager.endSize = _endPagerNo;

      return pager;
    }
  }
}
</script>
<style scoped>
@media (min-width:1920px){
  .arrorw{margin-top:16px; text-align: center; display: flex; align-items: center; justify-content: center; overflow: hidden; }
  .page_num{overflow: hidden;}
  .page_num li{float: left; margin-left: 28px;}
  .page_num li:first-child{margin-left: 0px;}
  .one_arrow{margin: 0 20px;}
  .btn_arrow img{width: 12px; height: 10px;}
  .one_arrow img{width: 6px; height: 10px;}
  .page_num li.active a{color:#326CFF;}

  .double_arrow_left{background: url(@/assets/images/left_arrow_double.png); background-size: contain; width: 12px; height: 10px;}
  .one_arrow_left{background: url(@/assets/images/left_arrow.png); background-size: contain; width: 6px; height: 10px;}
  .one_arrow_right{background: url(@/assets/images/right_arrow.png); background-size: contain; width: 6px; height: 10px;}
  .double_arrow_right{background: url(@/assets/images/right_arrow_double.png); background-size: contain; width: 12px; height: 10px;}
  /* .double_arrow_left.none_active{background: url(@/assets/images/left_arrow_double_none.png); background-size: contain; width: 12px; height: 10px;}
  .one_arrow_left.none_active{background: url(@/assets/images/left_arrow_none.png); background-size: contain; width: 6px; height: 10px;}
  .one_arrow_right.none_active{background: url(@/assets/images/right_arrow_none.png); background-size: contain; width: 6px; height: 10px;}
  .double_arrow_right.none_active{background: url(@/assets/images/right_arrow_double_none.png); background-size: contain; width: 12px; height: 10px;} */
}
@media all and (max-width:1919px){
  .arrorw{margin-top:16px; text-align: center; display: flex; align-items: center; justify-content: center; overflow: hidden; }
  .page_num{overflow: hidden;}
  .page_num li{float: left; margin-left: 28px;}
  .page_num li:first-child{margin-left: 0px;}
  .one_arrow{margin: 0 20px;}
  .btn_arrow img{width: 12px; height: 10px;}
  .one_arrow img{width: 6px; height: 10px;}
  .page_num li.active a{color:#326CFF;}
  .double_arrow_left{background: url(@/assets/images/left_arrow_double.png); background-size: contain; width: 12px; height: 10px;}
  .one_arrow_left{background: url(@/assets/images/left_arrow.png); background-size: contain; width: 6px; height: 10px;}
  .one_arrow_right{background: url(@/assets/images/right_arrow.png); background-size: contain; width: 6px; height: 10px;}
  .double_arrow_right{background: url(@/assets/images/right_arrow_double.png); background-size: contain; width: 12px; height: 10px;}
  /* .double_arrow_left.none_active{background: url(@/assets/images/left_arrow_double_none.png); background-size: contain; width: 12px; height: 10px;}
  .one_arrow_left.none_active{background: url(@/assets/images/left_arrow_none.png); background-size: contain; width: 6px; height: 10px;}
  .one_arrow_right.none_active{background: url(@/assets/images/right_arrow_none.png); background-size: contain; width: 6px; height: 10px;}
  .double_arrow_right.none_active{background: url(@/assets/images/right_arrow_double_none.png); background-size: contain; width: 12px; height: 10px;} */
}
</style>

