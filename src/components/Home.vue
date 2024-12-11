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
      <div class="fresh-router" @click="clickToFresh">
        
      </div>
    </div>

    <div class="home-card-3">
      <div class="basic-info">
        <div class="basic-button">
          <div class="basic-download" @click="clickDownload"></div>
          <div class="basic-user">
            <div class="basic-regester" @click="clickRegester"></div>
            <div class="basic-charge" @click="clickCharge"></div>
          </div>
        </div>
        <div class="basic-link" @click="clickLink($event)">
          <a href="#" rel="noopener noreferrer">等级介绍</a>
          |
          <a href="#" rel="noopener noreferrer">动漫专区</a>
          <a href="#" rel="noopener noreferrer">下载安装</a>
          |
          <a href="#" rel="noopener noreferrer">进入游戏</a>
          <a href="#" rel="noopener noreferrer">模式选择</a>
          |
          <a href="#" rel="noopener noreferrer">基本操作</a>
        </div>
      </div>
      <div class="fast-track">
        <div class="fast-link" @click="clickLink($event)">
          <a href="#" rel="noopener noreferrer">镶嵌系统</a>
          |
          <a href="#" rel="noopener noreferrer">合成系统</a>
          <a href="#" rel="noopener noreferrer">任务系统</a>
          |
          <a href="#" rel="noopener noreferrer">宠物系统</a>
          <a href="#" rel="noopener noreferrer">师徒系统</a>
          |
          <a href="#" rel="noopener noreferrer">好友系统</a>
          <a href="#" rel="noopener noreferrer">结婚系统</a>
        </div>
      </div>

      <div class="service-area">
        <span>客服电话:110-120-119</span>
      </div>

      <div class="main-card">
        <div class="main-carousel">
          <el-carousel height="247px">
            <el-carousel-item v-for="item in 3" :key="item">
              <h3 class="small justify-center" text="2xl">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="main-tab">
          <div class="main-tab-header main-tab-header-1"></div>
          <div class="main-tab-header main-tab-header-2"></div>
        </div>
      </div>
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
import { ElMessage } from 'element-plus'
import { HomeTab } from '../interface/home';
import { useRouter } from 'vue-router';

const router = useRouter();

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
  ElMessage({
    message: item.label,
    type: 'success',
  })
}

const getClass = (item:any) =>  {
  if(item.label == homeTabItems.Blank) return 'home-tab-blank'
  return 'home-tab'
}

const clickToFresh = () => {
  ElMessage({
    message: '新手入门',
    type: 'success',
  })
  router.push('/message');
}

const clickDownload = () => {
  ElMessage({
    message: '游戏下载',
    type: 'success',
  })
}

const clickRegester = () => {
  ElMessage({
    message: '游戏注册',
    type: 'success',
  })
}

const clickCharge = () => {
  ElMessage({
    message: '游戏充值',
    type: 'success',
  })
}

