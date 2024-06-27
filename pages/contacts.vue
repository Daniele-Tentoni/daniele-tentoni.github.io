<template>
  <div class="container">
    <MySection
      :title="$t('contacts.title')"
      :subtitle="$t('contacts.subtitle')"
    >
      <div class="block">
        {{ $t("contacts.block.description") }}
        <div class="block mt-8">
          <nav class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Italia</p>
                <p class="title">Cesena</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">
                  <a href="https://github.com" target="_blank">Github</a>
                </p>
                <p class="title">
                  <a href="https://github.com/daniele-tentoni" target="_blank">
                    Daniele-Tentoni
                  </a>
                </p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">
                  <a href="https://www.linkedin.com" target="_blank">
                    Linkedin
                  </a>
                </p>
                <p class="title">
                  <a
                    href="https://www.linkedin.com/in/daniele-tentoni"
                    target="_blank"
                  >
                    Daniele Tentoni
                  </a>
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </MySection>

    <MySection
      :title="$t('contacts.textme.title')"
      :subtitle="$t('contacts.textme.subtitle')"
    >
      <div class="container">
        <MyInput :label="$t('contacts.textme.name.label')">
          <div class="control">
            <input
              v-model="name"
              class="input"
              type="text"
              :placeholder="$t('contacts.textme.name.placeholder')"
            />
          </div>
        </MyInput>

        <MyInput
          :label="$t('contacts.textme.from.label')"
          :validation-rule="() => sender !== ''"
        >
          <div class="control has-icons-left has-icons-right">
            <input
              v-model="sender"
              class="input"
              type="email"
              :placeholder="$t('contacts.textme.from.placeholder')"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope" />
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle" />
            </span>
          </div>
          <template #errorMessage>
            <p class="help is-danger">
              {{ $t("contacts.textme.from.errorMessage") }}
            </p>
          </template>
        </MyInput>

        <MyInput
          :label="$t('contacts.textme.subject.label')"
          :validation-rule="() => subject !== ''"
        >
          <div class="control">
            <input
              v-model="subject"
              class="input"
              type="text"
              :placeholder="$t('contacts.textme.subject.label')"
            />
          </div>
          <template #errorMessage>
            <p class="help is-danger">
              {{ $t("contacts.textme.subject.errorMessage") }}
            </p>
          </template>
        </MyInput>

        <MyInput :validation-rule="() => message !== ''">
          <template #label>
            <MyLabel>{{ $t("contacts.textme.message.label") }}</MyLabel>
          </template>
          <div class="control">
            <textarea
              v-model="message"
              class="textarea"
              :placeholder="$t('contacts.textme.message.placeholder')"
            />
          </div>
          <template #errorMessage>
            <p class="help is-danger">
              {{ $t("contacts.textme.message.errorMessage") }}
            </p>
          </template>
        </MyInput>

        <div class="field is-grouped">
          <div class="control">
            <button class="button" @click="sendEmail">
              {{ $t("form.submit") }}
            </button>
          </div>
          <div class="control">
            <button
              type="reset"
              class="button is-dark is-inverted is-outlined"
              @click="resetForm"
            >
              {{ $t("form.cancel") }}
            </button>
          </div>
        </div>
      </div>
    </MySection>
  </div>
</template>

<script setup>
import MyLabel from "../components/form/MyLabel.vue";
import MyInput from "../components//form/MyInput.vue";
import MySection from "../components/sections/MySection.vue";

import Parse from "parse/dist/parse";

function resetForm() {
  name.value = "";
  sender.value = "";
  subject.value = "";
  message.value = "";
}

function sendEmail() {
  const config = useRuntimeConfig();
  const PARSE_APPLICATION_ID = config.parseApplicationId;
  const PARSE_HOST_URL = "https://parseapi.back4app.com/";
  const PARSE_JAVASCRIPT_KEY = config.parseJavascriptKey;
  Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
  Parse.serverURL = PARSE_HOST_URL;
  Parse.Cloud.run("email", {
    name,
    sender,
    subject,
    message,
  })
    .then(console.log)
    .catch(console.error);
}

const name = ref("");
const sender = ref("");
const subject = ref("");
const message = ref("");
</script>
