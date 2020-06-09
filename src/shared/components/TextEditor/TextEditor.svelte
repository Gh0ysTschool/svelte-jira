<!-- //not sure where to place quill.off, i want to bind editor.value to value, but i looks like there is some potentially messy two way binding that requires this to propogate text changes upward to parents. idk, requires some digging into how quill works and what this editors parent is. -->
<script>
import Quill from 'quill';

import EditorCont from './EditorCont.svelte';
import { onMount } from 'svelte';
export let className;
export let placeholder;
export let defaultValue;
// export let value;
export let onChange = () => {};
export let getEditor = () => {};
let editorContRef;
let editorRef;
let initialValueRef = defaultValue || '';
let quill;
const getHTMLValue = () => editorContRef.querySelector('.ql-editor').innerHTML;
const insertInitialValue = () => {
      quill.clipboard.dangerouslyPasteHTML(0, initialValueRef.current);
      quill.blur();
};
const handleContentsChange = () => {
    onChange(getHTMLValue());
};

onMount(()=>{
  
  quill = new Quill(editorRef, { placeholder, ...quillConfig });
    quill.on('text-change', handleContentsChange);
    
//insertInitialValue();
getEditor({ getValue: getHTMLValue });
    // () => {
    //     quill.off('text-change', handleContentsChange);
    //     quill = null;
    // };
})
const quillConfig = {
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      ['clean'],
    ],
  },
};
</script>

<svelte:head><link rel="stylesheet" href="https://cdn.quilljs.com/1.3.6/quill.snow.css"></svelte:head>
<EditorCont className={className} bind:this={editorContRef}>
    <div bind:this={editorRef} />
</EditorCont>