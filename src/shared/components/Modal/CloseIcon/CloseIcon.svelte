<!--#CloseIcon.svelte-->
<script>
  import {Icon} from '../../../../shared/components';
  export let variant='center', onClick;
</script>
<style>
    div {
        position: absolute;
        font-size: 25px;
        color: var(--color-textMedium);
        transition: all 0.1s;
        cursor: pointer;
        user-select: none;
    }
    div.aside {
        top: 10px;
        right: 12px;
        padding: 3px 5px 0px 5px;
        border-radius: 4px;
        
    }
    div.aside:hover {
        background: var(--color-backgroundLight);
    }
    div.center {
        top: 10px;
        right: -30px;
        width: 50px;
        height: 50px;
        padding-top: 10px;
        border-radius: 3px;
        text-align: center;
        background: #fff;
        border: 1px solid var(--color-borderLightes);
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    }
    div.center:hover {
        color: var(--color-primary);
    }
</style>
<div class:aside={variant=='aside'} class:center={variant=='center'} on:click|stopPropagation={onClick}>
<Icon {...$$restProps}><slot/></Icon>
</div>
