<!--#FormButton.svelte-->
<script>
    import {Button} from '../../../../../../../shared/components';
</script>
<style>
    div {
        margin-right: 6px;
    }
</style>
<div>
    <Button>
        <slot/>
    </Button>
</div>
