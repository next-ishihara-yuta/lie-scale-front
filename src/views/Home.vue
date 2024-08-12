<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <h1>性格診断テスト</h1>
    <p>このテストでは、あなたの性格特性を分析します。</p>
    <p>全部で {{ questionCount }} の質問があります。</p>
    <router-link to="/test" class="start-button">テストを始める</router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { questions } from '../data/questions'

export default {
  name: 'Home',
  setup() {
    const questionCount = ref(questions.length)

    return {
      questionCount
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.start-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
