import '!style-loader!css-loader!./css/card.css';
import 'flexboxgrid';

export default {
  title: 'Card',
};

const createElement=(element: string):any => {
  return document.createElement(element);
}

export const card = () => {
  const crd=document.createElement("div");
  crd.classList.add("card");
  crd.classList.add("col");
  const lettersSection:HTMLTableSectionElement=createElement("section") as HTMLTableSectionElement;
  lettersSection.classList.add("letters");
  lettersSection.classList.add("row");

  const capital:HTMLSpanElement=createElement("span") as HTMLSpanElement;
  const lower:HTMLSpanElement=createElement("span") as HTMLSpanElement;
  capital.innerText="A";
  lower.innerText="a";
  capital.classList.add("capital");
  lower.classList.add("lower");
  capital.classList.add("col-xs");
  lower.classList.add("col-xs");
  lettersSection.appendChild(capital);
  lettersSection.appendChild(lower);
  
  const imageSection:HTMLTableSectionElement=createElement("section") as HTMLTableSectionElement;
  imageSection.classList.add("image");
  imageSection.classList.add("row");
  const image:HTMLImageElement=createElement("img") as HTMLImageElement;
  image.alt="Image of an apple";
  imageSection.appendChild(image);

  const descriptionSection:HTMLTableSectionElement=createElement("section") as HTMLTableSectionElement;
  descriptionSection.classList.add("description");
  descriptionSection.classList.add("row");
  const description:HTMLDivElement=createElement("div") as HTMLDivElement;
  description.innerText="A is for apple";
  descriptionSection.appendChild(description);

  crd.appendChild(lettersSection);
  crd.appendChild(imageSection);
  crd.appendChild(descriptionSection);
  return crd;
}