<!--#Title.svelte-->
<style>
    div {
        padding: 13px 10px 17px;
        text-transform: uppercase;
        color: var(--color-textMedium); 
        font-family: "CircularStdMedium"; font-weight: normal;
        text-transform: uppercase;
        font-size: 12.5px;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 13px 10px 17px;
        overflow: hidden;
    }
</style>

<div>
    <slot/>
</div>
