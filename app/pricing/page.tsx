
import { smallSphere, stars } from "@/public/assets";
import Heading from "@/components/Heading";
import { LeftLine, RightLine } from "@/components/atoms/Pricing";
import Image from "next/image";
import PricingList from "@/components/PricingList";

const pages = () => {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full overflow-hidden my-36 ">
                <div className="container relative z-2">

                    <Heading
                        tag="Get started with 3R"
                        title="Select a pack, do your job and lets create a better Cameroon"
                    />

                    <div className="relative">
                        <PricingList />
                        <LeftLine />
                        <RightLine />
                    </div>

                </div>
            </div>
        </main>
    )
}

export default pages