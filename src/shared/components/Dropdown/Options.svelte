<!--#Options.svelte-->
<style>
    div {
        max-height: 200px;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
    div::-webkit-scrollbar {
        width: 8px;
    }
    div::-webkit-scrollbar-track {
        background: none;
    }
    div::-webkit-scrollbar-thumb {
        border-radius: 99px;
        background: var(--color-backgroundMedium);
    }
</style>
<div>
    <slot/>
</div>
