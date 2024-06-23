import { useState, useEffect } from "react";

const parseOtherProjects = (mdContent) => {
  const others = [];
  const lines = mdContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const name = line.substr(3).trim();
      const description = lines[++i].trim();
      const tags = lines[++i].split(":")[1].trim().split(", ");
      const badges = [];
      let visitar = null;
      let image = null;

      while (lines[++i] && !lines[i].startsWith("- Lenguajes:")) {
        if (lines[i].startsWith("- Visitar:")) {
          visitar = lines[i].split(":")[1].trim();
          // Añadir prefijo http:// si no está presente
          if (!/^https?:\/\//i.test(visitar)) {
            visitar = `http://${visitar}`;
          }
        } else if (lines[i].startsWith("- Imagen:")) {
          image = lines[i].split(":")[1].trim();
        }
      }
      while (lines[++i] && lines[i].startsWith("  - ")) {
        const badgeLine = lines[i].substr(4).split("[");
        const badgeName = badgeLine[0].trim();
        const badgeColor = badgeLine[1].split("]")[0].trim();
        badges.push({ text: badgeName, colorScheme: badgeColor });
      }

      others.push({
        name,
        description,
        tags,
        badges,
        visitar,
        image,
      });
    }
  }

  return others;
};

const OtherProjectsArray = () => {
  const [otherProjects, setOtherProjects] = useState([]);

  useEffect(() => {
    fetch("/content/OtherProjects.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setOtherProjects(parseOtherProjects(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return otherProjects;
};

export default OtherProjectsArray;
