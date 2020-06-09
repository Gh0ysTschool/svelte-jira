<!--#AssigneeAvatar.svelte-->
<script>
    import {Avatar} from '../../../../../../../shared/components';
</script>
<Avatar {...$$props} 
    style='margin-left: -2px;box-shadow: 0 0 0 2px #fff;'
>
    <slot/>
</Avatar>
