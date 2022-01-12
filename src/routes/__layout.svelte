<script>
  import "../app.css"
  import { NavMenu } from 'twelveui'
  import items from '../data/navmenu.json'
</script>

<header class="flex justify-around h-14 bg-violet-600">
  <div class="flex place-items-center text-2xl text-white">
    <h1 class="m-0 text-2xl">TwelveUI</h1>
  </div>

  <nav 
    aria-label="TwelveUI Navigation Menu"
    class="flex place-items-center"
  >
    <NavMenu 
      {items} 
      list_class="<md:!hidden flex space-x-8 p-0 bg-violet-600"
      button_class="border-0 bg-inherit md:hidden hover:cursor-pointer"
      icon_class="h-8 w-8 text-white"
      item_class="no-underline inline-block w-full h-full text-xl text-white indent-2 md:text-center md:px-1 md:indent-0 hover:bg-violet-400"
      mobile_list_class="md:hidden absolute inset-x-0 space-y-3 mt-8 p-4 bg-violet-600"
    />
  </nav>
</header>
<slot></slot>