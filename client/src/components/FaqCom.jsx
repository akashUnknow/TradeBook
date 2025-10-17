import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export function FaqCom() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-semibold">What is this trading journal for? </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            This trading journal is designed to help traders systematically
            record, analyze, and improve their trading performance over time.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-semibold">How secure is my data?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We take security seriously. All your data is encrypted and securely
            stored. Only you have access to your trades and private information.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-semibold">
          Can I connect my trading account automatically?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Currently, we are working on integrating platforms like MT4, MT5,
            DXtrade, and others for automatic trade synchronization. Manual CSV
            upload is available.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default FaqCom;
