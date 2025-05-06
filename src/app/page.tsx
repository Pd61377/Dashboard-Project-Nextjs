import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
 
export default function Page() {
  return (
    // ...
    <main className="flex min-h-screen flex-col ">
      {/* <div class="grid grid-flow-col grid-rows-3 gap-4 p-4"> */}
      <div className="flex
       h-10 
       shrink-0 
       items-end 
       rounded-lg 
       bg-blue-500 
       pt-6 
       mb-0
       md:h-20">
        <AcmeLogo />        
      </div>
  <div className="flex flex-wrap h-screen rounded-lg bg-blue-50 p-1 md:h-screen">
     <div className="w-100 bg-blue-100 flex flex-wrap place-items-center p-5">
      
      <p className={`text-xl text-gray-800 md:text-xl md:leading-normal`}>
            <strong>Welcome to Acme Dashboard.</strong>
     </p>
     <button>
          <Link
            href="/login"
            className="flex items-center rounded-lg bg-blue-500 
            px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-1 md:w-2 lg:w-6 xl:w-6" />
          </Link>
      </button>
    
     </div>
    <div 
    className="flex
     items-center 
     justify-center
     w-100
      p-10 md:flex md:w-3/5 md:px-28 md:py-12">
      
      {/* Add Hero Images Here */}
       
      <Image  
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block "
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image
        src="/hero-mobile.png"
        width={560}
        height={620}
        className="block md:hidden lg:hiddenxl:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />

    </div>
    </div>
    </main>
  );
}