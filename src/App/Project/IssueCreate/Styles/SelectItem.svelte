<!--#SelectItem.svelte-->
<script>
    export let withBottomMargin;
</script>
<style lang='scss'>
    div {
        display: flex;
        align-items: center;
        margin-right: 15px;
    }
    div.withBottomMargin {
        margin-bottom: 5px;
    }
</style>
<div class:withBottomMargin>
    <slot/>
</div>
