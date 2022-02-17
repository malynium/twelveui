<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import './styles.css'

  const dispatch = createEventDispatcher()

  let 
    className = '', 
    switchH = 'twelveui-h-6',
    switchW = 'twelveui-w-12',
    switcherH = 'twelveui-h-5',
    switcherW = 'twelveui-w-5',
    left = 'twelveui-left-0.5',
    top = 'twelveui-top-0.5',
    toggle: HTMLInputElement,
    translate = 'twelveui-translate-x-6'
  
  export { className as class }
  export let 
    bg_class = '',
    bg_off_class = '', 
    bg_on_class = '',
    checked = false,
    label: string,
    size = 'md',
    state_class = '',
    state_off: string = undefined,
    state_on: string = undefined,
    switch_class = '',
    switcher_class = '!!twelveui-bg-black',
    switcher_off_class= '',
    switcher_on_class = '',
    value: any;

  const space = / /ig;
  let id: string = label.replace(space, '_').toLowerCase()

  const Toggle = () => {
    checked = !(toggle.getAttribute("aria-checked") === "true")
    toggle.setAttribute("aria-checked", checked.toString())
    checked ? toggle.checked = true : toggle.checked = false
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
      translate = 'twelveui-translate-x-4'
      switchH = 'twelveui-h-4'
      switchW = 'twelveui-w-8'
      switcherH = 'twelveui-h-3'
      switcherW = 'twelveui-w-3'
      break;
    case 'lg':
      translate = 'twelveui-translate-x-8'
      switchH = 'twelveui-h-8'
      switchW = 'twelveui-w-16'
      switcherH = 'twelveui-h-7'
      switcherW = 'twelveui-w-7'
      break;
  }
</script>

<label on:keyup|self={KeyUp} on:click|self={Toggle} class="twelveui-relative {className}">
  {label}
  <input bind:this={toggle} on:keyup={KeyUp} on:click={Toggle} {value} type="checkbox" role="switch" {id} aria-checked="{checked}" class="twelveui-switch-input twelveui-cursor-pointer twelveui-h-full twelveui-w-full twelveui-absolute twelveui-top-0 twelveui-left-0 twelveui-opacity-[.0001]" />
  <span 
    aria-hidden="true"
    id="twelveui-switch"
    class="{switchW} {switchH} {bg_class} {checked ? `${bg_on_class}` : `${bg_off_class}`} twelveui-flex twelveui-relative twelveui-box-content twelveui-border-2 twelveui-border-gray-600 twelveui-rounded-full twelveui-outline-none {switch_class}">
    <span
      class="{switcherW} {switcherH} {top} {left} {switcher_class} {checked ? `${translate} ${switcher_on_class}` : `twelveui-translate-x-0 ${switcher_off_class}`} twelveui-transition twelveui-ease-in-out twelveui-duration-300 twelveui-rounded-full twelveui-absolute">
    </span>
  </span>
  {#if state_on || state_off}
  <span aria-hidden="true" class="{state_class}">{checked ? state_on : state_off}</span>
  {/if}
</label>