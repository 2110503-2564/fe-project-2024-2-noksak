"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; // เปลี่ยนจาก "next/router" เป็น "next/navigation"
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Banner() {
    const covers = ["/img/cover.jpg", "/img/cover2.jpg","/img/cover3.jpg","/img/cover4.jpg"];
    const [index, setIndex] = useState(0);
    const router = useRouter();
    const {data:session} = useSession()
    return (
        <div className="block p-[5px] m-0 w-screen h-screen relative" onClick={()=>{setIndex(index+1)}}>
            <Image
                src={covers[index%4]}
                alt="cover"
                fill
                style={{ objectFit: "cover" }} // ใช้ style แทน objectFit prop
            />
            <div className="m-5 top-1/3 z-20 relative">
                <div className="text-center text-white items-center bg-black/40 p-4">
                    <h1 className="text-4xl font-medium">Where every event finds its venue</h1>
                    <h3 className="text-xl font-serif">Explore your event with us</h3>
                </div>
                {session && <span className="absolute top-5 right-5 z-10 text-white pointer-events-none font-ubuntu">Welcome {session.user.name}</span>}
                <button
                    className="bg-white text-cyan-600 border border-cyan-600
                    font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
                    hover:bg-cyan-600 hover:text-white hover:border-transparent"
                    onClick={() => router.push("/restaurant")} // เพิ่มการนำทางเมื่อคลิกปุ่ม
                >
                    Select your Venue
                </button>
            </div>
        </div>
    );
}
