"use client";
import {
  Popover,
  type PopoverProps,
} from "@jamsr-ui/react";
import { IconButton } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/shared-icons";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  Repeater,
  Text,
  Tooltip,
  useDialogState,
} from "@jamsr-ui/react";
import { Header, type HeaderProps } from "@jamsr-ui/react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { HiOutlineChatAlt } from "react-icons/hi";
import { GrAppsRounded } from "react-icons/gr";
import { TbNotification } from "react-icons/tb";
import { type Variants } from "framer-motion";
import { Button, Menu, MenuItem, type MenuProps } from "@jamsr-ui/react";
import { ChevronUpIcon } from "@jamsr-ui/shared-icons";

import { Avatar, type AvatarProps } from "@jamsr-ui/react";

const placements: PopoverProps["placement"][] = [
  "bottom-start",

];

const place: PopoverProps["placement"][] = [
  "bottom",

];







const motionVariants: Variants = {
  animate: { scale: 1 },
};
export default function Demo1() {
  return (
    <>
      <Header className="bg-[#0d0e12]">
        <div className="container mx-auto flex items-center justify-between h-full">
          <div className="flex ml-auto justify-center items-center h-full lg:gap-10  text-sm text-[#808290] font-semibold">
            {" "}
            <div className="">
              <Link href="">Home</Link>
            </div>

            {/* Start Profile */}
            <div className="">
            {placements.map((placement) => (
     <Popover
     trigger={
      <Link href="">Profile</Link>
     }
     className="p-2"
     triggerOn="hover"
     key={placement}
          placement={placement}
   >
     <Text as="p">This is a Popover content</Text>
   </Popover>
      ))}
            </div>
            {/* End Profile */}
            
            {/* Start Account  */}
            <div>
            {place.map((place) => (
        <Popover
          trigger={<Link href="">My Account</Link>}
          className="p-2"
          key={place}
          placement={place}
          triggerOn="hover"
        >
          <Text as="p">This is a Popover content</Text>
        </Popover>
      ))}
            </div>
              
            {/* End Account  */}

               {/*Start Network  */}
            <div>
            {place.map((place) => (
        <Popover
          trigger={              <Link href="">Network</Link>
        }
          className="p-2"
          key={place}
          placement={place}
          triggerOn="hover"
        >
          <Text as="p">This is a Popover content</Text>
        </Popover>
      ))}
            </div>
               {/* End Network  */}

               {/* Start Authentication */}
            <div>
            {place.map((place) => (
        <Popover
          trigger={ 
            <Link href="">Authentication</Link>

        }
          className="p-2"
          key={place}
          placement={place}
          triggerOn="hover"
        >
          <Text as="p">This is a Popover content</Text>
        </Popover>
      ))}

            </div>
               {/* End Authentication */}


             {/* Start Help */}
            <div>
            {placements.map((placements) => (
        <Popover
          trigger={ 
            <Link href="">Help</Link>

        }
          className="p-2"
          key={placements}
          placement={placements}
          triggerOn="hover"
        >
          <Text as="p">This is a Popover content</Text>
        </Popover>
      ))}
            </div>
             {/* End Help */}

          </div>

          <div className="flex items-center ml-[30rem]   h-full mr-auto justify-center gap-2 lg:gap-3 text-gray-500 ">
            {/* start search */}
            <div className="cursor-pointer hover:bg-primary-50 hover:text-primary p-2  rounded-full">
              <Dialog>
                <DialogTrigger>
                  <Tooltip title="Hello i am tooltip">
                    <CiSearch size={25} />
                  </Tooltip>
                </DialogTrigger>
                <DialogContent>
                  <CiSearch size={25} className="m-2" />
                  <DialogBody className="flex flex-col gap-4">
                    <Repeater repeat={2}>
                      <Text as="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos corrupti est quos asperiores libero maiores
                        amet non obcaecati odio excepturi illo recusandae
                        tenetur, qui earum dolorem minus, quibusdam optio? Cum.
                      </Text>
                    </Repeater>
                  </DialogBody>
                  <DialogFooter>
                    <DialogTrigger action="close">
                      <Button variant="light" color="secondary">
                        Cancel
                      </Button>
                    </DialogTrigger>
                    <DialogTrigger action="close">
                      <Button color="primary">Submit</Button>
                    </DialogTrigger>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            {/* End search */}

            {/* start chat */}
            <div className="cursor-pointer hover:bg-primary-50 hover:text-primary p-2 rounded-full">
              <Menu
                radius="xl"
                classNames={{
                  popover: "min-w-[500px]  mt-2 ml-50 ",
                }}
                trigger={<HiOutlineChatAlt size={20} />}
              >
                <div className="p-2 ">
                  <MenuItem>Apps</MenuItem>
                  <MenuItem>Info</MenuItem>
                  <MenuItem>Search</MenuItem>
                  <MenuItem isDisabled>Redo</MenuItem>
                  <MenuItem>Cut</MenuItem>
                  <MenuItem isDisabled>Edit</MenuItem>
                  <MenuItem color="danger">Delete</MenuItem>
                  <MenuItem>Undo</MenuItem>
                  <MenuItem>Info</MenuItem>
                  <MenuItem>Search</MenuItem>
                  <MenuItem isDisabled>Redo</MenuItem>
                  <MenuItem>Cut</MenuItem>
                </div>
              </Menu>
            </div>
            {/* start chat */}

            {/* start window */}
            <div className="cursor-pointer hover:bg-primary-50 hover:text-primary p-2 rounded-full">
              <Menu
                radius="xl"
                classNames={{
                  popover: "min-w-[300px]  mt-2 ml-3",
                }}
                trigger={<GrAppsRounded size={20} />}
              >
                <div className="p-2 ">
                  <MenuItem>Apps</MenuItem>
                  <MenuItem>Info</MenuItem>
                  <MenuItem>Search</MenuItem>
                  <MenuItem isDisabled>Redo</MenuItem>
                  <MenuItem>Cut</MenuItem>
                  <MenuItem isDisabled>Edit</MenuItem>
                  <MenuItem color="danger">Delete</MenuItem>
                  <MenuItem>Undo</MenuItem>
                  <MenuItem>Info</MenuItem>
                  <MenuItem>Search</MenuItem>
                  <MenuItem isDisabled>Redo</MenuItem>
                  <MenuItem>Cut</MenuItem>
                </div>
              </Menu>
            </div>

            {/* End window */}

            {/* start notification */}

            <div className="cursor-pointer hover:bg-primary-50 hover:text-primary p-2 rounded-full">
              <Menu
                radius="xl"
                classNames={{
                  popover: "min-w-[450px]  mt-2 ml-20",
                }}
                trigger={<TbNotification size={25} />}
              >
                <div className="p-2">
                  <MenuItem>Undo</MenuItem>
                  <MenuItem>Info</MenuItem>
                  <MenuItem>Search</MenuItem>
                  <MenuItem isDisabled>Redo</MenuItem>
                  <MenuItem>Cut</MenuItem>
                  <MenuItem isDisabled>Edit</MenuItem>
                  <MenuItem color="danger">Delete</MenuItem>
                  <MenuItem>Undo</MenuItem>
                  <MenuItem>Info</MenuItem>
                  <MenuItem>Search</MenuItem>
                  <MenuItem isDisabled>Redo</MenuItem>
                  <MenuItem>Cut</MenuItem>
                </div>
              </Menu>
            </div>

            {/* End notification */}

            {/* start profile */}

            <div className="cursor-pointer">
              <Menu
                radius="xl"
                classNames={{
                  popover: "min-w-[230px]  mt-2 ml-4",
                }}
                trigger={
                  <Avatar
                    alt="image"
                    className="flex"
                    src={`https://as1.ftcdn.net/jpg/05/90/59/88/220_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg`}
                    size="sm"
                    color="success"
                    isBordered
                  />
                }
              >
                <div className="p-2">
                  <Avatar
                    alt="image"
                    className="flex"
                    src={`https://as1.ftcdn.net/jpg/05/90/59/88/220_F_590598870_TOcGd4cUZzPoEMlxSc7XYwcupHOE0vLM.jpg`}
                    size="sm"
                    color="success"
                    isBordered
                  />
                  <MenuItem>Undo</MenuItem>
                  <MenuItem>Info</MenuItem>
                  <MenuItem>Search</MenuItem>
                  <MenuItem isDisabled>Redo</MenuItem>
                  <MenuItem>Cut</MenuItem>
                  <MenuItem isDisabled>Edit</MenuItem>
                  <MenuItem color="danger">Delete</MenuItem>
                </div>
              </Menu>
            </div>
            {/* End profile */}
          </div>
        </div>
      </Header>
      <div className="flex flex-col items-center justify-center gap-8 p-4"></div>
    </>
  );
}
