<!--#LogoLink.svelte-->
<script>
    import {Link} from 'svelte-routing';
    let nv={style:''};
    $: nv.style = 'display: block; position: relative; left: 0; margin: 20px 0 10px; transition: left 0.1s;';
</script>

<Link {...$$props} 
    bind:this={nv}
>
    <slot/>
</Link>
