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
      href: "https://www.facebook.com/empower.hk",
      svgPath:
        "M18 0C8.06 0 0 8.06 0 18s8.06 18 18 18 18-8.06 18-18S27.94 0 18 0zm10.275 12.73c.01.23.014.457.014.688 0 7.006-5.33 15.082-15.08 15.082-2.993 0-5.778-.877-8.126-2.38.416.048.842.073 1.27.073 2.484 0 4.783-.848 6.596-2.27-2.32-.044-4.254-1.575-4.93-3.68.324.062.7.093 1.04.093.485 0 .81-.064 1.253-.186C7.885 19.662 6 17.52 6 14.955v-.068c0 .396 1.594.635 2.46.662-1.42-.952-2.415-2.575-2.415-4.413 0-.973.323-1.883.776-2.666 2.618 3.208 6.55 5.317 10.955 5.542-.088-.39-.122-.795-.122-1.21 0-2.93 2.38-5.302 5.31-5.302 1.522 0 2.905.646 3.872 1.674 1.207-.236 2.344-.678 3.367-1.285-.396 1.237-1.236 2.274-2.33 2.933 1.072-.13 2.094-.416 3.045-.834-.708 1.06-1.606 1.992-2.642 2.74z",
      svgViewBox: "0 0 36 36"
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
