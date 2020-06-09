<!--#ClearIcon.svelte-->
<script>
    import Icon from '../../../shared/components';
</script>
<style lang='scss'>
    div {
        position: absolute;
        top: 4px;
        right: 7px;
        padding: 5px;
        font-size: 16px;
        color: var(--color-textMedium);
        cursor: pointer;
        user-select: none;
    }
</style>
<div>
<Icon {...$$props}><slot/></Icon>
</div>