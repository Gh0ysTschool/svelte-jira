<script>
    import {
        IssueType,
        IssueStatus,
        IssuePriority,
        IssueTypeCopy,
        IssuePriorityCopy,
    } from '../../../shared/constants/issues.js';
    import { onMount } from 'svelte';
    //import toast from '../../../shared/utils/toast';
    //import useApi from '../../../shared/hooks/api';
    //import useCurrentUser from '../../../shared/hooks/currentUser';
    import { Field } from '../../../shared/components';
    import { Sveltik as Form, Field as SveltikField, Form as SvForm, Sveltik as SvSveltik } from 'sveltik';
    import { IssueTypeIcon, Icon, Avatar, IssuePriorityIcon } from '../../../shared/components';
    import User from './User';
    import { TypeOption, TypeValue } from './Type';
    import { StyledPriority, FormHeading, FormElement, Divider, SelectItem, SelectItemLabel, Actions, ActionButton } from './Styles';
    let as = 'https://blogs.bgsu.edu/ddikema/files/2011/11/221244070_Jack_Black_xlarge.jpeg';
    export let project ={
        issues:[
            {userIds:[1,2],reporterId:1,status:'backlog',id:2345,title:'This is an issue of type: Task.',type:'task',priority:IssuePriority.LOW},
            {userIds:[1,2],reporterId:2,status:'backlog',id:2349,title:'This is an issue of type: Task.',type:'task',priority:IssuePriority.LOW},
            {userIds:[1,2],reporterId:3,status:'selected',id:2346,title:'This is an issue of type: Task.',type:'task',priority:IssuePriority.LOW},
            {userIds:[1,2],reporterId:4,status:'selected',id:2350,title:'This is an issue of type: Task.',type:'task',priority:IssuePriority.LOW},
            {userIds:[1,2],reporterId:1,status:'inprogress',id:2347,title:'This is an issue of type: Task.',type:'task',priority:IssuePriority.LOW},
            {userIds:[1,2],reporterId:2,status:'inprogress',id:2351,title:'This is an issue of type: Task.',type:'task',priority:IssuePriority.LOW},
            {userIds:[1,2],reporterId:3,status:'done',id:2348,title:'This is an issue of type: Task.',type:'task',priority:IssuePriority.LOW},
            {userIds:[1,2],reporterId:4,status:'done',id:2352,title:'This is an issue of type: Task.',type:'task',priority:IssuePriority.LOW},
        ],
        users:[{id:0,name:'name00',avatarUrl:as},{id:1,name:'name11',avatarUrl:as},{id:2,name:'name22',avatarUrl:as},{id:3,name:'name33',avatarUrl:as}],name:'testname',
    };
    export let fetchProject;
    export let onCreate;
    export let modalClose;
    let currentUserId, isCreating, createIssue;
    onMount(()=>{
      // [{ isCreating }, createIssue] = useApi.post('/issues');
      // { currentUserId } = useCurrentUser();
    });
    const typeOptions = Object.values(IssueType).map(type => ({
        value: type,
        label: IssueTypeCopy[type],
    }));

    const priorityOptions = Object.values(IssuePriority).map(priority => ({
        value: priority,
        label: IssuePriorityCopy[priority],
    }));

    const userOptions = project => project.users.map(user => ({ 
        value: user, 
        label: user.name 
    }));
    // validations={{
    //       type: Form.is.required(),
    //       title: [Form.is.required(), Form.is.maxLength(200)],
    //       reporterId: Form.is.required(),
    //       priority: Form.is.required(),
    //     }}
</script>
<Form
    enableReinitialize
    initialValues={{
        type: IssueType.TASK,
        title: '',
        description: '',
        reporterId: currentUserId,
        userIds: [],
        priority: IssuePriority.MEDIUM,
    }}
    onSubmit={async (values, form) => {
        try {
            await createIssue({
                ...values,
                status: IssueStatus.BACKLOG,
                projectId: project.id,
                users: values.userIds.map(id => ({ id })),
            });
            await fetchProject();
            //toast.success('Issue has been successfully created.');
            onCreate();
        } catch (error) {
            Form.handleAPIError(error, form);
        }
    }}
>
    <FormElement>
        <FormHeading>
            Create issue
        </FormHeading>
        <Field type='Select'
            name="type"
            label="Issue Type"
            tip="Start typing to get a list of possible matches."
            options={typeOptions}
            value={typeOptions[0].value}
            renderValue={TypeOption}
            renderOption={TypeOption}
        />
        <Divider/>
        <Field type='Input'
            name="title"
            label="Short Summary"
            tip="Concisely summarize the issue in one or two sentences."
        />
        <Field type='TextEditor'
            name="description"
            label="Description"
            tip="Describe the issue in as much detail as you'd like."
        />
        <Field type='Select'
            name="reporterId"
            label="Reporter"
            options={userOptions(project)}
            value={userOptions(project)[0].value}
            renderValue={User}
            renderOption={User}
            extras={{id:0}}
        />
        <Field type='Select'
            isMulti={true}
            name="userIds"
            label="Assignees"
            tio="People who are responsible for dealing with this issue."
            options={userOptions(project)}
            value={[userOptions(project)[0].value]}
            renderValue={User}
            renderOption={User}
            extras={{id:0}}
        />
        <Field type='Select'
            name="priority"
            label="Priority"
            tip="Priority in relation to other issues."
            options={priorityOptions}
            value={priorityOptions[0].value}
            renderValue={StyledPriority}
            renderOption={StyledPriority}
        />
        <Actions>
            <ActionButton 
                type="submit" 
                variant="primary" 
                isWorking={isCreating}>
                Create Issue
            </ActionButton>
            <ActionButton 
                type="button" 
                variant="empty" 
                onClick={modalClose}>
                Cancel
            </ActionButton>
        </Actions>
    </FormElement>
</Form>