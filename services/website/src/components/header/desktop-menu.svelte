<script>
	export let items
	export let segment
	export let selected_category
</script>

<div class="border-t-2 border-b-2">
	<div class="mx-auto max-w-screen-md px-4 flex justify-between px-8">
		{#each items as item}
			<div class="group sm:inline-block relative" class:hidden={!item.mobile} class:active={item.href === '/'+segment}>
				<a href="{item.href}" class="inline-flex items-center py-2 px-4 text-blue-500 group-hover:bg-blue-500 group-hover:text-white sm:text-lg md:text-xl">
					<span>{item.name}</span>
					{#if item.children}
						<svg
										class="fill-current h-4 w-4 ml-1"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20">
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
						</svg>
					{/if}
				</a>
				{#if item.children}
					<div class="absolute hidden group-hover:block pt-1 shadow-md rounded w-48">
						{#each item.children as child}
							<a href="{item.href}/category/{child.slug}/1" class:font-bold={child.slug === selected_category} class="block py-2 px-4 bg-white hover:bg-gray-100 text-blue-500">
								{child.name}
							</a>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
    .active {
        @apply border-b-2 border-blue-500;
    }
</style>