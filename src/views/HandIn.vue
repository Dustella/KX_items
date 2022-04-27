<template>
  <n-message-provider>
    <form-group @post="handle" />
  </n-message-provider>
</template>

<script lang="ts" setup>
import FormGroup from "../components/FormGroup.vue";
import { CascaderOption, NMessageProvider } from "naive-ui";
import { addRecord } from "../apis/addRecord";
import { useRouter } from "vue-router";
const router = useRouter()

function ISODateString(d: Date) {
  function pad(n: number) {
    return n < 10 ? "0" + n : n;
  }
  return (
    d.getFullYear() +
    "-" +
    pad(d.getMonth() + 1) +
    "-" +
    pad(d.getDate()) +
    "T" +
    pad(d.getHours()) +
    ":" +
    pad(d.getMinutes()) +
    ":" +
    pad(d.getSeconds()) +
    "Z"
  );
}

const handle = async(f: any, id: number) => {
  const estiDate = new Date(f.timestamp);

  const now = new Date();
  const form = {
    name: f.name,
    operation: "借用",
    organization: f.organization,
    phone: f.phone,
    comment: f.comment,
    operateTime: ISODateString(now),
    estimateTime: ISODateString(estiDate),
    itemId: id,
  };
  await addRecord(form)
  await router.push(`/OK?id=${id}&a=0`)
};
</script>
