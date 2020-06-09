<script>
    import { Breadcrumbs, Modal } from '../../../shared/components';
    import Header from './Header';
    import Filters from './Filters';
    import Lists from './Lists';
    import IssueDetails from './IssueDetails';
    import { IssuePriority } from '../../../shared/constants/issues.js';
    // export let project, fetchProject, updateLocalProjectIssues;
    let isOpen=true;
    const defaultFilters = {
        searchTerm: '',
        userIds: [],
        myOnly: false,
        recent: false,
    };
    //let match = useRouteMatch();
    //let history = useHistory();
    let [filters, mergeFilters] = [defaultFilters,()=>{}];//useMergeState(defaultFilters);
    let project ={
        name:'Test Name',
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
        users:[{id:0,name:'00'},{id:1,name:'11'},{id:2,name:'22'},{id:3,name:'33'}],name:'testname',
    };
    let updateLocalProjectIssues,match={
        path:'http://localhost:8081',
        url:''
    };
</script>
<Breadcrumbs 
    items={['Projects', project.name, 'Kanban Board']} 
/>
<Header />
<Filters
    projectUsers={project.users}
    {defaultFilters}
    {filters}
    {mergeFilters}
/>
<Lists
    {project}
    {filters}
    {updateLocalProjectIssues}
/>
{#if window.location.href.match(`./project/board/issues/*`)}
    <Modal
        {isOpen}
        testid="modal:issue-details"
        width={1040}
        withCloseIcon={false}
        onClose={() => history.push(match.url)}
    >
      <IssueDetails
            issueId={'routeProps.match.params.issueId'}
            projectUsers={project.users}
            fetchProject={()=>{}}
            {updateLocalProjectIssues}
            modalClose={()=>isOpen=false}
          />
    </Modal>
{/if}