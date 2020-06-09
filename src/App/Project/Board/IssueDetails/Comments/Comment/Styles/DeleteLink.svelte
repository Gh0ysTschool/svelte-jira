<!--#DeleteLink.svelte-->
<style>
    div {
        display: inline-block;
        padding: 2px 0;
        color: var(--color-textMedium);
        font-size:14.5px;
        cursor: pointer;
        user-select: none;
    }
    div:before {
        position: relative;
        right: 6px;
        content: '·';
        display: inline-block;
    }
    div:hover {
        text-decoration: underline;
    }
</style>
<div>
    <slot/>
</div>
