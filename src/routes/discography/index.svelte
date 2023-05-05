

<script lang='ts'>
  import WorkItem from "$src/components/WorkItem.svelte";

  const items = [
    {
      name: 'Rememory',
      releaseType: 'Album',
      artistName: 'It Was A Good Dream',
      releaseDate: 'March 2023',
      tags: 'co-producer / mixing / artist / writer',
      image: 'https://www.dropbox.com/s/xcpcq01ud40tq3t/Rememory-Preview.png?raw=1',
      href: '#'
    },
    {
      name: 'You Never Say Goodbye When You Leave',
      releaseType: 'Album',
      artistName: 'Pocket Vinyl',
      releaseDate: 'February 2023',
      tags: 'producer / mixing engineer / drum programming / guitar / bass',
      image: 'https://www.dropbox.com/s/6cnx6yzvwkhs7vi/a0390000665_10.jpeg?raw=1',
      href: '#'
    },
    {
      name: 'Night and Day',
      releaseType: 'Single',
      artistName: 'Josh Knowles',
      releaseDate: 'December 2022',
      tags: 'producer / mixing engineer',
      image: 'https://www.dropbox.com/s/pikw88398qehh6b/JK-ND-Digital-Art-med.jpg?raw=1',
      href: '#'
    },
    {
      name: 'Gift of Conviction',
      releaseType: 'Single',
      artistName: 'Closed Loop & Ellimist',
      releaseDate: 'August 2022',
      tags: 'producer / mixing engineer / artist / remixer',
      image: 'https://www.dropbox.com/s/fi6k0mz5jpuzf0d/Gift%20of%20Conviction%20Artwork%20%28small%29.png?raw=1',
      href: '#'
    },
    {
      name: 'No Extinguishing',
      releaseType: 'Single',
      artistName: 'Josh Knowles',
      releaseDate: 'June 2022',
      tags: 'producer / mixing engineer',
      image: 'https://www.dropbox.com/s/odjdrt6sjuuzvqo/JK-NE.jpg?raw=1',
      href: '#'
    },
    {
      name: 'Move',
      releaseType: 'Single',
      artistName: 'Ellimist',
      releaseDate: 'June 2021',
      tags: 'producer / mixing engineer / artist / writer',
      image: 'https://www.dropbox.com/s/c9f2hymej5btgul/ellimist-move.jpg?raw=1',
      href: '#'
    },
    {
      name: 'The Slowdance is Over',
      releaseType: 'Vinyl',
      artistName: 'Josh Knowles',
      releaseDate: '2021',
      tags: 'producer / mixing engineer',
      image: 'https://www.dropbox.com/s/f1myk6olv5a8z5n/josh-knowles-slowdance-is-over.jpg?raw=1',
      href: '#'
    },
    {
      name: 'Reck',
      releaseType: 'Short Film Score',
      artistName: 'Reck',
      releaseDate: 'Summer 2021',
      tags: 'mixing engineer',
      image: 'https://www.dropbox.com/s/j7crdwtg6hei6ai/reck-film.jpg?raw=1',
      href: '#'
    },
    {
      name: 'Florish',
      releaseType: 'Single',
      artistName: 'Ellimist',
      releaseDate: 'June 2021',
      tags: 'artist / writer / producer / mixing / mastering',
      image: 'https://www.dropbox.com/s/sjzgixmqznloz0i/ellimist-florish.jpg?raw=1',
      href: '#'
    },
    {
      name: 'Concern',
      releaseType: 'Single',
      artistName: 'Wyn Doran',
      releaseDate: 'May 2021',
      tags: 'producer / mixing engineer / co-writer',
      image: 'https://www.dropbox.com/s/gz04gv8ax49ujso/wyn-doran-concern.jpeg?raw=1',
      href: '#'
    },
    {
      name: 'Close',
      releaseType: 'Single',
      artistName: 'Josh Knowles',
      releaseDate: 'April 2021',
      tags: 'producer / mixing engineer',
      image: 'https://www.dropbox.com/s/tuta57ypgveyobr/josh-knowles-close.jpeg?raw=1',
      href: '#'
    },
    {
      name: 'Winter Person',
      releaseType: 'Album',
      artistName: 'Pocket Vinyl',
      releaseDate: 'November 2020',
      tags: 'producer / mixing engineer / guitar / bass / drums / programming',
      image: 'https://www.dropbox.com/s/5q50etv5eire2vd/pocket-vinyl-winter-person.jpg?raw=1',
      href: '#'
    },
    {
      name: 'A Step Back From the Wrong Direction',
      releaseType: 'Album',
      artistName: 'Josh Knowles',
      releaseDate: 'July 2020',
      tags: 'producer / mixing/ mastering',
      image: 'https://www.dropbox.com/s/fccn0xu8nf2ic0g/josh-knowles-step-back.jpeg?raw=1',
      href: '#'
    },
    {
      name: 'How Deep the Dark',
      releaseType: 'Single',
      artistName: 'Josh Knowles',
      releaseDate: 'April 2020',
      tags: 'co-producer / mixing engineer',
      image: 'https://www.dropbox.com/s/t8u95tlytyxqunx/josh-knowles-how-deep-the-dark.jpeg?raw=1',
      href: '#'
    },
    {
      name: 'Cigarettes',
      releaseType: 'Single',
      artistName: 'Wyn Doran',
      releaseDate: 'April 2020',
      tags: 'producer / mixing engineer',
      image: 'https://www.dropbox.com/s/mmvbn3xgw1y9zfs/wyn-doran-cigarettes.jpeg?raw=1',
      href: '#'
    },
    {
      name: 'Unreal Expectations',
      releaseType: 'Single',
      artistName: 'Killer Instinct',
      releaseDate: 'April 2020',
      tags: 'producer / mixing / mastering',
      image: 'https://www.dropbox.com/s/5dv9dtkxt48wme0/killer-instinct-unreal.jpg?raw=1',
      href: '#'
    },
    {
      name: 'Descend / Sustain / Surpress',
      releaseType: 'Single',
      artistName: 'It Was A Good Dream',
      releaseDate: 'March 2020',
      tags: 'producer / mixing / artist / writer',
      image: 'https://www.dropbox.com/s/u4sf9j5phjg5ho1/iwagd%20-%20descend.jpeg?raw=1',
      href: '#'
    },
    {
      name: 'Make Out',
      releaseType: 'Single',
      artistName: 'Annabelle Lee',
      releaseDate: 'February 2020',
      tags: 'mixing engineer',
      image: 'https://www.dropbox.com/s/0worka8asz8gybo/annabel-lee-make-out.jpg?raw=1',
      href: '#'
    },
  ]

</script>

<div class='flex p-2 w-full flex-wrap pb-17'>
  {#each items as item, index}
    <WorkItem
      {index}
      {item}
    />
  {/each}
</div>