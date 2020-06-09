<!--#SearchInput.svelte-->
<script>
import { InputDebounced } from '../../../../../shared/components';
export let style='';
</script>
<InputDebounced {...$$props} style={'margin-right: 18px;width: 160px;'+style}><slot/></InputDebounced>
