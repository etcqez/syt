<template>
    <div>
        <el-card shadow="hover">
            <div class="content">
                <div class="left">
                    <div class="hospital">
                        北京医院
                    </div>
                    <div class="tip">
                        <div class="level">三级甲等</div>
                        <div class="time">2025</div>
                    </div>
                </div>
                <div class="right">
                    <img src="../../../assets/images/logo.jpg" alt="">
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.content {
    display: flex;
    justify-content: space-between;
    .right {
        img {
            width: 50px;
            height: 50px;
        }
    }
    .left{
        width: 60%;
        .tip{
            color: gray;
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            
        }
    }
}
</style>