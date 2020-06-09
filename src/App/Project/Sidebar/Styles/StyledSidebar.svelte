<!--#Sidebar.svelte-->
<style>
    div {
        position: fixed;
        z-index: calc(var(--zIndexValues-navLeft) - 1);
        top: 0;
        left: var(--sizes-appNavBarLeftWidth);
        height: 100vh;
        width: var(--sizes-secondarySideBarWidth);
        padding: 0 16px 24px;
        background: var(--color-backgroundLightest);
        border-right: 1px solid var(--color-borderLightest);
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
    @media (max-width: 1100px) {
        div {
            width: calc(var(--sizes-secondarySideBarWidth) - 10);
        }
    }
    @media (max-width: 999px) {
        div {  
            display: none;
        }
    }
</style>
<div>
    <slot/>
</div>
