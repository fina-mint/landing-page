import Image from 'next/image'
import LogoGif from '../public/logo.gif'
import { ChartBarIcon, CreditCardIcon, BoltIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Wealth Management Dashboard',
    description: 'We uses advanced artificial intelligence to analyze your financial data and provide personalized advice on savings and investments.',
    icon: ChartBarIcon,
  },
  {
    name: 'Credit Card',
    description:
      'Introducing the Fina-Mint credit and debit card, the ultimate financial tool for the tech-savvy saver. Our innovative card is connected to a financial app that uses advanced technology to analyze your spending behavior and provide personalized recommendations for reaching your savings goals.',
    icon: CreditCardIcon,
  },
  {
    name: 'Instant transfers',
    description:
      'Make instant transfers to pay your bills and manage your finances, so you never have to worry about late payments or penalties.',
    icon: BoltIcon,
  },
  {
    name: 'Tax Management',
    description:
    "Providing you with a Tax Management Advisor that helps you to navigate the complex world of taxes and make sure you're paying the right amount.",
    icon: CurrencyDollarIcon,
  },
]

export default function Features() {
  return (
    <div className="overflow-hidden bg-neutral-50">
      <div className="relative mx-auto max-w-7xl py-24 px-6 lg:px-8 md:py-32">

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
          <dl className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400 text-neutral-50">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-xl font-semibold leading-8 text-pink-400">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-black">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <div className="lg:col-span-1">

            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">A better way to save money.</h2>
            <Image src={LogoGif}/>

          </div>
        </div>
      </div>
    </div>
  )
}
