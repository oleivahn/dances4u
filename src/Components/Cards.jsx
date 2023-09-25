import React from "react";

const Card = () => {
  return (
    <section className=" pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <SingleCard
            image="https://i.ibb.co/xDbz9BW/image-01.jpg"
            authorImg="https://i.ibb.co/HrDycj7/author-01.png"
            authorName="Naimur Rahman"
            authorTitle="Content Writer"
            CardTitle="Mountain"
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehicula ero felis loreum fitiona fringilla scelerisque. Interdum et malesuada fames ac ante ipsum primis faucibus."
          />
          <SingleCard
            image="https://i.ibb.co/WfK1F1z/image-02.jpg"
            authorImg="https://i.ibb.co/6Xsv3jd/author-02.png"
            authorName="Musharof Chy"
            authorTitle="Web Developer"
            CardTitle="Sea beach "
            titleHref="#"
            CardDescription="Lorem ipsum dolor sit amet, vehicula ero felis loreum fitiona fringilla scelerisque. Interdum et malesuada fames ac ante ipsum primis faucibus."
          />
        </div>
      </div>
    </section>
  );
};

export default Card;

const SingleCard = ({
  image,
  authorImg,
  authorName,
  authorTitle,
  CardDescription,
  CardTitle,
  titleHref,
}) => {
  return (
    <div className="w-full px-4 lg:w-10/12 xl:w-8/12 2xl:w-7/12 drop-shadow">
      <div className="shadow-card-2 relative z-10 mb-10 block items-center overflow-hidden rounded-lg sm:items-stretch md:flex md:items-center xl:items-stretch">
        <div className="h-[250px] w-full md:h-full md:max-w-[320px] lg:max-w-[335px]">
          <img
            src={image}
            alt="image"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="bg-white w-full py-8 px-6 sm:px-8 md:py-6 lg:py-8">
          <div className="mb-5 flex items-center">
            <div className="mr-3 h-[40px] w-full max-w-[40px] overflow-hidden rounded-full">
              <img src={authorImg} alt="image" className="w-full" />
            </div>
            <div className="w-full">
              <h5 className="text-dark text-sm font-semibold sm:text-base text-black">
                {authorName}
              </h5>
              <p className="text-body-color text-xs font-medium text-gray-500">
                {authorTitle}
              </p>
            </div>
          </div>
          <h3>
            <a
              href={titleHref}
              className="hover:text-primary mb-3 block text-xl font-semibold text-black sm:text-2xl md:text-xl lg:text-2xl"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-body-color text-gray-500 leading-relaxed">
            {CardDescription}
          </p>
        </div>
      </div>
    </div>
  );
};
