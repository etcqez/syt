<template>
  <div class="container">
    <!--顶部的全局组件-->
    <HospitalTop />
    <!-- 展示路由组件的区域 -->
    <!-- 顶部是绝对定位，没有高度，因此下面的内容要设置margin-top -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!--顶部的全局组件-->
    <HospitalBotton />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    // 顶部是绝对定位，没有高度，因此下面的内容要设置margin-top
    margin-top: 70px;
    // height: 70px;
    width: 1200px;
    min-height: 700px;
  }
}
</style>
