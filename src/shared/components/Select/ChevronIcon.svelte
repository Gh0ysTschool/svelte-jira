<!--#ChevronIcon.svelte-->
<script>
    import { Icon } from '../../../shared/components';
</script>
<style>
    div {
        margin-left: auto;
        font-size: 18px;
        color: var(--color-textMedium);
    }
</style>
<div>
    <Icon {...$$props} type='chevron'>
        <slot/>
    </Icon>
</div>
