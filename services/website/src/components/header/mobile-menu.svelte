<script>
  import { slide } from 'svelte/transition';
  import {createEventDispatcher} from 'svelte'
  const dispatch = createEventDispatcher()

  export let isOpen = false;
  export let items;
  export let segment;
  export let selected_category;

  const onToggle = (e, section) => {
    e.stopPropagation()
    items = items.map(s => {
      s.active = false
      if (s.href === section.href) {
        s.active = true
      }
      return s
    })
  }
</script>

{#if isOpen}
  <div class="fixed inset-0 bg-white overflow-y-scroll">

    <div class="flex justify-between p-4 border-b-2 border-gray-300">
      <a href="/" class="flex items-center">
        <img src="images/logo.png" alt="logo" class="h-10 sm:h-16 md:h-20">
        <img src="images/logotype.png" alt="logo" class="h-5 sm:h-8 md:h-10 ml-1 sm:ml-2 md:ml-4">
      </a>
      <button on:click={() => {dispatch('close')}} type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <nav class="p-2">
      {#each items as menuItem}

        <div class="flex items-center" class:active={menuItem.href === '/'+segment}>
          <a href="{menuItem.href}" class="flex-1 px-4 h-16 flex items-center text-xl">{menuItem.name}</a>
          {#if menuItem.children}
            <div
                    on:click={(e) => {onToggle(e, menuItem)}}
                    class="w-12 h-12 bg-black bg-opacity-5 inline-flex justify-center items-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.001 36"
                   class:rotate-45={menuItem.active}
                   class="w-4 h-4"><path d="M32.914 8.443L18.004 21.32 3.078 8.443 0 12.013l18.004 15.542L36 12.015"></path></svg>
            </div>
          {/if}
        </div>

        {#if menuItem.children && menuItem.active}
          <div transition:slide class="border-t border-gray-300 bg-gray-50">
            {#each menuItem.children as child}
              <a href="{menuItem.href}/category/{child.slug}/1"
                 class:font-bold={child.slug === selected_category}
                 class="h-12 px-8 flex items-center text-gray-600">
                {child.name}
              </a>
            {/each}
          </div>
        {/if}

        <div class="h-1 w-4 bg-gray-400 my-2 ml-4"></div>

      {/each}
    </nav>
  </div>
{/if}

<style>
  .active {
    @apply text-blue-700
  }
</style>