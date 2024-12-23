import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image
          src="/logo.png"
          className="lg:h-8 h-6 w-auto"
          width={200}
          height={200}
          alt="Lincify logo"
        />
      </Link>
    </div>
  );
}
