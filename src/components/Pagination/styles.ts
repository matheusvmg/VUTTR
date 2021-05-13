import { createGlobalStyle } from "styled-components";
import colors from "../../config/colors";

export const GlobalStyles = createGlobalStyle`
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px 0px;

        button {
            display: flex;
            align-items: center;
            img {
                height: 20px;
                width: 20px;

                &:nth-child(1) {
                    margin-right: 10px;
                }
                &:nth-child(2) {
                    margin-left: 10px;
                }
            }
        }
    }

    .paginationItem {
        color: #365DF0;
        font-size: 18px;
        font-weight: 700;
        padding: 10px 15px;
        height: 45px;
        width: 45px;
        position: relative;
        margin: 0 5px;
        cursor: pointer;

        @media (max-width: 370px) {
            height: 40px;
            width: 45px;
        }
        @media (max-width: 350px) {
            height: 30px;
            width: 45px;
        }
    }

    .paginationItem span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        @media (max-width: 390px) {
            font-size: 16px;
        }
    }

    .prev,
    .next {
        border: none;
        padding: 10px;
        color: #365DF0;
        margin: 0 10px;
        cursor: pointer;
        font-weight: 700;
        font-size: 18px;

        @media (max-width: 390px) {
            font-size: 16px;
        }
    }

    .paginationItem.active {
        border-radius: 50%;
        background-color: ${colors.red};
        color: ${colors.white};
        font-weight: 700;
        font-size: 18px;
        pointer-events: none;
    }

    .prev.disabled,
    .next.disabled {
        pointer-events: none;
        box-shadow: none;
        color: #B9C6FA;
    }
`;
