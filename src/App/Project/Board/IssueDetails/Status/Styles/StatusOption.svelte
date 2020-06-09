<script>
    import {IssueStatusCopy} from '../../../../../../shared/constants/issues.js';
    import StyledStatus from './StyledStatus.svelte';
    export let key,isValue;
</script>

<StyledStatus 
    {isValue} 
    color={key}
>
    {IssueStatusCopy[key]}
</StyledStatus>