<script>
    import StyledType from './StyledType.svelte';
    import {IssueTypeIcon} from '../../../../shared/components';
    import TypeLabel from './TypeLabel.svelte';
    import {IssueTypeCopy} from '../../../../shared/constants/issues.js';
    
    export let key, onClick;
</script>
<StyledType key={key} onClick={onClick}>
    <IssueTypeIcon type={key} top={1} />
    <TypeLabel>{IssueTypeCopy[key]}</TypeLabel>
</StyledType>