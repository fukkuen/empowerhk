<script>
  import { fade } from "svelte/transition";
  import { headerStore } from "../../stores";
  import Footer from "../footer.svelte";
  import Header from "../header/index.svelte";
  import SeoHeadPost from "../seo/head-post.svelte";

  export let post;
</script>

<style>
  div.content :global(img) {
    cursor: zoom-in;
  }
</style>

<SeoHeadPost {post} />
<svelte:head>
  <link href="prism.css" rel="stylesheet" />
</svelte:head>

<div class="container max-w-6xl mx-auto px-4 mb-20">
  <img
          class="mx-auto w-3/4 max-w-lg rounded-lg"
          src="event-posts/{post.metadata.createdAt.split('T')[0]}-{post.metadata.slug}/cover.jpg" alt="cover"/>

  <div class="bg-white p-8 pt-16 shadow rounded -mt-8 container mx-auto">
    <div class="text-blue-700 my-8">
      <div>日期：{post.metadata.event_start_date}</div>
      {#if post.metadata.event_time}
        <div>時間：{post.metadata.event_time}</div>
      {/if}
      {#if post.metadata.event_location}
        <div>地點：{post.metadata.event_location}</div>
      {/if}
      {#if post.metadata.event_fee}
        <div>費用：{post.metadata.event_fee}</div>
      {/if}
    </div>

    <div class="content break-words mx-auto">
      <h1 class="mb-0 text-4xl font-bold">{post.metadata.title}</h1>
      <h3 class="mt-1 mb-4 text-2xl">{post.metadata.summary}</h3>
      <div class="prose lg:prose-xl">
        <slot />
      </div>
    </div>
  </div>
</div>

<Footer />
