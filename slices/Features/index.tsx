import { Content } from "@prismicio/client";
import { JSXMapSerializer,PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import Heading from "@/app/components/Heading";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="text-center mb-12">{children}</Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="sm" className="sm:text-left text-center mb-3 font-medium">{children}</Heading>
  ),
  paragraph: ({ children }) => (
    <p className="font-medium font-body text-base text-slate-600 sm:text-left text-center">{children}</p>
  )
}

const icons = {
  calendar: <CalendarIcon />,
  bargraph: <BargraphIcon />,
  clover: <CloverIcon />,
  hourglass: <HourglassIcon/>
}

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
        {slice.items.map((item, index) => (
          <div key={index} className="max-w-xs grid sm:place-items-start place-items-center">
            <>{item.icon && <div className="mb-5">{icons[item.icon]}</div>}</>
            <PrismicRichText field={item.title} components={components}/>
            <PrismicRichText field={item.description} components={components}/>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Features;

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
      <path
        stroke="#0891B2"
        strokeWidth="4.99"
        d="M6.67 40c0-12.57 0-18.86 3.9-22.76 3.9-3.9 10.2-3.9 22.76-3.9h13.34c12.57 0 18.85 0 22.76 3.9 3.9 3.9 3.9 10.19 3.9 22.76v6.67c0 12.57 0 18.85-3.9 22.76-3.9 3.9-10.2 3.9-22.76 3.9H33.33c-12.57 0-18.85 0-22.76-3.9-3.9-3.9-3.9-10.2-3.9-22.76V40z"
      ></path>
      <path
        stroke="#0891B2"
        strokeLinecap="round"
        strokeOpacity="0.5"
        strokeWidth="4.99"
        d="M23.33 13.33v-5m33.34 5v-5M8.33 30h63.34"
      ></path>
      <path
        fill="#0891B2"
        d="M60 56.67a3.33 3.33 0 11-6.67 0 3.33 3.33 0 016.67 0zm0-13.34a3.33 3.33 0 11-6.67 0 3.33 3.33 0 016.67 0zM43.33 56.67a3.33 3.33 0 11-6.66 0 3.33 3.33 0 016.66 0zm0-13.34a3.33 3.33 0 11-6.66 0 3.33 3.33 0 016.66 0zM26.67 56.67a3.33 3.33 0 11-6.67 0 3.33 3.33 0 016.67 0zm0-13.34a3.33 3.33 0 11-6.67 0 3.33 3.33 0 016.67 0z"
      ></path>
    </svg>
  );
}

function BargraphIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
      <path
        stroke="#0891B2"
        strokeLinecap="round"
        strokeWidth="5"
        d="M73.3 73.3H6.7"
      ></path>
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="5"
        d="M70 73.3v-25a5 5 0 00-5-5H55a5 5 0 00-5 5v25"
      ></path>
      <path
        stroke="#0891B2"
        strokeWidth="5"
        d="M50 73.3V16.7c0-4.7 0-7.1-1.5-8.6-1.4-1.4-3.8-1.4-8.5-1.4s-7 0-8.5 1.4C30 9.6 30 12 30 16.7v56.6"
      ></path>
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="5"
        d="M30 73.3V31.7a5 5 0 00-5-5H15a5 5 0 00-5 5v41.6"
      ></path>
    </svg>
  );
}

function CloverIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="5"
        d="M26.7 26.7h26.6v26.6H26.7V26.7z"
      ></path>
      <path
        stroke="#0891B2"
        strokeWidth="5"
        d="M53.3 53.3h10a10 10 0 11-10 10v-10zm-26.6 0h-10a10 10 0 1010 10v-10zm26.6-26.6h10a10 10 0 10-10-10v10zm-26.6 0h-10a10 10 0 1110-10v10z"
      ></path>
    </svg>
  );
}

function HourglassIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
      <path
        stroke="#0891B2"
        strokeWidth="5"
        d="M49.9 30.2L40 40l-9.9-9.8C20.4 20.6 15.5 15.8 17 11.6l.4-1c2-4 9-4 22.7-4 13.8 0 20.7 0 22.7 4l.4 1c1.4 4.2-3.5 9-13.2 18.6z"
      ></path>
      <path
        stroke="#0891B2"
        strokeOpacity="0.5"
        strokeWidth="5"
        d="M30.1 49.8L40 40l9.9 9.8c9.7 9.6 14.6 14.4 13.2 18.6l-.4 1c-2 4-9 4-22.7 4-13.8 0-20.7 0-22.7-4a7 7 0 01-.4-1c-1.4-4.2 3.5-9 13.2-18.6z"
      ></path>
    </svg>
  );
}