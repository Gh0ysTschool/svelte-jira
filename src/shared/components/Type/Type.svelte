<script>
import {IssueType, IssueTypeCopy} from '../../../shared/constants/issues.js';
import { IssueTypeIcon, Select } from '../../../shared/components';

import TypeValue from './TypeValue.svelte';
import TypeOption from './TypeOption.svelte';
import TypeButton from './TypeButton.svelte';
import StyledType from './StyledType.svelte';
import TypeLabel from './TypeLabel.svelte';
// export 
let updateIssue=()=>{},issue={userIds:[1,2],reporterId:3,status:'done',id:2348,title:'This is an issue of type: Task.',type:'task',priority:'low'};
</script>
<Select
    variant="empty"
    dropdownWidth={150}
    withClearValue={false}
    name="type"
    value={issue.type}
    options={Object.values(IssueType).map(type => ({
        value: type,
        label: IssueTypeCopy[type],
    }))}
    extras={{id:issue.id}}
    onChange={type => updateIssue({ type })}
    renderValue={TypeValue}
    renderOption={TypeOption}
/>