import React, { useEffect, useState } from 'react';
import { fetchGitHubRepos } from '../api/github';
import { GitHubRepo } from '../types/github';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const ProjectsContainer = styled.div`
  min-height: auto;
  background-color: rgb(31 41 55);
  padding: 4rem 1rem 2rem 1rem;
`;

const ContentWrapper = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0;
`;

const Title = styled(motion.h2)`
  font-size: 2.25rem;
  font-weight: bold;	 
  color: white;
  margin-bottom: 3rem;
`;

const SliderContainer = styled.div`
  position: relative;
  padding: 0;
  width: calc(100vw - 2rem);
  margin-left: 50%;
  transform: translateX(-50%);
  max-width: 1600px;
  overflow: hidden;
  
  .keen-slider {
    padding: 2rem 0;
    display: flex;
    gap: 0;
  }

  .keen-slider__slide {
    min-width: 300px !important;
    max-width: 300px !important;
    padding: 0 5px;
  }
`;

const RepoCard = styled(motion.div)`
  padding: 1.25rem;
  border-radius: 0.75rem;
  background: rgb(17 24 39);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0 5px;
  height: 320px;
  width: 100%;
  
  h3 {
    margin: 0;
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .description {
    color: rgb(156 163 175);
    font-size: 0.875rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    flex: 0 1 auto;
  }
`;

const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
  padding-top: 0.5rem;
`;

const Topic = styled.span`
  background: rgb(55 65 81);
  color: rgb(209 213 219);
  padding: 0.2rem 0.8rem;
  border-radius: 2rem;
  font-size: 0.8rem;
  white-space: nowrap;
`;

const Stats = styled.div`
  display: flex;
  gap: 1rem;
  color: rgb(156 163 175);
  font-size: 0.9rem;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

const ActionButton = styled.a`
  background-color: white;
  color: rgb(17 24 39);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  text-align: center;
  flex: 1;

  &:hover {
    background-color: rgb(209 213 219);
    text-decoration: none;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 0.5rem;
`;

const GitHubButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: white;
  color: rgb(17 24 39);
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  margin: 2rem auto 0;
  transition: all 0.2s;
  width: fit-content;

  &:hover {
    background-color: rgb(209 213 219);
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.25rem;
  }
`;

const GitHubIcon = () => (
  <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true">
    <path fill="currentColor" d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
  </svg>
);

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const username = process.env.REACT_APP_GITHUB_USERNAME;
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 4,
        spacing: 10,
      },
      breakpoints: {
        '(max-width: 1280px)': { slides: { perView: 3 } },
        '(max-width: 768px)': { slides: { perView: 2 } },
        '(max-width: 640px)': { slides: { perView: 1 } }
      },
      loop: true,
      mode: "snap",
      dragSpeed: 1,
      drag: true,
      slideChanged: (slider) => {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  useEffect(() => {
    const fetchRepos = async () => {
      if (username) {
        try {
          setIsLoading(true);
          const data = await fetchGitHubRepos(username);
          const sortedRepos = data.sort((a: GitHubRepo, b: GitHubRepo) => 
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );
          setRepos(sortedRepos);
        } catch (error) {
          console.error('Error fetching repos:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    
    fetchRepos();
  }, [username]);

  return (
    <ProjectsContainer>
      <ContentWrapper>
        <Title 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Mis Proyectos
        </Title>
        {!isLoading && (
          <>
            <SliderContainer>
              <div ref={sliderRef} className="keen-slider">
                {repos.map((repo) => (
                  <motion.div
                    className="keen-slider__slide"
                    key={repo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ minWidth: "300px", maxWidth: "300px" }}
                  >
                    <RepoCard>
                      <h3>{repo.name}</h3>
                      <p className="description">{repo.description || 'Sin descripción'}</p>
                      
                      <Stats>
                        <span>⭐ {repo.stargazers_count}</span>
                        <span>🔄 {repo.forks_count}</span>
                        {repo.language && <span>🔵 {repo.language}</span>}
                      </Stats>

                      {repo.topics && repo.topics.length > 0 && (
                        <TopicsContainer>
                          {repo.topics.slice(0, 3).map((topic) => (
                            <Topic key={topic}>{topic}</Topic>
                          ))}
                        </TopicsContainer>
                      )}

                      <ButtonsContainer>
                        {repo.homepage && (
                          <ActionButton href={repo.homepage} target="_blank" rel="noopener noreferrer">
                            Demo
                          </ActionButton>
                        )}
                        <ActionButton href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </ActionButton>
                      </ButtonsContainer>
                    </RepoCard>
                  </motion.div>
                ))}
              </div>
            </SliderContainer>
            <GitHubButton 
              href="https://github.com/DarioAlbor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              Visita mi GitHub
            </GitHubButton>
          </>
        )}
      </ContentWrapper>
    </ProjectsContainer>
  );
};

export default Projects;