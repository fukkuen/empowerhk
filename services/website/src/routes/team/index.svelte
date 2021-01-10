<script>
	const team = [
		{
			name: '黃詩田 Melissa Wong',
			image: '/authors/melissa.jpg',
			p: [
					'自小熱愛與文字打交道，視書本為最好的朋友。不但因為書中自有黃金屋，更由於書本是最堂皇的避世工具。',
					'因緣際會到日本留居一年，學會獨立生活，亦學習與不同國家及背景的人士相處。輾轉進入媒體與直銷界別，走進人群，開始發現人的可愛; 幾年下來，收穫了一群良師益友，令人生平添姿彩。',
					'期待透過 Empower 平台，與更多有心人相遇相知，相互扶持，一同經歷，一同成長，活出愛。'
			]
		},
		{
			name: '郭子樂 King',
			image: '/authors/king.jpg',
			p: [
				'從小是別人眼中的乖乖仔，成績不錯也尊師重道，甚得身邊人喜愛。本來跟著社會的腳步，好好讀書並找一份安穩的工作，是既定的劇本。',
				'但我喜歡自由，希望掌握自己的人生。精算系畢業後隨即開創了自動販賣機公司，希望以創新的構思，為消費者提供優質的產品和更多的選擇。為社會創造價值，是我一直的夢想。',
				'共同成立 Empower 的原因很簡單，我深信透過互動和分享，我們可以生命影響生命，令別人也可以 Empower 他們的人生！'
			]
		},
		{
			name: '黃海寧 Joyce',
			image: '/authors/joyce.jpg',
			p: [
				'熱愛自由，不受束縛，不甘於每天定時定點沉悶工作，毅然辭工創業，賣攝影配件亦開網店賣波鞋。',
				'千里之行，始於足下，喜歡帶著相機背包自由行，用雙眼雙腿感受世界。走訪人煙稀渺之地，感受藏民之純樸、在草原騎馬奔馳的痛快！',
				'人生重要的不是所站的位置，而是所朝的方向。願在Empower群體，不只賦予自己豐盛的人生，更希望身邊人也獲得Empower，活出專屬自己的人生方程式。'
			]
		},
		{
			name: 'Mang',
			image: '/authors/mang.jpg',
			p: [
				'自小是循規蹈矩的人， 讀書工作拾級而上；能活於公式化一板一眼的生活， 卻也渴望自由、 無拘無束、 沒有規劃日程的隨想舒心人生。偏吃又愛吃， 雖然常因亂吃嘗苦頭，卻也改變不了饞嘴的本性。喜歡Empower 的夥伴們，喜愛Empower的積極正能量。渴望Empower 自己，也與團隊互相Empower！'
			]
		}
	]
</script>

<div class="container mx-auto px-8">
	{#each team as t}
		<div class="flex mb-8">
			<div class="flex-shrink-0">
				<img src={t.image} alt={t.name} class="w-20 sm:w-40 rounded-full">
			</div>
			<div class="ml-8">
				<h3 class="mb-4 text-blue-500 text-xl">{t.name}</h3>
				{#each t.p as _p}
					<p class="mb-4">{_p}</p>
				{/each}
			</div>
		</div>
	{/each}
</div>