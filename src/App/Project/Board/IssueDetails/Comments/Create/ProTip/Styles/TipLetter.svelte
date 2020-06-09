<!--#TipLetter.svelte-->
<style>
    span {
        position: relative;
        top: 1px;
        display: inline-block;
        margin: 0 4px;
        padding: 0 4px;
        border-radius: 2px;
        color: var(--color-textDarkest);
        background: var(--color-backgroundMedium);
        font-family: "CircularStdBold"; 
        font-weight: normal;
        font-size:12px;
    }
</style>
<span>
    <slot/>
</span>
