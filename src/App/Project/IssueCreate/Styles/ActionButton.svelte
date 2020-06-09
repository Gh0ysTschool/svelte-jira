<!--#ActionButton.svelte-->
<script>
    import {Button} from '../../../../shared/components';
</script>
<style>
    div {
        margin-left: 10px;
    }
</style>
<div>
    <Button {...$$props}>
        <slot/>
    </Button>
</div>