<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let 
    arias = [], 
    className: string = undefined, 
    divH = 'h-6',
    divW = 'w-12',
    spanH = 'h-5',
    spanW = 'w-5',
    toggle: HTMLDivElement,
    translate = 'translate-x-6'
  
  export { className as class }
  export let 
    bgOffClass = 'bg-gray-300', 
    bgOnClass = 'bg-gray-500', 
    on = false,
    id: string = undefined,
    label: string = undefined,
    labelClass: string = undefined,
    labelId: string = undefined,
    ringClass = 'ring-blue-700',
    size = 'md',
    tabindex = '0';

  const divClasses = className ? `rounded-full focus:outline-none focus:ring-2 ${className}` : `rounded-full focus:outline-none focus:ring-2`
  const spanClasses = 'ml-0.5 pointer-events-none inline-block rounded-full bg-white transform transition ease-in-out duration-200'
  const margin = size === 'sm' ? '' : 'mt-0.5'

  switch (size) {
    case 'sm':
      translate = 'translate-x-4'
      divW = 'w-8'
      divH = 'h-4'
      spanW = 'w-3'
      spanH = 'h-3'
      break;
    case 'lg':
      translate = 'translate-x-8'
      divW = 'w-16'
      divH = 'h-8'
      spanW = 'w-7'
      spanH = 'h-7'
      break;
  }
  
  const handleToggleClick = () => {
    let checked = toggle.getAttribute("aria-checked") === "true"
    on = !checked
    toggle.setAttribute("aria-checked", on.toString())
    dispatch('click')
  }
  
  arias['aria-labelledby'] = labelId
  arias['aria-checked'] = on

  const handleKeyUp = (e) => {
    if (e.key === ' ') {
      handleToggleClick()
    }
  }
</script>

<div bind:this={toggle} on:keyup={handleKeyUp} on:click={handleToggleClick} role="checkbox" {...arias} {id} {tabindex} class={`${divW} ${divH} ${ringClass} ${on ? bgOnClass : bgOffClass} ${divClasses}`}>
  <span aria-hidden="true" class={`${on ? translate : 'translate-x-0'} ${spanW} ${spanH} ${margin} ${spanClasses}`}/>
</div>
{#if label}
<label id={labelId} class={`${labelClass} inline-block align-bottom`} for={id}>{label}</label>
{/if}