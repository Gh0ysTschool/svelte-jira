<script>
import { IssuePriority, IssuePriorityCopy } from '../../../shared/constants/issues.js';
import {
    Select,
    IssuePriorityIcon } from '../../../shared/components';
import StyledPriority from './StyledPriority.svelte';
import SectionTitle from './SectionTitle.svelte';
export let issue,updateIssue;
</script>
    <SectionTitle>Priority</SectionTitle>
    <Select
        variant="empty"
        withClearValue={false}
        dropdownWidth={343}
        name="priority"
        value={issue.priority}
        options={Object.values(IssuePriority).map(priority => ({
            value: priority,
            label: IssuePriorityCopy[priority],
        }))}
        onChange={priority => updateIssue({ priority })}
        renderValue={StyledPriority}
        renderOption={StyledPriority}
    />