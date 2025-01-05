"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Nav = () => {

    const [toggleDropDown, setToggleDropDown] = useState(false);

  return (
    <nav className="flex-between w-full mb-4 pb-5 pt-3 bg-white sticky top-0 z-40">
        <Link href="/" className="flex gap-2">
        {/* TODO: Make the images dynamically populate */}
            <Image src="https://images.ctfassets.net/oxmmme2a1mec/1cJlMiNlVUb0n1BAF3Z4e4/31c07deed5bd0a34ddd4d882c1bfca11/letter-p-256.png" alt="Portfolia Logo" width={30} height={30} className="object-contain" unoptimized={true} loader={() => "https://images.ctfassets.net/oxmmme2a1mec/1cJlMiNlVUb0n1BAF3Z4e4/31c07deed5bd0a34ddd4d882c1bfca11/letter-p-256.png"}/>
            <p className="logo_text">ORTFOLIA</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="sm:flex hidden">
            <div className="flex gap-3 md:gap-5">
                <Link className="icon_btn" href="https://www.linkedin.com/in/carlosulayao" rel="noopener noreferrer" target="_blank"><Image src="https://images.ctfassets.net/oxmmme2a1mec/5k17trG5fAgk1RiSLbfIzj/db14f305f653073acd1858a3cebd4143/linkedin.svg" alt="LinkedIn" width={28} height={28}className="mr-3" unoptimized={true} loader={() => "https://images.ctfassets.net/oxmmme2a1mec/5k17trG5fAgk1RiSLbfIzj/db14f305f653073acd1858a3cebd4143/linkedin.svg"}/>LinkedIn</Link>
                <Link className="icon_btn mr-5" href="https://github.com/csulayao" rel="noopener noreferrer" target="_blank"><Image src="https://images.ctfassets.net/oxmmme2a1mec/4vrivkZnC1ySFVEf2PAa0S/a4013183a51d2e8b961987b669ef9b57/github.svg" alt="Github" width={30} height={30} className="mr-3" unoptimized={true} loader={() => "https://images.ctfassets.net/oxmmme2a1mec/4vrivkZnC1ySFVEf2PAa0S/a4013183a51d2e8b961987b669ef9b57/github.svg"}/> GitHub</Link>
            </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
            <div className="flex gap-3 md:gap-5">
                <Link className="" href="https://www.linkedin.com/in/carlosulayao" rel="noopener noreferrer" target="_blank"><Image src="https://images.ctfassets.net/oxmmme2a1mec/5k17trG5fAgk1RiSLbfIzj/db14f305f653073acd1858a3cebd4143/linkedin.svg" alt="LinkedIn" width={30} height={30} unoptimized={true} loader={() => "https://images.ctfassets.net/oxmmme2a1mec/5k17trG5fAgk1RiSLbfIzj/db14f305f653073acd1858a3cebd4143/linkedin.svg"}/></Link>
                <Link className="mr-5" href="https://github.com/csulayao" rel="noopener noreferrer" target="_blank"><Image src="https://images.ctfassets.net/oxmmme2a1mec/4vrivkZnC1ySFVEf2PAa0S/a4013183a51d2e8b961987b669ef9b57/github.svg" alt="Github" width={30} height={30} unoptimized={true} loader={() => "https://images.ctfassets.net/oxmmme2a1mec/4vrivkZnC1ySFVEf2PAa0S/a4013183a51d2e8b961987b669ef9b57/github.svg"}/></Link>
            </div>
        </div>
    </nav> 
)
}

export default Nav