import { useWeb3 } from "@/contexts/useWeb3";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    return (
        <>
            <p>Welcome</p>
            <div className="discover w-full">
                <h2>On this moment</h2>
                <div className="overflow-x-scroll whitespace-nowrap">
                    <ul className="flex gap-4 flex-none">
                        <li className="flex-none"><Image src="/test.avif" alt="test" width={300} height={150} /></li>
                        <li className="flex-none"><Image src="/test.avif" alt="test" width={300} height={150} /></li>
                        <li className="flex-none"><Image src="/test.avif" alt="test" width={300} height={150} /></li>
                        <li className="flex-none"><Image src="/test.avif" alt="test" width={300} height={150} /></li>
                        <li className="flex-none"><Image src="/test.avif" alt="test" width={300} height={150} /></li>
                        <li className="flex-none"><Image src="/test.avif" alt="test" width={300} height={150} /></li>
                        <li className="flex-none"><Image src="/test.avif" alt="test" width={300} height={150} /></li>
                        <li className="flex-none"><Image src="/test.avif" alt="test" width={300} height={150} /></li>
                    </ul>
                </div>
            </div >
            <div className="category">
                <h2>Category</h2>
                <div className="overflow-x-scroll whitespace-nowrap">
                    <ul className="flex gap-4 flex-none">
                        <li className="flex-none"><Image src="/test.avif" alt="test" width={100} height={100} /></li>
                        <li className="flex-none"><Image src="/test.avif" alt="test" width={100} height={100} /></li>
                        <li className="flex-none"><Image src="/test.avif" alt="test" width={100} height={100} /></li>
                        <li className="flex-none"><Image src="/test.avif" alt="test" width={100} height={100} /></li>
                        <li className="flex-none"><Image src="/test.avif" alt="test" width={100} height={100} /></li>
                        <li className="flex-none"><Image src="/test.avif" alt="test" width={100} height={100} /></li>
                        <li className="flex-none"><Image src="/test.avif" alt="test" width={100} height={100} /></li>
                    </ul>
                </div>
            </div>
        </>
    );
};
