<!--#ItemText.svelte-->
<script>
    export let fade=false;
</script>
<style>
    div {
        display:inline-block;
        position: absolute;
        left: 64px;
        text-transform: uppercase;
        transition: all 0.1s;
        transition-property: right, visibility, opacity;
        font-family: "CircularStdBold"; 
        font-weight: normal;
        font-size:12px;
    }
    div.fade {
        right: 0;
        visibility: visible;
        opacity: 1;
    }
</style>

<div 
    class:fade
>
    <slot/>
</div>
