<script lang='ts'>
  import 'virtual:windi.css';
  import Overlay from "$components/_common/Overlay.svelte";
  import { numDrawersOut, showMobileMenu, windowHeight, hideMenuIcon } from "$stores/main";
  import Header from "$components/Header.svelte";
  import MenuIcon from "$components/MenuIcon.svelte";
  import Drawer from "$src/components/_common/Drawer.svelte";
  import { page } from '$app/stores';
import HomePageNavItem from '$src/components/HomePageNavItem.svelte';

  const handleShowMobileMenu = () => {
    if ($showMobileMenu) {
      showMobileMenu.set(false)
    } else {
      showMobileMenu.set(true)
    }
  }

  let windowWidth
  let windowHeightLocal
  let hoveredItem
  let activeRouteItem

  $: if (!isNaN(windowHeightLocal) && windowHeightLocal !== $windowHeight) {
    windowHeight.set(windowHeightLocal)
  }

  $: getActiveRouteItem = () => {
    if ($page.path.includes('/producer')) {
      return 1
    } else if ($page.path.includes('/composer')) {
      return 2
    } else if ($page.path.includes('/projects')) {
      return 3
    } else {
      return undefined
    }
  }

  let imageWidth

  $: footerOnBottom = $page.path.includes('/discography') || $page.path.includes('/commissions')
  $: translateYVal = $windowHeight - $windowHeight * 2
  $: styleString = footerOnBottom ? 'transform: translateY(0)); transition: 1s ease transform;' : `transform: translateY(calc(4rem - ${$windowHeight}px)); transition: 1s ease transform;`
</script>

<!-- <Header /> -->

<div bind:clientWidth={windowWidth} bind:clientHeight={windowHeightLocal} class='fixed top-0 left-0 w-screen h-screen bg-primary-gradient' />
<button on:click={handleShowMobileMenu} class='hidden fixed h-17 flex items-center top-0 right-0 {$numDrawersOut > 0 && !$hideMenuIcon ? 'z-2000' : 'z-1000'}'>
  <MenuIcon
    isActive={$showMobileMenu}
  />
</button>

{#if $showMobileMenu}
  <Overlay all onClick={() => showMobileMenu.set(false)} />
  <Drawer />
{/if}

<div class='pt-16 h-screen fixed top-0 left-0'>
  <div bind:clientWidth={imageWidth} class='h-full'>
    <img class='relative h-full filter hue-rotate-15 contrast-120 saturate-120 grayscale-100' src='https://www.dropbox.com/s/yadvew0aylak94x/homepage-pic.jpg?raw=1' />
  </div>
  <div class='absolute top-0 left-0 h-full w-full bg-black opacity-10 hover:opacity-05 duration-200' />
</div>
<div style="width: {windowWidth - imageWidth}px" class='pt-16 h-screen fixed top-0 right-0'>
  <div class='flex flex-col h-full justify-center space-y-5 items-end'>
    <HomePageNavItem
      key='producer'
      text='Producer'
      order={1}
      activeNavItem={getActiveRouteItem()}
      bind:hoveredItem={hoveredItem}
      
    />
    <HomePageNavItem
      key='composer'
      text='Composer'
      order={2}
      activeNavItem={getActiveRouteItem()}
      bind:hoveredItem={hoveredItem}
    />
    <HomePageNavItem
      key='projects'
      text='Other Projects'
      order={3}
      activeNavItem={getActiveRouteItem()}
      bind:hoveredItem={hoveredItem}
    />
  </div>
</div>

<div style="transform: translateY({footerOnBottom ? 0 : translateYVal}px); transition: 1s ease transform;" class='fixed top-0 h-screen w-screen bg-black' />

<slot></slot>

<header style={styleString} class='fixed bottom-0 bg-black h-16 w-screen flex items-center px-4 justify-between z-100'>
  <a href='/' class='text-white font-light uppercase tracking-widest'>Alex Glover</a>
  <div class='flex h-full text-white text-xs font-light uppercase tracking-widest space-x-6'>
    <a sveltekit:prefetch class='flex h-full items-center' href='/discography'>Discography</a>
    <a class='flex h-full items-center' href='#'>Gear</a>
    <a class='flex h-full items-center' href='#'>Contact</a>
  </div>
</header>
