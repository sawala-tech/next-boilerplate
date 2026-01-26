'use client'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import * as React from 'react'

import { cn } from '@/utils/index'

import { useIsHydrated } from '@/hooks/useIsHydrated'

import { Loader } from './loader'

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] cursor-pointer",
  {
    variants: {
      variant: {
        default: 'bg-primary-blue text-white shadow-xs hover:bg-primary-blue/90',
        destructive: 'bg-red-500 text-white shadow-xs hover:bg-red-500/90 focus-visible:ring-red-500/20',
        outline:
          'border bg-background shadow-xs hover:bg-primary-blue/10 hover:text-primary-blue/90 border-primary-blue text-primary-blue',
        secondary: 'bg-gray-200 text-gray-500 shadow-xs hover:bg-gray-200/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        'primary-blue': 'bg-primary-blue text-white shadow-xs hover:bg-primary-blue/90',
        'primary-orange': 'bg-primary-orange text-white shadow-xs hover:bg-primary-orange/90',
        'primary-green': 'bg-primary-green text-white shadow-xs hover:bg-primary-green/90',
        'primary-yellow': 'bg-primary-yellow text-white shadow-xs hover:bg-primary-yellow/90',
        'primary-black': 'bg-primary-black text-white shadow-xs hover:bg-primary-black/90',
        'outline-orange':
          'bg-transparent text-primary-orange shadow-xs hover:bg-primary-orange/10 border border-primary-orange',
        'outline-gray': 'bg-transparent text-gray-500 shadow-xs hover:bg-gray-300/80 border border-gray-300',
        'outline-red': 'bg-transparent text-red-500 shadow-xs hover:bg-red-500/10 border border-red-500',
        'outline-blue': 'bg-transparent text-primary-blue shadow-xs hover:bg-primary-blue/10 border border-primary-blue',
        'outline-green': 'bg-transparent text-green-500 shadow-xs hover:bg-green-500/10 border border-green-500',
        'outline-yellow': 'bg-transparent text-yellow-500 shadow-xs hover:bg-yellow-500/10 border border-yellow-500',
        none: 'bg-none border-none'
      },
      size: {
        default: 'h-10 px-5 py-2 has-[>svg]:px-3',
        xs: 'h-7 w-7 px-0 rounded-sm',
        sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-12 px-6 has-[>svg]:px-4',
        icon: 'size-9'
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        '4xl': 'rounded-4xl',
        default: 'rounded-xl',
        full: 'rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default'
    }
  }
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  url?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
  loadingMsg?: string
  external?: boolean
  disabledHref?: boolean
  ordinaryHref?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      asChild = false,
      url,
      leftIcon,
      rightIcon,
      loading,
      external = false,
      disabledHref = false,
      ordinaryHref = false,
      loadingMsg,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    const isHydrated = useIsHydrated()
    if (!isHydrated) return null

    if (url && !disabledHref && !ordinaryHref) {
      return (
        <Link
          href={url}
          className={cn(buttonVariants({ variant, size, className }))}
          target={external ? '_blank' : undefined}
        >
          {!loading && leftIcon && <span className="mr-1">{leftIcon}</span>}
          {!loading && props.children}
          {!loading && rightIcon && <span className="ml-1">{rightIcon}</span>}
          {loading && (
            <>
              <Loader className={loadingMsg && 'mr-2 w-fit'} />
              {loadingMsg && <span>{loadingMsg}</span>}
            </>
          )}
        </Link>
      )
    }

    if (url && ordinaryHref) {
      return (
        <a
          href={url}
          className={cn(buttonVariants({ variant, size, rounded, className }))}
          target={external ? '_blank' : undefined}
          rel="noreferrer"
        >
          {!loading && leftIcon && <span className="mr-1">{leftIcon}</span>}
          {!loading && props.children}
          {!loading && rightIcon && <span className="ml-1">{rightIcon}</span>}
          {loading && (
            <>
              <Loader className={loadingMsg && 'mr-2 w-fit'} />
              {loadingMsg && <span>{loadingMsg}</span>}
            </>
          )}
        </a>
      )
    }

    return (
      <Comp className={cn(buttonVariants({ variant, size, rounded, className }))} ref={ref} {...props}>
        {!loading && leftIcon && <span className="mr-1">{leftIcon}</span>}
        {!loading && props.children}
        {!loading && rightIcon && <span className="ml-1">{rightIcon}</span>}
        {loading && (
          <>
            <Loader className={loadingMsg && 'mr-2 w-fit'} />
            {loadingMsg && <span>{loadingMsg}</span>}
          </>
        )}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
