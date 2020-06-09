<!--#StyledModal.svelte-->
<script>
    export let variant = 'center', width=600;
</script>
<style>
    div {
        display: inline-block;
        position: relative;
        width: 100%;
        background: #fff;
    }
    div.aside {
        vertical-align: middle;
        border-radius: 3px;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    }
    div.center {
        min-height: 100vh;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
    }
</style>
<div class:aside={variant=='aside'} class:center={variant=='center'} style={`max-width:${width}px`}><slot/></div>
