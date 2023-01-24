import { ChartBarIcon, CreditCardIcon, BoltIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Wealth Management Dashboard',
    description: 'Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.',
    icon: ChartBarIcon,
  },
  {
    name: 'Credit Card',
    description:
      'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
    icon: CreditCardIcon,
  },
  {
    name: 'Instant transfers',
    description:
      'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
    icon: BoltIcon,
  },
  {
    name: 'Tax Management',
    description:
      'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
    icon: CurrencyDollarIcon,
  },
]

export default function Features() {
  return (
    <div className="overflow-hidden bg-slate-900">
      <div className="relative mx-auto max-w-7xl py-24 px-6 lg:px-8 md:py-32">

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
          <dl className="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-300 text-pink-50">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-lg font-semibold leading-8 text-pink-400">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-orange-100">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <div className="lg:col-span-1">

            <h2 className="text-4xl font-bold tracking-tight text-orange-100 sm:text-4xl">A better way to save money.</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
