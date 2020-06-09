<script>

import { ProjectCategoryCopy } from '../../../shared/constants/projects.js';
import {Link as NavLink} from 'svelte-routing'

import {
    ProjectAvatar,
    ProjectInfo,
    ProjectTexts,
    ProjectName,
    ProjectCategory,
    SidebarDivider,
    StyledSidebar } from './Styles';
import SidebarItem from './SidebarItem';
export let project = {name:'',category:''};
export let match = {path:window.location.href};

</script>

<StyledSidebar>
    <ProjectInfo>
        <ProjectAvatar />
        <ProjectTexts>
            <ProjectName>{project.name}</ProjectName>
            <ProjectCategory>{ProjectCategoryCopy[project.category]} project</ProjectCategory>
        </ProjectTexts>
    </ProjectInfo>
    <SidebarItem {match} text={'Kanban Board'} iconType={'board'} path={'/board'}/>
    <SidebarItem {match} text={'Project settings'} iconType={'settings'} path={'/settings'}/>
    <SidebarDivider />
    <SidebarItem {match} text={'Releases'} iconType={'shipping'}/>
    <SidebarItem {match} text={'Issues and filters'} iconType={'issues'}/>
    <SidebarItem {match} text={'Pages'} iconType={'page'}/>
    <SidebarItem {match} text={'Reports'} iconType={'reports'}/>
    <SidebarItem {match} text={'Components'} iconType={'component'}/>
</StyledSidebar>