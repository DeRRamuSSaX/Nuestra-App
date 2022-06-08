let handleClick = e => {
  let cont = 0;
  // console.log(e.target);
  // alert("HOLA");
  // console.log(document.forms);
  for (let form of document.forms) {
    for (let elem of form.elements) {
      // console.log(elem);
      // console.log(elem.dataset.correcta);
      console.log(elem.dataset.correcta);
      if (elem.checked && elem.dataset.correcta == "true") {
        cont++;
        // console.log('en el if');
      }
    }
  }
  console.log(cont);
};
