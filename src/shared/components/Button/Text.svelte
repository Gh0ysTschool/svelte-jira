<!--#Text.svelte-->
<script>
    export let withPadding;
</script>
<style>
    div {
        padding-left: 0px
    }
    div.withPadding {
        padding-left:7px;
    }
</style>

<div class:withPadding><slot/></div>
