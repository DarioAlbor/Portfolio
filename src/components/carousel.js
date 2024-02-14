import React, { useState, useEffect } from "react";
import { Box, Container, Stack, Icon } from "@chakra-ui/react";
import { FaReact, FaNodeJs, FaLinux } from "react-icons/fa"; // Importa los íconos de Font Awesome
import { SiMongodb, SiMysql, SiPostgresql, SiChakraui, SiTsnode, SiGit, SiHtml5, SiJavascript, SiMicrosoftazure, SiMicrosoftoffice, SiDotnet, SiAdobe, SiAmazonaws, SiAngularjs, SiCsharp, SiCss3 } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const icons = [FaReact, FaNodeJs, FaLinux, SiCsharp, SiMysql, SiMongodb, SiCss3, SiHtml5, SiJavascript, SiGit, SiMicrosoftazure, SiMicrosoftoffice, SiPostgresql, SiAngularjs, SiChakraui, TbBrandNextjs, SiTsnode, SiDotnet, SiAdobe, SiAmazonaws]; // Lista de íconos que se mostrarán en el carrusel

export default function Carousel({ color }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartIndex, setDragStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prevIndex) =>
          prevIndex === icons.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, isDragging]);

  const getNextIndex = (currentIndex) => {
    if (currentIndex === icons.length - 1) {
      return icons.indexOf(FaReact); // Vuelve al ícono de React después de llegar a SiAmazonaws
    } else {
      return currentIndex + 1;
    }
  };

  const handleIconMouseEnter = () => {
    document.body.style.cursor = "pointer";
  };

  const handleIconMouseLeave = () => {
    document.body.style.cursor = "default";
  };

  const handleMouseDown = (event, index) => {
    setIsDragging(true);
    setDragStartX(event.clientX);
    setDragStartIndex(index);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const dragDelta = event.clientX - dragStartX;
      const iconDelta = Math.round(dragDelta / 30); // Ajusta la sensibilidad del desplazamiento
      setCurrentIndex((prevIndex) => {
        let newIndex = dragStartIndex - iconDelta;
        if (newIndex < 0) {
          newIndex = 0; // Evita moverse más allá del primer ícono
        } else if (newIndex >= icons.length) {
          newIndex = icons.length - 1; // Evita moverse más allá del último ícono
        }
        return newIndex;
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Container
      maxW={"3xl"}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={0}
        pt={{ base: 0, md: 10 }} // Ajuste del espacio superior
        pb={{ base: 20, md: 20 }} // Ajuste del espacio inferior
        position="relative"
        overflow="hidden"
      >
        {icons.map((IconComponent, index) => {
          let position = index - currentIndex;
          if (position < 0) {
            position += icons.length; // Asegura que la posición sea positiva
          }
          return (
            <Icon
              key={index}
              as={IconComponent}
              boxSize={15 + (getNextIndex(currentIndex) === index ? 18 : 0)}
              color={`${color}.400`}
              opacity={
                Math.abs(position) > 1 ? 0.3 : 1 // Utiliza la posición para determinar la opacidad
              }
              transition="all 0.5s"
              position="absolute"
              left={`${position * 10 + 20}%`}
              transform={`translateX(-20%) scale(${
                getNextIndex(currentIndex) === index ? 2.5 : 2
              })`}
              onMouseEnter={handleIconMouseEnter}
              onMouseLeave={handleIconMouseLeave}
              onMouseDown={(event) => handleMouseDown(event, index)}
            />
          );
        })}
      </Stack>
    </Container>
  );
}
