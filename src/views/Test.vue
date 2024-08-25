<!-- src/views/Test.vue -->
<template>
  <div class="test">
    <h2>ページ {{ currentPage }} / {{ totalPages }}</h2>
    <QuestionList :questions="currentPageQuestions" :options="options" :answers="answers"
      @answerQuestion="answerQuestion" />
    <NavigationButtons :currentPage="currentPage" :totalPages="totalPages" :allQuestionsAnswered="allQuestionsAnswered"
      @previousPage="previousPage" @nextPage="nextPage" @showResult="showResult" />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { questions, options } from '@/data/questions'
import QuestionList from '@/components/QuestionList.vue'
import NavigationButtons from '@/components/NavigationButtons.vue'

export default {
  name: 'Test',
  components: {
    QuestionList,
    NavigationButtons,
  },
  setup() {
    const router = useRouter()
    const currentPage = ref(1)
    const answers = ref([])  // Array of answer objects
    const questionsPerPage = 10

    const totalPages = computed(() => Math.ceil(questions.length / questionsPerPage))

    const currentPageQuestions = computed(() => {
      const start = (currentPage.value - 1) * questionsPerPage
      const end = start + questionsPerPage
      return questions.slice(start, end)
    })

    const allQuestionsAnswered = computed(() => {
      return answers.value.length === questions.length
    })
    const answerQuestion = (question, value) => {
      const existingAnswerIndex = answers.value.findIndex(a => a.id === question.id)
      const newAnswer = {
        id: question.id,
        subCategoryId: question.subCategoryId,
        NGFlag: question.NGFlag,
        answer: value
      }

      if (existingAnswerIndex !== -1) {
        answers.value[existingAnswerIndex] = newAnswer
      } else {
        answers.value.push(newAnswer)
      }
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
      const resultId = Date.now().toString()
      localStorage.setItem(`testResult_${resultId}`, JSON.stringify(answers.value))
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
</style>