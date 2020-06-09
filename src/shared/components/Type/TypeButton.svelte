<!--#TypeButton.svelte-->
<script>
    import { Button } from '../../../shared/components';
</script>
<style>
    div {
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--color-textMedium);
        font-size:13px;
    }
</style>
<div>
    <Button>
        <slot/>
    </Button>
</div>