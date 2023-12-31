import Image from "next/image";

import LoadingDots from "../LoadingDots";

import fallback from "../../../assets/img_grupo.png";

import STATUS from "@/src/constants/status/status";

type ImageFromSanityTypes = {
  status: string;
  width: number;
  height: number;
  src: any;
  priority?: boolean;
};

function ImageFromSanity(props: ImageFromSanityTypes) {
  const { status, width, height, src, priority } = props;

  if (status === STATUS.IS_LOADING) {
    return <LoadingDots />;
  }

  return (
    <Image
      src={src?.asset?.url || fallback}
      alt="logo"
      width={width}
      height={height}
      priority={priority}
    />
  );
}

export default ImageFromSanity;
