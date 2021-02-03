<script>
  import IMG from "../../ui-elements/bg-image.svelte";
  import PostAuthor from './post-author.svelte'
  import formatDate from "../../../helpers/format-date";

  export let post;

  const coverImageBasePath = `blog-posts/${
    post.metadata.createdAt.split("T")[0]
  }-${post.metadata.slug}/cover.jpg`;
</script>

<div class="mb-4">
  <a href="blog/{post.metadata.slug}" class="block bg-white shadow">
    <div class="p-4">
      <PostAuthor {post}/>
    </div>
    <div class="bg-gray-500">
      <IMG src={coverImageBasePath}/>
    </div>
    <div class="px-4 py-8">
      <div class="mb-4">
        <p class="text-sm uppercase text-gray-700 font-bold">{formatDate(post.metadata.createdAt)}</p>
        <h2 class="text-2xl mb-2 font-bold">{post.metadata.title}</h2>
        <h3 class="text-lg text-gray-700">{post.metadata.summary}</h3>
      </div>
      <p class="mb-2 leading-8 text-lg text-gray-700">{post.body}</p>
      <p class="text-blue-500 mb-4">繼續閱讀...</p>
      <p class="mb-4">
        {#each post.metadata.tags as t}
          <a href="/blog/tag/{encodeURI(t)}/1" class="post-tag">#{t}</a>
        {/each}
        {#each post.metadata.category as cat}
          <a href="/blog/category/{cat.slug}/1" class="post-tag">#{cat.name}</a>
        {/each}
      </p>
    </div>
  </a>
</div>
