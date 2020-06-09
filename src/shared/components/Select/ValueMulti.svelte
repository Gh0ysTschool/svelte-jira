<!--#ValueMulti.svelte-->
<script>
export let variant='normal'; //invalid, 
</script>
<style>
    div.normal {
        padding-top: 5px;
    }
    div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
</style>

<div class:normal={variant=='normal'}><slot/></div>