const clickLink = (event:any) => {
  console.log(event);
  event.preventDefault();
  ElMessage({
    message: event.target.textContent,
    type: 'success',
  })
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
    background: url(../assets/background/home_bg_01.jpg) center / contain no-repeat;
    
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
            // background-color: rgba(22, 33, 44, 0.7);
            // border: 1px solid red;
        }
        .home-tab-blank{
            height: 30px;
            width: 300px;
            // background-color: rgba(22, 33, 44, 0.7);
            // border: 1px solid red;
        }
    }
  }

  .home-carousel-2{
    height: 255px;
    background: url(../assets/background/home_bg_02.jpg) center / contain no-repeat;
    display: flex;
    position: relative;
    justify-content: center;
    .fresh-router{
      position: absolute;
      left: 50%; /* 定位到中线 */
      transform: translateX(-50%); /* 使元素完全居中 */
      margin-left: -370px; /* 偏移 300px */
      margin-top: 80px; /* 偏移 300px */
      width: 200px;
      height: 60px;
      // background-color: rgba(22, 33, 44, 0.7);
      // border: 1px solid red;
      background: url(../assets/background/newGamer.gif) center / contain no-repeat;
    }
  }

  .home-card-3{
    height: 357px;
    background: url(../assets/background/home_bg_03.jpg) center / contain no-repeat;
    .basic-info{
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 50%; /* 定位到中线 */
      transform: translateX(-50%); /* 使元素完全居中 */
      margin-left: -370px; /* 偏移 300px */
      margin-top: -60px; /* 偏移 300px */
      width: 187px;
      height: 160px;
      // background-color: rgba(22, 33, 44, 0.3);
      // border: 1px solid red;
      background: url(../assets/background/home_items_1.gif);
      background-position: -200px;
      .basic-button{
        width: 100%;
        height: 100px;
        // background-color: rgba(22, 33, 44, 0.3);
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        .basic-download{
          width: 100%;
          height: 40px;
          // background-color: rgba(22, 33, 44, 0.3);
          // border: 1px solid red;
        }
        .basic-user{
          display: flex;
          flex-direction: row;
          margin-top: 8px;
          height: 30px;
          .basic-regester{
            width: 50%;
            margin-right: 5px;
            // background-color: rgba(22, 33, 44, 0.7);
            // border: 1px solid yellow;
          }
          .basic-charge{
            width: 50%;
            margin-left: 5px;
            // background-color: rgba(22, 33, 44, 0.7);
            // border: 1px solid blue;
          }
        }
      }
      .basic-link{
        height: 60px;
        width: 160px;
        margin-top: 95px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: #793A19;
        a {
          text-decoration: none;
          color: inherit;
        }
        a:hover {
          text-decoration: underline;
          color: #FB200F;
        }
        font-family: "宋体", SimSun, serif;
        // background-color: rgba(22, 33, 44, 0.6);
        // border: 1px solid red;
      }
    }
    .fast-track{
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 50%; /* 定位到中线 */
      transform: translateX(-50%); /* 使元素完全居中 */
      margin-left: -370px; /* 偏移 300px */
      margin-top: 180px; /* 偏移 300px */
      width: 187px;
      height: 110px;
      // background-color: rgba(22, 33, 44, 0.3);
      // border: 1px solid red;
      .fast-link{
        text-align: center;
        height: 60px;
        width: 160px;
        margin-top: 10px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: #793A19;
        a {
          text-decoration: none;
          color: inherit;
        }
        a:hover {
          text-decoration: underline;
          color: #FB200F;
        }
        font-family: "宋体", SimSun, serif;
      }
    }
    .service-area{
      text-align: center;
      height: 65px;
      width: 160px;
      margin-left: -370px;
      margin-top: 360px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      color: #793A19;
      font-family: "宋体", SimSun, serif;
      background: url(../assets/background/home_items_2.gif);
      background-position: 30px 30px;
    }
    .main-card{
      text-align: center;
      height: 280px;
      width: 700px;
      margin-left: 110px;
      margin-top: 40px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      // background-color: rgba(22, 33, 44, 0.7);
      // border: 1px solid red;
      .main-carousel{
        margin-top: 20px;
        margin-left: 20px;
        width: 317px;
        background-color: rgba(22, 33, 44, 0.7);
        border: 1px solid red;
        .el-carousel__item h3 {
          color: #475669;
          opacity: 0.75;
          line-height: 150px;
          margin: 0;
          text-align: center;
        }

        .el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n + 1) {
          background-color: #d3dce6;
        }
      }

      .main-tab{
        display: flex;
        flex-direction: row;
        height: 300px;
        width: 320px;
        margin-left: 180px;
        margin-top: -300px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        // background-color: rgba(22, 33, 44, 0.7);
        // border: 1px solid red;
        .main-tab-header{
          height: 40px;
          width: 91px;
          margin-top: 6px;
          background: url(../assets/background/home_items_1.gif);
        }
        .main-tab-header-1{
          margin-left: 40px;
          background-position: -92px 0;
        }
        .main-tab-header-2{
          background-position: -92px 0;
        }
        .main-tab-header:hover{
          background: url(../assets/background/home_items_1.gif);
        }
      }
    }
  }

  .home-body-4{
    height: 206px;
    background: url(../assets/background/home_bg_04.jpg) center / contain no-repeat;
  }

  .home-repeaty{
    height: 153px;
    background: url(../assets/background/home_bg_repeaty.jpg) center / contain no-repeat;
  }

  .home-footer-6{
    height: 388px;
    background: url(../assets/background/home_bg_06.jpg) center / contain no-repeat;
  }

}

</style>