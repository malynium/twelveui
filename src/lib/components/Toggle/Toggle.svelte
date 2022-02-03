<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let 
    arias = [], 
    className: string = undefined, 
    divH = 'twelveui-h-6',
    divW = 'twelveui-w-12',
    spanH = 'twelveui-h-5',
    spanW = 'twelveui-w-5',
    toggle: HTMLDivElement,
    translate = 'twelveui-translate-x-6'
  
  export { className as class }
  export let 
    bgOffClass = 'twelveui-bg-gray-300', 
    bgOnClass = 'twelveui-bg-gray-500', 
    on = false,
    id: string = undefined,
    label: string = undefined,
    labelClass: string = undefined,
    labelId: string = undefined,
    ringClass = 'twelveui-ring-blue-700',
    size = 'md',
    tabindex = 0;

  const divClasses = className ? `twelveui-rounded-full focus:twelveui-outline-none focus:twelveui-ring-2 ${className}` : `twelveui-rounded-full focus:twelveui-outline-none focus:twelveui-ring-2`
  const spanClasses = 'twelveui-ml-0.5 twelveui-pointer-events-none twelveui-inline-block twelveui-rounded-full twelveui-bg-white twelveui-transform twelveui-transition twelveui-ease-in-out twelveui-duration-200'
  const margin = size === 'sm' ? 'twevleui-mb-1' : 'twelveui-mt-0.5'

  switch (size) {
    case 'sm':
      translate = 'translate-x-4'
      divW = 'twelveui-w-8'
      divH = 'twelveui-h-4'
      spanW = 'twelveui-w-3'
      spanH = 'twelveui-h-3'
      break;
    case 'lg':
      translate = 'translate-x-8'
      divW = 'twelveui-w-16'
      divH = 'twelveui-h-8'
      spanW = 'twelveui-w-7'
      spanH = 'twelveui-h-7'
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

<style>
  .twelveui-align-bottom {
    vertical-align: bottom;
  }
  .twelveui-bg-gray-300 {
    --tw-bg-opacity: 1;
    background-color: rgb(209 213 219 / var(--tw-bg-opacity));
  }
  .twelveui-bg-gray-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(107 114 128 / var(--tw-bg-opacity));
  }
  .twelveui-bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  .twelveui-duration-200 {
    transition-duration: 200ms;
  }
  .twelveui-ease-in-out {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  .twelveui-h-3 {
    height: 0.75rem;
  }
  .twelveui-h-4 {
    height: 1rem;
  }
  .twelveui-h-5 {
    height: 1.25rem;
  }
  .twelveui-h-6 {
    height: 1.5rem;
  }
  .twelveui-h-7 {
    height: 1.75rem;
  }
  .twelveui-h-8 {
    height: 2rem;
  }
  .twelveui-inline-block {
    display: inline-block;
  }
  .twevleui-mb-1 {
    margin-bottom: 0.25rem;
  }
  .twelveui-ml-0\.5 {
    margin-left: 0.125rem;
  }
  .twelveui-mt-0\.5 {
    margin-top: 0.125rem;
  }
  .twelveui-pointer-events-none {
    pointer-events: none;
  }
  .twelveui-ring-blue-700 {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(29 78 216 / var(--tw-ring-opacity));
  }
  .twelveui-rounded-full {
    border-radius: 9999px;
  }
  .twelveui-transform {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  .twelveui-transition {
    transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  .twelveui-translate-x-0 {
    --tw-translate-x: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  .twelveui-translate-x-6 {
    --tw-translate-x: 1.5rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  .twelveui-w-3 {
    width: 0.75rem;
  }
  .twelveui-w-5 {
    width: 1.25rem;
  }
  .twelveui-w-7 {
    width: 1.75rem;
  }
  .twelveui-w-8 {
    width: 2rem;
  }
  .twelveui-w-12 {
    width: 3rem;
  }
  .twelveui-w-16 {
    width: 4rem;
  }
  .focus\:twelveui-outline-none:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  .focus\:twelveui-ring-2:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }
</style>

<div bind:this={toggle} on:keyup={handleKeyUp} on:click={handleToggleClick} role="checkbox" {...arias} {id} {tabindex} class={`${divW} ${divH} ${ringClass} ${on ? bgOnClass : bgOffClass} ${divClasses}`}>
  <span aria-hidden="true" class={`${on ? translate : 'twelveui-translate-x-0'} ${spanW} ${spanH} ${margin} ${spanClasses}`}/>
</div>

{#if label}
<label id={labelId} class={labelClass} for={id}>{label}</label>
{/if}