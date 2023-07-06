<template>
  <n-grid :x-gap="16" :y-gap="16" :item-responsive="true">
    <n-grid-item span="0:24 640:24 1024:8">
      <n-card title="通知" :bordered="false" class="h-full rounded-8px shadow-sm">
        <n-timeline>
          <n-timeline-item v-for="item in timelines" :key="item.type" v-bind="item" />
        </n-timeline>
      </n-card>
    </n-grid-item>
    <n-grid-item span="0:24 640:24 1024:16">
      <n-card title="用户在线表格" :bordered="false" class="h-full rounded-8px shadow-sm">
        <n-data-table size="small" :columns="columns" :data="tableData" />
      </n-card>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { NTag } from 'naive-ui';

defineOptions({ name: 'DashboardAnalysisBottomPart' });

interface TimelineData {
  type: 'default' | 'info' | 'success' | 'warning' | 'error';
  title: string;
  content: string;
  time: string;
  look: string;
}

interface TableData {
  key: number;
  name: string;
  time: number;
  address: string;
  tags: string[];
}

const timelines: TimelineData[] = [
  { type: 'default', title: 'IDMP智慧数字化管理平台发布', content: '', time: '2021-10-10 20:46' },
  {
    type: 'success',
    title: '成功案例分享',
    content: '展示IDMP智慧数字化管理平台的成功应用案例',
    time: '2021-10-10 20:46'
  },
  { type: 'error', title: '错误修复', content: '解决IDMP智慧数字化管理平台中的错误和问题', time: '2021-10-10 20:46' },
  {
    type: 'warning',
    title: '警告通知',
    content: '提醒用户注意IDMP智慧数字化管理平台中的潜在风险',
    time: '2021-10-10 20:46'
  },
  { type: 'info', title: '更新信息', content: '发布IDMP智慧数字化管理平台的新功能和改进', time: '2021-10-10 20:46' }
];

const columns = [
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '在线时长',
    key: 'time'
  },
  {
    title: '在线地址',
    key: 'address'
  },
  {
    title: '标签',
    key: 'tags',
    render(row: TableData) {
      const tags = row.tags.map(tagKey => {
        return h(
          NTag,
          {
            style: {
              marginRight: '6px'
            },
            type: 'info'
          },
          {
            default: () => tagKey
          }
        );
      });
      return tags;
    }
  },
  {
    title: '操作',
    key: 'look'
  }
];

const tableData: TableData[] = [
  {
    key: 0,
    name: '张三',
    time: 32,
    address: '纽约市湖滨大道1号',
    tags: ['普通人员', '开发者'],
    look: '查看'
  },
  {
    key: 1,
    name: '李四',
    time: 42,
    address: '伦敦市湖滨大道1号',
    tags: ['开发者']
  },
  {
    key: 2,
    name: '王五',
    time: 32,
    address: '悉尼市湖滨大道1号',
    tags: ['管理员']
  },
  {
    key: 3,
    name: '大豆',
    time: 25,
    address: '中国深圳市',
    tags: ['程序员']
  },
  {
    key: 4,
    name: '张三',
    time: 32,
    address: '纽约市湖滨大道1号',
    tags: ['开发者']
  },
  {
    key: 5,
    name: '李四',
    time: 42,
    address: '伦敦市湖滨大道1号',
    tags: ['普通员工']
  },
  {
    key: 6,
    name: '王五',
    time: 32,
    address: '悉尼市湖滨大道1号',
    tags: ['普通员工']
  }
];
</script>

<style scoped></style>
