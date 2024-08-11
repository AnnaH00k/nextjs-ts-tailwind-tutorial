
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mountains, Pen, TextT, Wind, TrendUp, Files, SmileySticker, Browser, Power } from "@phosphor-icons/react/dist/ssr"

export function TutorialLandingpage() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full bg-[#1244]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <Mountains size={32} />
        <span className="sr-only">NextJS, TypeScript, and Tailwind CSS Tutorial</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Topics
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Master NextJS, TypeScript, and Tailwind CSS
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Learn how to build modern, responsive web applications with the latest tools and technologies. This
                  comprehensive tutorial covers everything from setup to deployment.
                </p>
                <div className="space-x-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learn the Essentials</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  This tutorial covers the core concepts and best practices for building modern web applications with
                  NextJS, TypeScript, and Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <Pen size={32} />
                  <h3 className="text-lg font-bold">NextJS Fundamentals</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Learn how to set up a NextJS project, create pages and components, and leverage NextJS features like
                  routing, API routes, and server-side rendering.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <TextT size={32} />
                  <h3 className="text-lg font-bold">TypeScript Essentials</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dive into the world of TypeScript, including type annotations, interfaces, classes, and how to
                  integrate TypeScript into your NextJS project.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                <Wind size={32} />
                <h3 className="text-lg font-bold">Tailwind CSS Mastery</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Explore the power of Tailwind CSS, a utility-first CSS framework, and learn how to use it to style
                  your NextJS components and create responsive, modern designs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Tutorial Topics</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What You'll Learn</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  This comprehensive tutorial covers the essential topics for building modern web applications with
                  NextJS, TypeScript, and Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                <TrendUp size={32} />
                <h3 className="text-lg font-bold">Development Setup</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Learn how to set up your development environment, install the necessary tools and dependencies, and
                  configure your project for optimal performance.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                <Files size={32} />
                <h3 className="text-lg font-bold">Pages and Components</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Discover how to create and structure pages, build reusable components, and leverage NextJS features
                  like dynamic routing and API routes.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                <SmileySticker size={32} />
                <h3 className="text-lg font-bold">Styling with Tailwind</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Explore the power of Tailwind CSS, a utility-first CSS framework, and learn how to use it to style
                  your NextJS components and create responsive, modern designs.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                <Browser size={32} />
                <h3 className="text-lg font-bold">Deployment</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Understand how to deploy your NextJS application, including hosting options, environment
                  configuration, and optimizations for production.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                <TextT size={32} />
                  <h3 className="text-lg font-bold">TypeScript Integration</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Learn how to integrate TypeScript into your NextJS project, including type annotations, interfaces,
                  and best practices for working with TypeScript.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                <Power size={32} />
                <h3 className="text-lg font-bold">Performance Optimization</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Discover techniques to optimize the performance of your NextJS application, including code splitting,
                  image optimization, and leveraging NextJS features for faster load times.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up now and gain access to the complete NextJS, TypeScript, and Tailwind CSS tutorial. Start
                building modern, responsive web applications today.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 NextJS, TypeScript, and Tailwind CSS Tutorial. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

