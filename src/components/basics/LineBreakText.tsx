import React from "react";

export type LineBreakTextProps = {
    text: string;
};

function LineBreakText(props: LineBreakTextProps) {
    const { text } = props;

    return (
        <p>
            {text.split("\n").map((item, index) => (
                <React.Fragment key={index}>
                    {item}
                    <br />
                </React.Fragment>
            ))}
        </p>
    );
}
export default LineBreakText;
