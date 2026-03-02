<template>
  <div id="app">
    <h1>test 操作场景演示</h1>
    <div class="demo-section">
      <h2>使用 test 组件库</h2>
      <TestButton @click="handleOperation('create')">
        创建操作
      </TestButton>
      <TestButton @click="handleOperation('edit')">
        编辑操作
      </TestButton>
      <TestButton @click="handleOperation('delete')">
        删除操作
      </TestButton>
    </div>
    <div class="result" v-if="lastOperation">
      上次操作: {{ lastOperation }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      lastOperation: ''
    }
  },
  methods: {
    handleOperation(type) {
      this.lastOperation = type
      alert(`执行${type}操作`)
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  padding: 20px;
}
.demo-section {
  margin: 20px 0;
}
.demo-section button {
  margin-right: 10px;
}
.result {
  margin-top: 20px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
}
</style>