<script>
//import moment from 'moment';
let moment=()=>{};
//import { Droppable } from 'react-beautiful-dnd';
import { intersection } from 'lodash';
import { Droppable } from '../../../../../shared/components/DragAndDrop';
import { IssueStatusCopy } from '../../../../../shared/constants/issues.js';
import {
    StyledList,
    Title,
    IssuesCount,
    Issues } from './Styles';
import Issue from './Issue';
export let status;
export let project;
export let isActive;
export let onDrop;
export let onDragOver;
export let onDragOut;
// export let filters;
// export let currentUserId;
let provided={};
const filterIssues = (projectIssues, filters, currentUserId) => {
    const { searchTerm, userIds, myOnly, recent } = filters;
    let issues = projectIssues;
    if (searchTerm) {
        issues = issues.filter(issue => issue.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (userIds.length > 0) {
        issues = issues.filter(issue => intersection(issue.userIds, userIds).length > 0);
    }
    if (myOnly && currentUserId) {
        issues = issues.filter(issue => issue.userIds.includes(currentUserId));
    }
    if (recent) {
        issues = issues.filter(issue => moment(issue.updatedAt).isAfter(moment().subtract(3, 'days')));
    }
    return issues;
};
const getSortedListIssues = (issues, status) =>
    issues.filter(issue => issue.status === status)
        .sort((a, b) => a.listPosition - b.listPosition);
const formatIssuesCount = (allListIssues, filteredListIssues) => {
    if (allListIssues.length !== filteredListIssues.length) {
        return `${filteredListIssues.length} of ${allListIssues.length}`;
    }
    return allListIssues.length;
};
let filteredIssues = project.issues;
$: filteredIssues = project.issues;//filterIssues(project.issues, filters, currentUserId);
let filteredListIssues = getSortedListIssues(filteredIssues, status);
$: filteredListIssues = getSortedListIssues(filteredIssues, status);
const allListIssues = [];//getSortedListIssues(project.issues, status);
</script>
<StyledList>
    <Title>
        {`${IssueStatusCopy[status]} `}
        <IssuesCount>
            {formatIssuesCount(allListIssues, filteredListIssues)}
        </IssuesCount>
    </Title>
    <Droppable 
        {isActive}
        on:drop={onDrop}
        on:dragover={onDragOver}
        on:dragout={onDragOut}
        key={status} 
        id={status}
    >
        <Issues
            {...$$restProps}
            ref={provided.innerRef}
            data-testid={`board-list:${status}`}
        >
            {#each filteredListIssues 
                as issue, index (issue.id)}
                <Issue 
                    key={issue.id} 
                    projectUsers={project.users} 
                    issue={issue} 
                    index={index} 
                />
            {/each}
        </Issues>
    </Droppable>
</StyledList>