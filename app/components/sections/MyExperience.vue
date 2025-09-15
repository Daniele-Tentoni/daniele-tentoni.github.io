<template>
    <MySection
        title="My Experience"
        subtitle="My previous working experiences."
    >
        <div>
            <div>
                <!-- Here I use props. -->
                <BCard
                    subtitle="Cesena, 2014"
                    title="Tirocino presso Studio Aurale di Marco Pasquali"
                    content="Studio di progettazione impianti elettrici e idraulici
                    civili ed industriali."
                ></BCard>
                <!-- Here I use slots. -->
                <BCard>
                    <template #subtitle>Cesena, 2018</template>
                    <template #title>
                        Tirocinio curricolare di laurea triennale presso Wedo
                        S.R.L.
                    </template>
                    Azienda di progettazione e realizzazione di soluzioni
                    informatiche personalizzate per piccole e medie imprese.
                </BCard>
            </div>
        </div>
    </MySection>
</template>

<script setup>
import MySection from "./MySection.vue";
import BCard from "../cards/BCard.vue";
</script>
