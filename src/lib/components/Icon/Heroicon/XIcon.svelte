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
<svg xmlns="http://www.w3.org/2000/svg" class={className} viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
{:else}
<svg xmlns="http://www.w3.org/2000/svg" class={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>
{/if}