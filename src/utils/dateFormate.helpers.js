export default function dateFormate(date) {
  let newDateFormate = new Date(date);
  newDateFormate = newDateFormate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return newDateFormate;
}
