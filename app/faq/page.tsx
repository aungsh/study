import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookText, Github } from "lucide-react";

export default function Faq() {
  return (
    <>
      <h1 className="text-8xl font-bold">FAQs</h1>
      <div className="flex items-center gap-2 text-lg font-bold text-gray-800">
        <BookText />
        <span>Updated July 2025</span>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Are these tools free to use?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>Yes, you may currently use all tools for free.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Will the data and files uploaded be kept private?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              There is no collection of the information and files uploaded by
              the site itself.
            </p>
            <p>
              However, there may be APIs used that will collect the data. Such
              as Google&apos;s Gemini AI API.
            </p>
            <p>
              As such, we recommend avoiding the upload of sensitive or personal
              information.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is this project open source?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Yes, the project is currently open source. You can find the code
              on GitHub and contribute to its development.
            </p>
            <Link href="https://github.com/aungsh/study" passHref>
              <Button
                className="px-12 py-6 text-lg text-emerald-100 rounded-2xl"
                size={"2xl"}
              >
                <Github className="" /> View on GitHub
              </Button>
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
