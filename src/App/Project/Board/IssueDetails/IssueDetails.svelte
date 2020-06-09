<script>
    import api from '../../../../shared/api';
    // import useApi from '../../../../shared/hooks/api';
    let useApi = ()=>{};

    import IssueDetailsTitle from './IssueDetailsTitle.svelte';
    import Description from './Description';
    import Comments from './Comments';
    import Status from './Status';
    import AssigneesReporter from './AssigneesReporter.svelte';
    import { Priority } from '../../../../shared/components';
    import EstimateTracking from './EstimateTracking';
    import Dates from './Dates';
    import { 
        PageError,
        CopyLinkButton,
        Button,
        AboutTooltip,
        // Loader,
        Type } from '../../../../shared/components'
    import { 
        TopActions,
        TopActionsRight,
        Content,
        Left,
        Right } from './Styles';
    export let issueId=0;
    export let projectUsers;
    export let fetchProject;
    export let updateLocalProjectIssues;
    export let modalClose;
    import Delete from './Delete';
    import { 
        IssuePriority, 
        IssuePriorityCopy } from '../../../../shared/constants/issues.js';
    const [{ 
        data, 
        error, 
        setLocalData
    },  fetchIssue ] = [{
        data:{},
        error:null,
        setLocalData:()=>{}
    },  ()=>{} ];//useApi.get(`/issues/${issueId}`);

    //   if (!data) return <Loader />;
    //   if (error) return <PageError />;

      // const { issue } = data;
      let issue={priority:IssuePriority.LOW,id:0,status:'backlog',comments:[{id:0,body:'placeholder comment',createdAt:'12/34/56',user:{name:'placeholder user name'}}]};

      const updateLocalIssueDetails = fields =>
        setLocalData(currentData => ({ issue: { ...currentData.issue, ...fields } }));

      const updateIssue = updatedFields => {
        api.optimisticUpdate(`/issues/${issueId}`, {
          updatedFields,
          currentFields: issue,
          setLocalData: fields => {
            updateLocalIssueDetails(fields);
            updateLocalProjectIssues(issue.id, fields);
          },
        });
      };
    let toggle = false;
</script>
<TopActions>
    <Type 
        {issue} 
        {updateIssue} 
    />
    <TopActionsRight>
        <Button 
            icon="feedback" 
            variant="empty" 
            onClick={()=>toggle=!toggle}
        >
            Give feedback
        </Button>
        <AboutTooltip 
            {toggle} 
        />
        <CopyLinkButton 
            variant="empty" 
        />
        <Delete 
            {issue} 
            {fetchProject} 
            {modalClose} 
        />
        <Button 
            icon="close" 
            iconSize={24} 
            variant="empty" 
            onClick={()=>{
                modalClose();
                window.location.href
                    ='http://localhost:8081/project/board'
            }} 
        />
    </TopActionsRight>
</TopActions>
<Content>
    <Left>
        <IssueDetailsTitle 
            {issue} 
            updateIssue} 
        />
        <Description 
            {issue} 
            {updateIssue} 
        />
        <Comments 
            {issue} 
            {fetchIssue} 
        />
    </Left>
    <Right>
        <Status 
            {issue} 
            {updateIssue} 
        />
        <AssigneesReporter 
            {issue} 
            {updateIssue} 
            {projectUsers} 
        />
        <Priority 
            {issue} 
            {updateIssue} 
        />
        <EstimateTracking 
            {issue} 
            {updateIssue} 
        />
        <Dates 
            {issue} 
        />
    </Right>
</Content>