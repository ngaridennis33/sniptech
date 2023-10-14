import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");

  const POST_PER_PAGE = 5;

  try {
    const posts = await prisma.post.findMany({
      // At the beginning the post is 1, multiplying it by zero
      // makes it zero. Taking the first two posts then none will be skipped.
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
    });

    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
