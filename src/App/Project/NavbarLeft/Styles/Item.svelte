<!--#Item.svelte-->
<script>
    export let onClick;
</script>
<style>
    div {
        position: relative;
        width: 100%;
        height: 42px;
        line-height: 42px;
        padding-left: 18px;
        font-size:24px;
        color: #deebff;
        transition: color 0.1s;
        cursor: pointer;
        user-select: none;
    }
    div:hover {
        background: rgba(255, 255, 255, 0.1);
    }
</style>

<div 
    on:click={onClick}
>
    <slot/>
</div>
