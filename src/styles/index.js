import styled from "styled-components";
import tw from "tailwind.macro";

// const StyledForm = styled.main.attrs({
//   className: "flex flex-col h-screen justify-center items-center bg-gray-100",
// })`
//   & {
//     form {
//       ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
//     }
//     input {
//       ${tw`border-gray-400 mb-4 w-full border-solid border rounded py-2 px-4`}
//     }
//     button {
//       ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
//     }
//   }
// `

const CommonRoom = styled.main.attrs({
  className: "grid grid-cols-2 grid-rows-3 gap-2 col-1-span-2",
})`
  & {
    div.header {
      ${tw`bg-blue-700 text-6xl col-1-span-2`}
    }
    div.item {
      ${tw`bg-orange-600`}
    }
  }
`

export { CommonRoom };
// export default StyledForm;
