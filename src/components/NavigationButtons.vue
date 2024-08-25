<!-- src/components/NavigationButtons.vue -->
<template>
  <div class="navigation">
    <div class="pagination">
      <button @click="$emit('previousPage')" :disabled="currentPage === 1">前のページ</button>
      <button @click="$emit('nextPage')" :disabled="currentPage === totalPages">次のページ</button>
    </div>
    <button v-if="currentPage === totalPages" @click="$emit('showResult')" class="result-button"
      :disabled="!allQuestionsAnswered">
      結果を見る
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavigationButtons',
  props: {
    currentPage: Number,
    totalPages: Number,
    allQuestionsAnswered: Boolean,
  },
  emits: ['previousPage', 'nextPage', 'showResult'],
}
</script>

<style scoped>
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

  button {
    padding: 10px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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