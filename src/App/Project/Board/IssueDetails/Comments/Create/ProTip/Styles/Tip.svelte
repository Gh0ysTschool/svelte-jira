<!--#Tip.svelte-->
<style>
    div {
        display: flex;
        align-items: center;
        padding-top: 8px;
        color: var(--color-textMedium);
        font-size:13px;
    }
    div :global(strong) {
        padding-right: 4px;
    }
</style>
<div>
    <slot/>
</div>
