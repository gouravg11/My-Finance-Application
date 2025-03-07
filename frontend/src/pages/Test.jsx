import React from "react";
import { Transition } from "@headlessui/react";

function Test() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>

      <Transition
        show={isOpen}
        enter="transform transition-transform duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition-transform duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="p-4 bg-green-500 text-white">Sliding Menu</div>
      </Transition>
    </div>
  );
}

export default Test;
