<template>
  <div class="bottom">
    <div class="content">
      <div class="left">京ICP备 000000号 电话挂号000000000000</div>
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.bottom {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  background: #f0f2f5;
  .content {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    .right {
      span {
        margin: 0px 5px;
      }
    }
  }
}
</style>
