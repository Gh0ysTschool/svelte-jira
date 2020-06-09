<!--#List.svelte-->
<style>
    div {
        display: flex;
        flex-direction: column;
        margin: 0 5px;
        min-height: 400px;
        min-width: 24%;
        max-width: 24%;
        border-radius: 3px;
        background: var(--color-backgroundLightest);
    }
</style>
<div>
    <slot/>
</div>
