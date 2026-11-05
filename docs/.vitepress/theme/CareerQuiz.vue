<script setup lang="ts">
import { ref, computed } from 'vue'
const interest=ref('build')
const environment=ref('product')
const result=computed(()=>{
 if(interest.value==='customers') return {name:'Forward Deployed Engineer',why:'You enjoy coding with stakeholders and delivering real integrations.',link:'/roles/forward-deployed-engineer'}
 if(interest.value==='models') return {name:'LLM / AI Engineer',why:'You want to focus on model behavior, retrieval and evaluation.',link:'/roles/llm-engineer'}
 if(interest.value==='systems') return {name:'AI Solutions Architect',why:'You enjoy system design and connecting technologies.',link:'/roles/ai-solutions-architect'}
 if(environment.value==='customer') return {name:'Forward Deployed Engineer',why:'You like building applications in a customer-facing setting.',link:'/roles/forward-deployed-engineer'}
 return {name:'AI Product / Application Engineer',why:'You enjoy full-stack applications and building user-facing AI features.',link:'/roles/ai-engineer'}
})
</script>
<template>
<section class="research-panel" aria-label="AI career interest explorer">
<h3>Which AI career should I explore?</h3>
<p>Two-question interest explorer, not a validated career assessment.</p>
<label for="interest">What work sounds most interesting?</label>
<select id="interest" v-model="interest"><option value="build">Build web applications</option><option value="customers">Solve customer problems with code</option><option value="models">Experiment with language models</option><option value="systems">Design technical systems</option></select>
<label for="environment">Which environment appeals to you?</label>
<select id="environment" v-model="environment"><option value="product">Product engineering team</option><option value="customer">Working directly with customers</option></select>
<div style="margin-top:1rem;padding:1rem;border-left:3px solid var(--vp-c-brand-1)">
<strong>{{result.name}}</strong><p>{{result.why}}</p><a :href="result.link">Read the role profile →</a>
</div>
<p class="muted">Next: check actual internship requirements and build a portfolio project. Results are exploratory and do not imply eligibility.</p>
</section>
</template>
