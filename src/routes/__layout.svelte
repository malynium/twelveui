<script>
  import "../app.css"
  import { NavMenu } from 'twelveui'
  import navItems from '../data/navmenu.json'
</script>

<header class="flex justify-between md:justify-around h-14 border-gray-300 border-b-2">
  <div class="flex place-items-center ml-8 text-gray-900">
    <h1 class="m-0 text-3xl"><a href="/">twelveui</a></h1>
  </div>

  <nav 
    aria-label="TwelveUI Navigation Menu"
    class="flex place-items-center mr-8"
  >
    <NavMenu 
      items={navItems}
      list_class="<md:!hidden flex space-x-8 p-0"
      button_class="border-0 bg-inherit md:hidden hover:cursor-pointer"
      icon_class="h-8 w-8 text-gray-600"
      item_class="no-underline inline-block w-full h-full text-xl text-gray-600 indent-2 md:text-center md:px-1 md:indent-0 hover:bg-gray-100"
      mobile_id="mobile_menu"
      mobile_list_class="md:hidden absolute inset-x-0 space-y-3 mt-8 p-4 bg-gray-50"
    />
  </nav>
</header>
<slot></slot>