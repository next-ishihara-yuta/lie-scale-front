export interface category  {
  id: number
  name: string
}


export interface subCategory  {
  id: number
  category_id: number
  name: string
}


export interface Question {
  id: number
  text: string
  subCategoryId: number
  NGFlag: boolean
}

export const options = [
  { value: 1, label: 'はい' },
  { value: 0, label: 'いいえ' }
]

export const categories: category[] = [
  {
    "id": 1,
  "name": "行動的側面"
},
{
  "id": 2,
  "name": "意欲的側面"
},
{
  "id": 3,
  "name": "情緒的側面"
},
{
  "id": 4,
  "name": "ライスケール"
}
]

export const subCategories: subCategory[] = [
    {
      "id": 1,
      "name": "社会的内向性",
      "category_id": 1
    },
    {
      "id": 2,
      "name": "内省性",
      "category_id": 1
    },
    {
      "id": 3,
      "name": "身体活動性",
      "category_id": 1
    },
    {
      "id": 4,
      "name": "持続性",
      "category_id": 1
    },
    {
      "id": 5,
      "name": "慎重性",
      "category_id": 1
    },
    {
      "id": 6,
      "name": "達成意欲",
      "category_id": 2
    },
    {
      "id": 7,
      "name": "活動意欲",
      "category_id": 2
    },
    {
      "id": 8,
      "name": "敏感性",
      "category_id": 3
    },
    {
      "id": 9,
      "name": "自責性",
      "category_id": 3
    },
    {
      "id": 10,
      "name": "気分性",
      "category_id": 3
    },
    {
      "id": 11,
      "name": "独自性",
      "category_id": 3
    },
    {
      "id": 12,
      "name": "自信性",
      "category_id": 3
    },
    {
      "id": 13,
      "name": "高揚性",
      "category_id": 3
    },
    {
      "id": 14,
      "name": "ライスケール",
      "category_id": 4
    }
  ]


