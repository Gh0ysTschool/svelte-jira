<script>
    import { KeyCodes } from '../../../../../../../shared/constants/keyCodes.js';
    //import { isFocusedElementEditable } from '../../../../../../../shared/utils/browser';
    let isFocusedElementEditable=()=>true;
    import { Tip, TipLetter } from'./Styles';
    import { onMount, onDestroy } from 'svelte';
    export let setFormOpen;
    const handleKeyDown = event => {
        if (!isFocusedElementEditable() 
        && event.keyCode === KeyCodes.M) {
            event.preventDefault();
            setFormOpen(true);
        }
    };
    onMount(()=>{
      document.addEventListener('keydown', handleKeyDown);
    })
    onDestroy(()=>{
        document.removeEventListener('keydown', handleKeyDown);
    })
</script>
<Tip>
    <strong>
        Pro tip:
    </strong>
    press
    <TipLetter>
        M
    </TipLetter>
    to comment
</Tip>