<!--#User.svelte-->
<script>
    export let isSelectValue;
    export let withBottomMargin;
</script>
<style>
    div {
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
    }
    div.isSelectValue {
        margin: 0 10px 5px 0;
        padding: 4px 8px;
        border-radius: 4px;
        background: var(--color-backgroundLight);
        transition: background 0.1s;
    }
    div.isSelectValue:hover {
        background: var(--color-backgroundMedium);
    }
    div.isSelectValue.withBottomMargin {
        margin: 0 10px 0 0;
    }
</style>
<div 
    class:withBottomMargin 
    class:isSelectValue 
>
    <slot/>
</div>
