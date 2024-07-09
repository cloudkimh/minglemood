import React, { ReactElement } from "react";
import { ReactComponent as ArrowLeftIco } from "../../assets/icon/arrow-left.svg";
import { ReactComponent as ArrowUpIco } from "../../assets/icon/arrow-up.svg";
import { ReactComponent as AvatarIco } from "../../assets/icon/avatar.svg";
import { ReactComponent as BulletedListIco } from "../../assets/icon/bulleted-list.svg";
import { ReactComponent as CameraAddIco } from "../../assets/icon/camera-add.svg";
import { ReactComponent as CardIco } from "../../assets/icon/card.svg";
import { ReactComponent as CheckIco } from "../../assets/icon/check.svg";
import { ReactComponent as ChevronLeftSmIco } from "../../assets/icon/chevron-left-sm.svg";
import { ReactComponent as ChevronLeftIco } from "../../assets/icon/chevron-left.svg";
import { ReactComponent as ChevronRightSmIco } from "../../assets/icon/chevron-right-sm.svg";
import { ReactComponent as ChevronRightIco } from "../../assets/icon/chevron-right.svg";
import { ReactComponent as ChevronUpIco } from "../../assets/icon/chevron-up.svg";
import { ReactComponent as CoinIco } from "../../assets/icon/coin.svg";
import { ReactComponent as CreditCardIco } from "../../assets/icon/credit-card.svg";
import { ReactComponent as CrossIco } from "../../assets/icon/cross.svg";
import { ReactComponent as ExitIco } from "../../assets/icon/exit.svg";
import { ReactComponent as FilterIco } from "../../assets/icon/filter.svg";
import { ReactComponent as HeadphoneIco } from "../../assets/icon/headphone.svg";
import { ReactComponent as HeartIco } from "../../assets/icon/heart.svg";
import { ReactComponent as HostIco } from "../../assets/icon/host.svg";
import { ReactComponent as KakaoPayIco } from "../../assets/icon/kakaopay.svg";
import { ReactComponent as LikeHeartActiveIco } from "../../assets/icon/like-heart-active.svg";
import { ReactComponent as LikeHeartIco } from "../../assets/icon/like-heart.svg";
import { ReactComponent as MagnifierIco } from "../../assets/icon/magnifier.svg";
import { ReactComponent as NaverPayIco } from "../../assets/icon/naverpay.svg";
import { ReactComponent as PencilIco } from "../../assets/icon/pencil.svg";
import { ReactComponent as PhoneIco } from "../../assets/icon/phone.svg";
import { ReactComponent as PhotoIco } from "../../assets/icon/photo.svg";
import { ReactComponent as RefreshIco } from "../../assets/icon/refresh.svg";
import { ReactComponent as SearchBlackIco } from "../../assets/icon/search-black.svg";
import { ReactComponent as SpeakerIco } from "../../assets/icon/speaker.svg";
import { ReactComponent as SpeechBubbleIco } from "../../assets/icon/speech-bubble.svg";
import { ReactComponent as StarEmptyIco } from "../../assets/icon/star-empty.svg";
import { ReactComponent as StarFullIco } from "../../assets/icon/star-full.svg";
import { ReactComponent as StarHalfIco } from "../../assets/icon/star-half.svg";
import { ReactComponent as StarIco } from "../../assets/icon/star.svg";
import { ReactComponent as TosspayIco } from "../../assets/icon/tosspay.svg";
import { ReactComponent as CameraIco } from "../../assets/icon/camera.svg";

export type IconProps = {
    name: IconNames;
    className?: string;
};

type IconNames =
    | "arrow-left"
    | "arrow-up"
    | "avatar"
    | "bulleted-list"
    | "camera"
    | "camera-add"
    | "card"
    | "check"
    | "chevron-left-sm"
    | "chevron-left"
    | "chevron-right-sm"
    | "chevron-right"
    | "chevron-up"
    | "coin"
    | "credit-card"
    | "cross"
    | "exit"
    | "filter"
    | "headphone"
    | "heart"
    | "host"
    | "kakaopay"
    | "like-heart-active"
    | "like-heart"
    | "magnifier"
    | "naverpay"
    | "pencil"
    | "phone"
    | "photo"
    | "refresh"
    | "search-black"
    | "speaker"
    | "speech-bubble"
    | "star-empty"
    | "star-full"
    | "star-half"
    | "star"
    | "tosspay";

const iconMaps: {
    [key in IconNames]: ReactElement;
} = {
    "arrow-left": <ArrowLeftIco />,
    "arrow-up": <ArrowUpIco />,
    avatar: <AvatarIco />,
    "bulleted-list": <BulletedListIco />,
    camera: <CameraIco />,
    "camera-add": <CameraAddIco />,
    card: <CardIco />,
    check: <CheckIco />,
    "chevron-left-sm": <ChevronLeftSmIco />,
    "chevron-left": <ChevronLeftIco />,
    "chevron-right-sm": <ChevronRightSmIco />,
    "chevron-right": <ChevronRightIco />,
    "chevron-up": <ChevronUpIco />,
    coin: <CoinIco />,
    "credit-card": <CreditCardIco />,
    cross: <CrossIco />,
    exit: <ExitIco />,
    filter: <FilterIco />,
    headphone: <HeadphoneIco />,
    heart: <HeartIco />,
    host: <HostIco />,
    kakaopay: <KakaoPayIco />,
    "like-heart-active": <LikeHeartActiveIco />,
    "like-heart": <LikeHeartIco />,
    magnifier: <MagnifierIco />,
    naverpay: <NaverPayIco />,
    pencil: <PencilIco />,
    phone: <PhoneIco />,
    photo: <PhotoIco />,
    refresh: <RefreshIco />,
    "search-black": <SearchBlackIco />,
    speaker: <SpeakerIco />,
    "speech-bubble": <SpeechBubbleIco />,
    "star-empty": <StarEmptyIco />,
    "star-full": <StarFullIco />,
    "star-half": <StarHalfIco />,
    star: <StarIco />,
    tosspay: <TosspayIco />,
};

function Icon(props: IconProps) {
    const { name, className } = props;
    const iconElement = iconMaps[name];

    if (!iconElement) {
        return null;
    }

    return React.cloneElement(iconElement, { className });
}

export default Icon;
