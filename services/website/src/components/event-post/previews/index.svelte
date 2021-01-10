<script>
  import A from "../../ui-elements/a.svelte";

  export let post;

  const coverImageBasePath = `event-posts/${
    post.metadata.createdAt.split("T")[0]
  }-${post.metadata.slug}/cover.jpg`;
</script>

<div class="mb-20">
  <a href="event/{post.metadata.slug}" class="flex">
    <div class="flex-shrink-0 w-40">
      <img
              src={coverImageBasePath}
              loading="lazy"
              class="rounded"
              alt="Cover picture for a blog post titled {post.metadata.title}" />
    </div>
    <div class="fw ml-10">
      {#if post.metadata.category}
        <p class="mb-1 font-bold text-gray-600 text-sm">
          {#each post.metadata.category as c}
            <a href="/event/category/{c.slug}">{c.name}</a>
          {/each}
        </p>
      {/if}
      <h4 class="text-2xl mb-1 text-blue-500">{post.metadata.title}</h4>
      <h4 class="text-lg mb-4 text-gray-700">{post.metadata.summary}</h4>
      <p>{post.metadata.event_start_date}</p>
      <p class="mb-4">
        {#each post.metadata.tags as t}
          <a href="/teatime/tags/{t}" class="tag">#{t}</a>
        {/each}
      </p>
    </div>
  </a>
</div>
