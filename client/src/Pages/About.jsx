import React from "react";
import AboutUsImg from "../assets/About-us-img.jpg";

const About = () => {
  return (
    <div className="bg-[#f7fdfd] dark:bg-slate-900">
      <div className="container mx-auto px-5 pb-10">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-10 xl:gap-32">
          <div className="flex-1" data-aos="fade-right">
            <h2 className="text-blue-600 font-bold text-3xl mb-5">About Us</h2>
            <p className="font-medium dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vehicula sem libero, et pellentesque sapien ultricies a. Nulla ac
              luctus mauris. Ut egestas iaculis gravida. Nulla facilisis, eros
              et interdum sollicitudin, tellus odio efficitur metus, suscipit
              lobortis arcu ipsum a ante. Suspendisse molestie elit a dui
              convallis, at egestas ante ultricies. Sed rutrum porttitor libero,
              at pellentesque risus elementum in. Phasellus ac imperdiet sem.
              Pellentesque cursus augue a velit mattis vulputate. Donec
              malesuada molestie erat, in lobortis ipsum venenatis efficitur.
            </p>
          </div>
          <div
            className=" flex-1 my-20 w-full flex
         items-center"
            data-aos="fade-left"
          >
            <img
              className="object-cover rounded-lg"
              src={AboutUsImg}
              alt="about_img"
            />
          </div>
        </div>
        <p className="font-medium dark:text-white">
          Etiam justo justo, placerat vel fringilla at, egestas eu felis.
          Phasellus vel libero at ligula mattis ornare. Vestibulum sollicitudin
          risus a urna eleifend, ut congue lacus vehicula. Duis maximus
          efficitur vestibulum. Donec quis mauris a eros mattis posuere. Morbi
          non arcu interdum, posuere diam in, molestie dui. Nam nulla turpis,
          pretium vel mi eu, sagittis sollicitudin mi. Vestibulum mattis dui
          arcu, a dignissim tortor dapibus tempus. Pellentesque in eleifend
          ipsum. Vivamus eu libero aliquet, fringilla orci quis, euismod sem.
          Nulla facilisi. Phasellus pretium facilisis risus ut aliquet. Maecenas
          posuere arcu dictum, varius mi id, lobortis mi. Ut vel consequat ante.
          Duis non ligula sed enim sodales sodales porttitor nec nulla. Nunc in
          dignissim est. Suspendisse molestie nulla id ipsum ultricies
          tincidunt. Fusce mattis nisi et quam finibus, eget tempor neque
          venenatis. In quam velit, aliquam et eleifend ac, tristique ut elit.
          Sed ac leo pellentesque, suscipit odio sed, interdum dui. Nulla luctus
          mi neque, eget dictum arcu ultrices sed. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla nec enim ipsum. Aliquam vel
          consequat enim. Fusce dolor mi, posuere sit amet elit ac, tincidunt
          posuere augue. Phasellus eu maximus ipsum, suscipit dictum magna.
          Quisque leo enim, sodales sed elit in, efficitur commodo nibh. Nullam
          ac massa sit amet ipsum mattis volutpat a et lectus. Phasellus lacus
          metus, sodales sed turpis et, maximus vehicula mi. Mauris auctor neque
          at vehicula malesuada.Nunc in felis eleifend, blandit velit vitae,
          consectetur est. Sed cursus justo eget tortor feugiat, in tristique
          neque commodo. Aenean finibus magna in euismod vestibulum. In in arcu
          vitae nisl aliquam commodo. Vestibulum at dolor enim. Aenean mollis in
          risus in hendrerit. Integer a accumsan erat. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; In
          malesuada interdum enim, a porttitor libero mattis ac. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Vestibulum tellus nisi, ultrices sit amet malesuada ac,
          congue ac massa. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas.
        </p>
      </div>
    </div>
  );
};

export default About;
