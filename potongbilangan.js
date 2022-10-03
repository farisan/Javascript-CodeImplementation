function dividerSort(bilangan_deret) {
  return bilangan_deret
    .toString()
    .split(0)
    .map((deret) => deret.split("").sort().join(""))
    .join("");
}

console.log(dividerSort(5956560159466056));
