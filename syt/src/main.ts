import { createApp } from "vue";
//引入清除默认样式
import "@/style/reset.scss";
//引入根组件App
import App from "@/App.vue";
//引入全局组件 顶部，底部都是全局组件
import HospitalTop from "@/components/hospital_top/index.vue";
import HospitalBotton from "@/components/hospital_bottom/index.vue";
//引入vue-router核心插件并安装
import router from "@/router";
//引入element-puls插件
import ElementPlus from "element-plus";
// 国际化文件
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import "element-plus/dist/index.css";

const app = createApp(App);
// 定义全局组件
app.component("HospitalTop", HospitalTop);
app.component("HospitalBotton", HospitalBotton);
//vue-安装router
app.use(router);
app.use(ElementPlus, {
    locale: zhCn,
  })

app.mount("#app");
