// Sort and Star

function twoSort(s) {
  return s.sort((a, b) => a < b ? -1 : 1)[0].split("").join("***")
}