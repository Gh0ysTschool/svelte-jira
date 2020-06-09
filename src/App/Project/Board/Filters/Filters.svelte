<script>
import { xor } from 'lodash';
import {
    StyledFilters,
    StyledInput,
    Avatars,
    AvatarIsActiveBorder,
    StyledAvatar,
    StyledButton,
    ClearAll } from './Styles'
export let projectUsers;
export let userIds=[];
export let defaultFilters;
export let filters={userIds:[]};
export let mergeFilters;
let { searchTerm, myOnly, recent } = filters;
let areFiltersCleared 
    =  userIds.length === 0
    && !searchTerm 
    && !recent 
    && !myOnly;
</script>
<StyledFilters data-testid="board-filters">
      <StyledInput
        icon="search"
        value={searchTerm}
        onChange={value => mergeFilters({ searchTerm: value })}
      />
      <Avatars>
        {#each projectUsers as user}
            <AvatarIsActiveBorder 
                key={user.id} 
                isActive={userIds.includes(user.id)}>
                <StyledAvatar
                    avatarUrl={user.avatarUrl}
                    name={user.name}
                    onClick={() => mergeFilters({
                       userIds: xor(userIds, [user.id]
                    )})}
                />
            </AvatarIsActiveBorder>
        {/each}
      </Avatars>
      <StyledButton
        variant="empty"
        isActive={myOnly}
        onClick={() => mergeFilters({ myOnly: !myOnly })}
      >
          Only My Issues
      </StyledButton>
      <StyledButton
        variant="empty"
        isActive={recent}
        onClick={() => mergeFilters({ recent: !recent })}
      >
          Recently Updated
      </StyledButton>
      {#if (!areFiltersCleared)}
          <ClearAll 
              onClick={() => mergeFilters(defaultFilters)}
          >
              Clear all
          </ClearAll>
      {/if}
    </StyledFilters>