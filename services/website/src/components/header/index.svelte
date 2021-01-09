<script>
  import { stores } from '@sapper/app';
  import A from "../ui-elements/a.svelte";
  import Logo from "./logo.svelte";

  export let segment

  const { page } = stores();

  const items = [
	  {
		  name: "文章分享",
		  href: "/blog"
	  },
	  {
		  name: "活動日誌",
		  href: "/event"
	  },
	  {
		  name: "團隊成員",
		  href: "/members"
	  },
	  {
		  name: "使命宗旨",
		  href: "/about"
	  }
  ]
</script>

<div class="my-8">
	<a href="/" class="mb-5 text-center">
		<img src="images/logo.png" alt="logo" class="mx-auto w-40 mb-8">
	</a>
	<div class="flex justify-center text-center">
		{#each items as item}
			<a href="{item.href}" class="mx-2 text-blue-500 text-lg" class:font-bold={item.href === '/'+segment}>
				<div>{item.name}</div>
			</a>
		{/each}
	</div>
</div>