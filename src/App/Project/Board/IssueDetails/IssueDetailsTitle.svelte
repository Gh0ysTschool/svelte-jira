<script>
    import { KeyCodes } from '../../../../shared/constants/keyCodes.js';
    //import { is, generateErrors } from '../../../../shared/utils/validation';
    import { TitleTextarea, ErrorText } from './Styles';
    export let issue;
    export let updateIssue;

    const titleInputRef = {};//useRef();
      const [error, setError] = [null,()=>{}];//useState(null);

      const handleTitleChange = () => {
        setError(null);

        const title = '';//titleInputRef.current.value;
        if (title === issue.title) return;

        const errors = generateErrors({ title }, { title: [is.required(), is.maxLength(200)] });

        if (errors.title) {
          setError(errors.title);
        } else {
          updateIssue({ title });
        }
      };
</script>
<TitleTextarea
    minRows={1}
    placeholder="Short summary"
    defaultValue={issue.title}
    ref={titleInputRef}
    onBlur={handleTitleChange}
    onKeyDown={event => {
        if (event.keyCode === KeyCodes.ENTER) 
            event.target.blur();
    }}
/>
{#if error}
    <ErrorText>
        {error}
    </ErrorText>
{/if}