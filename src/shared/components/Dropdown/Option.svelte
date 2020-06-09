<!--#Option.svelte-->
<style>
    div {
        padding: 8px 14px;
        word-break: break-word;
        cursor: pointer;
    }
    div:last-of-type {
        margin-bottom: 8px;
    }
    :global(div.jira-select-option-is-active) {
        background: var(--color-backgroundLightPrimary);
    }
</style>

<div>
    <slot/>
</div>
