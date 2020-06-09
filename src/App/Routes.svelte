<script>
    import { Router, Route } from "svelte-routing";
    import {Redirect,PageError} from '../shared/components';
    import Project from './Project';
    //import Authenticate from './Authenticate.svelte';
    // import { onMount } from 'svelte';
    // let setUrl = () => url = window.location.href;
    let url = ''
    // onMount(setUrl);
</script>
test
<Router >
    <!-- <Route path="authenticate" component={Authenticate} /> -->
    <Route path="project" component={Project} />
    <Route path="project/board" component={Project} />
    <Route path="project/board/*" component={Project} />
</Router>
<!-- <Route path="*" component={PageError} /> -->
    <Redirect path="./" to={url+'project'} />
    