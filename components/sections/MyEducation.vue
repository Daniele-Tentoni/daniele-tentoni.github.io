<template>
  <MySection title="Education" subtitle="My previous education grades.">
    <div>
      <div>
        <MyTimelineItem>
          <p>In Corso - Cesena, Italy</p>
          <p>
            Laurea Magistrale in Ingegnieria e Scienze Informatiche presso
            Università di Bologna
          </p>
        </MyTimelineItem>
        <MyTimelineItem>
          <p>2019 - Cesena, Italy</p>
          <p>
            Laurea Triennale in Ingegnieria e Scienze Informatiche presso
            Università di Bologna
          </p>
        </MyTimelineItem>
        <MyTimelineItem>
          <p>2015 - Cesena, Italy</p>
          <p>Diploma di Maturità presso I.T.I.S. Blaise Pascal</p>
        </MyTimelineItem>
      </div>
    </div>
  </MySection>
</template>

<script setup>
import MyTimelineItem from '../Timeline/MyTimelineItem.vue'
import MySection from './MySection.vue'
</script>
