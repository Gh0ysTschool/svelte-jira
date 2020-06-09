<script>
    //import { sortByNewest } from '../../../../../shared/utils/javascript';
    let sortByNewest =(comments)=>comments;
    import { Title, StyledComments } from './Styles';
    import Create from './Create';
    import Comment from './Comment';
    export let issue;
    export let fetchIssue;
</script>
<StyledComments>
    <Title>
        Comments
    </Title>
    <Create 
        issueId={issue.id} 
        {fetchIssue} 
    />
    {#each sortByNewest(issue.comments, 'createdAt') as comment}
        <Comment 
            key={comment.id} 
            {comment} 
            {fetchIssue}
        />
    {/each}
</StyledComments>