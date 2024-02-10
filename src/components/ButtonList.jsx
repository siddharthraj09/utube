import Button from "./Button";

// const ButtonList = () => {
//   return (
//     <div className="flex   ">
//       <div className="flex overflow-x-auto">
//         <Button name="All" />
//         <Button name="Gaming" />
//         <Button name="Songs" />
//         <Button name="Live" />
//         <Button name="Mixes" />
//         <Button name="Chess" />
//         <Button name="Gadgets" />
//       </div>
//     </div>
//   );
// };
const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto ">
      {/* Dummy content to ensure horizontal scrolling */}
      {/* <div className="flex-shrink-0 w-14"></div> */}
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Mixes" />
      <Button name="Chess" />
      <Button name="Gadgets" />
    </div>
  );
};

export default ButtonList;
