<script>
    export let to, path;
    import { onMount } from  'svelte';
    let redirect = () => {
        if(window){
            if (window.location.href.match(new RegExp(path+'$')))
                window.location.replace(to);
            }
    }
    onMount(()=>{
        if(window){
            if (window.location.href.match(new RegExp(path+'$')))
                window.location.replace(to);
            }
    });
</script>
<svelte:window></svelte:window>