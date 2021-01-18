<script context="module">
  import postFetcher from "../_post-fetcher";

  export function preload({ path }) {
    return postFetcher(this.fetch, path.split("/").pop());
  }
</script>

<script>
  import BlogPostWrapper from "../../../components/event-post/wrapper.svelte";
  import BlogPost, { metadata } from "../../../event-posts/2020-05-18-fitnessworkshop20/index.svx";

  export let post;
</script>

<BlogPostWrapper {post}>
  <BlogPost />
</BlogPostWrapper>
