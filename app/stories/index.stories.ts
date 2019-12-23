export default {
  title: 'Define base styles',
};

export const baseButton=()=> {
  const btn: HTMLButtonElement=document.createElement("button");
  btn.innerText="A button";
  return btn;
}