export const questions: Question[] = [
{id: 1,	subCategoryId: 1, NGFlag : false ,text: "親しい友人としか話さない"},
{id: 2,	subCategoryId: 2, NGFlag : false ,text: "物事を深く考えすぎる傾向がある"},
{id: 3,	subCategoryId: 3, NGFlag : false ,text: "身体を動かすのは好きな方だ"},
{id: 4,	subCategoryId: 4, NGFlag : false ,text: "あきらめが悪いほうだ"},
{id: 5,	subCategoryId: 5, NGFlag : false ,text: "物事は慎重に進める方だ"},
{id: 6,	subCategoryId: 6, NGFlag : false ,text: "目標は高い方が良いと思う"},
{id: 7,	subCategoryId: 7, NGFlag : false ,text: "テキパキしているといわれることがある"},
{id: 8,	subCategoryId: 8, NGFlag : false ,text: "プレッシャーには弱い方だ"},
{id: 9,	subCategoryId: 9, NGFlag : false ,text: "落ち込みやすい方だ"},
{id: 10,	subCategoryId: 10, NGFlag : false ,text: "感情が表にでやすい"},
{id: 11,	subCategoryId: 11, NGFlag : false ,text: "常識に縛られない方だ"},
{id: 12,	subCategoryId: 12, NGFlag : false ,text: "自分は他人より優れていると思う事が多い"},
{id: 13,	subCategoryId: 13, NGFlag : false ,text: "ちょっとしたことでも気が散りやすい方だ"},
// {id: 14,	subCategoryId: 14, NGFlag : false ,text: "今まで嘘をついたことは一度もない"},
// {id: 15,	subCategoryId: 1, NGFlag : false ,text: "社交的ではない方だ"},
// {id: 16,	subCategoryId: 2, NGFlag : false ,text: "行動する前に考える方だ"},
// {id: 17,	subCategoryId: 3, NGFlag : false ,text: "フットワークは軽い方だ"},
// {id: 18,	subCategoryId: 4, NGFlag : false ,text: "忍耐力には自信がある"},
// {id: 19,	subCategoryId: 5, NGFlag : false ,text: "計画は細かく立てる方だ"},
// {id: 20,	subCategoryId: 6, NGFlag : false ,text: "負けず嫌いである"},
// {id: 21,	subCategoryId: 7, NGFlag : false ,text: "用事は早めに済ませる方だ"},
// {id: 22,	subCategoryId: 8, NGFlag : false ,text: "自分の意見は控える方だ"},
// {id: 23,	subCategoryId: 9, NGFlag : false ,text: "うまくいかないと自分が悪いと感じる事が多い"},
// {id: 24,	subCategoryId: 10, NGFlag : false ,text: "気分にムラがあるほうだ"},
// {id: 25,	subCategoryId: 11, NGFlag : false ,text: "自分なりのこだわりを持っている"},
// {id: 26,	subCategoryId: 12, NGFlag : false ,text: "他人と意見が違う場合にはとことん話し合う方が良い"},
// {id: 27,	subCategoryId: 13, NGFlag : false ,text: "良くはしゃいでいることがある"},
// {id: 28,	subCategoryId: 14, NGFlag : false ,text: "他人の悪口や陰口を言ったことは一度もない"},
// {id:29,	subCategoryId: 1, NGFlag : false ,text: "大人数のチームよりも少人数のチームの方がやりやすい"},
// {id:30,	subCategoryId: 2, NGFlag : false ,text: "じっくり考える事が多い"},
// {id:31,	subCategoryId: 3, NGFlag : false ,text: "運動は好きである"},
// {id:32,	subCategoryId: 4, NGFlag : false ,text: "同じことを続けることが好きだ"},
// {id:33,	subCategoryId: 5, NGFlag : false ,text: "発生するかわからない問題の事を考えてしまう"},
// {id:34,	subCategoryId: 6, NGFlag : false ,text: "過程よりも結果が重要である"},
// {id:35,	subCategoryId: 7, NGFlag : false ,text: "まだ先の事でもすぐにやらないと気になってしまう"},
// {id:36,	subCategoryId: 8, NGFlag : false ,text: "緊張しやすい"},
// {id:37,	subCategoryId: 9, NGFlag : false ,text: "失敗して後悔したことがある"},
// {id:38,	subCategoryId: 10, NGFlag : false ,text: "感情の起伏がはっきりしていてわかりやすい人間だと思う"},
// {id:39,	subCategoryId: 11, NGFlag : false ,text: "自分の意見を変える事が少ない"},
// {id:40,	subCategoryId: 12, NGFlag : false ,text: "同じスタート地点、やり方をすれば大概の人間より成果をあげられる自信がある"},
// {id:41,	subCategoryId: 13, NGFlag : false ,text: "待つことはあまり好きではない"},
// {id:42,	subCategoryId: 14, NGFlag : false ,text: "約束を破ったことはいままで一度もない"},
// {id:43,	subCategoryId: 1, NGFlag : false ,text: "友人関係は広い方ではない"},
// {id:44,	subCategoryId: 2, NGFlag : false ,text: "結果を想像して躊躇することがある"},
// {id:45,	subCategoryId: 3, NGFlag : false ,text: "休日は外で過ごすことの方が多い"},
// {id:46,	subCategoryId: 4, NGFlag : false ,text: "長く続けている趣味がある"},
// {id:47,	subCategoryId: 5, NGFlag : false ,text: "石橋をたたいて渡るタイプである"},
// {id:48,	subCategoryId: 6, NGFlag : false ,text: "作業をやり始めるとうまくいっているのか気になってしまう"},
// {id:49,	subCategoryId: 7, NGFlag : false ,text: "あまり悩まずに決めてしまう事が多い"},
// {id:50,	subCategoryId: 8, NGFlag : false ,text: "相手の表情が曇ると自分の行動に問題があったのではないかと気にしてしまう"},
// {id:51,	subCategoryId: 9, NGFlag : false ,text: "いつまでも失敗を引きずってしまったことがある"},
// {id:52,	subCategoryId: 10, NGFlag : false ,text: "怒りを抑えられないときがある"},
// {id:53,	subCategoryId: 11, NGFlag : false ,text: "独自の感性に自信がある"},
// {id:54,	subCategoryId: 12, NGFlag : false ,text: "自分のやり方でリーダーシップを発揮できる自信がある"},
// {id:55,	subCategoryId: 13, NGFlag : false ,text: "相手の立場に物おじせずにコミュニケーションをとれる"},
// {id:56,	subCategoryId: 14, NGFlag : false ,text: "自分の行動や言動は常に正しい"},
// {id:57,	subCategoryId: 1, NGFlag : false ,text: "人と話すのが苦手である"},
// {id:58,	subCategoryId: 2, NGFlag : false ,text: "考えすぎと言われることがある"},
// {id:59,	subCategoryId: 3, NGFlag : false ,text: "旅行は好きである"},
// {id:60,	subCategoryId: 4, NGFlag : false ,text: "うまくいかないと出来るまで頑張る性質である"},
// {id:61,	subCategoryId: 5, NGFlag : false ,text: "考えすぎて行動が遅くなってしまう事がある"},
// {id:62,	subCategoryId: 6, NGFlag : false ,text: "競争に負けたくない"},
// {id:63,	subCategoryId: 7, NGFlag : false ,text: "動きが悪い人を見るとイライラしてしまう"},
// {id:64,	subCategoryId: 8, NGFlag : false ,text: "周りが自分の良くない話をしているのではないかと気にしたことがある"},
// {id:65,	subCategoryId: 9, NGFlag : false ,text: "失敗から立ち直るのに時間がかかる方だ"},
// {id:66,	subCategoryId: 10, NGFlag : false ,text: "その時の気分により態度が変わってしまう事がある"},
// {id:67,	subCategoryId: 11, NGFlag : false ,text: "自由な環境であればあるほど自分の力が発揮できる"},
// {id:68,	subCategoryId: 12, NGFlag : false ,text: "喋りが得意で相手を論破することに自信がある"},
// {id:69,	subCategoryId: 13, NGFlag : false ,text: "人前で感極まって泣いてしまったことがある"},
// {id:70,	subCategoryId: 14, NGFlag : false ,text: "親や兄弟に叱られたり怒られたりしたことは一度も無い"},
// {id:71,	subCategoryId: 1, NGFlag : false ,text: "内向的な方である"},
// {id:72,	subCategoryId: 2, NGFlag : false ,text: "行動するよりも考えることの方が得意だ"},
// {id:73,	subCategoryId: 3, NGFlag : false ,text: "じっとしているのは苦手だ"},
// {id:74,	subCategoryId: 4, NGFlag : false ,text: "物事に打ち込んで時間を忘れてしまう事がある"},
// {id:75,	subCategoryId: 5, NGFlag : false ,text: "しっかり準備をすると安心する"},
// {id:76,	subCategoryId: 6, NGFlag : false ,text: "どちらかというと野心は強い方だ"},
// {id:77,	subCategoryId: 7, NGFlag : false ,text: "行動的である"},
// {id:78,	subCategoryId: 8, NGFlag : false ,text: "相手が話している事に気遣ってこちらの言いたい事を言えなかったことがある"},
// {id:79,	subCategoryId: 9, NGFlag : false ,text: "失敗したときは自分に責任があるのではと気になる"},
// {id:80,	subCategoryId: 10, NGFlag : false ,text: "その日の気分で約束を断ってしまう事がある"},
// {id:81,	subCategoryId: 11, NGFlag : false ,text: "組織のルールに縛られない発想を持っている"},
{id:82,	subCategoryId: 12, NGFlag : true ,text: "過去の成功から自分ほど優れている人間はいないと感じた事がある"},
{id:83,	subCategoryId: 13, NGFlag : true ,text: "とても許せない事があり怒りで我を忘れてしまったことがある"},
{id:84,	subCategoryId: 14, NGFlag : true ,text: "自分は誰よりも不幸な人間だ"},
// {id:85,	subCategoryId: 1, NGFlag : false ,text: "人と喋るよりも聞く方が得意である"},
// {id:86,	subCategoryId: 2, NGFlag : false ,text: "考えなしに行動することは苦手である"},
// {id:87,	subCategoryId: 3, NGFlag : false ,text: "良く行動的であるといわれる"},
// {id:88,	subCategoryId: 4, NGFlag : false ,text: "人から気長であると言われる"},
// {id:89,	subCategoryId: 5, NGFlag : false ,text: "先のみえないうちには行動を起こしたくない"},
// {id:90,	subCategoryId: 6, NGFlag : false ,text: "結果の伴わない行動はしたくない"},
// {id:91,	subCategoryId: 7, NGFlag : false ,text: "決まらない話があるとすぐに結論を出したくなってしまう"},
// {id:92,	subCategoryId: 8, NGFlag : false ,text: "周りの人間が全て自分に否定的になるような感覚になったことがある"},
// {id:93,	subCategoryId: 9, NGFlag : false ,text: "選択を誤って悪い結果になった時に後悔したことがある"},
// {id:94,	subCategoryId: 10, NGFlag : false ,text: "周りに感情的だと言われたことがある"},
// {id:95,	subCategoryId: 11, NGFlag : false ,text: "話を聞いたらすぐに最善の方法が思いつく"},
// {id:96,	subCategoryId: 12, NGFlag : true ,text: "他人の要領の悪さ、能力の低さが理解できない"},
// {id:97,	subCategoryId: 13, NGFlag : false ,text: "雰囲気の悪い場にいるのが耐えられない"},
// {id:98,	subCategoryId: 14, NGFlag : false ,text: "自分は本当に正直な人間だと思う"},
// {id:99,	subCategoryId: 1, NGFlag : false ,text: "親しくない人と話すのが苦手である"},
// {id:100,	subCategoryId: 2, NGFlag : false ,text: "先の事を色々と考えてしまう"},
// {id:101,	subCategoryId: 3, NGFlag : false ,text: "あまり風邪をひかない"},
// {id:102,	subCategoryId: 4, NGFlag : false ,text: "新しい事をやっていくよりも一つの事を長期的に取り組む作業が好きだ"},
// {id:103,	subCategoryId: 5, NGFlag : false ,text: "慎重すぎるといわれる事がある"},
// {id:104,	subCategoryId: 6, NGFlag : false ,text: "勝ち負けにこだわりすぎてしまったことがある"},
// {id:105,	subCategoryId: 7, NGFlag : false ,text: "どちらかというと優柔不断ではない"},
// {id:106,	subCategoryId: 8, NGFlag : false ,text: "周りからどう思われているか気になる"},
// {id:107,	subCategoryId: 9, NGFlag : false ,text: "楽観的に考えることができない"},
// {id:108,	subCategoryId: 10, NGFlag : false ,text: "仕事中に気分が乗らずつらい思いをしたことがある"},
// {id:109,	subCategoryId: 11, NGFlag : false ,text: "自分の個性は強いと思う"},
// {id:110,	subCategoryId: 12, NGFlag : false ,text: "得意なことに対しては誰にも負けない自信がある"},
// {id:111,	subCategoryId: 13, NGFlag : false ,text: "沈んだ雰囲気を明るくすることができる"},
// {id:112,	subCategoryId: 14, NGFlag : false ,text: "どんな時にでも誰よりも正しい判断や行動をとれる"},
// {id:113,	subCategoryId: 1, NGFlag : false ,text: "知らない人と話すときあがってしまう"},
// {id:114,	subCategoryId: 2, NGFlag : false ,text: "良く考えて行動することが多い"},
// {id:115,	subCategoryId: 3, NGFlag : false ,text: "考えるより行動するのが得意だ"},
// {id:116,	subCategoryId: 4, NGFlag : false ,text: "途中でやめると先が気になってしまう。"},
// {id:117,	subCategoryId: 5, NGFlag : false ,text: "何も考えずに行動したくない"},
// {id:118,	subCategoryId: 6, NGFlag : false ,text: "堅実な成果よりも実現が難しい方が熱中できる"},
// {id:119,	subCategoryId: 7, NGFlag : false ,text: "考えるよりも先に行動してしまう事がある"},
// {id:120,	subCategoryId: 8, NGFlag : false ,text: "周りを気にしすぎといわれる事がある"},
// {id:121,	subCategoryId: 9, NGFlag : false ,text: "自分が必要ない人間ではないかと思ったことがある"},
// {id:122,	subCategoryId: 10, NGFlag : false ,text: "気乗りがしないとやる気がなくなりやすい"},
// {id:123,	subCategoryId: 11, NGFlag : false ,text: "思い立ったら周りが見えなくなることがある"},
// {id:124,	subCategoryId: 12, NGFlag : false ,text: "指示をされるよりも指示をする方が向いていると思う"},
// {id:125,	subCategoryId: 13, NGFlag : false ,text: "明るくない落ち着いている人間は苦手である"},
// {id:126,	subCategoryId: 14, NGFlag : false ,text: "人を叱ったり説教をするのはただのストレス発散だと思う"},
// {id:127,	subCategoryId: 1, NGFlag : false ,text: "昔から付き合いのある親しい友人が複数名いる"},
// {id:128,	subCategoryId: 2, NGFlag : false ,text: "選択肢がある場合にはじっくり考えて選びたい"},
// {id:129,	subCategoryId: 3, NGFlag : false ,text: "身体は強い方である"},
// {id:130,	subCategoryId: 4, NGFlag : false ,text: "色々な作業を同時にするよりもじっくりと一つの作業に取り組むのが良い"},
// {id:131,	subCategoryId: 5, NGFlag : false ,text: "この先に何が起こるのか考えすぎてしまう"},
// {id:132,	subCategoryId: 6, NGFlag : false ,text: "目に見える成果が出ないと納得できない"},
// {id:133,	subCategoryId: 7, NGFlag : false ,text: "決断は早い方が安心する"},
// {id:134,	subCategoryId: 8, NGFlag : false ,text: "相手の表情からこちらの言動、行動を気にしたことがある"},
// {id:135,	subCategoryId: 9, NGFlag : false ,text: "失敗したときにもう一度やり直せればよいと真剣に考え後悔したことがある"},
// {id:136,	subCategoryId: 10, NGFlag : false ,text: "喜怒哀楽がはっきりしている"},
// {id:137,	subCategoryId: 11, NGFlag : false ,text: "既存のやり方よりも新しいやり方が好きだ"},
// {id:138,	subCategoryId: 12, NGFlag : false ,text: "喋りに自信があり要領は良い方だと思う"},
// {id:139,	subCategoryId: 13, NGFlag : true ,text: "やるせない不幸な事があり周りを振り回してしまったことがある"},
// {id:140,	subCategoryId: 14, NGFlag : false ,text: "これまでに言い訳をしたことは一度たりともない"},
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



