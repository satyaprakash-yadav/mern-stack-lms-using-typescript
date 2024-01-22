import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard"

type Props = {};

const reviews = [
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/women/11.jpg",
        profession: "Student | Cambridge university",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eaque laudantium, provident reiciendis consectetur sed ut adipisci maiores quaerat "
    },
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/women/29.jpg",
        profession: "Student | Cambridge university",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eaque laudantium, provident reiciendis consectetur sed ut adipisci maiores quaerat inventore eos nemo excepturi quisquam. Error ad nam deleniti repudiandae asperiores quod exercitationem, "
    },
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
        profession: "Student | Cambridge university",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eaque laudantium, provident reiciendis consectetur sed ut adipisci maiores quaerat inventore eos nemo excepturi quisquam. Error ad nam deleniti repudiandae asperiores quod exercitationem, quisquam sapiente ab sequi illo, nisi excepturi facilis maiores commodi. "
    },
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/men/64.jpg",
        profession: "Student | Cambridge university",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eaque laudantium, provident reiciendis consectetur sed ut  "
    },
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        profession: "Student | Cambridge university",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eaque laudantium, provident reiciendis consectetur sed ut adipisci maiores quaerat inventore eos nemo excepturi quisquam. Error ad nam deleniti repudiandae asperiores quod exercitationem, quisquam sapiente ab sequi illo, nisi excepturi facilis maiores commodi. Nulla quibusdam obcaecati quo, quae vero provident expedita rem dolore eligendi! Inventore dolorum quae eius laborum esse cum adipisci aliquam sunt"
    },
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/women/50.jpg",
        profession: "Student | Cambridge university",
        comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eaque laudantium, provident reiciendis consectetur sed ut adipisci maiores quaerat inventore eos nemo excepturi quisquam. Error ad nam deleniti repudiandae asperiores quod exercitationem, quisquam sapiente ab sequi illo, nisi excepturi facilis maiores commodi. Nulla quibusdam obcaecati quo, quae vero provident expedita rem dolore eligendi! Inventore dolorum quae eius laborum esse cum adipisci aliquam sunt"
    },
]

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/assests/Business-img.png")}
            alt="business"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[30px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
          <br /> See What They Say About Us
          </h3>
          <p className={styles.label}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            veritatis sit itaque quas laborum qui accusamus nobis! Quibusdam
            eaque illum possimus et. Iste, hic non.
          </p>
        </div>
      <br />
      <br />
      </div>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-40px]">
        {reviews && reviews.map((i, index)=> <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
