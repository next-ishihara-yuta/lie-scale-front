<template>
  <div>
    <div v-for="question in questions" :key="question.id" class="question">
      <h3>質問 {{ question.id }}</h3>
      <p>{{ question.text }}</p>
      <div class="options">
        <button v-for="option in options" :key="option.value" @click="$emit('answerQuestion', question, option.value)"
          :class="{ selected: getAnswer(question.id)?.answer === option.value }">
          {{ option.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionList',
  props: {
    questions: Array,
    options: Array,
    answers: Array,
  },
  emits: ['answerQuestion'],
  methods: {
    getAnswer(questionId) {
      return this.answers.find(a => a.id === questionId)
    }
  }
}
</script>

<style scoped>
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
</style>
