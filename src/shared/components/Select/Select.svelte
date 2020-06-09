<script>

//import useOnOutsideClick from '../../../shared/hooks/onOutsideClick';
let useOnOutsideClick=()=>{};
import { onMount } from 'svelte'
import { KeyCodes } from '../../../shared/constants/keyCodes.js';
import { Icon, Dropdown } from '../../../shared/components';
import StyledSelect from './StyledSelect.svelte';
import ValueContainer from './ValueContainer.svelte';
import ChevronIcon from './ChevronIcon.svelte';
import Placeholder from './Placeholder.svelte';
import ValueMulti from './ValueMulti.svelte';
import ValueMultiItem from './ValueMultiItem.svelte';
import AddMore from './AddMore.svelte';

export let className;
export let variant='normal';//['normal', 'empty'],
export let dropdownWidth;
export let extras;
export let name;
export let value;
export let defaultValue;
// export let placeholder='Select';
export let invalid=false;
export let options;
export let onChange;
export let onCreate;
export let isMulti=false;
export let withClearValue=true;
export let renderValue;
export let renderOption;

let stateValue = defaultValue || (isMulti ? [] : null);
let isDropdownOpen = false;
let searchValue = '';
let selectRef;
let inputRef;
let isControlled = value !== undefined;

//value = isControlled ? value : stateValue;

  const activateDropdown = () => {
    if (isDropdownOpen) {
      //inputRef.focus();
      isDropdownOpen=false;
    } else {
      isDropdownOpen=true;
    }
  };

  const deactivateDropdown = () => {
    isDropdownOpen=false;
    serachvalue='';
    selectRef.current.focus();
  };
onMount(()=>
    useOnOutsideClick(selectRef, isDropdownOpen, deactivateDropdown)
)
  

  const preserveValueType = newValue => {
    const areOptionValuesNumbers = options.some(option => typeof option.value === 'number');

    if (areOptionValuesNumbers) {
      if (isMulti) {
        return newValue.map(Number);
      }
      if (newValue) {
        return Number(newValue);
      }
    }
    return newValue;
  };

  const handleChange = newValue => {
    if (!isControlled) {
      stateValue = preserveValueType(newValue);
    }
    onChange(preserveValueType(newValue));
  };

  const removeOptionValue = optionValue => {
    handleChange(value.filter(val => val !== optionValue));
  };

  const handleFocusedSelectKeydown = event => {
    if (isDropdownOpen) return;

    if (event.keyCode === KeyCodes.ENTER) {
      event.preventDefault();
    }
    if (event.keyCode !== KeyCodes.ESCAPE && event.keyCode !== KeyCodes.TAB && !event.shiftKey) {
      isDropdownOpen=true;
    }
  };

  const getOption = optionValue => options.find(option => option.value === optionValue);
  const getOptionLabel = optionValue => (getOption(optionValue) || { label: '' }).label;
  let isValueEmpty;
  $:  isValueEmpty = isMulti ? !value.length : !getOption(value);
  // <!-- <svelte:component this={renderValue} removeOptionValue={()=>removeOptionValue(optionValue)} value={optionValue}/> -->
                    
</script>
<StyledSelect
    className={className}
    variant={variant}
    bind:this={selectRef}
    tabIndex="0"
    onKeyDown={handleFocusedSelectKeydown}
    invalid={invalid}
    onClick={activateDropdown}
>
    <ValueContainer
        variant={variant}
        data-testid={name ? `select:${name}` : 'select'}>
        {#if (isValueEmpty)}
            <!-- <Placeholder>{placeholder}</Placeholder> -->
            
              <svelte:component this={renderValue} key={value} isValue={true} {...extras}/>
        {:else if (!isMulti)}
              <svelte:component this={renderValue} key={value} isValue={true} {...extras}/>
            
        {:else}
            <ValueMulti variant={variant}>
                {#each value as optionValue}
                    {#if (renderValue)}
                        <svelte:component this={renderValue} key={optionValue} {...extras}/>
                       {:else}
                        <ValueMultiItem key={optionValue} onClick={() => removeOptionValue(optionValue)}>
                            {getOptionLabel(optionValue)}
                            <Icon type="close" size={14} />
                        </ValueMultiItem>
                    {/if}
                {/each}
                <AddMore>
                    <Icon type="plus" />
                    Add more
                </AddMore>
            </ValueMulti>
        {/if}
        {#if ((!isMulti || isValueEmpty) && variant !== 'empty')}
          <ChevronIcon type="chevron-down" top={1} />
        {/if}
    </ValueContainer>

    {#if (isDropdownOpen)}
        <Dropdown
            dropdownWidth={dropdownWidth}
            value={value}
            isValueEmpty={isValueEmpty}
            searchValue={searchValue}
            selectRef={selectRef}
            inputRef={inputRef}
            deactivateDropdown={deactivateDropdown}
            options={options}
            onChange={handleChange}
            onCreate={onCreate}
            isMulti={isMulti}
            withClearValue={withClearValue}
            renderOption={renderOption}
        />
    {/if}
</StyledSelect>
