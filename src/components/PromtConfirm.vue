<template></template>

<script lang="ts" setup>
import { useDialog } from "naive-ui";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { returnItem } from "../apis/addRecord";
import { GetItemById } from "../apis/GetItem";

const dialog = useDialog();

const route = useRoute();
const id = Number(route.query.id);
onMounted(async () => {
  const info = await GetItemById(id);
  const name = info.name;
  dialog.warning({
    title: `你正在归还${name}，确定？`,
    content: "确定归还？",
    positiveText: "现在归还",
    negativeText: "取消",
    onPositiveClick: async () => {
      location.href = `/OK?id=${id}&a=1`;
      await returnItem(id);
    },
    onNegativeClick: () => {
      window.close();
    },
  });
});
</script>
