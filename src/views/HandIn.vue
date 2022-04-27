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
    d.getUTCFullYear() +
    "-" +
    pad(d.getUTCMonth() + 1) +
    "-" +
    pad(d.getUTCDate()) +
    "T" +
    pad(d.getUTCHours()) +
    ":" +
    pad(d.getUTCMinutes()) +
    ":" +
    pad(d.getUTCSeconds()) +
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
  await router.push(`/OK?id=${id}`)
};
</script>
