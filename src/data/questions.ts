export interface Option {
  value: number
  label: string
}

export interface Question {
  id: number
  text: string
  options: Option[]
}

export const questions: Question[] = [
  {
    id: 1,
    text: '新しい環境に適応するのが得意だ。',
    options: [
      { value: 1, label: '全くそう思わない' },
      { value: 2, label: 'あまりそう思わない' },
      { value: 3, label: 'どちらとも言えない' },
      { value: 4, label: 'ややそう思う' },
      { value: 5, label: '非常にそう思う' }
    ]
  },
  {
    id: 2,
    text: 'グループワークよりも個人作業の方が好きだ。',
    options: [
      { value: 1, label: '全くそう思わない' },
      { value: 2, label: 'あまりそう思わない' },
      { value: 3, label: 'どちらとも言えない' },
      { value: 4, label: 'ややそう思う' },
      { value: 5, label: '非常にそう思う' }
    ]
  }
  // 必要に応じて質問を追加...
]

export const getResult = (score: number): string => {
  if (score < 15) {
    return '慎重タイプ: あなたは注意深く計画を立てる傾向があります。'
  } else if (score < 25) {
    return 'バランスタイプ: あなたは状況に応じて柔軟に対応できます。'
  } else {
    return '冒険タイプ: あなたは新しい挑戦を楽しむ傾向があります。'
  }
}
