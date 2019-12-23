import '!style-loader!css-loader!./css/card.css';

export default {
  title: 'Card',
};

const createElement=(element: string):any => {
  return document.createElement(element);
}

export const card = () => {
  const crd=document.createElement("div");
  crd.classList.add("card");
  const lettersSection:HTMLTableSectionElement=createElement("section") as HTMLTableSectionElement;
  lettersSection.classList.add("letters");

  const capital:HTMLSpanElement=createElement("span") as HTMLSpanElement;
  const lower:HTMLSpanElement=createElement("span") as HTMLSpanElement;
  capital.innerText="A";
  lower.innerText="a";
  capital.classList.add("capital");
  lower.classList.add("lower");
  lettersSection.appendChild(capital);
  lettersSection.appendChild(lower);
  
  const imageSection:HTMLTableSectionElement=createElement("section") as HTMLTableSectionElement;
  imageSection.classList.add("image");
  const image:HTMLImageElement=createElement("img") as HTMLImageElement;
  image.alt="Image of an apple";
  imageSection.appendChild(image);

  const descriptionSection:HTMLTableSectionElement=createElement("section") as HTMLTableSectionElement;
  descriptionSection.innerText="A is for apple";
  descriptionSection.classList.add("description");

  crd.appendChild(lettersSection);
  crd.appendChild(imageSection);
  crd.appendChild(descriptionSection);
  return crd;
}