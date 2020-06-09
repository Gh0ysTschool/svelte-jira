<script>
import api from '../../../../../../shared/api';
// import toast from '../../../../../../shared/utils/toast';
// import { formatDateTimeConversational } from '../../../../../../shared/utils/dateTime';
let formatDateTimeConversational = (e)=>e;

import BodyForm from '../BodyForm';
import {
    StyledComment,
    UserAvatar,
    Content,
    Username,
    CreatedAt,
    Body,
    EditLink,
    DeleteLink } from './Styles';
import ConfirmModal from '../../ConfirmModal';
export let comment;
export let fetchIssue;
export let modal;
export let isFormOpen;
export let setFormOpen;
export let isUpdating,setUpdating;
export let body;
export let setBody;
$: body = comment.body;

  const handleCommentDelete = async () => {
    try {
      await api.delete(`/comments/${comment.id}`);
      await fetchIssue();
    } catch (error) {
      toast.error(error);
    }
  };

  const handleCommentUpdate = async () => {
    try {
      setUpdating(true);
      await api.put(`/comments/${comment.id}`, { body });
      await fetchIssue();
      setUpdating(false);
      setFormOpen(false);
    } catch (error) {
      toast.error(error);
    }
  };
</script>
 <StyledComment data-testid="issue-comment">
    <UserAvatar 
        name={comment.user.name} 
        avatarUrl={comment.user.avatarUrl} />
    <Content>
        <Username>
            {comment.user.name}
        </Username>
        <CreatedAt>
            {formatDateTimeConversational(comment.createdAt)}
        </CreatedAt>
        {#if isFormOpen} 
            <BodyForm
                value={body}
                onChange={setBody}
                isWorking={isUpdating}
                onSubmit={handleCommentUpdate}
                onCancel={() => setFormOpen(false)}
            />
        {:else}
            <Body>
                {comment.body}
            </Body>
            <EditLink 
                onClick={() => setFormOpen(true)}
            >
                Edit
            </EditLink>
            
            <DeleteLink 
                onClick={()=>modal.open()}
            >
                Delete
                <ConfirmModal
                    title="Are you sure you want to delete this comment?"
                    message="Once you delete, it's gone for good."
                    confirmText="Delete comment"
                    onConfirm={handleCommentDelete}
                    bind:this={modal}
                    isOpen={false}
                />
            </DeleteLink>
        {/if}
    </Content>
</StyledComment>