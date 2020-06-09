<!--#StyledTooltip.svelte-->
<script>
    export let width, toggle=false, left;
</script>
<style>
    div {
        z-index: calc(var(--zIndexValues-modal)+1);
        position: fixed;
        bottom:1em;
        border-radius: 3px;
        background: #fff;
        transform: translateZ(0);
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
        color: var(--color-textDarkest);
        font-family: "CircularStdBook"; 
        font-weight: normal;
    }
    div.hide {
        display: none;
    }
</style>

<div class:hide={!toggle} style={`width:${width}px;left:${left}px`}><slot/></div>
