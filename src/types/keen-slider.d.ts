declare module 'keen-slider/react' {
  export interface DragEvent {
    touches?: Touch[];
    pageX?: number;
    preventDefault: () => void;
  }

  export interface SliderTrackDetails {
    abs: number;
    maxIdx: number;
    rel: number;
    details: any;
  }

  export interface DetailsChangedEvent {
    track: {
      details: SliderTrackDetails;
    };
  }

  type SliderEventType = DragEvent | DetailsChangedEvent;

  export interface KeenSliderInstance {
    next: () => void;
    moveToIdx: (idx: number) => void;
    container: HTMLElement;
    on: <T extends SliderEventType>(event: string, callback: (e?: T) => void) => void;
  }

  export interface KeenSliderHooks {
    [key: string]: any;
  }

  interface SlideConfig {
    perView?: number | "auto";
    spacing?: number;
    origin?: 'auto' | 'center' | 'start' | 'end';
  }

  export interface KeenSliderOptions {
    loop?: boolean;
    mode?: "snap" | "free" | "free-snap";
    renderMode?: "performance" | "precision";
    dragSpeed?: number;
    drag?: boolean;
    rubberband?: boolean;
    slides?: SlideConfig;
    breakpoints?: {
      [key: string]: {
        slides?: SlideConfig;
      }
    };
    slideChanged?: (slider: { track: { details: SliderTrackDetails } }) => void;
  }

  export function useKeenSlider(
    options?: KeenSliderOptions,
    plugins?: ((slider: KeenSliderInstance) => void)[] 
  ): [
    (node: HTMLElement | null) => void,
    {
      current?: KeenSliderInstance
    }
  ];
}