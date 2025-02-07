<template>
  <div>
    <!-- 首页轮播图的结构 -->
    <Carousel />
    <!-- 首页搜索医院的表单区域 -->
    <Search />
    <!-- 底部展示医院的结构 -->
    <el-row>
      <el-col :span="20">
        <Level />
        <!-- 地区 -->
        <Region />
        <!-- 展示医院的结构 -->
        <div class="hospital">
          <Card class="item" v-for="item in 10" :key="item"/>

          <!-- 分页器 -->
          <el-pagination
      v-model:current-page="currentPage1"
      :page-size="100"
      :size="size"
      :disabled="disabled"
      :background="background"
      layout="total, prev, pager, next"
      :total="1000"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue";
import Level from './level/index.vue';
import Region from './region/index.vue';
import Card from './card/index.vue';
// 分页器需要的数据
import moduleName from 'module';
</script>

<style scoped lang="scss">
.hospital{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item{
    width: 48%;
    margin: 10px 0px;
  }
}
</style>
