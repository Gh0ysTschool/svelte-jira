<!--#FormElement.svelte-->
<script>
    import { Form } from 'sveltik';
</script>
<style>
    div {
        padding: 25px 40px 35px;
    }
</style>
<div>
    <Form>
        <slot>
        </slot>
    </Form>
</div>