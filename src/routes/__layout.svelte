<script>
  import "../app.css"
  import NavMenu from '$lib/components/NavMenu/NavMenu.svelte'
  import MenuIcon from '$lib/components/Icon/Heroicon/MenuIcon.svelte'
  import XIcon from '$lib/components/Icon/Heroicon/XIcon.svelte'
  import items from '../data/navmenu.json'
</script>

<header class="twelveui-bg-violet-600 twelveui-h-14 twelveui-flex twelveui-justify-around">
  <div class="twelveui-text-2xl twelveui-flex twelveui-place-items-center twelveui-text-white">
    <h1 class="twelveui-m-0 twelveui-text-2xl">TwelveUI</h1>
  </div>

  <NavMenu 
    {items} 
    mobile_ul_class="twelveui-w-32 twelveui-mt-3 twelveui-top-0 twelveui-right-0 twelveui-p-4 twelveui-bg-violet-600 twelveui-space-y-3"
    a_class="twelveui-text-xl twelveui-text-white twelveui-indent-2 md:twelveui-px-2 md:twelveui-indent-0 hover:twelveui-bg-violet-400"
    icon_class="twelveui-h-8 twelveui-w-8 twelveui-text-white"
    ul_class="twelveui-space-x-8 twelveui-bg-violet-600"
    aria_label="TwelveUI Navigation Menu"
    opened_icon={XIcon}
    closed_icon={MenuIcon}
  />
</header>
<slot></slot>