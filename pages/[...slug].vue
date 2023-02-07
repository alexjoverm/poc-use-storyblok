<template>
  <div>
    <h1>I'm {{ $route.fullPath }}</h1>

    <div>
      <h3>
        Storyblok story title:
        <span style="color: green">{{ story.content.title }}</span>
      </h3>
    </div>
  </div>
</template>

<script setup>
const { accessToken } = useRuntimeConfig();
const { path } = useRoute();
const patchedPath = path === "/" ? "/home" : path;

const { data } = await useFetch(
  `https://api.storyblok.com/v2/cdn/stories${patchedPath}?version=draft&token=${accessToken}`
);

const story = computed(() => data.value.story);
</script>
