<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog/meta.json`)
				.then(r => r.json());
	}
</script>

<script>
	export let tags
	export let authors
	export let categories
	export let segment
</script>

<div class="max-w-screen-lg mx-auto">
	<div class="flex">
		<div class="w-full">
			<slot></slot>
		</div>

		{#if segment === undefined}
			<div class="ml-4 w-72 flex-shrink-0">
				<div class="widget">
					<h3 class="text-2xl">Category:</h3>
					<ul class="mb-20">
						{#each categories as t}
							<li class="leading-none mb-4">
								<a href="/blog/category/{t.slug}">
									<div class="pb-1">{t.name}</div>
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<div class="widget">
					<h3 class="text-2xl">Tag:</h3>
					<ul class="mb-20">
						{#each tags as t}
							<li><a href="/blog/tags/{t}">{t}</a></li>
						{/each}
					</ul>
				</div>

				<div class="widget">
					<h3 class="text-2xl">Archive:</h3>
					<ul class="mb-20">
						<li>..</li>
					</ul>
				</div>

				<div class="widget">
					<h3 class="text-2xl">Author:</h3>
					<ul class="mb-20">
						{#each authors as t}
							<li><a href="/blog/author/{t.slug}">{t.name}</a></li>
						{/each}
					</ul>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.widget {
		@apply px-4 py-8 shadow rounded mb-4 bg-white border border-gray-100;
	}
</style>