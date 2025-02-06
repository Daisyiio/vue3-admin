<template>
  <div class="swiper-view">
    <div class="swiper-content">
      <div class="swiper-box">
        <div class="arrow-box leftarrow prev">
          <img
            src="@/assets/images/swiper/left-arrow.png"
            alt=""
            @click="handleClickPrev"
          />
        </div>
        <div class="swiper-main-box">
          <!-- 给 swiper-scroll-box 添加一个类绑定，用于在 clone 跳转时禁用卡片的缩放动画 -->
          <div
            class="swiper-scroll-box"
            :class="{ 'no-transition': disableCardTransition }"
            ref="cardsContainer"
          >
            <!-- 遍历 visibleList，激活项以 slideIndex 为准 -->
            <div
              class="swiper-card"
              v-for="(item, index) in visibleList"
              :key="index"
              :class="{ 'swiper-card-active': index === slideIndex }"
            >
              {{ item.name }}
            </div>
          </div>
          <img src="@/assets/images/swiper/swiper-bg-circle.png" alt="" />
        </div>
        <div class="arrow-box rightarrow next">
          <img
            src="@/assets/images/swiper/right-arrow.png"
            alt=""
            @click="handleClickNext"
          />
        </div>
      </div>
    </div>
    <div class="buttom-list"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue';

// 原始数据
const originList = [
  { name: '1111111111', type: 'fxft', id: 1 },
  { name: '2222222222', type: 'fxft', id: 2 },
  { name: '3333333333', type: 'fxft', id: 3 },
  { name: '4444444444', type: 'fxft', id: 4 },
  { name: '5555555555', type: 'fxft', id: 5 },
];

// 定义左右需要克隆的数量
const clonesLeft = 2;
const clonesRight = 2;

// 生成 visibleList：左右分别克隆2项
const visibleList = computed(() => {
  return [
    ...originList.slice(-clonesLeft), // 左侧克隆最后2项
    ...originList, // 真实数据
    ...originList.slice(0, clonesRight), // 右侧克隆前2项
  ];
});

// slideIndex 表示当前 visibleList 中激活项，初始设为 clonesLeft（即真实数据第一项在 visibleList 中的索引）
const slideIndex = ref(clonesLeft);

// ref 获取轮播容器
const cardsContainer = ref<HTMLElement | null>(null);

// 卡片尺寸及间距（需与 CSS 保持一致）
const CARD_WIDTH = 372;
const CARD_GAP = 90;

// 计算容器偏移量，使当前 slide 居中显示
const containerOffset = computed(() => {
  let containerWidth = 0;
  if (cardsContainer.value && cardsContainer.value.parentElement) {
    containerWidth = cardsContainer.value.parentElement.clientWidth;
  }
  // 父容器宽度一半减去卡片宽度一半，使激活卡片居中
  const centerOffset = (containerWidth - CARD_WIDTH) / 2;
  return -slideIndex.value * (CARD_WIDTH + CARD_GAP) + centerOffset;
});

// 更新 transform 位移；instant 为 true 时取消动画（用于瞬间跳转）
function updatePosition(instant = false) {
  if (!cardsContainer.value) return;
  cardsContainer.value.style.transition = instant
    ? 'none'
    : 'transform 0.5s ease';
  cardsContainer.value.style.transform = `translateX(${containerOffset.value}px)`;
}

// 点击“下一张”
function handleClickNext() {
  slideIndex.value++;
  updatePosition();
}

// 点击“上一张”
function handleClickPrev() {
  slideIndex.value--;
  updatePosition();
}

// 用于临时禁用卡片缩放动画的状态标志
const disableCardTransition = ref(false);

// 监听 transitionend，只处理 transform 属性过渡结束
function handleTransitionEnd(e: TransitionEvent) {
  if (e.propertyName !== 'transform') return;
  if (!cardsContainer.value) return;

  // 右侧克隆区间：当 slideIndex >= clonesLeft + originList.length 时
  if (slideIndex.value >= clonesLeft + originList.length) {
    disableCardTransition.value = true;
    cardsContainer.value.style.transition = 'none';
    slideIndex.value = clonesLeft;
    updatePosition(true);
    void cardsContainer.value.offsetWidth;
    // 使用嵌套的 requestAnimationFrame 替代 setTimeout
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (cardsContainer.value) {
          cardsContainer.value.style.transition = 'transform 0.5s ease';
        }
        disableCardTransition.value = false;
      });
    });
  }
  // 左侧克隆区间：当 slideIndex < clonesLeft 时
  else if (slideIndex.value < clonesLeft) {
    disableCardTransition.value = true;
    cardsContainer.value.style.transition = 'none';
    slideIndex.value = clonesLeft + originList.length - 1;
    updatePosition(true);
    void cardsContainer.value.offsetWidth;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (cardsContainer.value) {
          cardsContainer.value.style.transition = 'transform 0.5s ease';
        }
        disableCardTransition.value = false;
      });
    });
  }
}

onMounted(() => {
  nextTick(() => {
    if (cardsContainer.value) {
      cardsContainer.value.addEventListener(
        'transitionend',
        handleTransitionEnd
      );
      // 初始定位，无动画
      updatePosition(true);
    }
  });
});
</script>

<style lang="scss" scoped>
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

        .swiper-scroll-box {
          display: flex;
          flex-direction: row;
          column-gap: 90px;
          align-items: center;
          transition: transform 0.5s ease;
          will-change: transform;

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

/* 禁用卡片自身过渡动画的类 */
.no-transition .swiper-card {
  transition: none !important;
}
</style>
