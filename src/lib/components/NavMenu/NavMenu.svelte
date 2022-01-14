<script lang="ts">
  import { createEventDispatcher, tick } from 'svelte'
  import MenuIcon from '../Icon/Heroicon/MenuIcon.svelte'
  import XIcon from '../Icon/Heroicon/XIcon.svelte'
  const dispatch = createEventDispatcher()

  let 
    button,
    currentIcon, 
    mobilemenu, 
    open = false

  export let 
    button_class: string = null,
    closed_icon = MenuIcon,
    icon_class: string = null,
    item_class: string = null,
    items = [],
    list_class: string = null,
    mobile_id: string,
    mobile_list_class: string = null,
    opened_icon = XIcon,
    solid: boolean = false
  ;

  currentIcon = closed_icon
  
  const closeMenu = () => {
    open = !open
    currentIcon = closed_icon
    document.documentElement.removeEventListener('click', closeMenuOnOuterClick)
  }
  const closeMenuOnOuterClick = async (e) => {
    if (e.composedPath().some(elem => elem.id === mobile_id)) {
      return
    }
    closeMenu()
  }
  const toggleMenu = async () => {
    open = !open
    await tick()
    if (open) {
      mobilemenu.firstChild.firstChild.focus()
      currentIcon = opened_icon
      document.documentElement.addEventListener('click', closeMenuOnOuterClick)
    } else {
      currentIcon = closed_icon
      button.focus()
      document.documentElement.removeEventListener('click', closeMenuOnOuterClick)
    }
    dispatch('click')
  }
  const handleNavigation = (e) => {
    switch (e.key) {
      case 'ArrowDown':
        if (e.target.parentNode.nextElementSibling) {
          const nextItem = e.target.parentNode.nextElementSibling.firstChild
          nextItem.focus()
        } else {
          const firstItem = e.target.parentNode.parentNode.firstChild.firstChild
          firstItem.focus()
        }
        break
      case 'ArrowUp':
        if (e.target.parentNode.previousElementSibling) {
          const previousItem = e.target.parentNode.previousElementSibling.firstChild
          previousItem.focus()
        } else {
          const lastItem = e.target.parentNode.parentNode.lastChild.firstChild
          lastItem.focus()
        }
        break
      case 'Escape':
        closeMenu()
        button.focus()
        break;
    }
  }
</script>

<style>
  .twelveui-flex {
    display: flex;
  }
  .twelveui-list-none {
    list-style-type: none;
  }
  .twelveui-justify-center {
    justify-content: center;
  }
  .twelveui-text-center {
    text-align: center;
  }
</style>

{#if items.length > 0}
  <ul class={list_class}>
    {#each items as item}
      <li class='twelveui-list-none twelveui-flex twelveui-justify-center'>
        <a class={item_class} href={item.href} rel={item.rel} target={item.target}>
          {item.text}
        </a>
      </li>
    {/each}
  </ul>

  <button
    bind:this={button} 
    on:click|stopPropagation={toggleMenu}
    aria-controls={mobile_id}
    aria-haspopup='true'
    aria-expanded={open}
    class={button_class}
  >
    <svelte:component {solid} class={icon_class} this={currentIcon} />
  </button>
  {#if open}
    <div>
      <ul bind:this={mobilemenu} id={mobile_id} class={mobile_list_class}>
        {#each items as item}
          <li class='twelveui-list-none'>
            <a 
              on:keyup={handleNavigation}
              on:click={closeMenu}
              class={item_class} 
              href={item.href} 
              rel={item.rel} 
              target={item.target}
            >
              {item.text}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
{/if}