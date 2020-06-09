<script>
    //import { useRouteMatch } from 'react-router-dom';
    let useRouteMatch = ()=>({
        path:window.location.href,
        url:window.location.href
    });
    import {Draggable} from '../../../../../../shared/components/DragAndDrop';
    import {
        IssuePriorityIcon,
        IssueTypeIcon } from '../../../../../../shared/components';
    import {
        // IssuePriority,
        StyledIssue,
        IssueLink,
        IssueTitle,
        IssueBottom,
        Assignees,
        AssigneeAvatar } from './Styles';
    export let index;
    export let key;
    export let flag;
    export let issue;
    const match = useRouteMatch();
    const assignees = [{
        name:'name', 
        avatarUrl:'https://blogs.bgsu.edu/ddikema/files/2011/11/221244070_Jack_Black_xlarge.jpeg'
    }]; //issue.userIds.map(userId => projectUsers.find(user => user.id === userId));
    let provided={};
    let snapshot={
        isDragging:false,
        isDropAnimating:false
    };
    let isBeingDragged = false;
</script>
<Draggable 
    {flag} 
    isBeingDragged={(cond)=>isBeingDragged=cond} 
    {key} 
    draggableId={issue.id.toString()} 
    {index}
>
    <IssueLink
        to={`${match.url}/issues/${issue.id}`}
        ref={provided.innerRef}
        data-testid="list-issue"
    >
        <StyledIssue 
            {isBeingDragged}
        >
            <IssueTitle>
                {issue.title}
            </IssueTitle>
            <IssueBottom>
                <div>
                    <IssueTypeIcon 
                        type={issue.type} 
                    />
                    <IssuePriorityIcon 
                        priority={issue.priority} 
                        top={-1} 
                        left={4} 
                    />
                </div>
                <Assignees>
                    {#each assignees as user}
                        <AssigneeAvatar
                            key={user.id}
                            size={24}
                            avatarUrl={user.avatarUrl}
                            name={user.name}
                        />
                    {/each}
                </Assignees>
            </IssueBottom>
        </StyledIssue>
    </IssueLink>
</Draggable>