import { useCallback, useState } from "react";

export type UseUploadProgress = {
    curUploadProgress: number;
    setCurUploadProgress: React.Dispatch<React.SetStateAction<number>>;
    onUploadProgress: (progressEvent: any) => void;
};

function useUploadProgress() {
    const [curUploadProgress, setCurUploadProgress] = useState<number>(0);

    const onUploadProgress = useCallback(
        (progressEvent: any) => {
            const { loaded, total } = progressEvent;
            let percent = Math.floor((loaded * 100) / total);
            setCurUploadProgress(percent);
        },
        [setCurUploadProgress]
    );

    return {
        curUploadProgress,
        setCurUploadProgress,
        onUploadProgress,
    };
}

export default useUploadProgress;
