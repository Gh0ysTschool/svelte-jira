<script>
  
import StyledInput from './StyledInput.svelte';
import InputElement from './InputElement.svelte';
import { Icon } from '../../../shared/components';

export let className;
// export let value;
export let icon;
// export let invalid;
export let filter;
export let style='';

export let onChange = () => {};

const handleChange = event => {
  if (!filter || filter.test(event.target.value)) {
    onChange(event.target.value, event);
  }
};


</script>
<StyledInput {style} {className}>
    {#if (icon)}
      <Icon type={icon} size={15} top={8} left={5} />
    {/if}
    <InputElement {...$$props} onChange={handleChange} hasIcon={!!icon} />
</StyledInput>