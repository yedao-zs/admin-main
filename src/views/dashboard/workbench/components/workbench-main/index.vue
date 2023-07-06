<template>
  <n-grid :item-responsive="true" :x-gap="16" :y-gap="16">
    <n-grid-item span="0:24 640:24 1024:16">
      <n-space :vertical="true" :size="16">
        <n-card title="使用量" :bordered="false" size="small" class="rounded-8px shadow-sm">
          <TWoChart />
        </n-card>
        <n-card title="数字化分析" :bordered="false" size="small" class="rounded-8px shadow-sm">
          <!--   <n-grid :item-responsive="true" responsive="screen" cols="m:2 l:3" :x-gap="8" :y-gap="8">
            <n-grid-item v-for="item in technology" :key="item.id">
              <technology-card v-bind="item" />
            </n-grid-item>
          </n-grid> -->
          <OneChart />
        </n-card>
      </n-space>
    </n-grid-item>
    <n-grid-item span="0:24 640:24 1024:8">
      <n-space :vertical="true" :size="16">
        <n-card title="工作台操作" :bordered="false" size="small" class="rounded-8px shadow-sm">
          <n-grid :item-responsive="true" responsive="screen" cols="m:2 l:3" :x-gap="8" :y-gap="8">
            <n-grid-item v-for="item in shortcuts" :key="item.id">
              <shortcuts-card v-bind="item" />
            </n-grid-item>
          </n-grid>
        </n-card>
        <n-card title="" :bordered="false" size="small" class="rounded-8px shadow-sm">
          <ThreeChart />
        </n-card>
      </n-space>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import OneChart from '@/views/plugin/charts/echarts/model/oneChart.vue';
import TWoChart from '@/views/plugin/charts/echarts/model/twoChart.vue';
import ThreeChart from '@/views/plugin/charts/echarts/model/threeChart.vue';
import { ShortcutsCard, TechnologyCard } from './components';
defineOptions({ name: 'DashboardWorkbenchMain' });

interface Activity {
  id: number;
  content: string;
  time: string;
}

const activity: Activity[] = [
  { id: 4, content: 'Soybean 刚才把工作台页面随便写了一些，凑合能看了！', time: '2021-11-07 22:45:32' },
  { id: 3, content: 'Soybean 正在忙于为IDMP智慧数字化管理平台写项目说明文档！', time: '2021-11-03 20:33:31' },
  { id: 2, content: 'Soybean 准备为IDMP智慧数字化管理平台 1.0的发布做充分的准备工作！', time: '2021-10-31 22:43:12' },
  {
    id: 1,
    content: '@yanbowe 向IDMP智慧数字化管理平台提交了一个bug，多标签栏不会自适应。',
    time: '2021-10-27 10:24:54'
  },
  { id: 0, content: 'Soybean 在2021年5月28日创建了开源项目IDMP智慧数字化管理平台！', time: '2021-05-28 22:22:22' }
];

interface Shortcuts {
  id: number;
  label: string;
  icon: string;
  iconColor: string;
}

const shortcuts: Shortcuts[] = [
  { id: 0, label: '主控台', icon: 'mdi:desktop-mac-dashboard', iconColor: '#409eff' },
  { id: 1, label: '平台管理', icon: 'ic:outline-settings', iconColor: '#7238d1' },
  { id: 2, label: '权限管理', icon: 'mdi:family-tree', iconColor: '#f56c6c' },
  { id: 3, label: '组件', icon: 'fluent:app-store-24-filled', iconColor: '#19a2f1' },
  { id: 4, label: '表格', icon: 'mdi:table-large', iconColor: '#fab251' },
  { id: 5, label: '图表', icon: 'mdi:chart-areaspline', iconColor: '#8aca6b' }
];
</script>

<style scoped></style>
