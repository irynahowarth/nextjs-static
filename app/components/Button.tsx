import clsx from "clsx"
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next"
import { Children } from "react"

export default function Button({className, ...restProps}:PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx("block w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white text-base font-bold tracking-wider", className)}
    {...restProps}
    />
  )
}
