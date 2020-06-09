<script>

import { 
    AboutTooltip, 
    Icon } from '../../../shared/components';
import { 
    NavLeft, 
    LogoLink, 
    StyledLogo, 
    Item, 
    ItemText, 
    Bottom,
    Divider } from './Styles';
let about;
export let issueSearchModalOpen, issueCreateModalOpen;
let fade=false;
let toggle=false;
</script>
<NavLeft 
    on:mouseenter={()=>fade=true} 
    on:mouseleave={()=>fade=false}
>
    <LogoLink 
        to="./"
    >
        <StyledLogo 
            color="#fff" 
        />
    </LogoLink>
    <Divider />
    <Item 
        onClick={issueSearchModalOpen}
    >
        <Icon 
            type="search" 
            size={22} 
        />
        <ItemText>
            Search issues
        </ItemText>
    </Item>
    <Item 
        onClick={issueCreateModalOpen}
    >
        <Icon 
            type="plus" 
            size={27} 
        />
        <ItemText>
            Create Issue
        </ItemText>
    </Item>
    <Bottom> 
        <Item {...$$restProps}
            onClick={()=>{toggle=!toggle}} 
        >
            <Icon 
                type="help" 
                size={25} 
            />
            <ItemText >
                About
            </ItemText>
            <AboutTooltip
                {toggle}
                placement="right"
                left={218}
            /> 
        </Item>
    </Bottom>
</NavLeft>