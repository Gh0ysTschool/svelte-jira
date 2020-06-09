<script>
    import { TextArea } from '../../../../../../shared/components';
    import { BodyFormActions, FormButton } from './Styles';
    export let value;
    export let onChange;
    export let isWorking;
    export let onSubmit;
    export let onCancel;
    export let TextAreaRef;
    const handleSubmit = () => { 
        if ( TextAreaRef.value.trim() ) onSubmit();
    }
</script>

<TextArea
    autoFocus
    placeholder="Add a comment..."
    value={value}
    onChange={onChange}
    bind:this={TextAreaRef}
/>
<BodyFormActions>
    <FormButton 
        variant="primary" 
        isWorking={isWorking} 
        onClick={handleSubmit}
    >
        Save
    </FormButton>
    <FormButton 
        variant="empty" 
        onClick={onCancel}
    >
        Cancel
    </FormButton>
</BodyFormActions>