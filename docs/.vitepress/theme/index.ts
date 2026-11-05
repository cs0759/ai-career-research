import DefaultTheme from 'vitepress/theme'
import './custom.css'
import CareerQuiz from './CareerQuiz.vue'
import BlsChart from './BlsChart.vue'
import SkillsChart from './SkillsChart.vue'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CareerQuiz', CareerQuiz)
    app.component('BlsChart', BlsChart)
    app.component('SkillsChart', SkillsChart)
  }
}
