import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import palette from "../../lib/styles/palette";
import {
    getSampleImage,
    hideScrollBar,
    withOpacity,
} from "../../lib/styles/utils";
import CoursePost from "../common/CoursePost";
const photo = getSampleImage();

const samplePosts = Array(8).fill({
    id: 1,
    thumbnail: photo,
    region: "부산",
    title: "테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목 테스트 제목  ",
    starScore: 4.5,
    starCnt: 1000,
    heartCnt: 2000,
    price: 33000,
    discountRate: undefined,
    isLiked: true,
});

type BottomSheetModalProps = {
    location: {
        name: string;
        lat: number;
        lng: number;
    };
    onClose: () => void;
};

function BottomSheetModal(props: BottomSheetModalProps) {
    const { location, onClose } = props;
    const [isExpanded, setIsExpanded] = useState(false);
    const [{ y: yPosition }, setYPosition] = useSpring(() => ({
        y: 100,
        config: { tension: 300, friction: 30 },
    }));
    const [posts, setPosts] = useState<
        Array<{
            [key: string]: any;
        }>
    >([]);

    useEffect(() => {
        const getPostsInCurrentLocation = (lat: number, lng: number) => {
            // do async
            return samplePosts;
        };

        const response = getPostsInCurrentLocation(location.lat, location.lng);
        setPosts(response);
    }, [isExpanded]);

    const open = ({ canceled }: { canceled: boolean }) => {
        setYPosition.start({ y: 0 });
        setIsExpanded(true);
    };

    const close = (velocity = 0) => {
        setYPosition.start({
            y: 100,
            config: { ...{ tension: 300, friction: 30 }, velocity },
        });
        setIsExpanded(false);
        setTimeout(onClose, 300);
    };

    const bind = useDrag(
        ({
            last,
            vxvy: [, velocityY],
            movement: [, movementY],
            cancel,
            canceled,
        }) => {
            if (movementY < -70) {
                cancel();
            }

            if (last) {
                if (movementY > 50 || velocityY > 0.5) {
                    close(velocityY);
                } else {
                    open({ canceled });
                }
            } else {
                setYPosition({ y: movementY, immediate: false });
            }
        },
        {
            from: () => [0, yPosition.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true,
        }
    );

    return (
        <Block
            onClick={() => {
                close();
            }}
        >
            <Sheet
                {...bind()}
                style={{
                    transform: yPosition.to((py) => `translateY(calc(${py}%))`),
                }}
            >
                <Content onClick={(e) => e.stopPropagation()}>
                    <PostsCount>
                        {location.name} • {posts.length}개의 모임
                    </PostsCount>
                    <PostsWrapper>
                        <PostGrid>
                            {posts.map((aPost, i) => (
                                <CoursePost
                                    key={`post-${i}`}
                                    id={aPost.id}
                                    thumbnail={aPost.thumbnail}
                                    region={aPost.region}
                                    title={aPost.title}
                                    starScore={aPost.starScore}
                                    starCnt={aPost.starCnt}
                                    heartCnt={aPost.heartCnt}
                                    price={aPost.price}
                                    isLiked={aPost.isLiked}
                                    discountRate={aPost.discountRate}
                                />
                            ))}
                        </PostGrid>
                    </PostsWrapper>
                </Content>
            </Sheet>
        </Block>
    );
}

const Block = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 768px;
    z-index: 100;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 0;
`;

const Sheet = styled(animated.div)`
    ${hideScrollBar}
    position: absolute;
    bottom: 0;
    width: 100%;
    max-width: 768px;
    background-color: ${palette.white0};
    box-shadow: 0 -2px 10px ${palette.black2}${withOpacity(0.1)};
`;

const Content = styled.div`
    position: relative;
    height: 75vh;
    padding: 10px 20px 0;
`;

const PostsCount = styled.div`
    position: absolute;
    top: -49px;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    color: ${palette.gray1};
    background-color: ${palette.white0};
    font-size: 13px;
    border-radius: 16px 16px 0 0;
    padding: 0 20px;
`;

const PostsWrapper = styled.div`
    height: 100%;
    overflow-y: auto;
    padding-bottom: 50px;
`;

const PostGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    row-gap: 25px;
    margin-top: 30px;
`;

export default BottomSheetModal;
