<script lang='ts'>
  import 'virtual:windi.css';
  import Overlay from "$components/_common/Overlay.svelte";
  import { numDrawersOut, showMobileMenu, windowHeight, hideMenuIcon } from "$stores/main";
  import Header from "$components/Header.svelte";
  import MenuIcon from "$components/MenuIcon.svelte";
  import Drawer from "$src/components/_common/Drawer.svelte";
  import { page } from '$app/stores';

  const handleShowMobileMenu = () => {
    if ($showMobileMenu) {
      showMobileMenu.set(false)
    } else {
      showMobileMenu.set(true)
    }
  }

  let windowHeightLocal

  $: if (!isNaN(windowHeightLocal) && windowHeightLocal !== $windowHeight) {
    console.log(windowHeightLocal)
    windowHeight.set(windowHeightLocal)
  }


  $: footerOnBottom = $page.path.includes('/discography')
  $: translateYVal = $windowHeight - $windowHeight * 2
  $: styleString = footerOnBottom ? 'transform: translateY(0)); transition: 1s ease all;' : `transform: translateY(calc(4rem - ${$windowHeight}px)); transition: 1s ease all;`
</script>

<!-- <Header /> -->

<div bind:clientHeight={windowHeightLocal} class='fixed top-0 left-0 w-screen h-screen bg-primary-gradient' />
<button on:click={handleShowMobileMenu} class='hidden fixed h-17 flex items-center top-0 right-0 {$numDrawersOut > 0 && !$hideMenuIcon ? 'z-2000' : 'z-1000'}'>
  <MenuIcon
    isActive={$showMobileMenu}
  />
</button>

{#if $showMobileMenu}
  <Overlay all onClick={() => showMobileMenu.set(false)} />
  <Drawer />
{/if}

<div style="transform: translateY({footerOnBottom ? 0 : translateYVal}px); transition: 1s ease all;" class='fixed top-0 h-screen w-screen bg-black' />

<slot></slot>

<header style={styleString} class='fixed bottom-0 bg-black h-16 w-screen flex items-center px-4 justify-between z-100'>
  <a href='/' class='text-white'>Alex Glover</a>
  <div class='flex h-full text-white text-xs font-light uppercase tracking-widest space-x-6'>
    <a sveltekit:prefetch class='flex h-full items-center' href='/discography'>Discography</a>
    <a class='flex h-full items-center' href='/commissions'>Commissions</a>
    <a class='flex h-full items-center' href='#'>Gear</a>
    <a class='flex h-full items-center' href='#'>Contact</a>
  </div>
</header>