<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <h1>性格診断テスト</h1>
    <p>このテストでは、あなたの性格特性を分析します。</p>
    <p>全部で {{ questionCount }} の質問があります。</p>

    <div class="name-input">
      <label for="name">お名前</label>
      <input type="text" id="name" v-model="name" placeholder="例：山田 太郎" />
    </div>

    <button @click="startTest" class="start-button" :disabled="!name">テストを始める</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { questions } from '../data/questions'

export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    const questionCount = ref(questions.length)
    const name = ref('')

    const startTest = () => {
      if (name.value) {
        localStorage.setItem('userName', name.value)
        router.push('/test')
      }
    }

    return {
      questionCount,
      name,
      startTest
    }
  }
}
</script>

<style scoped>
  .home {
    text-align: center;
    padding: 20px;
  }

  .name-input {
    margin: 20px 0;
  }

  .name-input label {
    display: block;
    margin-bottom: 5px;
  }

  .name-input input {
    padding: 5px;
    font-size: 16px;
    width: 200px;
  }

  .start-button {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  .start-button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
</style>