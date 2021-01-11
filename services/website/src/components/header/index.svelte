<script>
  import { stores } from '@sapper/app';
  import A from "../ui-elements/a.svelte";
  import Logo from "./logo.svelte";

  export let segment

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
</script>

<div class="my-8">
	<div class="flex justify-center mb-5 ">
		<a href="/" class="flex items-center">
			<img src="images/logo.png" alt="logo" class="h-20">
			<img src="images/logoType.png" alt="logo" class="h-10 ml-4">
		</a>
	</div>
	<div class="flex justify-center text-center">
		{#each items as item}
			<a href="{item.href}" class="mx-4 text-blue-500 text-ml" class:active={item.href === '/'+segment}>
				<div>{item.name}</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.active {
		@apply border-b-2 border-blue-500;
	}
</style>