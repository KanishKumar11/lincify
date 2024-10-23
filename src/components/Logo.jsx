import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div>
      {" "}
      <Link href="/">
        <Image
          src="/logo.png"
          className="h-8 w-auto"
          width={200}
          height={200}
          alt="Lincify logo"
        />
      </Link>
    </div>
  );
}
