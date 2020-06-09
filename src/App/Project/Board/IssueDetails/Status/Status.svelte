<script>
    import { 
        IssueStatus, 
        IssueStatusCopy } from '../../../../../shared/constants/issues.js';
    import { 
        Select, 
        Icon } from '../../../../../shared/components';
    import {
        SectionTitle,
        StyledStatus,
        StatusOption,
        StatusValue } from './Styles';
    export let issue;
    export let updateIssue;
    let status = issue.status;
</script>
<SectionTitle>
    Status
</SectionTitle>
<Select
    variant="empty"
    dropdownWidth={343}
    withClearValue={false}
    name="status"
    value={issue.status}
    options={Object.values(IssueStatus).map(status => ({
        value: status,
        label: IssueStatusCopy[status],
    }))}
    onChange={status => updateIssue({ status })}
    renderValue={StatusValue}
    renderOption={StatusOption}
/>

