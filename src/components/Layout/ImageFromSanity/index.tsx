import Image from "next/image";

import LoadingDots from "../LoadingDots";

import STATUS from "@/src/constants/status/status";

type ImageFromSanityTypes = {
  status: string;
  width: number;
  height: number;
  src: any;
};

function ImageFromSanity(props: ImageFromSanityTypes) {
  const { status, width, height, src } = props;

  if (status === STATUS.IS_LOADING) {
    return <LoadingDots />;
  }

  return <Image src={src.asset.url} alt="logo" width={width} height={height} />;
}

export default ImageFromSanity;
