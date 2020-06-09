<!--#Bar.svelte-->
<script>
    export let width;
</script>
<style>
    div {
        height: 5px;
        border-radius: 4px;
        background: var(--color-primary);
        transition: all 0.1s;
    }
</style>
<div 
    style={`width:${width}`}
>
    <slot/>
</div>
