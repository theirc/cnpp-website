import Link from 'next/link'
import GetConnected from './GetConnected'
import SmallBizContent from '../../page-content/BusinessResourcesContent'

const TextComponent = () => (
  <div className="mx-3 sm:mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h1 className="text-2xl font-extrabold text-sbaBlue md:text-3xl">
      Available Small Business Grants & Relief
    </h1>
    <p className="mt-9 text-base text-black md:text-lg">
      As America continues its economic recovery, there are a variety of
      federal, state, and local opportunities to access small business grants
      and relief. Because these options change regularly, the best way to learn
      about options available to you is through an IRC CNPP business counselor.
      Contact us today to{' '}
      <Link href="/contact">
        <u className="cursor-pointer">get connected</u>
      </Link>
    </p>
    <h2 className="mt-9 text-xl font-bold text-black md:text-2xl">
      Small Business Relief Available through IRC's Center for Economic
      Opportunity (CEO)
    </h2>
    <p className="mt-9 text-base text-black md:text-lg">
      The International Rescue Committee's Center for Economic Opportunity (CEO)
      is a non-profit lender specializing in making small-dollar loans to
      refugees and immigrants. CEO is a certified by the U.S. Treasury as a
      national Community Development Financial Insitituion (CDFI) and currently
      has operations in 14 states. CEO does not charge any late fees and is
      flexible with modifying loans or deferring payments to help clients
      protect their credit and overcome financial turbulence. Some products and
      rates that are available CEO include:
      <ul className="indent my-2 list-disc pl-10">
        <li>Credit Building loans of up to $1,000 with 0% APR</li>
        <li>Business Recovery loans of up to $10,000</li>
      </ul>
    </p>
    <p className="mt-3 text-base text-black md:text-lg">
      <Link href="/contact">
        <u className="cursor-pointer">Get Connected</u>
      </Link>{' '}
      with a business counselor today to learn more about how you can access
      available CEO loans.
    </p>
    <h2 className="mt-9 text-xl font-bold text-black md:text-2xl">
      Available Grants & Relief
    </h2>
<p><b>GoDaddy Small Business Generative AI Library</b>:GoDaddy has launched the Small Business Generative AI Prompt Library, a growing collection of over 35 ready-to-use prompts. The library aims to help small businesses quickly and easily benefit from generative AI tools like OpenAI’s ChatGPT and Google’s Bard. These prompts address common challenges faced by small business owners during the start-up or operation phases. From generating marketing ideas to crafting responses to customer reviews, business owners can complete tasks in minutes that previously took hours or days. Explore the library <u><a href="https://www.godaddy.com/garage/ai-prompts-for-small-business/">Here</a></u></p>
<p>*** </p>
<p><b>Visa Small Business Guides</b>:When you’re starting a small business, every detail matters. These guides are built to help you start, run and grow smarter, no matter what stage you’re in or needs you have. Topics include financials, digital guides, marketing, operations + security, and successful starts. Guides can be found and downloaded <u><a href="https://usa.visa.com/run-your-business/small-business-tools/topics/small-business-guides-hub.html">Here</a></u></p>
<p>*** </p>
<p><b>Grow Your Business with TikTok</b>:Discovering new customers, driving brand awareness, building community — it’s all possible on TikTok! 1 in 3 people make a purchase because they saw it on the app. And now you can expand your reach even further with $50 more in ad spend when you spend your first $50.*. <u><a href="https://getstarted.tiktok.com/ttvalue?irclickid=VOeXPt2cExyPU-dx962Ty04bUkFwCXyFuT6ATM0&irgwc=1&attr_source=impact&attr_medium=affiliate-ad&attr_ad_id=1750850&attr_adgroup_id=3196723&ad_group_name=Hello%20Alice&tactic=online-coupon&lang=en-US#formAnchor">Link To Get Started</a></u></p>
<p>*** </p>
<p><b>Adobe Creative Residency Community Fund</b>:The Community Fund 'supports professional creators during times of extraordinary hardship. This year, we have witnessed the unprovoked, violent attacks on Ukraine and the tragic loss of innocent lives. As we see continue to see this tragedy unfold, we believe we have a responsibility to support professional creators during the growing humanitarian crisis and refugee situation in the region. We will now be focusing our Community Fund efforts on providing support to those creators who have been directly impacted by the unjustified invasion of Ukraine. If selected, you will receive US$10,000 from the Adobe Creative Residency Community Fund. While applicants can use the money granted to them by the Community Fund at their full and lawful discretion, the award's purpose is to allow recipients impacted by the invasion of Ukraine to support themselves and their families during this time of conflict. Eligibility includes A refugee or an internally displaced person due to the 2022 invasion of Ukraine. <u><a href="https://airtable.com/shrQcxbTY68b8hWhq/">Application Link</a></u></p>
<p>*** </p>
<p><b>Amazon Small Business Academy</b>:Amazon’s Small Business Academy gives early-stage entrepreneurs and small business owners the tools, resources, and networking opportunities to help grow their businesses online. The new ASBA experience features three self-service educational tracks—Start, Build, and Launch—for a customizable experience based on where entrepreneurs are in their business journey. The program was designed in partnership with the Collegiate Entrepreneurs’ Organization (CEO), the premier entrepreneurship network with over 250 chapters on university campuses across the globe. In addition to informing ASBA’s curriculum, CEO's bench of experts—including professors and small business owners in residence—will participate in live weekly “office hours” as a supplement to educational webinars and on-demand learning. Check out the library  <u><a href="https://www.smallbusiness.amazon/">Here</a></u></p>
<p>*** </p>
<p><b>Lenovo Queen of Small Custom Ad</b>: Sign up for Lenovo Evolve Small to make Queen Latifah the face of your small business and learn more about Lenovo Evolve Small initiatives. Businesses can get their custom video in three steps: search for business name (based on Google), Upload Business Logo, Watch and share the custom commercial. Free marketing for your clients! <u><a href="https://www.lenovo.com/us/en/evolvesmall/">Link</a></u> | <u><a href="https:/lenovoevolvesmall.com/">Promo Video</a></u></p>
</div>
)
const gridComponent = (arr) => (
  <div className="mt-12">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
      {arr.map((feature) => (
        <div key={feature.name} className="pt-6">
          <Link href={feature.hyperlink}>
            <div className="flow-root rounded-lg bg-gray-200 px-6 pb-8 hover:ring hover:ring-sbaBlue">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center rounded-md bg-sbaGray p-3 shadow-lg">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
)
const ResourcesContent = () => (
  <>
    <div className="relative mb-10 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-14 md:pb-16 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-12 lg:mt-14 lg:px-8 xl:mt-24">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-sbaBlue xl:inline">
                  {SmallBizContent.header.title}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                {SmallBizContent.header.description}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={SmallBizContent.header.image}
          alt={SmallBizContent.header.imageAlt}
        />
      </div>
    </div>
    <TextComponent />
    <div className="py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Learning Resources
        </h2>
        <p className="mx-auto mt-10 max-w-prose text-2xl text-gray-500 underline">
          Workshops &#38; Videos
        </p>
        {gridComponent(SmallBizContent.videos)}
        <p className="mx-auto mt-10 max-w-prose text-xl text-gray-500">
          Downloadable Learning Resources
        </p>
        {gridComponent(SmallBizContent.downloads)}
        <p className="mx-auto mt-10 max-w-prose text-xl text-gray-500">
          Translated Documents
        </p>
        {gridComponent(SmallBizContent.documents)}
      </div>
    </div>
    <GetConnected />
  </>
)

export default ResourcesContent
