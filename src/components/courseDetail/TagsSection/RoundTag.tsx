import styled, { css } from "styled-components";
import palette from "../../../lib/styles/palette";

export type RoundTagProps = {
    color?: "green" | "red";
    text: string;
    className?: string;
};

function RoundTag(props: RoundTagProps) {
    const { color = "default", text, className } = props;

    return (
        <Block color={color} className={className}>
            {text}
        </Block>
    );
}

const Block = styled.div<{ color: "default" | "green" | "red" }>`
    width: fit-content;
    font-size: 11px;
    border-radius: 100px;
    padding: 5px 10px;

    ${(props) => {
        switch (props.color) {
            case "default":
                return css`
                    background-color: ${palette.gray5};
                    border: 1px solid ${palette.gray4};
                    color: ${palette.gray2};
                `;
            case "green":
                return css`
                    background-color: #fbfff5;
                    border: 1px solid #9bd491;
                    color: #004518;
                `;
            case "red":
                return css`
                    background-color: ${palette.gray5};
                    border: 1px solid ${palette.gray4};
                    color: #ff9b73;
                `;
        }
    }}
`;

export default RoundTag;
