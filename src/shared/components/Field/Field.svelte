<script>
    import { uniqueId } from 'lodash';

    import { 
        Input, 
        Select, 
        TextArea, 
        TextEditor, 
        DatePicker } from '../../../shared/components';

    import StyledField from './StyledField.svelte';
    import FieldLabel from './FieldLabel.svelte';
    import FieldTip from './FieldTip.svelte';
    import FieldError from './FieldError.svelte';

    export let  className;
    export let  label;
    export let  tip;
    export let  error;
    export let  name;
    export let  type;

    let component = {
        'Input':Input,
        'Select':Select,
        'TextArea':TextArea,
        'TextEditor':TextEditor,
        'DatePicker':DatePicker,
    }[type];

    const fieldId = uniqueId('form-field-');

</script>
<StyledField
    className={className}
    hasLabel={!!label}
    data-testid={name ? `form-field:${name}` : 'form-field'}
>
    {#if (label)} 
        <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>
    {/if}
    <svelte:component this={component} id={fieldId} invalid={!!error} {name} {...$$restProps} />
    {#if (tip)}
        <FieldTip>{tip}</FieldTip>
    {/if}
    {#if (error)}
        <FieldError>{error}</FieldError>
    {/if}
</StyledField>