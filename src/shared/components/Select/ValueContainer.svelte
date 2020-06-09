<!--#ValueContainer.svelte-->
<script>
export let variant='normal';
</script>
<style>
    div.normal {
        min-height: 32px;
        padding: 5px 5px 5px 10px;
    }
    div {
        display: flex;
        align-items: center;
        width: 100%;
    }
</style>

<div class:normal={variant=='normal'}><slot/></div>
