<script>
    import { IssuePriority } from '../../../shared/constants/issues.js';
    import { PriorityIcon } from '../../../shared/components';
    export let priority;
    let iconType;
    $: iconType = [IssuePriority.LOW, IssuePriority.LOWEST].includes(priority)
        ? 'arrow-down'
        : 'arrow-up';
</script>
<PriorityIcon type={iconType} color={priority} size={18} {...$$restProps} />
