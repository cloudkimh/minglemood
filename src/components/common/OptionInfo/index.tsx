import Container from "./Container";
import InfoRow from "./InfoRow";

export type OptionInfoProps = {
    title: string;
    optionList: Array<{
        label: string;
        value: string;
    }>;
};

function OptionInfo(props: OptionInfoProps) {
    const { title, optionList } = props;

    return (
        <Container title={title}>
            {optionList.map((aOption) => (
                <InfoRow label={aOption.label} value={aOption.value} />
            ))}
        </Container>
    );
}

export default OptionInfo;
