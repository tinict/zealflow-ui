"use client";

import React from "react";
import Link from "next/link";
import { Input } from "antd";
import { Button } from "@nextui-org/button";

import { siteConfig } from "@/config/site";
import { images } from "@/assets";

function LoginPage() {
  return (
    <div className="bg-white md:min-w-[420px] p-10 rounded-md shadow-2xl flex flex-col gap-4 item-center z-50">
      <div className="w-full flex justify-center my-4">
        <img alt="logo" className="w-[60%]" src={images.logo.src} />
      </div>

      <p className="text-[32px] text-main text-center font-semibold mb-4">
        Đăng nhập
      </p>

      <Input className="h-[40px] rounded-none" placeholder="emali..." />
      <Input className="h-[40px] rounded-none" placeholder="password..." />

      <Button className="bg-main h-[40px] rounded-none text-white font-normal">
        Đăng nhập
      </Button>
      <p>
        Bạn mới biết đến Echop?{" "}
        <Link className="text-main" href={siteConfig.routes.register}>
          Đăng ký
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
