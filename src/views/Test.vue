<!-- src/views/Test.vue -->
<template>
  <div class="test">
    <h2>ページ {{ currentPage }} / {{ totalPages }}</h2>
    <div v-for="question in currentPageQuestions" :key="question.id" class="question">
      <h3>質問 {{ question.id }}</h3>
      <p>{{ question.text }}</p>
      <div class="options">
        <button v-for="option in options" :key="option.value" @click="answerQuestion(question.id, option.value)"
          :class="{ selected: answers[question.id] === option.value }">
          {{ option.label }}
        </button>
      </div>
    </div>
    <div class="navigation">
      <div class="pagination">
        <button @click="previousPage" :disabled="currentPage === 1">前のページ</button>
        <button @click="nextPage" :disabled="currentPage === totalPages">次のページ</button>
      </div>
      <button v-if="currentPage === totalPages" @click="showResult" class="result-button"
        :disabled="!allQuestionsAnswered">
        結果を見る
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { questions, options } from '@/data/questions'

export default {
  name: 'Test',
  setup() {
    const router = useRouter()
    const currentPage = ref(1)
    const answers = ref({})
    const questionsPerPage = 10

    const totalPages = computed(() => Math.ceil(questions.length / questionsPerPage))

    const currentPageQuestions = computed(() => {
      const start = (currentPage.value - 1) * questionsPerPage
      const end = start + questionsPerPage
      return questions.slice(start, end)
    })

    const allQuestionsAnswered = computed(() => {
      return questions.every(question => answers.value[question.id] !== undefined)
    })

    const answerQuestion = (questionId, value) => {
      answers.value[questionId] = value
    }

    const calculateResult = () => {
      const ngCountBySubCategory = {}
      questions.forEach(question => {
        if (!ngCountBySubCategory[question.subCategoryId]) {
          ngCountBySubCategory[question.subCategoryId] = 0
        }
        if (answers.value[question.id] === 1) {
          ngCountBySubCategory[question.subCategoryId]++
        }
      })
      return ngCountBySubCategory
    }

    const getNGFlagAnswers = () => {
      const ngFlagAnswers = {}
      questions.forEach(question => {
        if (question.NGFlag) {
          ngFlagAnswers[question.id] = answers.value[question.id]
        }
      })
      return ngFlagAnswers
    }

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++
      }
    }

    const previousPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--
      }
    }

    const showResult = () => {
      const result = calculateResult()
      const ngFlagAnswers = getNGFlagAnswers()
      const resultId = Date.now().toString()
      localStorage.setItem(`testResult_${resultId}`, JSON.stringify(result))
      localStorage.setItem(`ngFlagAnswers_${resultId}`, JSON.stringify(ngFlagAnswers))
      router.push({ name: 'Result', params: { resultId } })
    }

    return {
      currentPage,
      totalPages,
      currentPageQuestions,
      answerQuestion,
      nextPage,
      previousPage,
      showResult,
      options,
      answers,
      allQuestionsAnswered
    }
  }
}
</script>
<style scoped>
  .test {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .question {
    margin-bottom: 30px;
    border: 1px solid #e0e0e0;
    padding: 15px;
    border-radius: 5px;
  }

  .options {
    display: flex;
    gap: 10px;
    margin-top: 10px;
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

  button.selected {
    background-color: #4CAF50;
    color: white;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  .pagination {
    display: flex;
    gap: 10px;
  }

  .result-button {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
  }

  .result-button:hover {
    background-color: #0056b3;
  }
</style>