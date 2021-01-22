<script>
  import A from "../../ui-elements/a.svelte";

  export let post;

  const coverImageBasePath = `event-posts/${
    post.metadata.createdAt.split("T")[0]
  }-${post.metadata.slug}/cover.jpg`;
</script>

<div>
  <div class="text-right">
    <a class="text-white px-4 py-1 folder"
       style="background: {post.metadata.category[0].color}"
       href="/event/category/{post.metadata.category[0].slug}">{post.metadata.category[0].name}</a>
  </div>
  <a href="event/{post.metadata.slug}" class="grid grid-cols-8 md:grid-cols-1 shadow rounded-lg overflow-hidden">
    <div
            style="background-image:url({coverImageBasePath}); padding-top: 100%;"
            class="fw bg-image col-span-3 md: col-span-1">
    </div>
    <div class="p-4 bg-white col-span-5 col-span-1">
      <h4 class="text-2xl mb-1 text-black">{post.metadata.title}</h4>
      <h4 class="text-lg mb-4 text-gray-900">{post.metadata.summary}</h4>
      <p class="text-blue-800">📅 <span class="ml-2">{post.metadata.event_start_date}</span></p>
      <p class="mb-4">
        {#each post.metadata.tags as t}
          <a href="/teatime/tags/{t}" class="text-xs text-gray-500 mr-2">#{t}</a>
        {/each}
      </p>
    </div>
  </a>
</div>

<style>
  .folder {
    display: inline-flex;
    border-radius: 1em .3em 0 0;
    line-height: 2em;
  }
</style>