<script>
// hmm? will have to impliment in svelte myself then. import TextareaAutoSize from 'react-textarea-autosize';

import StyledTextArea from './StyledTextarea.svelte';
import { default as TextareaAutoSize } from '../../../shared/components';

    export let className;
    export let invalid=false;
    // export let minRows=2;
    export let value;
    export let onChange=()=>{};

</script>
<StyledTextArea {className} {invalid}>
    <!-- <TextareaAutoSize
        {...$$props}
        onChange={event => onChange(event.target.value, event)}
        inputRef={undefined}
    /> -->
    <input bind:value={value} onChange={event => onChange(event.target.value, event)} />
</StyledTextArea>
