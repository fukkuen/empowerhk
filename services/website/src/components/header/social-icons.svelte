<script>
  import A from "../ui-elements/a.svelte";

  const icons = [
    {
      ariaLabel: "Facebook profile",
      href: "https://www.facebook.com/empower.hk",
      svgPath:
        "M18.076 0C8.092 0 0 8.092 0 18.074c0 8.686 6.126 15.932 14.29 17.672l.467-14.918-2.757.008v-4.822h2.29s-.025-4.012-.025-4.797c0-.78-.16-6.203 6.61-6.203H26v5h-3.86c-.698 0-1.4 1.123-1.4 1.66 0 .533.106 4.34.106 4.34h4.71c-.194 2-.67 5-.67 5H21v14.902c9-1.336 15.23-8.803 15.23-17.842C36.23 8.092 28.06 0 18.075 0z",
      svgViewBox: "0 0 36 36"
    },
    {
      ariaLabel: "Youtube profile",
      href: "https://www.youtube.com/channel/UC0AKYduhVZ80KIM5LTcaaaw",
      svgPath: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z",
      svgViewBox: "0 0 24 24"
    }
  ];
</script>

<div class="flex content-center">
  {#each icons as icon}
    <A
      class="text-gray-400 hover:text-blue-500 sm:p-2 p-1"
      href={icon.href}
      aria-label={icon.ariaLabel}>
      <svg
        class="fill-current w-6 h-6 sm:h-8 sm:w-8"
        focusable="false"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={icon.svgViewBox}>
        <path d={icon.svgPath} />
      </svg>
    </A>
  {/each}
</div>
