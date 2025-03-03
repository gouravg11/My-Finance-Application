import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { MdMoreVert } from "react-icons/md";
import TransitionWrapper from "./transition-wrapper";
import { Button } from "./button";
import { BiTransfer } from "react-icons/bi";
import { FaMoneyCheckDollar } from "react-icons/fa6";

export default function AccountMenu({ addMoney, transferMoney }) {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton className="inline-flex w-full justify-center rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 ">
          <MdMoreVert />
        </MenuButton>

        <TransitionWrapper>
          <MenuItems className="absolute p-2 right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-black/50 text-black dark:bg-white dark:text-white">
            <div className="px-1 py-1 space-y-2">
              <MenuItem>
                {({}) => (
                  <Button
                    onClick={transferMoney}
                    className={`group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm text-gray-700 dark:text-gray-300`}
                  >
                    <BiTransfer />
                    Transfer Funds
                  </Button>
                )}
              </MenuItem>

              <MenuItem>
                {({}) => (
                  <Button
                    onClick={addMoney}
                    className={`group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm text-gray-700 dark:text-gray-300 `}
                  >
                    <FaMoneyCheckDollar />
                    Add Money
                  </Button>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </TransitionWrapper>
      </Menu>
    </>
  );
}
