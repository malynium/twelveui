<script>
  let className = ''
  export let solid = false
  export { className as class }
  className = className ?? 'twelveui-h-6 twelveui-w-6'
</script>

<style>
  .twelveui-h-6 {
    height: 1.5rem
  }
  .twelveui-w-6 {
    width: 1.5rem
  }
</style>

{#if solid}
<svg tabindex="-1" xmlns="http://www.w3.org/2000/svg" class={className} viewBox="0 0 20 20" fill="currentColor" aria-label="navigation menu icon">
  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
{:else}
<svg tabindex="-1" xmlns="http://www.w3.org/2000/svg" class={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-label="navigation menu icon">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
{/if}