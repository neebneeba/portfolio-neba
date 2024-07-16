import { FC } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const SideBar: FC = () => {
  return (
    <div className="relative w-full md:hidden">
      <Popover>
        <PopoverButton className="my-5 ml-5 block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </PopoverButton>

        <PopoverPanel>
          {({ close }) => (
            <div className="absolute z-10 w-full px-5">
              <div className="mt-5 divide-y divide-white/5 rounded bg-yellow-500 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0">
                <div className="p-3">
                  <a
                    className="block rounded-lg px-3 py-2 text-black transition"
                    href="#skills"
                    onClick={() => close()}
                  >
                    Skills
                  </a>
                  <a
                    className="block rounded-lg px-3 py-2 text-black transition"
                    href="#experience"
                    onClick={() => close()}
                  >
                    Experience
                  </a>
                  <a
                    className="block rounded-lg px-3 py-2 text-black transition"
                    href="#projects"
                    onClick={() => close()}
                  >
                    Projects
                  </a>
                </div>
                <div className="p-3"></div>
              </div>
            </div>
          )}
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export default SideBar;
