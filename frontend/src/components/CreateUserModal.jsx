import { Button, Modal, ModalContent, ModalOverlay, ModalHeader, useDisclosure, ModalCloseButton, ModalBody, Flex, FormControl, FormLabel, Input, Textarea, RadioGroup, Radio, ModalFooter } from "@chakra-ui/react"
import {BiAddToQueue} from "react-icons/bi"

const CreateUserModal = () => {
const { isOpen, onOpen, onClose } = useDisclosure()
  return <>
  <Button onClick={onOpen}>
    <BiAddToQueue />

    </Button>
    <Modal 
    isOpen={isOpen}
    onClose={onClose}
    >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>My new BFF 😍</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Flex alignItems={"center"} gap={4}>
                    <FormControl>
                        <FormLabel>Full Name</FormLabel>
                        <Input placeholder="John Doe" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Role</FormLabel>
                        <Input placeholder="Software Engineer" />
                    </FormControl>
                </Flex>
                <FormControl mt={4}>
                        <FormLabel>Description</FormLabel>
                        <Textarea
                        resize={"none"}
                        overflowY={"hidden"}
                        placeholder="He's a software engineer who loves to code" />
                    </FormControl>
                    <RadioGroup mt={4}>
								<Flex gap={5}>
									<Radio
										value='male'
										onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
									>
										Male
									</Radio>
									<Radio
										value='female'
										onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
									>
										Female
									</Radio>
								</Flex>
							</RadioGroup>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3} type='submit'>Add</Button>
				<Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </ModalContent>


    </Modal>
  </>
}

export default CreateUserModal