import React, { useState } from "react";

export default function useToggle(
    initVal: boolean
): [boolean, () => void, React.Dispatch<boolean>] {
    const [val, setVal] = useState(initVal);

    const toggle = (): void => {
        setVal((prev) => !prev);
    };

    return [val, toggle, setVal];
}
