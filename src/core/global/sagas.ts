export default function*() {
  if (process.browser) {
    console.log('Global Sagas');
  }
}
