<template>
  <button class="test-button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'testButton',
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped>
.test-button {
  background-color: #1890ff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
.test-button:hover {
  background-color: #40a9ff;
}
</style>