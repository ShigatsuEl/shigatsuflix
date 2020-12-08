export function handelEnter() {
  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );
}

export function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
}
