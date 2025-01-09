<template>
  <div>
    <!-- 首页轮播图的结构 -->
    <Carousel />
    <!-- 首页搜索医院的表单区域 -->
    <Search />
  </div>
</template>

<script setup lang="ts">
import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue";
</script>

<style scoped></style>
