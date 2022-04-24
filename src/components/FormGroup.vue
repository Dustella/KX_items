<template>
  <n-card title="科协物品管理系统">
    <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules">
      <n-form-item label="借用人姓名" path="name">
        <n-input v-model:value="formValue.name" placeholder="输入姓名" />
      </n-form-item>
      <n-form-item label="借用组织（选填）" path="organization">
        <n-input
          v-model:value="formValue.organization"
          placeholder="输入年龄"
        />
      </n-form-item>
      <n-form-item label="借用人电话号码" path="phone">
        <n-input v-model:value="formValue.phone" placeholder="电话号码" />
      </n-form-item>
      <n-form-item label="预期归还时间" path="date">
        <n-date-picker
          v-model:value="formValue.timestamp"
          type="datetime"
          clearable
        />
      </n-form-item>
      <n-form-item>
        <n-button attr-type="button" @click="handleValidateClick">
          借用
        </n-button>
      </n-form-item>
    </n-form>
  </n-card>
</template>

<script lang="ts" setup>
import {
  NCard,
  NForm,
  NButton,
  NFormItem,
  NInput,
  useMessage,
  FormInst,
  NDatePicker,
} from "naive-ui";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { GetItemById } from "../apis/GetItem";

const route = useRoute();
const id = Number(route.query.id);
const formRef = ref<FormInst | null>(null);
const message = useMessage();
const formValue = ref({
  name: "",
  organization: "",
  phone: "",
  timestamp: 0,
});

formValue.value.timestamp = new Date().getTime();
const rules = {
  name: {
    required: true,
    message: "请输入姓名",
    trigger: "blur",
  },
  organization: {
    required: false,
    message: "请输入年龄",
    trigger: ["input", "blur"],
  },
  phone: {
    required: true,
    message: "请输入电话号码",
    trigger: ["input"],
  },
};

const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success("填写成功");
    } else {
      console.log(errors);
      message.error("Invalid");
    }
  });
};

onMounted(async () => {
  const res = await GetItemById(id);
  console.log(res);
});
</script>

<style lang="scss" scoped>
.n-card {
  margin: 20px;
}
</style>
