<template>
  <n-grid :x-gap="16" :y-gap="16" :item-responsive="true">
    <!--  <n-grid-item span="0:24 640:24 1024:6">
      <n-card :bordered="false" class="rounded-8px shadow-sm">
        <div class="w-full h-360px py-12px">
          <h3 class="text-16px font-bold">Dashboard</h3>
          <p class="text-#aaa">Overview Of Lasted Month</p>
          <h3 class="pt-32px text-24px font-bold">
            <count-to prefix="$" :start-value="0" :end-value="7754" />
          </h3>
          <p class="text-#aaa">Current Month Earnings</p>
          <h3 class="pt-32px text-24px font-bold">
            <count-to :start-value="0" :end-value="1234" />
          </h3>
          <p class="text-#aaa">Current Month Sales</p>
          <n-button class="mt-24px whitespace-pre-wrap" type="primary">Last Month Summary</n-button>
        </div>
      </n-card>
    </n-grid-item> -->
    <n-grid-item span="0:24 640:24 1024:16">
      <n-card :bordered="false" class="rounded-8px shadow-sm">
        <div ref="lineRef" class="w-full h-360px"></div>
      </n-card>
    </n-grid-item>
    <n-grid-item span="0:24 640:24 1024:8">
      <n-card :bordered="false" class="rounded-8px shadow-sm">
        <div ref="pieRef" class="w-full h-360px"></div>
      </n-card>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { type ECOption, useEcharts } from '@/composables';

defineOptions({ name: 'DashboardAnalysisTopCard' });
// 定义横坐标数据，即时间
const timeData = ['2023-01-01', '2023-02-01', '2023-03-01', '2023-04-01', '2023-05-01', '2023-06-01'];

// 定义人数在线数量数据
const onlineData = [200, 350, 450, 600, 800, 1000];

// 定义注册数量数据
const registerData = [100, 200, 300, 400, 500, 600];

const lineOptions = ref<ECOption>({
  color: ['#FFD700', '#0000FF'], // 设置颜色为黄色和蓝色
  legend: {
    data: ['人数在线数量', '注册数量']
  },
  xAxis: {
    type: 'category',
    data: timeData
  },
  yAxis: {},
  series: [
    {
      name: '人数在线数量',
      type: 'line',
      data: onlineData
    },
    {
      name: '注册数量',
      type: 'line',
      data: registerData
    }
  ]
}) as Ref<ECOption>;
const { domRef: lineRef } = useEcharts(lineOptions);

// 定义雷达图的指标名称
const indicatorData = [
  { name: '数据分析', max: 100 },
  { name: '人工智能', max: 100 },
  { name: '物联网', max: 100 },
  { name: '云计算', max: 100 },
  { name: '区块链', max: 100 }
];

// 定义不同企业的数字化能力评估数据
const companyData = [
  {
    name: '企业A',
    value: [80, 90, 70, 85, 75]
  },
  {
    name: '企业B',
    value: [60, 70, 80, 75, 85]
  },
  {
    name: '企业C',
    value: [95, 75, 85, 80, 90]
  }
];

const pieOptions = ref<ECOption>({
  radar: {
    indicator: indicatorData
  },
  legend: {
    data: companyData.map(item => item.name)
  },
  series: [
    {
      type: 'radar',
      data: companyData.map(item => ({
        value: item.value,
        name: item.name
      }))
    }
  ]
}) as Ref<ECOption>;
const { domRef: pieRef } = useEcharts(pieOptions);
</script>

<style scoped></style>
