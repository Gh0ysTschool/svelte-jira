<!--#TypeIcon.svelte-->
<script>
    import { Icon } from '../../../shared/components';
    export let color, type;
</script>
<Icon {type} style={'color:var(--color-'+color+');'}><slot/></Icon>
