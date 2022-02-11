<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let 
    arias = [], 
    className: string = undefined, 
    switchH = 'before:h-6',
    switchW = 'before:w-12',
    switcherH = 'after:h-5',
    switcherW = 'after:w-5',
    left = 'after:left-9',
    top = 'after:top-1',
    toggle: HTMLSpanElement,
    translate = 'after:translate-x-6'
  
  export { className as class }
  export let 
    bg_class: string = undefined,
    bg_off_class: string = undefined, 
    bg_on_class: string = undefined,
    label: string,
    label_class: string = undefined,
    size = 'md',
    state_class: string = undefined,
    state_off: string = undefined,
    state_on: string = undefined,
    switcher_class: string = undefined,
    switcher_off_class: string = undefined,
    switcher_on_class: string = undefined,
    value = false;

  const space = / /ig;
  let id: string = label.replace(space, '_').toLowerCase()

  const Toggle = () => {
    let checked = toggle.getAttribute("aria-checked") === "true"
    value = !checked
    toggle.setAttribute("aria-checked", value.toString())
    console.log('clicked')
    dispatch('click')
  }
  const KeyUp = (e) => {
    if (e.key === 'Enter') {
      Toggle()
    } else if (e.target.nodeName === 'LABEL' && e.key === ' ') {
      Toggle()
    }
  }

  switch (size) {
    case 'sm':
      translate = 'after:translate-x-4'
      switchH = 'before:h-4'
      switchW = 'before:w-8'
      switcherH = 'after:h-3'
      switcherW = 'after:w-3'
      break;
    case 'lg':
      translate = 'after:translate-x-8'
      switchH = 'before:h-8'
      switchW = 'before:w-16'
      switcherH = 'after:h-7'
      switcherW = 'after:w-7'
      break;
  }

  arias['aria-checked'] = value
</script>

<style>
  .twelveui-switch-ring input:focus + span:before {
    outline: 2px solid transparent;
    outline-offset: 2px;
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }
  .twelveui-align-bottom {
    vertical-align: bottom;
  }
  .twelveui-bg-gray-300 {
    --tw-bg-opacity: 1;
    background-color: rgb(209 213 219 / var(--tw-bg-opacity));
  }
  .twelveui-bg-gray-400 {
    --tw-bg-opacity: 1;
    background-color: rgb(156 163 175 / var(--tw-bg-opacity));
  }
  .after\:twelveui-bg-black::after {
    content: var(--tw-content);
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity));
  }
  .before\:twelveui-bg-white::before {
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
  .twelveui-m-0\.5 {
    margin: 0.125rem;
  }
  .twelveui-mb-1 {
    margin-bottom: 0.25rem;
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
  .twelveui-translate-x-4 {
    --tw-translate-x: 1rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  .twelveui-translate-x-6 {
    --tw-translate-x: 1.5rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  .twelveui-translate-x-8 {
    --tw-translate-x: 2rem;
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

<label on:keyup|self={KeyUp} on:click|self={Toggle} class="twelveui-switch-ring block relative {label_class}" for={id}>
  {label}
  <input bind:this={toggle} on:keyup={KeyUp} on:click={Toggle} type="checkbox" role="switch" {id} {...arias} class="cursor-pointer h-full w-full absolute top-0 left-0 opacity-[.0001]" />
  <span 
    aria-hidden="true"
    class="{switchW} {switchH} {switcherW} {switcherH} {top} {left} {bg_class} {switcher_class} {value ? `${translate} ${bg_on_class} ${switcher_on_class}` : `after:translate-x-0 ${bg_off_class} ${switcher_off_class}`} flex relative after:rounded-full after:absolute before:box-content before:border-2 before:border-gray-600 before:rounded-full before:outline-none {className}"
  ></span>
  {#if state_on || state_off}
  <span aria-hidden="true" class="{state_class}">{value ? state_on : state_off}</span>
  {/if}
</label>