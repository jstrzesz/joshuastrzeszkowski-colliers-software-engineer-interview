export async function get() {
  if (Math.random() >= 0.3) {
    return "What's the worst thing about ancient history class? The teachers tend to Babylon.";
  }
  throw new Error();
}
