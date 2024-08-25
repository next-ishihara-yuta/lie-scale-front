<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const hasResult = ref(false)
const error = ref<string | null>(null)

onMounted(() => {
  const resultId = route.params.resultId as string
  if (!resultId) {
    error.value = '結果IDが見つかりません'
    return
  }

  const storedResult = localStorage.getItem(`testResult_${resultId}`)
  
  if (storedResult) {
    hasResult.value = true
  } else {
    error.value = '結果が見つかりません'
  }
})
</script>

<template>
  <div class="result">
    <h2>診断終了</h2>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else-if="hasResult" class="message">
      <!-- <h3>診断完了</h3> -->
      <p>あなたの診断結果が終了しました。面接官にお知らせください。</p>
    </div>
    <div v-else class="loading">結果を読み込んでいます...</div>
  </div>
</template>

<style scoped>
  .result {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }

  h2 {
    color: #333;
    margin-bottom: 20px;
  }

  .error {
    color: #d32f2f;
    margin-bottom: 20px;
  }

  .message {
    background-color: #e8f5e9;
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
  }

  h3 {
    color: #2e7d32;
    margin-bottom: 15px;
  }

  p {
    color: #333;
    line-height: 1.6;
    margin-bottom: 10px;
  }

  .loading {
    color: #666;
    font-style: italic;
  }
</style>