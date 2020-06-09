<!--#NotImplemented.svelte-->
<style>
    div {
        display: inline-block;
        position: absolute;
        top: 7px;
        left: 40px;
        width: 140px;
        padding: 5px 0 5px 8px;
        border-radius: 3px;
        text-transform: uppercase;
        color: var(--color-textDark);
        background: var(--color-backgroundMedium);
        opacity: 0;
        font-size:11.5px;
        font-family: "CircularStdBold"; font-weight: normal;
    }
    div:hover, div:nth-child(0):hover {
      opacity: 1;
    }
</style>

<div>
    <slot/>
</div>
