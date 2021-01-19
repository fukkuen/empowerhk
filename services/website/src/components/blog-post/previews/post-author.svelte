<script>
	export let post
</script>

{#if post.metadata.author}
<a class="flex items-center" href="blog/author/{post.metadata.author.slug}">
	<div class="avatar"
	     style="background-image: url('/authors/{post.metadata.author.slug}.jpg')"></div>
	<p class="text-black font-semibold ml-4">
		{post.metadata.author.name}
	</p>
</a>
{/if}