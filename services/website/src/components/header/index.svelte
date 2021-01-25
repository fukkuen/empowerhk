<script>
  import { stores } from '@sapper/app';
  import A from "../ui-elements/a.svelte";
  import Logo from "./logo.svelte";
  import SocialIcons from './social-icons.svelte'

  export let segment
  let menu_opened = false

  const { page } = stores();
  const items = [
	  {
		  name: "活動日誌",
		  href: "/event"
	  },
	  {
		  name: "文章分享",
		  href: "/blog"
	  },
	  {
		  name: "團隊成員",
		  href: "/team"
	  },
	  {
		  name: "使命宗旨",
		  href: "/about"
	  }
  ]
  const onMenuClicked = () => menu_opened = !menu_opened

</script>

<div class="mb-8">
	<div class="mx-auto max-w-screen-lg px-2 my-4">
		<div class="flex items-center justify-around">
			<div class="flex-1">
				<SocialIcons/>
			</div>
			<div class="flex-1 flex justify-center">
				<a href="/" class="flex items-center">
					<img src="images/logo.png" alt="logo" class="h-10 sm:h-16 md:h-20">
					<img src="images/logotype.png" alt="logo" class="h-5 sm:h-8 md:h-10 ml-1 sm:ml-2 md:ml-4">
				</a>
			</div>
			<div class="flex-1 flex justify-end">
				<button
								on:click|stopPropagation={onMenuClicked('mobile')}
								type="button"
								aria-label="Menu"
								class="inline-flex items-center justify-center p-2 rounded-md
            text-gray-400 focus:outline-none transition duration-150 ease-in-out">
					<svg
									focusable="false"
									aria-hidden="true"
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
						<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<div class="border-t-2 border-b-2">
		<div class="mx-auto max-w-screen-md px-4 flex justify-between">
			{#each items as item}
				<a href="{item.href}" class="py-2 text-blue-500 sm:text-lg md:text-xl" class:active={item.href === '/'+segment}>
					<div>{item.name}</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.active {
		@apply border-b-2 border-blue-500;
	}
</style>