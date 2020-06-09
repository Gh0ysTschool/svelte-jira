<!--#Title.svelte-->
<style>
    p {
        padding-bottom: 11px;
        font-size:15px;
    }
    
    @media (max-width: 1100px) {
        p {
            font-size:14.5px;
        }
    }
</style>
<p>
    <slot/>
</p>
