<template>
  <n-result status="success" title="成功" :description="des">
    <template #footer>
      <n-button @click="close">好</n-button>
    </template>
  </n-result>
</template>

<script lang="ts" setup>
import { NResult,NButton } from 'naive-ui';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const close = ()=>{
    window.close();
}

const des = ref("")

const route = useRoute()
const a = Number(route.query.a)
des.value = ["你成功借走了这个物品,记得还","你成功归还了这个物品"][a]

</script>


