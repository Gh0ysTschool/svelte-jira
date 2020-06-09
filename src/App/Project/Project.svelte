<script>
    import { Redirect } from '../../shared/components';
    import { Router, Route } from "svelte-routing";
    import useApi from '../../shared/api';
    // import { updateArrayItemById } from '../../shared/utils/javascript';
    let updateArrayItemById = ()=>{};
    // import { createQueryParamModalHelpers } from '../../shared/utils/queryParamModal';
    let createQueryParamModalHelpers = ()=>{};
    import { default as PageLoader}  from '../../shared/components';
    import { default as PageError}  from '../../shared/components';
    import { Modal }  from '../../shared/components';
    import IssueCreate from './IssueCreate';
    import NavbarLeft from './NavbarLeft';
    import Sidebar from './Sidebar';
    import Board from './Board';
    import {default as IssueSearch, default as ProjectSettings} from '../../shared/components';
    import {ProjectPage} from './Styles';
    let createOpen = false, toggleCreate = ()=> createOpen = !createOpen;
    // const match = useRouteMatch();
    // const history = useHistory();
    const match = {path:window.localStorage.href};
    const history = ()=>{};
    let url = window.location.href;
    let isOpen = true;
    // const issueSearchModalHelpers = createQueryParamModalHelpers('issue-search');
    // const issueCreateModalHelpers = createQueryParamModalHelpers('issue-create');
    const issueSearchModalHelpers = {isOpen:()=>false};
    const issueCreateModalHelpers = {isOpen:()=>true};
    const [{ data, error, setLocalData }, fetchProject] = useApi.get('/project');
    const { project } = data;
    const updateLocalProjectIssues = (issueId, updatedFields) => {
        setLocalData(currentData => ({
            project: {
                ...currentData.project,
                issues: updateArrayItemById(currentData.project.issues, issueId, updatedFields),
            },
        }));
    };
    // Redirect to board if exact url is /project 
    // {match.isExact && <Redirect to={`${match.url}/board`} />}
</script>

{#if (!data)} <PageLoader />
{:else if (error)} <PageError />
{:else}
    <ProjectPage>
        <NavbarLeft
            issueSearchModalOpen=
                {issueSearchModalHelpers.open}
            issueCreateModalOpen=
                {toggleCreate}
        />
        <Sidebar 
            {project} 
        />  
        {#if (issueSearchModalHelpers.isOpen())}
            <Modal
                isOpen
                testid="modal:issue-search"
                variant="aside"
                width={600}
                onClose={issueSearchModalHelpers.close}
            >
                <IssueSearch 
                    {project}
                />
            </Modal>
        {/if}
        {#if (issueCreateModalHelpers.isOpen())}
            <Modal
                isOpen={createOpen}
                testid="modal:issue-create"
                width={800}
                withCloseIcon={false}
                onClose={toggleCreate}
            >
                <IssueCreate 
                    modalClose={toggleCreate} 
                    {project} 
                    {fetchProject}
                />
            </Modal>
        {/if} 
        <Board/>
        <Route 
            path={`${match.path}/settings`}
        >
            <ProjectSettings 
                {project} 
                {fetchProject} 
            />
        </Route>
    </ProjectPage>
    
{/if}
<Redirect 
    path="./project" 
    to={url+'/board'} 
/>

<!-- <Route path={`${match.path}/board`}>
    <Board
        project={project}
        fetchProject={fetchProject}
        updateLocalProjectIssues={updateLocalProjectIssues}/>
</Route> -->