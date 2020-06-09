<!--#NavLeft.svelte-->
<style>
    aside {
        z-index: var(--zIndexValues-navLeft);
        position: fixed;
        padding-top: 16px;
        top: 0;
        left: 0;
        overflow-x: hidden;
        height: 100vh;
        width: var(--sizes-appNavBarLeftWidth);
        background: var(--color-backgroundDarkPrimary);
        transition: all 0.1s;
        transform: translateZ(0);
    }
    aside:hover {
        width: 200px;
        box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.6);
    }
</style>
<aside>
    <slot/>
</aside>
