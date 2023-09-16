import { Flex, SkeletonCircle } from "@chakra-ui/react";

const styles = {
  mainContainer: {
    w: "30px",
    justifyContent: "space-evenly",
    alignItems: "center",
    my: "5px",
  },
};

function LoadingDots() {
  return (
    <Flex {...styles.mainContainer}>
      <SkeletonCircle size="1" />
      <SkeletonCircle size="1" />
      <SkeletonCircle size="1" />
    </Flex>
  );
}

export default LoadingDots;
