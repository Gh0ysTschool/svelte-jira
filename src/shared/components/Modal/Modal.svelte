
<script>
    // import useOnOutsideClick from '../../../shared/hooks/onOutsideClick';
    // import useOnEscapeKeyDown from '../../../shared/hooks/onEscapeKeyDown';
    let useOnEscapeKeyDown = ()=>{}, useOnOutsideClick = ()=>{};

    import ScrollOverlay from './ScrollOverlay';
    import ClickableOverlay from './ClickableOverlay';
    import StyledModal from './StyledModal'; 
    import CloseIcon from './CloseIcon';

    export let className, testid='modal', variant='center', 
               width=600, withCloseIcon=true, isOpen, 
               tellParentToClose;
    let clickableOverlayRef, modalRef, isControlled=true;
    //$: isControlled = typeof IsOpen === 'boolean';
   // $: isOpen = isControlled ? IsOpen : true;

    const closeModal = () => {
        if (isControlled) tellParentToClose();
        isOpen=false;
    }
    $: document.body.style.overflow = (isOpen) ? 'visible' : 'hidden' ;
    useOnOutsideClick(modalRef, isOpen, closeModal, clickableOverlayRef);
    useOnEscapeKeyDown(isOpen, closeModal);

</script>
{#if (isOpen)}
    <ScrollOverlay>
        <ClickableOverlay variant={variant} bind:this={clickableOverlayRef}>
            <StyledModal
                className={className}
                variant={variant}
                width={width}
                data-testid={testid}
                bind:this={modalRef}
            >
                {#if (withCloseIcon)}
                    <CloseIcon type="close" variant={variant} onClick={closeModal} />
                {/if}
                <slot/>
            </StyledModal>
        </ClickableOverlay>
    </ScrollOverlay>
{/if}

