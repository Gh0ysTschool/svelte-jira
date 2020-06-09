<!--#FakeTextarea.svelte-->
<style>
    div {
        padding: 12px 16px;
        border-radius: 4px;
        border: 1px solid var(--color0borderLightest);
        color: var(--color-textLight);
        cursor: pointer;
        user-select: none;
    }
    div:hover {
        border: 1px solid var(--color-borderLight);
    }
</style>
<div>
    <slot/>
</div>
