import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardLayout = ({ title, content, Icon }) => {
  return (
    <Card className="w-full max-w-xs shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="mx-5 bg-blue-200 rounded-md w-12 h-12 flex items-center justify-center mt-2">
            {/* <ChartColumn className="text-blue-600" /> */}
            {Icon && <Icon className="text-blue-600" />}
        </div>
      <CardHeader>

        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          {content}
        </p>
      </CardContent>
    </Card>
  );
};

export default CardLayout;
