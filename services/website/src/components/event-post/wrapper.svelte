<script>
  import { fade } from "svelte/transition";
  import { headerStore } from "../../stores";
  import Footer from "../footer.svelte";
  import Header from "../header/index.svelte";
  import SeoHeadPost from "../seo/head-post.svelte";

  export let post;
  let show_reg_info
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

<div class="container max-w-6xl mx-auto px-0 mb-8 sm:px-4 sm:pb-4">
  <img
          class="mx-auto w-3/4 max-w-lg rounded-lg"
          src="event-posts/{post.metadata.createdAt.split('T')[0]}-{post.metadata.slug}/cover.jpg" alt="cover"/>

  <div class="bg-white p-4 sm:p-8 pt-16 shadow rounded -mt-8 container mx-auto">
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
      <div class="mt-4">
        <button class="px-6 flex h-10 min-w-40 items-center justify-center bg-blue-500 hover:bg-blue-700 text-white rounded" on:click={() => {show_reg_info = true}}>
          🙋 報名 🙋‍
        </button>
      </div>

      {#if show_reg_info}
        <div transition:fade
             class="fixed inset-0 flex items-center p-4"
             on:click={() => {show_reg_info = false}}
             style="background: rgba(0,0,0,0.3)">
          <div class="mx-auto bg-white rounded-lg max-w-2xl p-4">
            <h2 class="text-lg font-bold mb-4">可以用電郵或Facebook PM我地報名:</h2>
            <div class="flex justify-center">
              <a href="https://www.facebook.com/empower.hk/" target="_blank">
                <img src="images/facebook.svg" alt="facebook" width="60">
              </a>
              <a href="mailto:info@empower.hk" class="ml-4">
                <img src="images/email.svg" alt="email" width="60">
              </a>
            </div>
          </div>
        </div>
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
