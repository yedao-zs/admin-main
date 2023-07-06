<template>
  <dark-mode-container class="flex-center h-full" :inverted="theme.footer.inverted">
    <span>IDMP智慧数字化管理平台</span>
  </dark-mode-container>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store';

defineOptions({ name: 'GlobalFooter' });

const theme = useThemeStore();
</script>

<style scoped></style>
