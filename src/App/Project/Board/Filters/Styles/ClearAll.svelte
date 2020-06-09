<!--#ClearAll.svelte-->
<style>
    div {
        height: 32px;
        line-height: 32px;
        margin-left: 15px;
        padding-left: 12px;
        border-left: 1px solid var(--color-borderLightest);
        color: var(--color-textDark);
        font-size:14.5px;
        @include clickable;
    }
    div:hover {
        color: var(--color-textMedium);
    }

</style>

<div>
    <slot/>
</div>
