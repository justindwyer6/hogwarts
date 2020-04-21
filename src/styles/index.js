import styled from "styled-components";
import tw from "tailwind.macro";

const CommonRoom = styled.main.attrs({
  className: "grid gap-15 text-center grid-custom",
})`
  & {
    div.header {
      ${tw`flex justify-center items-center text-6xl`}
      & {
        h1 {
          ${tw`flex justify-center items-center`}
        }
      }
    }
    div.housePoints {
      ${tw`flex flex-col justify-start items-center bg-no-repeat bg-cover text-center rounded-lg m-5`}
      & {
        .overlay {
          ${tw`w-full h-full rounded-lg`}
        }
        & {
          h2 {
            ${tw`text-5xl`}
          }
          h3 {
            ${tw`text-4xl`}
          }
          li {
            ${tw`text-3xl`}
          }
        }
      }
    }
  }
`;

const HouseRoster = styled.ul.attrs({
  className: "text-center"
})`
  & {
    li {
      ${tw``}
    }
  }
`;

export { CommonRoom, HouseRoster };
// export default StyledForm;
