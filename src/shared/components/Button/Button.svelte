<script>
    import { Icon } from '../../../shared/components';
    import StyledButton from './StyledButton.svelte'; 
    import StyledSpinner from './StyledSpinner.svelte';
    import Text from './Text.svelte';
    export let children, variant='secondary', icon, iconSize, disabled, isWorking, onClick;
    const handleClick = () => {
        if (!disabled && !isWorking) {
            onClick();
        }
    };
    const getIconColor = variant =>
  ['secondary', 'empty'].includes(variant) ? '#42526E' : '#fff';
</script>
<StyledButton
    {...$$props}
    onClick={handleClick}
    {variant}
    disabled={disabled || isWorking}
    {isWorking}
    iconOnly={!children}
    >
    {#if (isWorking)}
        <StyledSpinner size={26} color={getIconColor(variant)} />
    {:else if (icon && typeof icon === 'string')}
        <Icon type={icon} size={iconSize} color={getIconColor(variant)} />
    {/if}
        <Text withPadding={isWorking || icon}><slot/></Text>
</StyledButton>