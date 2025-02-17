import Image from 'next/image';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

interface LittleCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    img: string;
}

const LittleCard: React.FC<LittleCardProps> = ({ icon, title, description, img }) => {
    return <>
        <Card className="mx-auto">
            <CardHeader className="pb-1">
                {icon}
            </CardHeader>
            <CardContent className="text-left">
                <h2 className="mb-1 text-lg font-semibold">{title}</h2>
                <p className="leading-snug text-muted-foreground">
                    {description}
                </p>
            </CardContent>
            <CardFooter className="justify-end pb-0 pr-0">
                <Image
                    className="h-52 w-full rounded-tl-md rounded-br-xl object-cover object-center"
                    src={img}
                    alt="placeholder"
                    width={1000}
                    height={1000}
                />
            </CardFooter>
        </Card>
    </>
}

export default LittleCard;
