<!--#StyledButton.svelte-->
<script>
    import {Button} from '../../../../../../shared/components';
</script>
<style>
    div {
        margin-right: 10px;
    }
</style>
<div>
    <Button>
        <slot/>
    </Button>
</div>
