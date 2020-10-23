import Link from 'next/link';
import { useBehaviorTracking } from '@uniformdev/optimize-tracker-react';

import Splitter from './Splitter';
import { IHeroFields } from '../lib/contentful';
import { Entry } from 'contentful';

const Hero: React.FC<Entry<IHeroFields>> = ({fields}) => {
  useBehaviorTracking(fields.unfrmOptIntentTag);

  const { title, description, buttonText, image, buttonLinkSlug } = fields;
  return (
    <>
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">Uniform demo</p>
            <h1 className="my-4 text-5xl font-bold leading-tight">{title}</h1>
            <p className="leading-normal text-2xl mb-8">{description}</p>

            <Link href={'/[[...slug]]'} as={buttonLinkSlug}>
              <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                {buttonText}
              </button>
            </Link>
          </div>
          {image && (
            <div className="w-full md:w-3/5 py-6 text-center">
              <img className="w-full md:w-4/5 z-50" src={image.fields?.file?.url} alt={buttonText} />
            </div>
          )}
        </div>
      </div>
      <Splitter />
    </>
  );
};

export default Hero;
