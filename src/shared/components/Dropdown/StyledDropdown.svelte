<!--#StyledDropdown.svelte-->
<script>
    export let width;
</script>
<style>
    div {
        z-index: var(--zIndexValues-dropdown);
        position: absolute;
        top: 100%;
        left: 0;
        border-radius: 0 0 4px 4px;
        background: #fff;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
    }
</style>
  <div style={width ? `width: ${width}px;` : 'width: 100%;'}><slot/></div>