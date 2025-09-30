import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchGitHubRepos } from '../api/github';
import { GitHubRepo } from '../types/github';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import 'keen-slider/keen-slider.min.css';

declare const process: {
  env: {
    REACT_APP_GITHUB_USERNAME?: string;
    [key: string]: string | undefined;
  };
};

const GitHubIcon = () => (
  <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true">
    <path fill="currentColor" d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
  </svg>
);

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const username = process.env.REACT_APP_GITHUB_USERNAME;
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 3,
        spacing: 20,
      },
      breakpoints: {
        '(max-width: 1024px)': { slides: { perView: 2, spacing: 15 } },
        '(max-width: 640px)': { slides: { perView: 1, spacing: 10 } }
      },
      loop: false,
      mode: "snap",
      dragSpeed: 1,
      drag: true,
      slideChanged: (slider) => {
        setCurrentSlide(slider.track.details.rel);
      },
    }
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
        } finally {
          setIsLoading(false);
        }
      }
    };
    
    fetchRepos();
  }, [username]);

  useEffect(() => {
    if (!isLoading && repos.length > 0) {
      const timer = setTimeout(() => {
        if (instanceRef.current && repos.length > 1) {
          instanceRef.current.moveToIdx(0);
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isLoading, repos.length]);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900/16 via-gray-900/18 to-gray-900/20" style={{ backgroundColor: 'oklch(0.40 0 0 / 0.01)', overflow: 'visible' }}>
      <div className="container mx-auto px-6" style={{ overflow: 'visible' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-balance text-white">{t('projects.title')}</h2>
          <p className="text-lg text-gray-400 text-pretty">
            {t('projects.description')}
          </p>
        </motion.div>

        {!isLoading && repos.length > 0 && (
          <>
            <div className="relative px-12" style={{ overflow: 'visible' }}>
              <button
                onClick={() => instanceRef.current?.moveToIdx(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-white hover:bg-gray-700/90 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>

              <button
                onClick={() => instanceRef.current?.moveToIdx(Math.min(repos.length - 1, currentSlide + 1))}
                disabled={currentSlide >= repos.length - 3}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-white hover:bg-gray-700/90 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>

              <div className="mx-8" style={{ overflow: 'visible' }}>
                <div 
                  ref={sliderRef} 
                  className="keen-slider py-12 px-2"
                  style={{
                    display: 'flex',
                    gap: '20px'
                  }}
                >
                  {repos.map((repo, index) => (
                    <motion.div
                      className="keen-slider__slide"
                      key={repo.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      style={{ minWidth: "280px", maxWidth: "280px" }}
                    >
                      <motion.div 
                        className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 h-80 flex flex-col hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2"
                        whileHover={{ scale: 1.03 }}
                        style={{ transformOrigin: 'center' }}
                      >
                        <div className="mb-3">
                          <h3 className="text-lg font-bold text-white mb-2 truncate">{repo.name}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 flex-grow">
                            {repo.description || t('projects.noDescription')}
                          </p>
                        </div>

                        <div className="flex items-center gap-3 text-gray-400 text-sm mb-3">
                          <span className="flex items-center gap-1">
                            ⭐ {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            🔄 {repo.forks_count}
                          </span>
                          {repo.language && (
                            <span className="flex items-center gap-1">
                              🔵 {repo.language}
                            </span>
                          )}
                        </div>

                        {repo.topics && repo.topics.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {repo.topics.slice(0, 3).map((topic) => (
                              <span 
                                key={topic}
                                className="text-xs bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2 py-1 rounded-full"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex gap-2 mt-auto">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-transparent border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200 text-sm font-medium"
                          >
                            <CodeBracketIcon className="w-4 h-4" />
                            {t('projects.buttons.code')}
                          </a>
                          {repo.homepage && (
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 text-sm font-medium"
                            >
                              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                              {t('projects.buttons.demo')}
                            </a>
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div 
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
              href="https://github.com/DarioAlbor"
              target="_blank"
              rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 hover:-translate-y-1 shadow-lg"
            >
              <GitHubIcon />
              {t('projects.visitGithub')}
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;