<script>
  import { stores } from '@sapper/app';
  import A from "../ui-elements/a.svelte";
  import Logo from "./logo.svelte";
  import SocialIcons from './social-icons.svelte'
  import MobileMenu from './mobile-menu.svelte'
  import {event_categories, categories} from "../../taxonomy";

  export let segment
  let menu_opened = false

  const { page } = stores();
  const items = [
	  {
		  name: "活動日誌",
		  href: "/event",
		  children: event_categories
	  },
	  {
		  name: "文章分享",
		  href: "/blog",
		  children: categories
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
								on:click|stopPropagation={onMenuClicked}
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
		<div class="mx-auto max-w-screen-md px-4 flex justify-between px-8">
			{#each items as item}
				<div class="group inline-block relative" class:active={item.href === '/'+segment}>
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
								<a href="{item.href}/category/{child.slug}" class="block py-2 px-4 bg-white hover:bg-gray-100 text-blue-500">{child.name}</a>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>

	<MobileMenu isOpen={menu_opened} menuItems={items} />
</div>

<svelte:window on:click={() => (menu_opened = false)}/>

<style>
	.active {
		@apply border-b-2 border-blue-500;
	}
</style>