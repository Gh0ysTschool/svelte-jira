<!--#Dropdown.svelte-->
<script>
    import { uniq } from 'lodash';
    import {KeyCodes} from '../../../shared/constants/keyCodes.js';

    import ClearIcon from './ClearIcon.svelte';
    // import  StyledDropdown from './StyledDropdown.svelte';
    import   DropdownInput from './DropdownInput.svelte';
    import    Options from './Options.svelte';
    import     Option from './Option.svelte';
    import      OptionsNoResults from './OptionsNoResults.svelte';
    import       SelectDropdown from './SelectDropdown.svelte';
        

    export let dropdownWidth;
    export let value;
    export let isValueEmpty;
    export let searchValue;
    export let setSearchValue;
    export let inputRef;
    // export let deactivateDropdown;
    export let options;
    export let onChange;
    // export let onCreate;
    export let isMulti;
    export let withClearValue;
    export let renderOption;
    // let active;
    let optionsRef;
    let selectOptionValue=()=>{};
    // let isCreatingOption = false;
    // const setFirstOptionAsActive = () => {
    //   const active = getActiveOptionNode();
    //   if (active) active.classList.remove(activeOptionClass);

    //   if (optionsRef.firstElementChild) {
    //     optionsRef.firstElementChild.classList.add(activeOptionClass);
    //   }
    // };
    // onMount(()=>{
    //     setFirstOptionAsActive();
    // })

    // const selectOptionValue = optionValue => {
    //   deactivateDropdown();
    //   if (isMulti) {
    //     onChange(uniq([...value, optionValue]));
    //   } else {
    //     onChange(optionValue);
    //   }
    // };

    // const createOption = newOptionLabel => {
    //   setCreatingOption(true);
    //   onCreate(newOptionLabel, createdOptionValue => {
    //     setCreatingOption(false);
    //     selectOptionValue(createdOptionValue);
    //   });
    // };

    const clearOptionValues = () => {
      inputRef.current.value = '';
      inputRef.current.focus();
      onChange(isMulti ? [] : null);
    };

    const handleInputKeyDown = event => {
      if (event.keyCode === KeyCodes.ESCAPE) {
        handleInputEscapeKeyDown(event);
      } else if (event.keyCode === KeyCodes.ENTER) {
        handleInputEnterKeyDown(event);
      } else if (event.keyCode === KeyCodes.ARROW_DOWN || event.keyCode === KeyCodes.ARROW_UP) {
        handleInputArrowUpOrDownKeyDown(event);
      }
    };

    // const handleInputEscapeKeyDown = event => {
    //   event.nativeEvent.stopImmediatePropagation();
    //   deactivateDropdown();
    // };

    // const handleInputEnterKeyDown = event => {
    //   event.preventDefault();

    //   active = getActiveOptionNode();
    //   if (!active) return;

    //   const optionValueToSelect = active.getAttribute('data-select-option-value');
    //   const optionLabelToCreate = active.getAttribute('data-create-option-label');

    //   if (optionValueToSelect) {
    //     selectOptionValue(optionValueToSelect);
    //   } else if (optionLabelToCreate) {
    //     createOption(optionLabelToCreate);
    //   }
    // };

    // const handleInputArrowUpOrDownKeyDown = event => {
    //   const active = getActiveOptionNode();
    //   if (!active) return;

    //   const options = optionsRef.current;
    //   const optionsHeight = options.getBoundingClientRect().height;
    //   const activeHeight = active.getBoundingClientRect().height;

    //   if (event.keyCode === KeyCodes.ARROW_DOWN) {
    //     if (options.lastElementChild === active) {
    //       active.classList.remove(activeOptionClass);
    //       options.firstElementChild.classList.add(activeOptionClass);
    //       options.scrollTop = 0;
    //     } else {
    //       active.classList.remove(activeOptionClass);
    //       active.nextElementSibling.classList.add(activeOptionClass);
    //       if (active.offsetTop > options.scrollTop + optionsHeight / 1.4) {
    //         options.scrollTop += activeHeight;
    //       }
    //     }
    //   } else if (event.keyCode === KeyCodes.ARROW_UP) {
    //     if (options.firstElementChild === active) {
    //       active.classList.remove(activeOptionClass);
    //       options.lastElementChild.classList.add(activeOptionClass);
    //       options.scrollTop = $options.scrollHeight;
    //     } else {
    //       active.classList.remove(activeOptionClass);
    //       active.previousElementSibling.classList.add(activeOptionClass);
    //       if (active.offsetTop < options.scrollTop + optionsHeight / 2.4) {
    //         options.scrollTop -= activeHeight;
    //       }
    //     }
    //   }
    // };

    const handleOptionMouseEnter = event => {
      const active = getActiveOptionNode();
      if (active) active.classList.remove(activeOptionClass);
      event.currentTarget.classList.add(activeOptionClass);
    };

    // const getActiveOptionNode = () => optionsRef.current.querySelector(`.${activeOptionClass}`);

    let optionsFilteredBySearchValue;
    $: optionsFilteredBySearchValue = options.filter(option =>
        option.label
        .toString()
        .toLowerCase()
        .includes(searchValue.toLowerCase()),
    );

    const removeSelectedOptionsMulti = opts => opts.filter(option => !value.includes(option.value));
    const removeSelectedOptionsSingle = opts => opts.filter(option => value !== option.value);

    let filteredOptions;
    $: filteredOptions = isMulti
      ? removeSelectedOptionsMulti(optionsFilteredBySearchValue)
      : removeSelectedOptionsSingle(optionsFilteredBySearchValue);

    // const isSearchValueInOptions = options.map(option => option.label).includes(searchValue);
    // const isOptionCreatable = onCreate && searchValue && !isSearchValueInOptions;

    // const activeOptionClass = 'jira-select-option-is-active';

</script>

<SelectDropdown width={dropdownWidth}>
<DropdownInput
    type="text"
    placeholder="Search"
    bind:this={inputRef}
    autoFocus
    onKeyDown={handleInputKeyDown}
    onChange={event => setSearchValue(event.target.value)}
/>
 {#if (!isValueEmpty && withClearValue)} 
    <ClearIcon type="close" on:click={clearOptionValues} />
{/if}
<Options bind:this={optionsRef}>
        {#each filteredOptions as option}
            <Option
                key={option.value}
                data-select-option-value={option.value}
                data-testid={`select-option:${option.label}`}
                onMouseEnter={handleOptionMouseEnter}
                on:click={() => selectOptionValue(option.value)}
            >
                {#if (renderOption)} 
                    <svelte:component this={renderOption} key={option.value}/>
                {:else}
                    {option.label}}
                {/if}
            </Option>
        {/each}
<!--         {#if (isOptionCreatable)}
            <Option
              data-create-option-label={searchValue}
              onMouseEnter={handleOptionMouseEnter}
              on:click={() => createOption(searchValue)}
            >
                {#if (isCreatingOption)} 
                    {`Creating "${searchValue}"...`}
                {:else}
                    {`Create "${searchValue}"`}
                {/if}
            </Option>
        {/if}-->
    </Options>
  
    <!--{#if (filteredOptions.length === 0)}
        <OptionsNoResults>No results</OptionsNoResults>
    {/if} -->
</SelectDropdown>