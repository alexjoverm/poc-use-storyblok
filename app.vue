<template>
  <div>
    <header>
      <nuxt-link :to="localePath('/')">Home</nuxt-link>
      -
      <nuxt-link :to="localePath('/team')">Team</nuxt-link>
      -
      <nuxt-link :to="localePath('/about')">About</nuxt-link>
      ----
      <NuxtLink :to="switchLocalePath('en')">EN</NuxtLink>
      /
      <NuxtLink :to="switchLocalePath('es')">ES</NuxtLink>
    </header>
    <NuxtPage />
  </div>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath();
</script>
