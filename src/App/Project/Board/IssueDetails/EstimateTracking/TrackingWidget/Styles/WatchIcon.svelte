<!--#WatchIcon.svelte-->
<script>
    import { Icon } from '../../../../../../../shared/components';
</script>
<style>
    div {
        color: var(--color-textMedium);
    }
</style>
<div>
    <Icon {...$$props}
        ><slot/>
    </Icon>
</div>
