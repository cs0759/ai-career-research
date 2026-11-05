<script setup lang="ts">
const rows=[{skill:'Python',pct:29},{skill:'AWS',pct:26},{skill:'SQL',pct:24},{skill:'JavaScript',pct:20},{skill:'Git',pct:14},{skill:'REST APIs',pct:13},{skill:'React',pct:13}]
</script>
<template>
<section class="research-panel" aria-label="Software developer job posting skills chart">
<h3>Skills mentioned in US software developer postings</h3>
<div v-for="row in rows" :key="row.skill" class="bar-row"><span>{{row.skill}}</span><div class="bar-track"><div class="bar-fill" :style="{width:(row.pct/35*100)+'%'}"></div></div><strong>{{row.pct}}%</strong></div>
<p class="muted">O*NET / Lightcast, Jan–Dec 2025 US postings classified as Software Developer. These are mentions among postings, not percentages of AI-specific jobs or importance scores. <a href="https://www.onetonline.org/link/demand/15-1252.00">Original data</a>.</p>
</section>
</template>
