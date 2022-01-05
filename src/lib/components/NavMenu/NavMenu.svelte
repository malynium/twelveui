<script>
  import '../../tailwind.css'
  import { createEventDispatcher, tick } from 'svelte'
  import MenuIcon from '$lib/components/Icon/Heroicon/MenuIcon.svelte'
  import XIcon from '$lib/components/Icon/Heroicon/XIcon.svelte'
  const dispatch = createEventDispatcher()
  let 
    button,
    currentIcon, 
    expanded = false,
    mobilemenu, 
    open = false

  export let 
    button_class = null,
    closed_icon = MenuIcon,
    icon_class = null,
    item_class = null,
    items = [],
    list_class = null,
    mobile_id = 'mobileitem',
    mobile_list_class = null,
    opened_icon = XIcon,
    solid = false
  ;

  currentIcon = closed_icon ?? MenuIcon

  button_class = button_class ? `md:twelveui-hidden twelveui-border-0 twelveui-bg-inherit hover:twelveui-cursor-pointer ${button_class}` : `md:twelveui-hidden twelveui-border-0 twelveui-bg-inherit hover:twelveui-cursor-pointer`
  item_class = item_class ? `twelveui-no-underline twelveui-inline-block twelveui-w-full twelveui-h-full ${item_class}` : `twelveui-no-underline twelveui-inline-block twelveui-w-full twelveui-h-full`
  list_class = list_class ? `<md:!twelveui-hidden ${list_class}` : `<md:!twelveui-hidden`
  mobile_list_class = mobile_list_class ? `md:twelveui-hidden ${mobile_list_class}` : `md:twelveui-hidden`
  
  const closeMenu = () => {
    open = !open
    expanded = !expanded
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
    expanded = !expanded
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

{#if items.length > 0}
  <ul class={list_class}>
    {#each items as item}
      <li class='twelveui-list-none'>
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
    aria-expanded={expanded}
    class={button_class}
  >
    <svelte:component {solid} class={icon_class} this={currentIcon} />
  </button>
  {#if open}
    <div>
      <ul bind:this={mobilemenu} class={mobile_list_class}>
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