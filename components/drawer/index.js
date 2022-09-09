import React from "react";

const menus = ["Home", "About Us", "Our Inspiration", "Embodying Our Ethics", "What We're Building", "Linktree"]

export default function Drawer({ isOpen, setIsOpen }) {
  return (
    <main
      className={
        "z-50 fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen mx-w-sm max-w-sm md:max-w-3xl right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screenmax-w-sm pb-10 flex flex-col space-y-6 overflow-y-scroll h-full px-14">
          <div onClick={() => setIsOpen(false)} className="py-5 flex justify-end cursor-pointer">
            <img src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/62aa17d73e2cc1a56f4dba91_Union.svg" />
          </div>
          <div className="py-4">
            {menus.map(menu => (
                <div key={menu} className="text-gray text-2xl cursor-pointer py-5 pl-3">{menu}</div>
            ))}
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
