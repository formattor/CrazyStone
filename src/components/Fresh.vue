<template>
  <div class="home-container">
    <div class="home-header-1" >
      <ul>
        <li class="home-tab" :class="getClass(item)" v-for="item in items" :key="item.id" :data-id="item.id" @click="clickHeaderTab($event,item)">
          {{ item.name }}
        </li>
      </ul>
    </div>
    
    <div class="home-carousel-2">
      
    </div>

    <div class="home-card-3">

    </div>

    <div class="home-body-4">

    </div>

    <div class="home-repeaty">

    </div>

    <div class="home-footer-6">

    </div>
  </div>
</template>

<script setup lang='ts'>
import { HomeTab } from '../interface/home';

const homeTabItems: HomeTab = {
  Home: '首页',
  News: '新闻公告',
  Giide: '新手指南',
  Profile: '游戏资料',
  Blank: '',
  Download: '游戏下载',
  Communication: '玩家交流',
  Service: '客服专区',
  Forum: '论坛',
};

const items:any = Object.keys(homeTabItems).map((key) => ({
  key,
  label: homeTabItems[key as keyof HomeTab],
}));

const clickHeaderTab = (event:any,item:any) => {
  console.log(event,item);
  alert(item.label)
}

const getClass = (item:any) =>  {
  if(item.label == homeTabItems.Blank) return 'home-tab-blank'
  return 'home-tab'
}
</script>

<style scoped lang='less'>
.home-container{
  width: 100%;
  
  .home-bg-config{
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .home-header-1{
    height: 100px;
    background: url(../assets/background/page_bg_01.jpg) center / contain no-repeat;
    
    ul{
        padding-top: 50px;
        padding-right: 30px;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        .home-tab{
            height: 30px;
            width: 80px;
            background-color: rgba(22, 33, 44, 0.7);
            border: 1px solid red;
        }
        .home-tab-blank{
            height: 30px;
            width: 300px;
            background-color: rgba(22, 33, 44, 0.7);
            border: 1px solid red;
        }
    }
  }

  .home-carousel-2{
    height: 255px;
    background: url(../assets/background/page_bg_02.jpg) center / contain no-repeat;
  }

  .home-card-3{
    height: 357px;
    background: url(../assets/background/page_bg_03.jpg) center / contain no-repeat;
  }

  .home-body-4{
    height: 206px;
    background: url(../assets/background/page_bg_04.jpg) center / contain no-repeat;
  }

  .home-repeaty{
    height: 153px;
    background: url(../assets/background/page_bg_repeaty.jpg) center / contain no-repeat;
  }

  .home-footer-6{
    height: 388px;
    background: url(../assets/background/page_bg_06.jpg) center / contain no-repeat;
  }

}

</style>