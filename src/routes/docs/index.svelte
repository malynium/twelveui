<script>
  import { Switch } from 'twelveui'
  let enabled = true
</script>

<style>
  :global(.twelveui-switch-ring > span) {
    --tw-ring-color: pink;
  }
</style>

<h2 class="mb-2 h3">Installation</h2>
<pre class="block p-4 bg-gray-700 text-white rounded-xl">
  # npm install twelveui
</pre>
<h2 class="mb-2 h3">Usage Example</h2>
<pre class="block p-4 bg-gray-700 text-white rounded-xl overflow-auto">
  &lt;script&gt;
import &lbrace; NavMenu, MenuIcon &rbrace; from 'twelveui'  
&lt;/script&gt;
</pre>
<h2 class="h3">Components</h2>
<section>
  <h3 class="p font-thin tracking-wider uppercase mt-5 text-gray-500">Disclosure</h3>
  <dl>
    <dt class="p mt-2 text-blue-600"><a href="docs/components/navmenu">NavMenu</a></dt>
    <dd class="ml-4">A series of links, which are aligned horizontally by default. When you provide "mobile" classes, the menu collapses and is shown/hidden by icons. The default "closed" icon is a three-line hamburger. The default "opened" icon is an X.</dd>
  </dl>
</section>
<section>
  <h3 class="p font-thin tracking-wider uppercase mt-5 text-gray-500">Input</h3>
  <dl>
    <dt class="p mt-2 text-blue-600"><a href="docs/components/switch">Switch</a></dt>
    <dd class="ml-4">A pill shaped button, which switches between 'on' and 'off' states.</dd>
  </dl>
  <Switch 
    bind:checked={enabled}
    label="Cookies"
    label_class="w-[200px] box-content inline-flex space-x-3 items-center p-1 m-6 rounded-md outline-none text-gray-800 hover:m-[22px] hover:cursor-pointer hover:border-2 hover:bg-blue-200 hover:border-blue-500 focus:m-[22px] focus:border-2 focus:bg-blue-200 focus:border-blue-500" 
    state_class="text-sm text-gray-700"
    state_off="Disabled"
    state_on="Enabled"
    switcher_on_class="bg-pink-600"
  />
  <p class="ml-4 mb-8">
    {#if enabled}
      Cookies are enabled
    {:else}
      Cookies are disabled
    {/if}
  </p>
</section>