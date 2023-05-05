<script lang='ts'>
  import { onMount } from "svelte";

  export let index: number
  export let item: number

  let width
  let frameHeight
  let hover = false
  let show = false
  let detailsHeight

  const number = index + 1
  
  $: isLandscapeFrame = width > frameHeight

  let lineHeight
  let overflowSize = 0

  $: overflowSize = detailsHeight > frameHeight * .71 ? detailsHeight + 10 - frameHeight * .71 : 0

  onMount(() => {
    show = true
  })

  const handleHoverIn = () => {
    hover = true
  }
</script>

<a
  href={item.href}
  style="transition-delay: {700 + (number * 40)}ms"
  class='
    flex
    shadow-md
    overflow-hidden
    items-center
    justify-center
    w-[calc(100vw_-_.5rem)]
    h-[calc(100vw_-_.5rem)]
    transition-opacity
    duration-500
    {!show ? 'opacity-0' : 'opacity-100'}
    sm:min-w-[calc(50vw_-_.25rem_-_.5rem)]
    sm:min-h-[calc(33vh_-_.18rem)]
    sm:max-w-[calc(50vw_-_.25rem_-_.5rem)]
    sm:max-h-[calc(33vh_-_.18rem)]
    {number % 2 == 0 ? 'sm:mr-0' : 'sm:mr-2'}
    md:min-w-[calc(33vw_-_.18rem_-_.35rem)]
    md:min-h-[calc(33vh_-_.18rem)]
    md:max-w-[calc(33vw_-_.18rem_-_.35rem)]
    md:max-h-[calc(33vh_-_.18rem)]
    {number % 3 == 0 ? 'md:mr-0' : 'md:mr-2'}
    lg:w-[calc(25vw_-_.375rem_-_.25rem)]
    lg:min-w-[calc(25vw_-_.375rem_-_.25rem)]
    lg:min-h-[calc(33vh_-_.18rem-1.5rem)]
    lg:max-w-[calc(25vw_-_.375rem_-_.25rem)]
    lg:max-h-[calc(33vh_-_.18rem-1.5rem)]
    {number % 4 == 0 ? 'lg:mr-0' : 'lg:mr-2'}
    mb-2
  '
  on:mouseenter={handleHoverIn}
  on:mouseleave={() => hover = false}
  bind:clientWidth={width}
  bind:clientHeight={frameHeight}
>
  <img class='{isLandscapeFrame ? 'w-full h-auto max-h-none' : 'h-full w-auto max-w-none'} transform duration-400 {hover ? 'scale-110' : 'scale-100'}' alt='album cover' src={item.image} />
  <div class='absolute top-0 left-0 flex justify-center items-center h-full w-full bg-black {hover ? 'bg-opacity-60 opacity-100' : 'bg-opacity-0 opacity-0'} duration-300 p-4'>
    <div style="transform: translateY(-{overflowSize}px)" class='w-full h-6/7 mt-1/7'>
      <div class='flex justify-center items-top h-full'>
        <span
          class='
          text-white
            text-xl
            font-thin
            text-right
            transform
            duration-700
            w-1/2
            {hover ? '-translate-x-1.5 -translate-y-1' : 'translate-x-0'}
          '
        >
          {item.artistName}
        </span>
        <div class='h-full w-0.25 bg-white bg-opacity-100 transform origin-top duration-700 {hover ? 'scale-y-100' : 'scale-y-0'}' />
        <div class='
          transform
          duration-700
          flex
          flex-col
          justify-between
          h-full
          space-y-1
          flex-1
          overflow-show
          {item.name.length > 20 ? '' : 'w-1/2'}
          text-white
          {hover ? 'translate-x-1.5 -translate-y-1' : 'translate-x-0'}'
        >
          <div>
            <p
              class='
                text-xl
                text-left
              '>
              {item.name}
            </p>

            <p
              class='
                text-xs
                text-left
                font-thin
              '>
              {item.releaseType}
            </p>
          </div>

          <div class='delay-200 duration-300 {hover ? 'opacity-100' : 'opacity-0'}'>
            <p class='text-sm font-light'>
              Released:
            </p>
            <p
              class='
                text-xs
                text-left
                font-thin
              '>
              {item.releaseDate}
            </p>
          </div>
        
          <div class='delay-400 duration-300 {hover ? 'opacity-100' : 'opacity-0'}'>
            <p class='text-sm font-light'>Credits:</p>
            <p class='text-xs font-thin italic'>{item.tags}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class='absolute w-1/2'>
    <div bind:clientHeight={detailsHeight} class='invisible flex flex-col space-y-1'>
      <div>
        <p
          class='
            text-xl
            text-left
          '>
          {item.name}
        </p>

        <p
          class='
            text-xs
            text-left
            font-thin
          '>
          {item.releaseType}
        </p>
      </div>

      <div>
        <p class='text-sm font-light'>
          Released:
        </p>
        <p
          class='
            text-xs
            text-left
            font-thin
          '>
          {item.releaseDate}
        </p>
      </div>

      <div>
        <p class='text-sm font-light'>Credits:</p>
        <p class='text-xs font-thin italic'>{item.tags}</p>
      </div>
    </div>
  </div>
</a>