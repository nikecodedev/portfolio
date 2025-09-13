interface IEducationData {
  DEGREE: string;
  UNIVERSITY: string;
  DURATION: string;
  LOCATION: string;
}

export function Education({ data }: { data: Record<string, IEducationData> }) {
  return (
    <div id="education" className="py-10">
      <h2 className="font-medium text-primary/90 text-base">
        education.
      </h2>

      <ul className="flex flex-col gap-8 mt-4 font-normal text-primary/90 text-base">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="cursor-target">
            <div className="pl-4 border-muted-foreground hover:border-primary border-l size-full transition-all duration-300">
              <p className="text-primary/90 text-lg">
                {value.DEGREE}
              </p>
              
              <p className="text-primary/80 text-base mt-1">
                {value.UNIVERSITY}
              </p>
              
              <p className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <span className="px-2 py-1 bg-secondary rounded text-xs">
                  {value.DURATION}
                </span>
                <span>•</span>
                <span>{value.LOCATION}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
