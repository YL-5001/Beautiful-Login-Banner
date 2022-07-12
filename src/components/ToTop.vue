<template>
  <div class="gotop iconfont icon-arrow-up-circle" v-show="gotop" @click="toTop()"></div>
</template>

<script>
  import {
    ref,
    onMounted
  } from '@vue/runtime-core'
  export default {
    name: 'ToTop',
    setup() {
      //变量
      let gotop = ref(false) //记得Vue3的响应式
      //生命周期
      onMounted(() => {
        // 此处true需要加上，不加滚动事件可能绑定不成功
        window.addEventListener("scroll", handleScroll, true)
      })
      //方法
      // 显示返回顶部按钮
      const handleScroll = () => {
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop
        scrolltop > 100 ? (gotop.value = true) : (gotop.value = false)
      }
      //返回顶部
      const toTop = () => {
        let top = document.documentElement.scrollTop || document.body.scrollTop
        // 实现滚动效果 
        const timeTop = setInterval(() => {
          document.body.scrollTop = document.documentElement.scrollTop = top -= 50
          if (top <= 0) {
            clearInterval(timeTop)
          }
        }, 10)
      }
      return {
        gotop,
        handleScroll,
        toTop
      }
    }
  }
</script>

<style scoped>
  .icon-arrow-up-circle {
    position: fixed;
    right: 50px;
    bottom: 30px;
    font-size: 30px;
    color: #a7d500;
    cursor: pointer;
  }
</style>