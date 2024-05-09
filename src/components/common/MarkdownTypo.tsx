export type MarkdownTypoProp = {
    children: string;
    className?: string;
    // 접근성 심사
    onBlur?: any;
};

function MarkdownTypo(props: MarkdownTypoProp) {
    const { children, className, onBlur } = props;

    return (
        <p
            onBlur={onBlur}
            className={className}
            dangerouslySetInnerHTML={{ __html: children }}
        ></p>
    );
}

export default MarkdownTypo;
