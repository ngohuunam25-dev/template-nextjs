import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface TypographyProps extends PropsWithChildren {
  className?: string;
}
export function TypographyH1(props: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
        props.className,
      )}
    >
      {props.children}
    </h1>
  );
}

export function TypographyH2(props: TypographyProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        props.className,
      )}
    >
      {props.children}
    </h2>
  );
}

export function TypographyH3(props: TypographyProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        props.className,
      )}
    >
      {props.children}
    </h3>
  );
}
export function TypographyH4(props: TypographyProps) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        props.className,
      )}
    >
      {props.children}
    </h4>
  );
}

export function TypographyP(props: TypographyProps) {
  return (
    <p className={cn("leading-7 not-first:mt-6", props.className)}>
      {props.children}
    </p>
  );
}

export function TypographyBlockquote(props: TypographyProps) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", props.className)}>
      {props.children}
    </blockquote>
  );
}

export function TypographyList(props: TypographyProps) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", props.className)}>
      {props.children}
    </ul>
  );
}

export function TypographyInlineCode(props: TypographyProps) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        props.className,
      )}
    >
      {props.children}
    </code>
  );
}
export function TypographyMuted(props: TypographyProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", props.className)}>
      {props.children}
    </p>
  );
}

export function TypographySmall(props: TypographyProps) {
  return (
    <small className={cn("text-sm leading-none font-medium", props.className)}>
      {props.children}
    </small>
  );
}

export function TypographyLarge(props: TypographyProps) {
  return (
    <div className={cn("text-lg font-semibold", props.className)}>
      {props.children}
    </div>
  );
}
