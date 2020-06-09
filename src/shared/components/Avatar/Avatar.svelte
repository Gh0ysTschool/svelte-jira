<script>

import Image from './Image.svelte'
import Letter from './Letter.svelte';
export let
  avatarUrl='https://blogs.bgsu.edu/ddikema/files/2011/11/221244070_Jack_Black_xlarge.jpeg',
  name='',
  size=32;

const colors = [
  '#DA7657',
  '#6ADA57',
  '#5784DA',
  '#AA57DA',
  '#DA5757',
  '#DA5792',
  '#57DACA',
  '#57A5DA',
];

const getColorFromName = name => colors[name.toLocaleLowerCase().charCodeAt(0) % colors.length];
</script>
{#if (avatarUrl)}
    <Image {avatarUrl} {size} {...$$props} data-testid={name ? `avatar:${name}` : 'avatar'}/>
{:else}
<Letter color={getColorFromName(name)} {...$$props} data-testid={name ? `avatar:${name}` : 'avatar'}>
    <span>{name.charAt(0)}</span>
</Letter>
{/if}