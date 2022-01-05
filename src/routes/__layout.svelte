<script>
  import "../app.css"
  import NavMenu from '$lib/components/NavMenu/NavMenu.svelte'
  import items from '../data/navmenu.json'
</script>

<header class="twelveui-flex twelveui-justify-around twelveui-h-14 twelveui-bg-violet-600">
  <div class="twelveui-flex twelveui-place-items-center twelveui-text-2xl twelveui-text-white">
    <h1 class="twelveui-m-0 twelveui-text-2xl">TwelveUI</h1>
  </div>

  <nav 
    aria-label="TwelveUI Navigation Menu"
    class="twelveui-flex twelveui-place-items-center"
  >
    <NavMenu 
      {items} 
      icon_class="twelveui-h-8 twelveui-w-8 twelveui-text-white"
      item_class="twelveui-text-xl twelveui-text-white twelveui-indent-2 md:twelveui-px-2 md:twelveui-indent-0 hover:twelveui-bg-violet-400"
      list_class="twelveui-flex twelveui-space-x-8 twelveui-bg-violet-600"
      mobile_list_class="twelveui-absolute twelveui-inset-x-0 twelveui-mt-8 twelveui-p-4 twelveui-bg-violet-600 twelveui-space-y-3"
    />
  </nav>
</header>
<slot></slot>