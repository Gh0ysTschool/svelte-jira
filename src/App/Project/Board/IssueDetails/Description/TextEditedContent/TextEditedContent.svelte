<script>
    import { Content } from './Styles';
    export let content;
</script>
<svelte:head>
    <link 
        rel="stylesheet" 
        href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
    >
</svelte:head>
<div 
    class="ql-snow"
>
    <Content 
        className="ql-editor"
    >
        {content}
    </Content>
</div>