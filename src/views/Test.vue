<!-- src/views/Test.vue -->
<template>
  <div class="test">
    <h2>質問 {{ currentQuestionIndex + 1 }} / {{ questions.length }}</h2>
    <p>{{ currentQuestion.text }}</p>
    <div class="options">
      <button
        v-for="option in currentQuestion.options"
        :key="option.value"
        @click="answerQuestion(option.value)"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { questions } from '@/data/questions'

export default {
  name: 'Test',
  setup() {
    const router = useRouter()
    const currentQuestionIndex = ref(0)
    const answers = ref([])

    const currentQuestion = computed(() => questions[currentQuestionIndex.value])

    const answerQuestion = (value) => {
      answers.value.push(value)
      if (currentQuestionIndex.value < questions.length - 1) {
        currentQuestionIndex.value++
      } else {
        // テスト終了時、結果ページに遷移
        const totalScore = answers.value.reduce((sum, answer) => sum + answer, 0)
        router.push({ name: 'Result', params: { score: totalScore } })
      }
    }

    return {
      questions,
      currentQuestionIndex,
      currentQuestion,
      answerQuestion
    }
  }
}
</script>

<style scoped>
.test {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

button {
  padding: 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #e0e0e0;
}
</style>
