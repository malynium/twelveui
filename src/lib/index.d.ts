import { SvelteComponentTyped } from 'svelte'
export class Icon extends SvelteComponentTyped<{
  solid?: boolean, 
  class?: string
},any,any> {}
export class MenuIcon extends Icon {}
export class XIcon extends Icon {}