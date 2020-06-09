<!--#EmptyLabel.svelte-->
<style>
    div {
        margin-left: -7px;
        padding: 7px;
        border-radius: 3px;
        color: var(--color-textMedium);
        transition: background 0.1s;
        font-size:15px;
        cursor: pointer;
        user-select: none;
    }
    div:hover {
        background: var(--color-backgroundLight);
    }
</style>
<div>
    <slot/>
</div>
