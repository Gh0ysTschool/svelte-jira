<!--#TrackingLink.svelte-->
<script>
    export let onClick;
</script>
<style>
    div {
        padding: 4px 4px 2px 0;
        border-radius: 4px;
        transition: background 0.1s;
        cursor: pointer;
        user-select: none;
        position:relative;
    }
    div:hover {
        background: var(--color-backgroundLight);
    }
</style>

<div 
    on:click={onClick}
>
    <slot/>
</div>
