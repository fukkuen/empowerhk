<script>
  import A from "../ui-elements/a.svelte";

  export let isOpen = false;
  export let menuItems;
</script>

  {#if isOpen}
    <div class="fixed inset-0 bg-gray-100 overflow-y-scroll">

      <div class="flex justify-between p-4 border-b-2 border-gray-300">
        <a href="/" class="flex items-center">
          <img src="images/logo.png" alt="logo" class="h-10 sm:h-16 md:h-20">
          <img src="images/logotype.png" alt="logo" class="h-5 sm:h-8 md:h-10 ml-1 sm:ml-2 md:ml-4">
        </a>
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div class="p-4">
        <input type="text" placeholder="Search" class="w-full p-2 border-2 border-gray-300">
      </div>

      <nav>
        {#each menuItems as menuItem}
          <div class="flex items-center">
            <a href="{menuItem.href}" class="flex-1 px-4">{menuItem.name}</a>
            <div class="w-12 h-12 bg-black bg-opacity-20 inline-flex justify-center items-center">
              >
            </div>
          </div>
          {#if menuItem.children}
            <div class="bg-white border-t-2 border-b-2 border-gray-300">
              {#each menuItem.children as child}
                <a href="{menuItem.href}?category={child.slug}" class="h-12 px-8 flex items-center text-gray-600">
                  {child.name}
                </a>
              {/each}
            </div>
          {/if}
        {/each}
      </nav>
    </div>
  {/if}