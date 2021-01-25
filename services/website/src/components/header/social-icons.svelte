<script>
  import A from "../ui-elements/a.svelte";

  const icons = [
    {
      ariaLabel: "Facebook profile",
      href: "https://www.facebook.com/floatingprojects",
      svgPath:
        "M432,256h-80v-64c0-17.664,14.336-16,32-16h32V96h-64l0,0c-53.024,0-96,42.976-96,96v64h-64v80h64",
      svgViewBox: "0 0 512 512"
    }
  ];
</script>

<div class="flex content-center">
  {#each icons as icon}
    <A
      class="text-gray-500 hover:text-white p-2 h-10 w-10"
      href={icon.href}
      aria-label={icon.ariaLabel}>
      <svg
        class="fill-current h-4"
        focusable="false"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={icon.svgViewBox}>
        <path d={icon.svgPath} />
      </svg>
    </A>
  {/each}
</div>
