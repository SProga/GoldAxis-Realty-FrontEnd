"use client";
import { useAppStore } from "@/app/lib/stores/useAppStore";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import ImageRenderer from "../../UI/ImageRenderer/ImageRenderer";
import classes from "./featuredSection.module.css";

export default function FeaturedSection({ pageData = {} }) {
  const { featured_section } = pageData;
  const featuredProperties = useAppStore((state) => state.featuredProperties);
  let fakeData = [...featuredProperties];
  for (let i = 0; i < 5; i++) {
    fakeData[i] = featuredProperties[0];
  }

  return (
    <>
      <div className="mb-10">
        <BlocksRenderer
          content={featured_section.featured_headline}
          blocks={{
            heading: ({ level, children }) => {
              if (level === 1) {
                return (
                  <h1 className="text-4xl font-bold text-primary mb-6">
                    {children}
                  </h1>
                );
              } else if (level === 2) {
                return (
                  <h2 className="text-3xl font-semibold mb-4">{children}</h2>
                );
              } else if (level === 3) {
                return <h2 className="text-2xl mb-4 font-light">{children}</h2>;
              }
              return <p>{children}</p>;
            },
            paragraph: ({ children }) => <div className="pb-2">{children}</div>,
          }}
        />
      </div>
      <div
        className={`${classes.featured_grid} mx-auto grid grid-cols-3 gap-6 h-[500px]`}
      >
        {/* Left large image + button */}
        <div className="col-start-1 col-span-1 row-start-1 row-end-[4] bg-gray-100 rounded-xl p-6 flex flex-col justify-between">
          <div className="relative w-full h-full rounded-lg overflow-hidden mb-5">
            <ImageRenderer
              src={featuredProperties[0].images[0].url}
              fill
              className="object-cover"
            />
          </div>
          <button className="mt-auto w-max bg-secondary cursor-pointer text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-secondary transition">
            Explore Properties →
          </button>
        </div>

        {/* Right images grid */}
        {fakeData.slice(1, 5).map((property, idx) => (
          <div
            key={idx}
            className="col-span-1 gap-x-4 gap-y-2 relative w-full rounded-lg overflow-hidden"
          >
            <ImageRenderer
              src={property.images[0].url}
              fill
              className="object-cover"
            />
          </div>
        ))}

        {/* Full width descriptive text below right images */}
        <BlocksRenderer
          content={featured_section.featured_description}
          blocks={{
            paragraph: ({ children }) => (
              <div className="col-span-2 px-2 text-gray-700 leading-relaxed">
                {children}
              </div>
            ),
          }}
        />
      </div>
    </>
  );
}
