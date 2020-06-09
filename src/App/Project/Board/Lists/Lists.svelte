<script>
    import { DragDropContext } from '../../../../shared/components/DragAndDrop';
    //import useCurrentUser from '../../../../shared/hooks/currentUser';
    let useCurrentUser = ()=>{test:'test'};
    let moveItemWithinArray = ()=>{};
    let insertItemIntoArray = ()=>{};
    import api from '../../../../shared/api';
    import { IssueStatus } from '../../../../shared/constants/issues.js';
    import List from './List';
    import { StyledLists } from './Styles';
    export let project;
    export let filters;
    export let updateLocalProjectIssues; 
    //const { currentUserId } = useCurrentUser();
    const currentUserId = 0;
    const handleIssueDrop = ({ draggableId, destination, source }) => {
        if (!isPositionChanged(source, destination)) return;
        const issueId = Number(draggableId);
        api.optimisticUpdate(`/issues/${issueId}`, {
            updatedFields: {
            status: destination.droppableId,
            listPosition: calculateIssueListPosition(project.issues, destination, source, issueId),
            },
            currentFields: project.issues.find(({ id }) => id === issueId),
            setLocalData: fields => updateLocalProjectIssues(issueId, fields),
        });
    };

    const isPositionChanged = (destination, source) => {
        if (!destination) return false;
        const isSameList = destination.droppableId === source.droppableId;
        const isSamePosition = destination.index === source.index;
        return !isSameList || !isSamePosition;
    };

    const calculateIssueListPosition = (...args) => {
        const { prevIssue, nextIssue } = getAfterDropPrevNextIssue(...args);
        let position;
        if (!prevIssue && !nextIssue) {
            position = 1;
        } else if (!prevIssue) {
            position = nextIssue.listPosition - 1;
        } else if (!nextIssue) {
            position = prevIssue.listPosition + 1;
        } else {
            position = prevIssue.listPosition + (nextIssue.listPosition - prevIssue.listPosition) / 2;
        }
        return position;
    };

    const getAfterDropPrevNextIssue = (allIssues, destination, source, droppedIssueId) => {
        const beforeDropDestinationIssues = getSortedListIssues(allIssues, destination.droppableId);
        const droppedIssue = allIssues.find(issue => issue.id === droppedIssueId);
        const isSameList = destination.droppableId === source.droppableId;

        const afterDropDestinationIssues = isSameList
            ? moveItemWithinArray(beforeDropDestinationIssues, droppedIssue, destination.index)
            : insertItemIntoArray(beforeDropDestinationIssues, droppedIssue, destination.index);

        return {
            prevIssue: afterDropDestinationIssues[destination.index - 1],
            nextIssue: afterDropDestinationIssues[destination.index + 1],
        };
    };

    const getSortedListIssues = (issues, status) =>
        issues.filter(issue => issue.status === status)
            .sort((a, b) => a.listPosition - b.listPosition);

    let isActive=Object.values(IssueStatus)
        .reduce((acc,cur)=>({...acc,[cur]:false}),{});
    let onDrop=({ detail })=> {
        const { item } = detail;
        let newDZList = project.issues;
        let i = newDZList.find(i=>i.id==item.component.attributes.key.value);
        newDZList = newDZList.filter(ii => ii.id !== i.id);
        newDZList = [...newDZList,{...i, status:detail.to}];
        project.issues = newDZList;
        project=project;
    }
    let onDragOver=(data)=> {
        isActive[data.detail.dropZoneId] = true;
    }
    let onDragOut=(data) =>{
        isActive[data.detail.dropZoneId] = false;
    }
</script>
<DragDropContext 
    onDragEnd={handleIssueDrop}
>
    <StyledLists>
        {#each (Object.values(IssueStatus)) as status}
            <List
                isActive={isActive[status]}
                {onDrop}
                {onDragOver}
                {onDragOut}
                key={status}
                {status}
                {project}
                {filters}
                currentUserId={currentUserId}
            />
        {/each}
    </StyledLists>
</DragDropContext>