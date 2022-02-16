<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import './styles.css'

  const dispatch = createEventDispatcher()

  let 
    arias = [], 
    className = '', 
    switchH = 'h-6',
    switchW = 'w-12',
    switcherH = 'h-5',
    switcherW = 'w-5',
    left = 'left-0.5',
    top = 'top-0.5',
    toggle: HTMLSpanElement,
    translate = 'translate-x-6'
  
  export { className as class }
  export let 
    bg_class = '',
    bg_off_class = '', 
    bg_on_class = '',
    label: string,
    label_class = '',
    size = 'md',
    state_class = '',
    state_off: string = undefined,
    state_on: string = undefined,
    switcher_class = '!!twelveui-bg-black',
    switcher_off_class= '',
    switcher_on_class = '',
    checked = false;

  const space = / /ig;
  let id: string = label.replace(space, '_').toLowerCase()

  const Toggle = () => {
    checked = !(toggle.getAttribute("aria-checked") === "true")
    toggle.setAttribute("aria-checked", checked.toString())
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
      translate = 'translate-x-4'
      switchH = 'h-4'
      switchW = 'w-8'
      switcherH = 'h-3'
      switcherW = 'w-3'
      break;
    case 'lg':
      translate = 'translate-x-8'
      switchH = 'h-8'
      switchW = 'w-16'
      switcherH = 'h-7'
      switcherW = 'w-7'
      break;
  }

  arias['aria-checked'] = checked
</script>

<label on:keyup|self={KeyUp} on:click|self={Toggle} class="twelveui-switch-ring relative {label_class}" for={id}>
  {label}
  <input bind:this={toggle} on:keyup={KeyUp} on:click={Toggle} type="checkbox" role="switch" {id} {...arias} class="cursor-pointer h-full w-full absolute top-0 left-0 opacity-[.0001]" />
  <span aria-hidden="true"
    class="{switchW} {switchH} {bg_class} {checked ? `${bg_on_class}` : `${bg_off_class}`} flex relative box-content border-2 border-gray-600 rounded-full outline-none {className}">
    <span
      class="{switcherW} {switcherH} {top} {left} {switcher_class} {checked ? `${translate} ${switcher_on_class}` : `translate-x-0 ${switcher_off_class}`} transition ease-in-out duration-300 rounded-full absolute">
    </span>
  </span>
  {#if state_on || state_off}
  <span aria-hidden="true" class="{state_class}">{checked ? state_on : state_off}</span>
  {/if}
</label>