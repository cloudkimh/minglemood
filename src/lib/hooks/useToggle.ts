import React, { useState } from "react";

export default function useToggle(
    initValue: boolean
): [boolean, () => void, React.Dispatch<boolean>] {
    const [value, setValue] = useState(initValue);

    const toggleValue = (): void => {
        setValue((prev) => !prev);
    };

    return [value, toggleValue, setValue];
}
