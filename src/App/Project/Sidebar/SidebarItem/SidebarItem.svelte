<script>
    import { Link as NavLink } from 'svelte-routing';
    import { 
        LinkItem, 
        LinkText, 
        NotImplemented } from './Styles';
    import {Icon} from '../../../../shared/components';
    export let match, text, iconType, path;
    let isImplemented = !!path;
</script>
<LinkItem {...$$restProps}>
    <Icon 
        type={iconType}
    />
    <LinkText>
        {text}
    </LinkText>
    {#if (!isImplemented)}
        <NotImplemented>
            Not implemented
        </NotImplemented>
    {:else}
        <NavLink 
            exact={true} 
            to={`${match.path}${path}`}
        />
    {/if}
</LinkItem>