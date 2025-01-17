"use client"

import Link from "next/link"
import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Antique Carousel",
    href: "/products",
    description:
      "Explore a curated collection of antique artifacts from India.",
  },
  {
    title: "AI driven Product",
    href: "/ai-com",
    description:
      "AI driven products to help you in your daily life.",
  },
  {
    title: "Login",
    href: "/login",
    description:
      "Sign in to your account to access your orders and wishlist.",
  },
  {
    title: "Contact Us",
    href: "/contact",
    description:
      "Get in touch with our team for any inquiries or feedback.",
  },
  {
    title: "Community Forum",
    href: "/community-forum",
    description:
      "Join our community forum and share your thoughts with other users.",
  } 
  
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="text-white font-medium gap-1 md:gap-2 flex">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-none text-[14px] md:text-[13px]">
            OUR PHILOSOPHY
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/car"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Our Philosophy
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Our philosophy is to provide the best quality products to our customers.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/products" title="Our Products">
                Explore our curated collection of antique artifacts from India.
              </ListItem>
              <ListItem href="/courses" title="Our Courses">
                Learn about the artisans who make these products.
              </ListItem>
              <ListItem href="/login" title="Login">
                Sign in to your account to access your orders and wishlist.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-none text-[14px] md:text-[13px]">
            PRODUCTS
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-none text-[14px] md:text-[13px]">
            ARTISANS
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/car"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Artisan&apos;s Community
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                     Join the community of artisans and learn from the best.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Explore Artisans">
              find the best artisans in your area.
              </ListItem>
              <ListItem href="/docs/installation" title="Visit Artisan's Studio">
              Customize your own artisan&apos;s studio.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Donate">
              Help the artisans in need.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              CONTACT US
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"