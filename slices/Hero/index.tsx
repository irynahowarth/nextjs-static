import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import Button from "@/app/components/Button";
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation} 
    >
      
    <div className="grid grid-cols-1 place-items-center text-center">
      <PrismicRichText field={slice.primary.heading}
        components={{
          heading1: ({children}) => (
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-light font-display text-slate-700">{children}</h1>
          )
        }}
      />
      <PrismicRichText field={slice.primary.body}
        components={{
          paragraph:({children})=>(<p className="text-2xl font-body text-center font-normal leading-10 text-slate-600 mb-4 md:mb-8 max-w-md">{children}</p>)
        }}
      />
      <Button field={slice.primary.button_link} className="mb-8 md:mb-10">{slice.primary.button_text}</Button>
        
      <PrismicNextImage field={slice.primary.image} className="drop-shadow-xl max-w-4xl w-full" />
      </div>
      
    </Bounded>
  );
};

export default Hero;
