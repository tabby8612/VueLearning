import { ref } from 'vue';

export default function useAlert(isAlertVisible) {
  const alertIsVisible = ref(isAlertVisible);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [alertIsVisible, showAlert, hideAlert];
}
