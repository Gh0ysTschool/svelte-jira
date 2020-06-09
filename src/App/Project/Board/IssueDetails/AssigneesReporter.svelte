<script>
    import { Avatar, Icon, Select } from '../../../../shared/components';
    import {
        User,
        Username,
        SectionTitle } from './Styles';
    let as = 'https://blogs.bgsu.edu/ddikema/files/2011/11/221244070_Jack_Black_xlarge.jpeg';
    let issue={userIds:[1,2],reporterId:3,status:'done',id:2348,title:'This is an issue of type: Task.',type:'task',priority:'low'};
    export let updateIssue ;
    let projectUsers=[{id:0,name:'name00',avatarUrl:as},{id:1,name:'name11',avatarUrl:as},{id:2,name:'name22',avatarUrl:as},{id:3,name:'name33',avatarUrl:as}];
    let getUserById = userId => projectUsers.find(user => user.id === userId);
    let userOptions = projectUsers.map(user => ({ value: user, label: user.name }));
</script>
<SectionTitle>Assignees</SectionTitle>
    <Select
        isMulti={true}
        variant="empty"
        dropdownWidth={343}
        placeholder="Unassigned"
        name="assignees"
        value={issue.userIds.map(id=>getUserById(id))}
        options={userOptions}
        onChange={userIds => {
            updateIssue({ userIds, users: userIds.map(getUserById) });
        }}
        renderValue={User}
        renderOption={User}
    />

    <SectionTitle>
        Reporter
    </SectionTitle>
    <Select
        variant="empty"
        dropdownWidth={343}
        withClearValue={false}
        name="reporter"
        value={getUserById(issue.reporterId)}
        options={userOptions}
        onChange={userId => updateIssue({ reporterId: userId })}
        renderValue={User}
        renderOption={User}
    />