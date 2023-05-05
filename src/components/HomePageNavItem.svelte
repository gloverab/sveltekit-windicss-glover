<script lang='ts'>
  import { windowHeight } from "$src/stores/main";

  import { onMount } from "svelte";

  export let hoveredItem
  export let key
  export let order
  export let text
  export let activeNavItem = undefined as number

  let wordwidth
  let linkHeight
  let navItem
  let offsetTop
  $: shrink = hoveredItem && hoveredItem !== key && !activeNavItem

  onMount(() => {
    offsetTop = navItem.offsetTop
  })

  let styleString
  let isAtBottom = false

  $: moveBeginning =
    (order === 1 && activeNavItem !== order) || (order === 2 && activeNavItem === 1)

  $: moveEnd =
    (order === 3 && activeNavItem !== order) || (order === 2 && activeNavItem === 3)

  $: getStyleString = () => {
    if (shrink && activeNavItem !== order) {
      return `width: calc(${wordwidth}px + 2rem);`
    } else if (activeNavItem === order) {
      return `transform: translateY(calc(4em - ${offsetTop}px)); width: 100%;`
    } else if (hoveredItem === key && !activeNavItem) {
      return 'width: 100%;'
    } else if (activeNavItem && activeNavItem !== order) {
      const translateYTop = `calc(${$windowHeight}px - 4em - ${offsetTop}px - ${linkHeight}px - .5rem)`
      const translateYBottom = `calc(${$windowHeight}px - 4em - ${offsetTop}px)`
      return `transform: translate3d(0, ${moveBeginning ? translateYTop : translateYBottom}, 0); width: ${hoveredItem === key ? '50%' : `calc(${wordwidth}px + 2rem)`};`
    }
  }
</script>

<a
  bind:clientHeight={linkHeight}
  bind:this={navItem}
  on:click={() => hoveredItem = undefined}
  on:mouseenter={() => hoveredItem = key}
  on:mouseleave={() => hoveredItem = undefined}
  style={getStyleString()}
  class='side-nav-link'
  href='/{key}'>
  <span bind:clientWidth={wordwidth}>
    {text}
  </span>
</a>

<style>
  .side-nav-link {
    @apply bg-black h-15 flex items-center text-white w-90 px-4 text-smfont-light uppercase tracking-widest duration-400;
  }

  .side-nav-link.shrink {
    @apply w-10;
  }
</style>