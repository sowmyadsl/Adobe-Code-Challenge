import leads from "./leads.json";

let leadsArray = leads.leads;
console.log("initial list of leads:", leadsArray);

let sortedLeadsArray = leadsArray.slice().sort((a, b) => {
  if (new Date(a.entryDate) >= new Date(b.entryDate)) {
    return -1;
  } else {
    return 1;
  }
});

console.log("sortedLeadsArray", sortedLeadsArray);

let uniqueLeadsArray = sortedLeadsArray.slice().reduce((uArray, lead) => {
  let found = uArray.find(
    ulead => ulead._id === lead._id || ulead.email === lead.email
  );
  if (found) {
    console.log("dropping ", lead);
  }
  return found ? uArray : [...uArray, lead];
}, []);
console.log("unique leads: ", uniqueLeadsArray);
