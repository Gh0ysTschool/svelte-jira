<!--#LinkItem.svelte-->
<script>
    export let path;
</script>
<style>
    div {
        position: relative;
        display: flex;
        padding: 8px 12px;
        border-radius: 3px;
        cursor: pointer;
        cursor: pointer;
        user-select: none;
    }
    div:active {
        color: var(--color-primary);
        background: var(--color-backgroundLight);
    }
    div:hover {
        background: var(--color-backgroundLight);
    }
    div :global(i) {
        margin-right: 15px;
        font-size: 20px;
    }
    div:active :global(i){
        color: var(--color-primary);
    }
    div.to {
        cursor: not-allowed;
    }
    div.to:hover {
        background: var(--color-backgroundLight);
    }
</style>

<div 
    class:to={!path}
>
    <slot/>
</div>
