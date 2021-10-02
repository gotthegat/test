pipForm = pipForms[1];

console.log(pipForm);

//print out objectives
for (let objective of pipForm.objectives) {
  console.log(objective.objDescr);
  for (let measure of objective.measures) {
    console.log(`${measure.measId}: ${measure.measDescr}`);
  }
}
