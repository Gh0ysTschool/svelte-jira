<!--#EditLink.svelte-->
<style>
    div {
        margin-right: 12px;
        padding: 2px 0;
        color: var(--color-textMedium);
        font-size:14.5px;
        cursor: pointer;
        user-select: none;
    }
    div:hover {
        text-decoration: underline;
    }
</style>
<div>
    <slot/>
</div>
