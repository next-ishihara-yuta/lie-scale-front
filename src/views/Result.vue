<template>
  <div class="result">
    <h2>診断完了</h2>
    <p>お疲れ様でした。診断が完了しました。</p>
    <p>結果は試験管より後ほどお知らせいたします。</p>
    <p>以下の手順に従ってください：</p>
    <ol>
      <li>この画面を試験管にお見せください。</li>
      <li>試験管の指示に従って、次の手続きを行ってください。</li>
    </ol>
    <div class="completion-code">
      <p>完了コード：{{ completionCode }}</p>
    </div>
    <router-link to="/" class="restart-button">トップページに戻る</router-link>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Result',
  setup() {
    const route = useRoute()
    const completionCode = ref('')

    onMounted(() => {
      const score = Number(route.params.score as string)
      // スコアを使用して完了コードを生成
      completionCode.value = generateCompletionCode(score)
    })

    const generateCompletionCode = (score: number): string => {
      // 簡単な例：スコアと現在時刻を使用してコードを生成
      const timestamp = Date.now()
      return `${score}-${timestamp}`
    }

    return {
      completionCode
    }
  }
}
</script>

<style scoped>
.result {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.completion-code {
  margin: 20px 0;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.restart-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

ol {
  text-align: left;
  margin: 20px 0;
}
</style>
