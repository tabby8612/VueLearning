<template>
  <section style="border: 2px dotted red">
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>
    <main>
      <h1>Base Card</h1>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </section>
</template>
