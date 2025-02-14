import { useContext } from "react";
import { Link } from "react-router";
import { UsersContext } from "../providers/UsersProvider";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@heroui/react";

export default function BlogCard({ blog }) {
  const [isFollowed, setIsFollowed] = React.useState(false);

  const { users } = useContext(UsersContext);

  const author = users.find((user) => user.id === blog.userId);
  console.log("author", author);

  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={author?.image} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {author?.firstName}
              {author?.lastName}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{author?.username}
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{blog.body.slice(0, 150)}...</p>
        <span className="pt-2">
          #Blog #readmore
          <span aria-label="computer" className="py-2" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="font-semibold text-default-400 text-small">
              Blog review: {blog.views || "No views available"}
            </p>
            <div className="flex gap-2 text-sm">
              <p className="text-green-600">
                Likes: {blog.reactions?.likes || 0}
              </p>
              <p className="text-red-600">
                Dislikes: {blog.reactions?.dislikes || 0}
              </p>
            </div>
          </div>

          <Link to={`/blog/${blog.id}`}>
            <buton className="bg-blue-500 border-none rounded-full px-2 py-1 text-white cursot-pointer text-sm flex justify-end">
              <p>Read More</p>
            </buton>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
