<script>

import Container from './Container.svelte';
import Divider from './Divider.svelte';
export let items = [];

</script>

<Container>
    {#each items as item, i}
        {#if i !== 0}
            <Divider>/</Divider>
        {/if}
        {item}
    {/each}
</Container>