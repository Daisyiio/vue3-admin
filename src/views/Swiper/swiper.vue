<template>
  <div class="swiper-view">
    <div class="swiper-content">
      <div class="swiper-box">
        <div class="arrow-box leftarrow prev">
          <img
            src="@/assets/images/swiper/left-arrow.png"
            alt=""
            class="custom-prev"
          />
        </div>
        <div class="swiper-main-box">
          <!-- 给 swiper-scroll-box 添加一个类绑定，用于在 clone 跳转时禁用卡片的缩放动画 -->
          <swiper
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :loop="true"
            :slidesPerView="'auto'"
            :pagination="{
              clickable: true,
            }"
            :coverflowEffect="{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }"
            :navigation="{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              v-for="item in originList"
              :key="item.id"
              class="swiper-card"
            >
              <div>{{ item.name }}</div>
            </swiper-slide>
          </swiper>
          <img src="@/assets/images/swiper/swiper-bg-circle.png" alt="" />
        </div>
        <div class="arrow-box rightarrow next">
          <img
            src="@/assets/images/swiper/right-arrow.png"
            alt=""
            class="custom-next"
          />
        </div>
      </div>
    </div>
    <div class="buttom-list"></div>
  </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
const modules = [EffectCoverflow, Pagination, Navigation];

// 原始数据
const originList = [
  { name: '1111111111', type: 'fxft', id: 1 },
  { name: '2222222222', type: 'fxft', id: 2 },
  { name: '3333333333', type: 'fxft', id: 3 },
  { name: '4444444444', type: 'fxft', id: 4 },
  { name: '5555555555', type: 'fxft', id: 5 },
];
</script>

<style lang="scss">
.swiper-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .swiper-content {
    flex: 1 0 0;
    width: 100%;
    padding: 69px 74px;

    .swiper-box {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;

      .swiper-main-box {
        flex: 1 0 0;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;

        .swiper-card {
          width: 372px;
          height: 416px;
          background: #ffffff;
          border-radius: 6px;
          z-index: 2;
          transition: transform 0.3s ease, opacity 0.3s ease;
          flex-shrink: 0;

          &.swiper-card-active {
            transform: scale(1.2);
            opacity: 1;
            filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));
          }

          &:not(.swiper-card-active) {
            opacity: 0.8;
            transform: scale(0.9);
          }
        }
        img {
          width: max(calc(100% - 118px), 998px);
          height: 340px;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }
      }

      .arrow-box {
        width: 191px;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
          width: 191px;
          height: 226px;
          cursor: pointer;
          transition: 0.2s ease;
          z-index: 3;

          &:hover {
            filter: brightness(0.8) contrast(1.2);
          }

          &:active {
            filter: brightness(0.8) contrast(1.4);
          }
        }
      }
    }
  }

  .buttom-list {
    width: max(calc(100% - 280px), 1358px);
    height: 135px;
    background: linear-gradient(180deg, #dde9ff 0%, #ffffff 100%);
    box-shadow: 0px 0px 13px 4px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    margin-bottom: 63px;
  }
}
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
  z-index: 3;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  display: block;
  width: 100%;
}
.mySwiper {
  width: 100%;
  overflow: hidden;
}
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right {
  background-image: none;
}
</style>
