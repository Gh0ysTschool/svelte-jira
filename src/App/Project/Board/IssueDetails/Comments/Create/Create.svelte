<script>
  import api from '../../../../../../shared/api';
  //import useCurrentUser from '../../../../../../shared/hooks/currentUser';
  let useCurrentUser=()=>({currentUser:null});
  //import toast from '../../../../../../shared/utils/toast';
  let setBody=()=>{};
  let toast=null;
  import BodyForm from '../BodyForm';
  import ProTip from './ProTip';
  import { 
      StyledCreate, 
      UserAvatar, 
      Right, 
      FakeTextarea } from './Styles';
  export let issueId;
  export let fetchIssue;
  export let isFormOpen;
  export let isCreating;
  export let body='';
  const { currentUser } = useCurrentUser();

  const handleCommentCreate = async () => {
      try {
          setCreating(true);
          await api.post(
              `/comments`, 
              { body, issueId, userId: currentUser.id }
          );
          await fetchIssue();
          setFormOpen(false);
          setCreating(false);
          setBody('');
      } catch (error) {
          toast.error(error);
      }
  };

</script>
<StyledCreate>
    {#if currentUser}
        <UserAvatar 
            name={currentUser.name} 
            avatarUrl={currentUser.avatarUrl}
        />
    {/if}
    <Right>
        {#if isFormOpen}
            <BodyForm
                value={body}
                onChange={setBody}
                isWorking={isCreating}
                onSubmit={handleCommentCreate}
                onCancel={() => isFormOpen = false}
            />
        {:else}
            <FakeTextarea 
                onClick={() => isFormOpen = true}
            >
                Add a comment...
            </FakeTextarea>
            <ProTip 
                setFormOpen={(cond)=>isFormOpen = cond} 
            />
        {/if}
    </Right>
</StyledCreate>