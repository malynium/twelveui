<script>
  import { Button, NavMenu, Switch, XIcon } from 'twelveui'
  import navItems from '../../data/navmenu_docs.json'
</script>

<style>
  :global(#twelveui-switch) {
    --tw-ring-color: pink;
  }
</style>

<h2 class="mb-2 h3">Installation</h2>
<pre class="block p-4 bg-gray-700 text-white rounded-xl">
  # npm install twelveui
</pre>
<h2 class="h3">Components</h2>
<section>
  <dl>
    <dt class="p mt-2 text-blue-600"><a href="docs/components/button">Button</a></dt>
    <dd class="ml-4">It's a button! Pass in an `icon` prop, as a svelte component - along with classes via the `icon_class` prop.</dd>
  </dl>
  <Button 
    class="button-md button-blue-600 rounded-lg m-6"
    icon={XIcon}
    icon_class="h-6 w-6 ml-4"
    text="Hello There World"
  />
</section>
<section>
  <dl>
    <dt class="p mt-2 text-blue-600"><a href="docs/components/navmenu">NavMenu</a></dt>
    <dd class="ml-4">A series of links, which are aligned horizontally by default. When you provide "mobile" classes, the menu collapses and is shown/hidden by icons. The default "closed" icon is a three-line hamburger. The default "opened" icon is an X.</dd>
  </dl>
  <nav 
    aria-label="Navigation Menu"
    class="flex m-6"
  >
    <NavMenu 
      items={navItems}
      list_class="<md:!hidden flex space-x-8 p-0"
      button_class="border-0 bg-inherit md:hidden hover:cursor-pointer"
      icon_class="h-8 w-8 text-gray-600"
      item_class="no-underline inline-block w-full h-full text-gray-600 indent-2 md:text-center md:px-1 md:indent-0 hover:bg-gray-100"
      mobile_id="docs_mobile_nav"
      mobile_list_class="md:hidden absolute inset-x-0 space-y-3 mt-8 p-4 bg-gray-50"
    />
  </nav>
</section>
<section>
  <dl>
    <dt class="p mt-2 text-blue-600"><a href="docs/components/switch">Switch</a></dt>
    <dd class="ml-4">A pill shaped button, which switches between 'on' and 'off' states.</dd>
  </dl>
  <Switch 
    class="w-[200px] box-content inline-flex space-x-3 items-center p-1 m-6 rounded-md outline-none text-gray-800 hover:m-[22px] hover:cursor-pointer hover:border-2 hover:bg-blue-200 hover:border-blue-500 focus:m-[22px] focus:border-2 focus:bg-blue-200 focus:border-blue-500" 
    label="Cookies"
    state_class="text-sm text-gray-700"
    state_off="Disabled"
    state_on="Enabled"
    switcher_on_class="bg-pink-600"
    value="cookies"
  />
</section>