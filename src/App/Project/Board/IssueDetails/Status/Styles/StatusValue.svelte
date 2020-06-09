<script>
    import {IssueStatusCopy} from '../../../../../../shared/constants/issues.js';
    import StyledStatus from './StyledStatus.svelte';
    import { Icon } from '../../../../../../shared/components';
    export let key,isValue;
</script>
<StyledStatus 
    {isValue} 
    color={key}
>
    <div>
        {IssueStatusCopy[key]}
    </div>
    <Icon 
        type="chevron-down" 
        size={18} 
    />
</StyledStatus>