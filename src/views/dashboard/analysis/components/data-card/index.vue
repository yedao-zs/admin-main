<template>
  <n-card :bordered="false" class="h-full rounded-8px shadow-sm">
    <n-grid cols="s:1 m:2 2:4" responsive="screen" :x-gap="16" :y-gap="16">
      <n-grid-item v-for="item in cardData" :key="item.id">
        <gradient-bg class="h-150px" :start-color="item.colors[0]" :end-color="item.colors[1]">
          <h3 class="text-16px">{{ item.title }}</h3>
          <div class="flex justify-between pt-22px">
            <svg-icon :icon="item.icon" class="text-32px mt-12px" />
            <count-to
              :prefix="item.unit"
              :start-value="1"
              :end-value="item.value"
              class="text-30px text-white dark:text-dark"
            />
          </div>
        </gradient-bg>
      </n-grid-item>
    </n-grid>
  </n-card>
</template>

<script setup lang="ts">
import { GradientBg } from './components';

defineOptions({ name: 'DashboardAnalysisDataCard' });

interface CardData {
  id: string;
  title: string;
  value: number;
  unit: string;
  colors: [string, string];
  icon: string;
}

const cardData: CardData[] = [
  {
    id: 'visit',
    title: '今日新增用户',
    value: 1000,
    unit: '',
    colors: ['#5BD1FF', '#67F1FF'],
    icon: 'eos-icons:admin-outlined'
  },
  {
    id: 'amount',
    title: '在线人数',
    value: 2345,
    unit: '',
    colors: ['#5869FF', '#5869FF'],
    icon: 'carbon:user-online'
  }
];
</script>

<style scoped></style>
