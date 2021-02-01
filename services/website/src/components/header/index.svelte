<script>
  import { stores } from '@sapper/app';
  import A from "../ui-elements/a.svelte";
  import Logo from "./logo.svelte";
  import SocialIcons from './social-icons.svelte'
  import MobileMenu from './mobile-menu.svelte'
  import DesktopMenu from './desktop-menu.svelte'
  import {event_categories, categories} from "../../taxonomy";

  export let segment
  let menu_opened = false

  const { page } = stores();
  $: selected_category = $page.query.category

  const items = [
	  {
		  name: "活動日誌",
		  href: "/event",
		  children: event_categories,
		  mobile: true
	  },
	  {
		  name: "文章分享",
		  href: "/blog",
		  children: categories,
		  mobile: true
	  },
	  {
		  name: "團隊成員",
		  href: "/team",
		  mobile: false
	  },
	  {
		  name: "使命宗旨",
		  href: "/about",
		  mobile: false
	  }
  ]
  const onMenuClicked = () => menu_opened = !menu_opened

</script>

<div class="mb-8">
	<div class="mx-auto max-w-screen-lg px-2 my-4">
		<div class="flex items-center justify-around">
			<div class="flex-1">
				<button
								on:click|stopPropagation={onMenuClicked}
								type="button"
								aria-label="Menu"
								class="inline-flex items-center justify-center p-2 rounded-md
            text-gray-600 focus:outline-none transition duration-150 ease-in-out">
					<svg
									focusable="false"
									aria-hidden="true"
									class="h-8 w-8"
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
			<div class="flex-1 flex justify-center">
				<a href="/" class="flex items-center">
					<img src="images/logo.png" alt="logo" class="h-10 sm:h-16 md:h-20">
					<img src="images/logotype.png" alt="logo" class="h-5 sm:h-8 md:h-10 ml-1 sm:ml-2 md:ml-4">
				</a>
			</div>
			<div class="flex-1 flex justify-end">
				<SocialIcons/>
			</div>
		</div>
	</div>

	<DesktopMenu {items} {segment} {selected_category}/>

	<MobileMenu {items} {segment} {selected_category}  isOpen={menu_opened} on:close={() => (menu_opened = false)}/>
</div>

<svelte:window on:click={() => (menu_opened = false)}/>