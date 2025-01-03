<template>
  <div>
    <h2>Vue Portfolio</h2>
    <ul>
      <li v-for="project in projects" :key="project['project-id']">
        <h3>{{ project['client-name'] }}</h3>
        <p><strong>Role:</strong> {{ project.role }}</p>
        <p><strong>Year:</strong> {{ project.year }}</p>
        <a :href="project.url" target="_blank" rel="noopener">Visit Project</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'VueProjectDetails',
  setup() {
    const projects = ref([]);

    onMounted(async () => {
      const response = await fetch('/data/projects.json');
      projects.value = await response.json();
      console.log(projects.value);
    });

    return { projects };
  },
};
</script>

<style>
/* Add your styles here */
</style>