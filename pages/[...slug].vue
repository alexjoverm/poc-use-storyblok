<template>
  <div v-editable="story.content">
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
const route = useRoute();
const { locale } = useI18n();
let path = route.path.replace("/en", "").replace("/es", "");
path = path.startsWith("/") ? path.substring(1) : path;
path = path || "home";

const story = await useAsyncStoryblok(path, {
  version: "draft",
  language: locale.value,
});

// const story = ref(null);
// const storyblokApi = useStoryblokApi();
// const { data } = await useAsyncData(patchedPath, () =>
//   storyblokApi.get(`cdn/stories/${patchedPath}`, {
//     version: "draft",
//   })
// );
// story.value = data.value.data.story;

// onMounted(() => {
//   useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory));
// });
</script>
