<script>
  import '../../tailwind.css'
  import '../../twelveui.css'
  import { createEventDispatcher, tick } from 'svelte'
  import MenuIcon from '$lib/components/Icon/Heroicon/MenuIcon.svelte'
  const dispatch = createEventDispatcher()
  let 
    button,
    className = null, 
    clickListener = false,
    currentIcon = MenuIcon, 
    expanded = false,
    menu, 
    mobilemenu, 
    open = false

  export let 
    a_class = null,
    aria_label = 'navigation menu',
    icon_class = null,
    items = [],
    mobile_id = 'mobileitem',
    mobile_ul_class = null,
    solid = false,
    ul_class = null
  ;
  export {className as class}

  className = className ? `twelveui-flex twelveui-place-items-center ${className}` : `twelveui-flex twelveui-place-items-center`
  a_class = a_class ? `twelveui-no-underline twelveui-inline-block twelveui-w-full twelveui-h-full ${a_class}` : `twelveui-no-underline twelveui-inline-block twelveui-w-full twelveui-h-full`
  mobile_ul_class = mobile_ul_class ? `twelveui-flex twelveui-flex-col twelveui-absolute !!twelveui-m-0 !!twelveui-p-0 ${mobile_ul_class}` : `twelveui-flex twelveui-flex-col twelveui-m-0 twelveui-p-0`
  ul_class = ul_class ? `twelveui-flex !!twelveui-m-0 !!twelveui-p-0 ${ul_class}` : `twelveui-flex twelveui-m-0 twelveui-p-0`

  const closeMenuOnOuterClick = async (e) => {
    if (e.composedPath().some(elem => elem.id === mobile_id)) {
      return
    }
    open = !open
    expanded = !expanded
    await tick()
    button.removeAttribute('aria-expanded')
    document.documentElement.removeEventListener('click', closeMenuOnOuterClick)
  }
  const toggleMenu = async () => {
    open = !open
    expanded = !expanded
    await tick()
    if (open) {
      mobilemenu.firstChild.firstChild.focus()
      document.documentElement.addEventListener('click', closeMenuOnOuterClick)
    } else {
      document.documentElement.removeEventListener('click', closeMenuOnOuterClick)
    }
    dispatch('click')
  }
  const handleEsc = (e) => {
    switch (e.key) {
      case 'Escape':
        if (open) {
          open = !open
          expanded = !expanded
          button.focus()
          document.documentElement.removeEventListener('click', closeMenuOnOuterClick)
        }
        break;
    }
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
        open = !open
        expanded = !expanded
        button.focus()
        document.documentElement.removeEventListener('click', closeMenuOnOuterClick)
        break;
    }
  }
</script>

<nav aria-label={aria_label} class={className}>
  {#if items.length > 0}
    <ul>
      <li bind:this={menu} class='twelveui-hidden md:twelveui-flex twelveui-list-none'>
        <ul class={ul_class}>
          {#each items as item}
            <li class='twelveui-list-none'>
              <a class={a_class} href={item.href} rel={item.rel} target={item.target}>
                {item.text}
              </a>
            </li>
          {/each}
        </ul>
      </li>
      <li class='twelveui-flex md:twelveui-hidden twelveui-items-center twelveui-list-none'>
        <button
          bind:this={button} 
          on:click|stopPropagation={toggleMenu}
          on:keyup={handleEsc}
          aria-controls={mobile_id}
          aria-haspopup='true'
          aria-expanded={expanded}
          class='twelveui-border-0 twelveui-bg-inherit hover:twelveui-cursor-pointer'
        >
          <svelte:component {solid} class={icon_class} this={currentIcon} />
        </button>
      </li>
      {#if open}
        <li id={mobile_id} class='twelveui-relative twelveui-list-none md:twelveui-hidden'>
          <ul bind:this={mobilemenu} class={mobile_ul_class}>
            {#each items as item}
              <li class='twelveui-list-none'>
                <a 
                  on:keyup={handleNavigation}
                  class={a_class} 
                  href={item.href} 
                  rel={item.rel} 
                  target={item.target}
                >
                  {item.text}
                </a>
              </li>
            {/each}
          </ul>
        </li>
      {/if}
    </ul>
  {/if}
</nav>