<template>
    <div>
        <h1>Genera file .xlsx per calendario</h1>
        <input v-model="start" type="date" />
        <input v-model="finish" type="date" />
        <BButton @click="exportToExcel">Genera</BButton>
    </div>
</template>

<script setup lang="ts">
import * as XLSX from "xlsx";
import BButton from "../../components/elements/BButton.vue";
import { ref } from "vue";

const start = ref();
const finish = ref();

function exportToExcel() {
    var worksheet = XLSX.utils.json_to_sheet([
        {
            D: Array(31).keys(),
            Ottobre: ["D", "L", "M"],
        },
    ]);

    var workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Persone");

    // Esportazione del file Excel
    XLSX.writeFile(workbook, "dati_persone.xlsx");
}

function extractDays() {
    const year = new Date().getFullYear();
    const days = isPair(year);
}

function isPair(anno: number) {
    return (anno % 4 === 0 && anno % 100 !== 0) || anno % 400 === 0;
}

function d(mese: number) {
    // Creiamo una data per il primo giorno di ogni mese dell'anno corrente
    let data = new Date(new Date().getFullYear(), mese, 1);

    // Ottenere l'iniziale del giorno della settimana (Lunedì -> 'L', Martedì -> 'M', etc.)
    return data
        .toLocaleDateString("it-IT", { weekday: "short" })[0]
        .toUpperCase();
}
</script>
