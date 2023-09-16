import { Flex } from "@chakra-ui/react";

import CommonButton from "@/src/components/Layout/CommonButton";

function ClassNotesExamples() {
  return (
    <Flex w="100%" h="100vh" position="relative">
      <iframe
        id="inlineFrameExample"
        title="Web Dev notes"
        width="100%"
        src="https://webdevnotes.webdev47.repl.co/notes"
      ></iframe>

      <Flex position="absolute" top="-28px" right="14px">
        <CommonButton
          text="Regresar"
          color="white"
          bg="black"
          route={"/portfolio"}
        />
      </Flex>
    </Flex>
  );
}

export default ClassNotesExamples;
