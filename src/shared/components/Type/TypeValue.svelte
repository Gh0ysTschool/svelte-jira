<script>
    import TypeButton from './TypeButton.svelte';
    import { IssueTypeIcon } from '../../../shared/components';
    import {IssueTypeCopy} from '../../../shared/constants/issues.js';
    
    export let key, id;
</script>

      <TypeButton variant="empty">
          <IssueTypeIcon type={key} />
        {`${IssueTypeCopy[key]}-${id}`}
      </TypeButton>