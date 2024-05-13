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
    font-size: 13px;
    border-radius: 18px;
    padding: 9px 12px;

    ${(props) => {
        switch (props.color) {
            case "default":
                return css`
                    background-color: ${palette.white0};
                    border: 1px solid ${palette.gray4};
                    color: ${palette.gray0};
                `;
            case "green":
                return css`
                    background-color: #fbfff5;
                    border: 1px solid #9bd491;
                    color: #004518;
                `;
            case "red":
                return css`
                    background-color: #fff9f7;
                    border: 1px solid #d49991;
                    color: #4e0000;
                `;
        }
    }}
`;

export default RoundTag;
