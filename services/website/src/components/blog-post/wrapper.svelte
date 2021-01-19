<script>
  import { fade } from "svelte/transition";
  import { headerStore } from "../../stores";
  import Footer from "../footer.svelte";
  import Header from "../header/index.svelte";
  import ImageZoom from "./image-zoom.svelte";
  import SeoHeadPost from "../seo/head-post.svelte";

  export let post;

  const floatImage = (node) => {
    const paragraphs = node.querySelectorAll('p')
    paragraphs.forEach(p => {
      const img = p.querySelector('img')
      if (img) {
        const img_title = img.title
        if (img_title && img_title > 0) {
          p.style.width = img_title + 'px'
          p.style.float = 'right'
          p.style.padding = '0 1em'
          p.style.margin = '0'
          img.style.margin = '0'
        }
      }
    })
  }
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

<div class="max-w-6xl mx-auto px-0 md:px-8 grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-6 mb-8">
  <div class="col-span-3 bg-white">

    <img src="blog-posts/{post.metadata.createdAt.split('T')[0]}-{post.metadata.slug}/cover.jpg"
         class="w-full"
         alt="cover"/>

    <div class="prose lg:prose-xl content break-words mx-auto px-4 py-8" use:floatImage>
      <h2 class="text-xl">{post.metadata.title}</h2>
      <slot />
      <p>
        {#each post.metadata.tags as t}
          <a href="/blog/tags/{t}" class="post-tag">#{t}</a>
        {/each}
      </p>
    </div>
  </div>
  <div class="col-span-1 bg-white p-4">
    <div class="text-center">
      <div class="avatar big mx-auto mb-4"
           style="background-image: url('/authors/{post.metadata.author.slug}.jpg')"></div>
      <p class="font-bold mb-4">
        {post.metadata.author.name}
      </p>
      <p class="mb-4">
        {new Date(post.metadata.createdAt).toLocaleDateString(undefined, {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })}
      </p>
      {#each post.metadata.category as cat}
        <span class="post-tag">{cat.name}</span>
      {/each}
    </div>
  </div>
</div>

<ImageZoom />
<Footer />
