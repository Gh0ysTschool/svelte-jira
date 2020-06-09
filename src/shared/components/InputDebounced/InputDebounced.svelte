<script>
import { debounce } from 'lodash';

import { Input } from '../../../shared/components';
export let value, onChange;
let setValue =(val)=>value=val;
let isControlled;
$: isControlled = value !== undefined;

const handleChange = (newValue)=>debounce(newValue => onChange(newValue), 500);

</script>
<Input
    {...$$restProps}
    value={isControlled ? value : undefined}
    onChange={newValue => {
      setValue(newValue);
      handleChange(newValue);
    }}
/>