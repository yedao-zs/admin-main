<template>
  <div class="login-container">
    <div class="right-content">
      <main class="loginfrom">
        <!-- 	<header style="width: 252px; height: 160px;">
					<div class="w-70px h-70px rounded-35px overflow-hidden logo">
            <system-logo class="text-70px text-primary" :fill="true" />
          </div>
					<n-gradient-text type="primary" :size="28" class="title">{{ title }}</n-gradient-text>
				</header> -->
        <h1 class="title">{{ title }}</h1>
        <h3
          class="text-18px text-primary font-medium"
          style="text-align: center; padding-top: 20px; color: #0e0e0e; font-weight: 800"
        >
          {{ activeModule.label }}
        </h3>
        <div class="pt-24px">
          <transition name="fade-slide" mode="out-in" appear>
            <component :is="activeModule.component" />
          </transition>
        </div>
      </main>
      <div class="titles">
        <div class="t1">Leading the Digital Era</div>
        <!-- <div class="t2">数据驱动，连接未来</div> -->
        <img src="@/assets/下载.svg" alt="" class="mt-20" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Component } from 'vue';
import { loginModuleLabels } from '@/constants';
import { useThemeStore } from '@/store';
import { useAppInfo } from '@/composables';
import { getColorPalette, mixColor } from '@/utils';
import { BindWechat, CodeLogin, LoginBg, PwdLogin, Register, ResetPwd } from './components';

interface Props {
  /** 登录模块分类 */
  module: UnionKey.LoginModule;
}

const props = defineProps<Props>();

const theme = useThemeStore();
const { title } = useAppInfo();

interface LoginModule {
  key: UnionKey.LoginModule;
  label: string;
  component: Component;
}

const modules: LoginModule[] = [
  { key: 'pwd-login', label: loginModuleLabels['pwd-login'], component: PwdLogin },
  { key: 'code-login', label: loginModuleLabels['code-login'], component: CodeLogin },
  { key: 'register', label: loginModuleLabels.register, component: Register },
  { key: 'reset-pwd', label: loginModuleLabels['reset-pwd'], component: ResetPwd },
  { key: 'bind-wechat', label: loginModuleLabels['bind-wechat'], component: BindWechat }
];

const activeModule = computed(() => {
  const active: LoginModule = { ...modules[0] };
  const findItem = modules.find(item => item.key === props.module);
  if (findItem) {
    Object.assign(active, findItem);
  }
  return active;
});

const bgThemeColor = computed(() => (theme.darkMode ? getColorPalette(theme.themeColor, 7) : theme.themeColor));

const bgColor = computed(() => {
  const COLOR_WHITE = '#ffffff';
  const ratio = theme.darkMode ? 0.5 : 0.2;
  return mixColor(COLOR_WHITE, theme.themeColor, ratio);
});
</script>

<style scoped lang="scss">
.login-container {
  // display: flex;
  width: 100%;
  height: auto;
  min-height: 100vh;
  background: url('https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png') top/cover no-repeat;

  .right-content {
    margin: 0px auto;
    width: 100%;
    padding-top: 150px;
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: flex-start;

    .logo {
      text-align: center;
    }

    .titles {
      width: 352px;
      height: 160px;
      padding-top: 80px;

      .t1 {
        width: 1436px;
        height: 120px;
        font-family: PingFang SC Heavy;
        font-size: 36px;
        font-weight: 800;
        line-height: 101px;
        background-image: linear-gradient(to right, #2f00b0, #00b4db, #54cce7);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }

      .t2 {
        width: 452px;
        height: 59px;
        font-family: PingFang SC Medium;
        font-size: 42px;
        line-height: 49px;
        color: rgb(55, 9, 221);
      }
    }

    .loginfrom {
      padding: 60px 58px 60px;
      background: #fff;
      opacity: 0.8;
      border-radius: 12px;
      width: 550px;
    }

    .title {
      width: 100%;
      height: 59px;
      font-family: PingFang SC Medium;
      font-size: 22px;
      line-height: 49px;
      color: rgb(22, 22, 22);
      font-weight: 800;
      text-align: center;
    }
  }
}
</style>
