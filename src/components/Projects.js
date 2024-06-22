import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Icon,
  Heading,
  Badge,
  Link,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import ProjectsArray from "./ProjectsArray";
import OtherProjectsArray from "./OtherProjectsArray";
import TagsArray from "./TagsArray";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects({ color }) {
  const projects = ProjectsArray();
  const otherProjects = OtherProjectsArray();
  const options = TagsArray("ProjectsTags");

  const [selected, setSelected] = useState("Mostrar Todos");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = useState({});
  const { isOpen: isZoomOpen, onOpen: onZoomOpen, onClose: onZoomClose } = useDisclosure();
  const [zoomImage, setZoomImage] = useState("");

  const handleSelected = (value) => {
    setSelected(value);
  };

  const handleModalOpen = (project) => {
    setModalContent(project);
    onOpen();
  };

  const handleZoomOpen = (image) => {
    setZoomImage(image);
    onZoomOpen();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "5px",
  };

  const modalSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const filteredOtherProjects = selected === "Mostrar Todos" ? otherProjects : otherProjects.filter(project => project.tags.includes(selected));

  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Proyectos</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Slider {...settings}>
            {projects.map((project) => (
              <Fade bottom key={project.name}>
                <Box px={2} position="relative">
                  <Card
                    direction={{
                      base: "column",
                    }}
                    overflow="hidden"
                    height="450px"
                  >
                    <Box position="relative">
                      <Image objectFit="cover" src={project.image} height="200px" />
                      <IconButton
                        aria-label="Zoom image"
                        icon={<MdOutlineZoomOutMap />}
                        size="sm"
                        position="absolute"
                        bottom="10px"
                        right="10px"
                        backgroundColor="rgba(0, 0, 0, 0.5)"
                        color="white"
                        onClick={() => handleZoomOpen(project.image)}
                      />
                    </Box>

                    <Stack>
                      <CardBody align="left">
                        <Heading size="md">{project.name}</Heading>

                        <Text py={2}>{project.description}</Text>

                        <HStack py={2}>
                          <Button color={`${color}.400`} onClick={() => handleModalOpen(project)}>
                            Ver más
                          </Button>
                        </HStack>
                        <HStack pt={4} spacing={2}>
                          {project.badges.map((badge) => (
                            <Badge
                              key={badge.text}
                              colorScheme={badge.colorScheme}
                            >
                              {badge.text}
                            </Badge>
                          ))}
                        </HStack>
                      </CardBody>
                    </Stack>
                  </Card>
                </Box>
              </Fade>
            ))}
          </Slider>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            Más Proyectos
          </Text>
          <Center px={4}>
            <ButtonGroup variant="outline">
              <Button
                colorScheme={selected === "Mostrar Todos" ? `${color}` : "gray"}
                onClick={() => handleSelected("Mostrar Todos")}
              >
                Mostrar Todos
              </Button>
              {options.map((option) => (
                <Button
                  key={option.value}
                  colorScheme={selected === option.value ? `${color}` : "gray"}
                  onClick={() => handleSelected(option.value)}
                >
                  {option.value}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
          {filteredOtherProjects.length > 1 ? (
            <Slider {...settings}>
              {filteredOtherProjects.map((project) => (
                <Fade bottom key={project.name}>
                  <Box px={2} position="relative">
                    <Card
                      direction={{
                        base: "column",
                      }}
                      overflow="hidden"
                      height="450px"
                    >
                      <Stack>
                        <CardBody align="left">
                          <Heading size="md">{project.name}</Heading>

                          <Text py={2}>{project.description}</Text>

                          <HStack py={2}>
                            {project.buttons.map((button) => (
                              <Link
                                key={button.text}
                                href={button.href}
                                isExternal
                                color={`${color}.400`}
                              >
                                {button.text}
                              </Link>
                            ))}
                          </HStack>
                          <HStack pt={4} spacing={2}>
                            {project.badges.map((badge) => (
                              <Badge
                                key={badge.text}
                                colorScheme={badge.colorScheme}
                              >
                                {badge.text}
                              </Badge>
                            ))}
                          </HStack>
                        </CardBody>
                      </Stack>
                    </Card>
                  </Box>
                </Fade>
              ))}
            </Slider>
          ) : (
            filteredOtherProjects.map((project) => (
              <Fade bottom key={project.name}>
                <Box px={2} position="relative">
                  <Card
                    direction={{
                      base: "column",
                    }}
                    overflow="hidden"
                    height="450px"
                  >
                    <Stack>
                      <CardBody align="left">
                        <Heading size="md">{project.name}</Heading>

                        <Text py={2}>{project.description}</Text>

                        <HStack py={2}>
                          {project.buttons.map((button) => (
                            <Link
                              key={button.text}
                              href={button.href}
                              isExternal
                              color={`${color}.400`}
                            >
                              {button.text}
                            </Link>
                          ))}
                        </HStack>
                        <HStack pt={4} spacing={2}>
                          {project.badges.map((badge) => (
                            <Badge
                              key={badge.text}
                              colorScheme={badge.colorScheme}
                            >
                              {badge.text}
                            </Badge>
                          ))}
                        </HStack>
                      </CardBody>
                    </Stack>
                  </Card>
                </Box>
              </Fade>
            ))
          )}
        </Stack>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalContent.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {modalContent.carrouselImages && modalContent.carrouselImages.length > 1 ? (
              <Slider {...modalSettings}>
                {modalContent.carrouselImages.map((image, index) => (
                  <Box key={index} position="relative">
                    <Image src={image} alt={`${modalContent.name} image ${index + 1}`} />
                    <IconButton
                      aria-label="Zoom image"
                      icon={<MdOutlineZoomOutMap />}
                      size="sm"
                      position="absolute"
                      bottom="10px"
                      right="10px"
                      backgroundColor="rgba(0, 0, 0, 0.5)"
                      color="white"
                      onClick={() => handleZoomOpen(image)}
                    />
                  </Box>
                ))}
              </Slider>
            ) : (
              modalContent.carrouselImages && modalContent.carrouselImages.length === 1 && (
                <Box position="relative">
                  <Image src={modalContent.carrouselImages[0]} alt={modalContent.name} />
                  <IconButton
                    aria-label="Zoom image"
                    icon={<MdOutlineZoomOutMap />}
                    size="sm"
                    position="absolute"
                    bottom="10px"
                    right="10px"
                    backgroundColor="rgba(0, 0, 0, 0.5)"
                    color="white"
                    onClick={() => handleZoomOpen(modalContent.carrouselImages[0])}
                  />
                </Box>
              )
            )}
            <Text mt={4}>{modalContent.detailedDescription}</Text>
            {modalContent.link && (
              <Center mt={4}>
                <Link href={modalContent.link} isExternal>
                  <Button
                    leftIcon={<Icon as={FaExternalLinkAlt} />}
                    colorScheme="gray"
                    variant="solid"
                  >
                    VISITAR
                  </Button>
                </Link>
              </Center>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme={color} mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isZoomOpen} onClose={onZoomClose} size="full" isCentered>
        <ModalOverlay />
        <ModalContent maxW="80vw" maxH="80vh" bg="rgba(0, 0, 0, 0.8)">
          <ModalCloseButton color="white" />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            <Image src={zoomImage} alt="Zoomed image" maxW="100%" maxH="100%" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
