<script setup lang="ts">
const rows=[{name:'Data scientists',growth:34.6},{name:'Software developers',growth:10.2},{name:'Web developers',growth:3.8},{name:'All occupations',growth:3.5}]
</script>
<template>
<section class="research-panel" aria-label="BLS employment growth chart">
<h3>Projected US employment growth, 2025–2035</h3>
<div v-for="row in rows" :key="row.name" class="bar-row">
<span>{{ row.name }}</span><div class="bar-track"><div class="bar-fill" :style="{width:(row.growth/40*100)+'%'}"></div></div><strong>{{row.growth}}%</strong>
</div>
<p class="muted">BLS occupational projections, not forecasts for FDE or AI Agent Engineer. Values are percentage changes in employment, not annual openings. Source: <a href="https://www.bls.gov/emp/skills/computers-and-information-technology.htm">BLS 2025–2035 occupation table</a> and <a href="https://www.bls.gov/emp/tables/fastest-growing-occupations.htm">BLS growth table</a>.</p>
</section>
</template>
