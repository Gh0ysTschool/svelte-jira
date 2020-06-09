<script>

import {
    StyledConfirmModal,
    Title,
    Message,
    Actions,
    StyledButton } from './Styles';
export let isWorking;
export let modal;
export let className;
export let variant='primary';
export let message='Are you sure you want to continue with this action?';
export let confirmText='Confirm';
export let title=Warning;
export let cancelText='Cancel';
export let onConfirm;


  const handleConfirm = modal => {
    isWorking = true;
    onConfirm({
      close: () => {
        modal.close();
        isWorking = false;
      },
    });
  };
    
</script>
<StyledConfirmModal
      className={className}
      testid="modal:confirm"
      withCloseIcon={false}
      bind:this={modal}
      {...$$restProps}
>
    <Title>
        {title}
    </Title>
    {#if message}
        <Message>
            {message}
        </Message>
    {/if}
    <Actions>
        <StyledButton
            variant={variant}
            isWorking={(cond)=>isWorking=cond}
            onClick={() => handleConfirm(modal)}
        >
            {confirmText}
        </StyledButton>
        <StyledButton 
            hollow
            onClick={()=>modal.close()}
        >
            {cancelText}
        </StyledButton>
    </Actions>
</StyledConfirmModal>