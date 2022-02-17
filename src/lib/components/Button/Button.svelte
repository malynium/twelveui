<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { Icon } from '../../index.d'

  const dispatch = createEventDispatcher()
  let 
    anchor: HTMLAnchorElement, 
    arias = [], 
    className = '', 
    currentIcon: new (options: any) => Icon
  ;
  export { className as class }
  export let 
    label = '', 
    labelledBy = '', 
    altIcon: new (options: any) => Icon = null,
    disabled = false, 
    href: string = undefined, 
    icon: new (options: any) => Icon = null, 
    icon_class = '', 
    id = 'button', 
    left = false, 
    name = 'button', 
    solid = false, 
    tabindex = 0, 
    target = '_self', 
    pressed = false, 
    pressedClass = '', 
    text = '', 
    type = 'button', 
    value = ''
  ;
  currentIcon = icon ?? null
  
  const layoutClasses = left ? `inline-flex justify-between items-center flex-row-reverse` : `inline-flex justify-between items-center`
  const combinedClasses = className ? `hover:cursor-pointer focus:outline-none focus:ring-2 ${layoutClasses} ${className}` : `hover:cursor-pointer focus:outline-none focus:ring-2 ${layoutClasses}`
  const handleButtonClick = (e) => {
    if (altIcon) {
      if (currentIcon === icon) {
        currentIcon = altIcon
      } else {
        currentIcon = icon
      }
    }
    dispatch('click')
  }
  const handleAnchorClick = (e) => {
    if (altIcon) {
      if (currentIcon === icon) {
        currentIcon = altIcon
      } else {
        currentIcon = icon
      }
    }
    if (pressedClass) {
      pressed = !pressed
      pressed ? anchor.classList.remove(pressedClass) : anchor.classList.add(pressedClass)
    }
    dispatch('click')
  }

  if (label) arias['aria-label'] = label
  if (labelledBy) arias['aria-labelledby'] = labelledBy
  if (pressed) arias['aria-pressed'] = pressed
</script>

{#if href}
  <a role="button" bind:this={anchor} {...arias} {target} {tabindex} {id} class={combinedClasses} {href}
    on:click|self|stopPropagation={handleAnchorClick} 
    on:dblclick 
    on:focus
    on:keyup 
    on:mousedown 
    on:mouseover 
    on:submit>
    {text}
    <slot />
    {#if icon}
      <i 
        on:click|stopPropagation={handleAnchorClick} 
        class='flex items-center'>
        <svelte:component {solid} class={icon_class} this={currentIcon} />
      </i>
    {/if}
  </a>
{:else}
  <button {type} {id} class={combinedClasses} {disabled} {name} {value} {...arias} 
    on:click|self|stopPropagation={handleButtonClick}
    on:dblclick 
    on:focus
    on:keyup 
    on:mousedown 
    on:mouseover 
    on:submit>
    {text}
    <slot />
    {#if icon}
      <i 
        on:click|stopPropagation={handleButtonClick} 
        class='flex items-center'>
        <svelte:component {solid} class={icon_class} this={currentIcon} />
      </i>
    {/if}
  </button>
{/if}