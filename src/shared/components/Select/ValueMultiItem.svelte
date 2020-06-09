<!--#ValueMultiItem.svelte-->
<style>
    div {
        margin: 0 5px 5px 0;
        display: inline-flex;
        align-items: center;
        height: 24px;
        padding: 0 8px;
        border-radius: 4px;
        cursor: pointer;
        user-select: none;
        color: var(--color-textDarkest);
        background: var(--color-backgroundMedium);
        font:var(--font-bold);
        font-size:12px;
    }
    div :global(i) {
        margin-left: 4px;
    }
</style>
<div>
    <slot/>
</div>
