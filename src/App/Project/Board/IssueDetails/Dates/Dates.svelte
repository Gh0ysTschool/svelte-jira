<script>
    //import { formatDateTimeConversational } from '../../../../../shared/utils/dateTime';
    let formatDateTimeConversational = (e)=>e;
    import { StyledDate } from './Styles';
    export let issue;
</script>
<StyledDate>
    <div>
        Created at 
        {formatDateTimeConversational(issue.createdAt)}
    </div>
    <div>
        Updated at 
        {formatDateTimeConversational(issue.updatedAt)}
    </div>
</StyledDate>