import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function CardFeedback({ feedback, name, role, avatar }) {
  return (
    <Card className="w-full max-w-sm shadow-lg">
      <CardContent>
        <p className="mb-4 text-sm leading-6 text-gray-700">
          {feedback}
        </p>
      </CardContent>
      <CardFooter className="">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-semibold">{name}</h1>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CardFeedback;
