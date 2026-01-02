<template>
  <learning-survey @survey-submit="storeSurvey"></learning-survey>
  <h2 v-if="isFetching">Loading...</h2>
  <user-experiences
    :results="savedSurveyResults"
    @getResults="fetchExperiences"
  ></user-experiences>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },
  data() {
    return {
      savedSurveyResults: [],
      isFetching: false,
    };
  },
  methods: {
    storeSurvey(surveyData) {
      const surveyResult = {
        name: surveyData.userName,
        rating: surveyData.rating,
        id: new Date().toISOString(),
      };
      this.savedSurveyResults.push(surveyResult);
      console.log(surveyResult);
    },

    async fetchExperiences() {
      this.isFetching = true;
      const response = await fetch(
        'https://vue-http-demo-d48d8-default-rtdb.firebaseio.com/surveys.json'
      );

      const data = await response.json();

      console.log(data);
      this.isFetching = false;

      for (const id in data) {
        const resultObj = {
          name: data[id].name,
          rating: data[id].rating,
        };

        this.savedSurveyResults.push(resultObj);
      }
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
