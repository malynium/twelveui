<script lang="ts">
  import { createEventDispatcher, tick } from 'svelte'
  import { MenuIcon, XIcon } from '../../index'
  import type { Icon } from '../../index.d'
  
  const dispatch = createEventDispatcher()
  type anchor = {
    href: string, id?: string, rel?: string, target?: string, text: string
  }

  let 
    button: HTMLButtonElement,
    current_icon: new (options: any) => Icon, 
    mobile_menu: HTMLUListElement, 
    open = false
  ;

  export let 
    button_class = '',
    closed_icon: new (options: any) => Icon = MenuIcon,
    icon_class = '',
    item_class = '',
    items: Array<anchor>,
    list_class = '',
    mobile_id: string,
    mobile_list_class = '',
    opened_icon: new (options: any) => Icon = XIcon,
    solid = false
  ;

  current_icon = closed_icon
  
  const closeMenu = () => {
    open = !open
    current_icon = closed_icon
    button.focus()
    document.documentElement.removeEventListener('click', closeMenuOnOuterClick)
  }
  const closeMenuOnOuterClick = (e) => {
    if (!mobile_menu.contains(e.target)) closeMenu()
  }
  const toggleMenu = async () => {
    open = !open
    await tick()
    if (open) {
      (mobile_menu.firstElementChild.firstElementChild as HTMLAnchorElement).focus()
      current_icon = opened_icon
      document.documentElement.addEventListener('click', closeMenuOnOuterClick)
    } else {
      current_icon = closed_icon
      button.focus()
      document.documentElement.removeEventListener('click', closeMenuOnOuterClick)
    }
    dispatch('click')
  }
  const handleNavigation = (e) => {
    const parent = e.target.parentNode
    switch (e.key) {
      case 'ArrowDown':
        if (parent.nextElementSibling) {
          const nextItem = (parent.nextElementSibling.firstElementChild)
          nextItem.focus()
        } else {
          const firstItem = (parent.parentNode.firstChild.firstChild)
          firstItem.focus()
        }
        break
      case 'ArrowUp':
        if (parent.previousElementSibling) {
          const previousItem = (parent.previousElementSibling.firstChild)
          previousItem.focus()
        } else {
          const lastItem = (parent.parentNode.lastChild.firstChild)
          lastItem.focus()
        }
        break
      case 'Escape':
        closeMenu()
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
    <svelte:component {solid} class={icon_class} this={current_icon} />
  </button>
  {#if open}
    <div>
      <ul bind:this={mobile_menu} id={mobile_id} class={mobile_list_class}>
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