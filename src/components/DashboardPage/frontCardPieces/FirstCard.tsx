import Link from "next/link";
import { MoveRight } from "lucide-react";

const FirstCard = () => (
    <div className="w-2/5 h-cardHeight flex flex-col flex-wrap justify-between pt-8 pl-5 relative z-10">
        <div className="h-[270px] flex flex-col flex-wrap justify-between font-medium">
            <div>
                <p className="text-secondColor w-full">Welcome back,</p>
                <p className="font-bold text-2xl w-full pt-3 pb-6">Mark johnson</p>
                <p className="text-secondColor">Glad to see you again!</p>
                <p className="text-secondColor">Ask me anything.</p>
            </div>
            <Link
                href={"/"}
                className="flex flex-nowrap w-max items-center"
                aria-label="Tap to record"
            >
                Tap to record
                <MoveRight className="transition-transform duration-300 hover:translate-x-2 pl-2" />
            </Link>
        </div>
    </div>
);

export default FirstCard;