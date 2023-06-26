import { HStack, Skeleton } from "@chakra-ui/react";

export default function SkeletonList() {
  return (
    <HStack spacing={2}>
      <Skeleton width={"180px"} height={"240px"} />
      <Skeleton width={"180px"} height={"240px"} />
      <Skeleton width={"180px"} height={"240px"} />
      <Skeleton width={"180px"} height={"240px"} />
      <Skeleton width={"180px"} height={"240px"} />
      <Skeleton width={"180px"} height={"240px"} />
      <Skeleton width={"180px"} height={"240px"} />
    </HStack>
  );
}
