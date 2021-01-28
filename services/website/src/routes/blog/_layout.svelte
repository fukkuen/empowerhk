<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog/meta.json`)
				.then(r => r.json());
	}
</script>

<script>
	export let authors
	export let categories
	export let segment
</script>

<div class="max-w-screen-lg mx-auto px-0 sm:px-4">
	<div class="flex">
		<div class="w-full">
			<slot></slot>
		</div>

		{#if segment === undefined}
			<div class="ml-4 flex-shrink-0 hidden md:block" style="min-width: 16em">
				<div class="widget">
					<h3 class="text-2xl mb-2 px-4">文章分類:</h3>
					<ul>
						{#each categories as t}
							<li><a href="/blog?category={t.slug}" class="item hover:bg-gray-100">{t.name}</a></li>
						{/each}
					</ul>
				</div>

				<div class="widget">
					<h3 class="text-2xl mb-2 px-4">作者:</h3>
					<ul>
						{#each authors as t}
							<li><a href="/blog?author={t.slug}" class="item hover:bg-gray-100">{t.name}</a></li>
						{/each}
					</ul>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.widget {
		@apply shadow rounded mb-4 py-4 bg-white border border-gray-100;
	}

	.item {
		@apply px-4 py-2 block
	}

</style>