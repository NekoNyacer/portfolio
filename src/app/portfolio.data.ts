export interface Project {
  slug: string;
  name: string;
  category: string;
  summary: string;
  intro: string;
  role: string;
  image: string;
  imageAlt: string;
  stories: {
    title: string;
    steps: { label: string; text: string }[];
  }[];
  outcome: string;
}

export const home = {
  titleLead: 'Eddie 的',
  titleEmphasis: 'Side Projects',
  intro: '我是 Eddie。這裡收錄我和 AI 一起做的三個專案。點進作品，可以看到我為什麼做、怎麼跟 Codex 討論，以及試過之後又改了什麼。',
};

// 陣列順序決定首頁的排列，以及詳頁的「下一個專案」。
export const projects: Project[] = [
  {
    slug: 'board-game-tavern',
    name: '桌遊旅店',
    category: '線上桌遊平台',
    summary: '在瀏覽器裡圍成一桌，和朋友玩不同的桌遊。',
    intro: '桌遊旅店把多款桌遊搬進瀏覽器。玩家能看圖板、讀卡牌、選擇行動，和同桌的人一起進行回合。每換一款桌遊，桌面要留下的資訊、玩家要做的決定也跟著改變。',
    role: '我和 Codex 一起調整手機上的操作，讓人換到小螢幕，依然看得清桌面，也能做完每個決定。',
    image: 'assets/board-game-tavern.webp',
    imageAlt: '桌遊棋件的概念封面',
    stories: [
      {
        title: '共用版面，怎麼保留每款桌遊的玩法？',
        steps: [
          { label: '我怎麼提', text: '我請 Codex 先做可以操作的手機預覽。我想試試底部面板展開後還看得見多少圖板，以及輪到我做決定時，視窗會在哪裡出現。' },
          { label: 'AI 怎麼做', text: 'Codex 做出可以展開、收合的靜態預覽，並用一排手牌示意底部空間。' },
          { label: '我怎麼改', text: '《璀璨寶石》沒有這排手牌。我要求保留原有的市場、保留牌和操作，把必要決策放進獨立視窗。' },
          { label: '改完之後', text: '這些決定寫進了共用手機版面規格。工作紀錄回報，《璀璨寶石》的手機版沿用原有遊戲元件，接入了新的版面。' },
        ],
      },
      {
        title: '往下畫一筆，怎麼會重新整理網頁？',
        steps: [
          { label: '我怎麼提', text: '玩《偽藝術家》時，我往下畫線，瀏覽器卻開始重新整理。我拿《傳情畫意》當參考，說明手指應該能連續畫下去。' },
          { label: 'AI 怎麼做', text: 'Codex 找到共用的畫布元件，把手勢處理放在繪圖區，並處理筆畫中途被打斷的情況。' },
          { label: '我怎麼改', text: '我又發現查看玩家資訊會推動畫布，便要求固定對局畫面，讓玩家資訊在彈出視窗裡顯示。' },
          { label: '改完之後', text: '工作紀錄回報，模擬手機直向、橫向操作時都能連續畫線，桌機也能繼續用滑鼠繪圖。' },
        ],
      },
    ],
    outcome: '兩項手機調整都以瀏覽器模擬驗收，實體手機的操作手感仍待確認。《璀璨寶石》的版面整合留在開發版本。',
  },
  {
    slug: 'battle-tops',
    name: '戰鬥陀螺',
    category: '多人對戰遊戲',
    summary: '用手機發射陀螺，看不同類型的陀螺在競技場交鋒。',
    intro: '戰鬥陀螺讓玩家用手機發射陀螺，在同一個競技場裡對戰。每種類型的陀螺都有自己的屬性，伺服器負責判定碰撞與賽事，遊戲畫面則呈現場上的變化。',
    role: '我和 Codex 做了一間能重跑對戰的調參室，也把遊戲畫面移植到 Windows，延續原有的手機發射方式。',
    image: 'assets/battle-tops.webp',
    imageAlt: '對戰陀螺的概念封面',
    stories: [
      {
        title: '改了一個數值，怎麼比較前後兩場？',
        steps: [
          { label: '我怎麼提', text: '只看屬性表很難判斷差異。我想讓兩顆陀螺自動發射，在相同條件下重跑，也能暫停下來逐格看。' },
          { label: 'AI 怎麼做', text: 'Codex 做出本機的 1 對 1 調參室，把屬性和對戰畫面放在一起。固定亂數種子後，就能用同一組起始條件比較設定。' },
          { label: '我怎麼改', text: '調整的種類愈多，愈需要一個基準。我指定鎖住攻擊型的原始數值，其他三類先從同一組基準出發，再個別微調。' },
          { label: '改完之後', text: '工作紀錄回報，其他類型可用相對倍率調整。匯入設定時，工具也會檢查攻擊型的基準值。' },
        ],
      },
      {
        title: '移植到 Unity 後，介面要去哪裡改？',
        steps: [
          { label: '我怎麼提', text: '我先問不同移植方案的效能差異，再選擇 Windows 原生版。玩家仍要能用手機發射，原有的對戰判定也要沿用。' },
          { label: 'AI 怎麼做', text: 'Codex 用 Unity 處理畫面、操作和音效，把碰撞與賽事判定留在既有伺服器。' },
          { label: '我怎麼改', text: '打開專案後，我在 Scene 裡找不到遊戲介面，畫面上的提示也卡住了。我請 Codex 指出編輯位置，並修正提示。' },
          { label: '改完之後', text: 'Codex 說明如何到 UI Builder 編輯介面、在 Scene 調整場地，並回報提示可以手動關閉或自動消失。' },
        ],
      },
    ],
    outcome: '工作紀錄回報，本機調參室與 Unity Windows 版已建置。跨版本的效能差異，以及實體手機的發射手感，仍待實測。',
  },
  {
    slug: 'year-end-animation',
    name: '尾牙開場動畫',
    category: '活動開場短片',
    summary: '跟著鏡頭穿過遊行人潮，帶尾牙觀眾走進一座遊樂園。',
    intro: '這是一支為尾牙開場設計的遊樂園主題動畫。觀眾從入口門票與布幕出發，穿過遊行人潮，再跟著鏡頭逐站體驗九個遊樂設施。',
    role: '我用時間碼描述每段要看到什麼，也交代觀眾是站在旁邊看，還是坐上設施。Codex 依照這些指示安排鏡頭和節奏。',
    image: 'assets/year-end-animation.webp',
    imageAlt: '以電影膠卷呈現開場動畫主題的概念封面',
    stories: [
      {
        title: '怎麼讓觀眾跟得上遊園路線？',
        steps: [
          { label: '我怎麼提', text: '我按時間碼標出入口、遊行與九個站點，逐段交代哪裡要看到站點標示，哪裡要切到搭乘視角。' },
          { label: 'AI 怎麼做', text: '製作摘要記載，Codex 用 Unity Timeline 將入口、遊行與設施拆成段落，依時間安排鏡頭。' },
          { label: '我怎麼改', text: '我特別點出大擺錘，要求降低這一段鏡頭的眩暈感，也補充了木馬與碰碰車要呈現的內容。' },
          { label: '怎麼檢視', text: '製作紀錄裡有多個時間點的縮圖，可以排在一起看前後鏡頭。入口畫面也另外做了檢查。' },
        ],
      },
      {
        title: '煙火和最後一幕，怎麼收尾？',
        steps: [
          { label: '我怎麼提', text: '我要求煙火配上音效，全片延長到四分鐘，最後一幕再淡出。' },
          { label: 'AI 怎麼做', text: '製作摘要記載，Codex 以腳本檢查輸出的影格、聲音與結尾。' },
          { label: '當時輸出', text: '製作紀錄回報影片為 240 秒、立體聲，最後停在黑畫面。' },
        ],
      },
    ],
    outcome: '這篇依製作工作站的紀錄摘要整理。原片與輸出細節仍待回到製作電腦核對，影片及活動素材的公開授權也待確認。',
  },
];
