<!--#IssueLink.svelte-->
<script>
    export let to;
    let onClick = ()=>
        window.location.href=to;
</script>
<style>
    div {
        cursor: pointer;
        user-select: none;
        border-radius: 3px;
        background: rgb(255, 255, 255);
        transition: background 0.1s ease 0s;
    }
</style>
<div {...$$restProps}
    on:click={onClick} 
>
    <slot/>
</div>
