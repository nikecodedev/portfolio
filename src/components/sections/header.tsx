import { Github, Linkedin, Mail } from "lucide-react";
import { MovingElement } from "../navbar";

export function Header({ data }: { data: Record<string, string> }) {
  const handleChange = (url: string) => {
    window.open(url, "_blank");
  };

  const handleResumeView = () => {
    // Open resume in browser for viewing
    window.open(data.RESUME, "_blank");
  };

  return (
    <section className="pt-12">
      <div className="space-y-2">
        <p className="font-normal text-muted-foreground text-base">
          hi there👋, I&apos;m
        </p>

        <div>
          <h1 className="font-bold text-primary/90 text-4xl tracking-tight">
            {data.NAME}
          </h1>
          <h2 className="flex flex-col gap-0 font-normal text-primary/90 text-base">
            <p>
              {data.AGE}, {data.PRONOUN}
            </p>
            <p>{data.HEADLINE}</p>
          </h2>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <MovingElement
            className="inline-flex justify-center items-center bg-primary betterhover:hover:bg-primary/90 disabled:opacity-50 shadow px-4 py-2 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 font-medium text-primary-foreground text-sm whitespace-nowrap transition-colors disabled:pointer-events-none"
            change={handleResumeView}
            toChange={false}
            ariaLabel="View Resume"
          >
            Resume
          </MovingElement>
          <div className="flex gap-2">
            <MovingElement
              change={() => handleChange(data.EMAIL)}
              ariaLabel="Email"
            >
              <Mail />
            </MovingElement>
            <MovingElement
              change={() => handleChange(data.GITHUB)}
              ariaLabel="Github"
            >
              <Github />
            </MovingElement>
            <MovingElement
              change={() => handleChange(data.LINKEDIN)}
              ariaLabel="Linkedin"
            >
              <Linkedin />
            </MovingElement>
          </div>
        </div>
      </div>
    </section>
  );
}
