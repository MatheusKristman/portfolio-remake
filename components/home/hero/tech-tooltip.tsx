import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  lightImageUrl: string;
  darkImageUrl: string;
  content: string;
}

export function TechTooltip({ lightImageUrl, darkImageUrl, content }: Props) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <Image
            src={lightImageUrl}
            alt={content}
            width={45}
            height={45}
            className="hidden lg:block lg:dark:hidden"
          />

          <Image
            src={darkImageUrl}
            alt={content}
            width={45}
            height={45}
            className="hidden lg:hidden lg:dark:block"
          />
        </TooltipTrigger>

        <TooltipContent side="left">
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
