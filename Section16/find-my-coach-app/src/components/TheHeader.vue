<template>
  <nav class="bg-blue-950 text-white px-8 py-3 flex justify-between items-center">
    <RouterLink to="/"><h1 class="text-2xl font-semibold">Find A Coach</h1></RouterLink>

    <div class="flex gap-10">
      <RouterLink to="/coaches"
        ><button
          class="px-3 py-2 border border-purple-500 shadow shadow-white text-purple-300 cursor-pointer"
        >
          All Coaches
        </button></RouterLink
      >

      <RouterLink to="/requests">
        <button
          class="px-3 py-2 border border-purple-500 shadow shadow-white text-purple-300 cursor-pointer"
        >
          Requests
        </button>
      </RouterLink>
    </div>
  </nav>
</template>
