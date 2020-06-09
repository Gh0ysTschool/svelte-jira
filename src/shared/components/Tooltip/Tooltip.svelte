<script>
import StyledTooltip from './StyledTooltip.svelte';
import {afterUpdate} from 'svelte';
export let 
    className,
    left,
    width,
    toggle;
</script>
<StyledTooltip {toggle} {className} {width} {left}>
      <slot ></slot>
</StyledTooltip>