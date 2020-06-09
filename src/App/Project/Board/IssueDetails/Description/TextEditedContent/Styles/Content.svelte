<!--#Content.svelte-->
<script>
    export let className='';
</script>
<style>
    div {
        padding: 0 !important;
        font-size:15px;
        font: var(--font-regular)
    }
</style>

<div class={className}><slot/></div>
