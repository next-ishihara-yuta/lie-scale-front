<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const result = ref<Record<string, number> | null>(null)
const ngFlagAnswers = ref<Record<string, number> | null>(null)
const error = ref<string | null>(null)

onMounted(() => {
  const resultId = route.params.resultId as string
  if (!resultId) {
    error.value = '結果IDが見つかりません'
    return
  }

  const storedResult = localStorage.getItem(`testResult_${resultId}`)
  const storedNGFlagAnswers = localStorage.getItem(`ngFlagAnswers_${resultId}`)
  
  if (storedResult && storedNGFlagAnswers) {
    try {
      result.value = JSON.parse(storedResult)
      ngFlagAnswers.value = JSON.parse(storedNGFlagAnswers)
    } catch (e) {
      error.value = '結果の解析に失敗しました'
    }
  } else {
    error.value = '結果が見つかりません'
  }
})
</script>

<template>
  <div class="result">
    <h2>診断結果</h2>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else-if="result && ngFlagAnswers">
      <h3>サブカテゴリー別カウント:</h3>
      <ul>
        <li v-for="(count, subCategoryId) in result" :key="subCategoryId">
          サブカテゴリー {{ subCategoryId }}: {{ count }}
        </li>
      </ul>
      <h3>NGフラグのある質問の回答:</h3>
      <ul>
        <li v-for="(answer, questionId) in ngFlagAnswers" :key="questionId">
          質問 {{ questionId }}: {{ answer === 1 ? 'はい' : 'いいえ' }}
        </li>
      </ul>
    </div>
    <div v-else>結果を読み込んでいます...</div>
  </div>
</template>

<style scoped>
  .result {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }

  .error {
    color: red;
    margin-bottom: 20px;
  }
</style>