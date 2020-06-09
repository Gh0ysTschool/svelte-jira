<!--#ScrollOverlay.svelte-->
<style>
    div {
        z-index: var(--zIndexValues-modal);
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
</style>
<div>
    <slot/>
</div>
