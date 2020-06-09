<!--#StyledConfirmModal.svelte-->
<script>
    import {Modal} from '../../../../../../shared/components';
</script>
<style>
    div {
        padding: 35px 40px 40px;
    }
</style>
<div>
    <Modal {...$$props}>
        <slot/>
    </Modal>
</div>
