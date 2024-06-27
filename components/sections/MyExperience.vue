<template>
  <MySection title="My Experience" subtitle="My previous working experiences.">
    <div>
      <MyTimeline>
        <MyTimelineHeader text="2014" />
        <div class="timeline-item">
          <div class="timeline-marker" />
          <div class="timeline-content">
            <p class="heading">Cesena, 2014</p>
            <p>Tirocino presso Studio Aurale di Marco Pasquali</p>
            <p>
              Studio di progettazione impianti elettrici e idraulici civili ed
              industriali.
            </p>
          </div>
        </div>
        <MyTimelineHeader text="2018" />
        <MyTimelineItem heading="Cesena, 2018" marker="fas fa-flag">
          <template #marker>
            <div class="timeline-marker is-image is-32x32">
              <img src="https://bulma.io/images/placeholders/32x32.png" />
            </div>
          </template>
          <p>Tirocinio curricolare di laurea triennale presso Wedo S.R.L.</p>
          <p>
            Azienda di progettazione e realizzazione di soluzioni informatiche
            personalizzate per piccole e medie imprese.
          </p>
        </MyTimelineItem>
      </MyTimeline>
    </div>
  </MySection>
</template>

<script setup>
import MyTimelineItem from "../Timeline/MyTimelineItem.vue";
import MyTimelineHeader from "../Timeline/MyTimelineHeader.vue";
import MyTimeline from "../Timeline/MyTimeline.vue";
import MySection from "./MySection.vue";
</script>
