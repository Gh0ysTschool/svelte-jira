<script>
    import api from '../../../../../shared/api';
    // import toast from '../../../../../shared/utils/toast';
    let toast=()=>{};
    import { Button } from '../../../../../shared/components';
    import ConfirmModal from '../ConfirmModal';
    export let issue, fetchProject,modalClose,modal;

    const handleIssueDelete = async () => {
        try {
          await api.delete(`/issues/${issue.id}`);
          await fetchProject();
          modalClose();
        } catch (error) {
          toast.error(error);
        }
    };
</script>
<Button 
    icon="trash" 
    iconSize={19} 
    variant="empty" 
    onClick={()=>modal.open()} 
/>
<ConfirmModal 
    bind:this={modal}
    title="Are you sure you want to delete this issue?"
    message="Once you delete, it's gone for good."
    confirmText="Delete issue"
    onConfirm={handleIssueDelete}
/>