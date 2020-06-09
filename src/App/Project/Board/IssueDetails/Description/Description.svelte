<script>
//import { getTextContentsFromHtmlString } from '../../../../../shared/utils/browser';
import { 
    Actions, 
    Title, 
    EmptyLabel } from './Styles';
import TextEditedContent from './TextEditedContent';
import { TextEditor, Button } from '../../../../../shared/components';
export let issue={},updateIssue;
let setEditing =()=>{};
let description=issue.description || 'placeholder descriptions', setDescription,isEditing, setIsEditing,isDescriptionEmpty;
//  const [description, setDescription] = useState(issue.description);
//   const [isEditing, setEditing] = useState(false);

  const handleUpdate = () => {
    setEditing(false);
    updateIssue({ description });
  };
//   const isDescriptionEmpty = getTextContentsFromHtmlString(description).trim().length === 0;
</script>
<Title>
    Description
</Title>
{#if isEditing}
    <TextEditor
        placeholder="Describe the issue"
        defaultValue={description}
        onChange={setDescription}
    />
    <Actions>
        <Button 
            variant="primary" 
            onClick={handleUpdate}
        >
            Save
        </Button>
        <Button 
            variant="empty" 
            onClick={() => setEditing(false)}
        >
            Cancel
        </Button>
    </Actions>
{:else if isDescriptionEmpty}
    <EmptyLabel 
        onClick={() => setEditing(true)}
    >
        Add a description...
    </EmptyLabel>
{:else}
    <TextEditedContent 
        content={description} 
        onClick={() => setEditing(true)} 
    />
{/if}