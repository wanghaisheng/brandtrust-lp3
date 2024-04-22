import { type SVGProps } from 'react'
const Sanity = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 250 250'
        {...props}
    >
        <path
            fill='#ED3E2F'
            d='M52.5 33.75c0 32.5 20 52.5 61.25 62.5l43.75 10c38.75 8.75 62.5 30 62.5 66.25 0 15-5 30-15 42.5 0-35-18.75-55-63.75-66.25l-42.5-10c-33.75-6.25-60-25-60-63.75 0-15 5-28.75 13.75-41.25Z'
        />
        <path
            fill='#ED3E2F'
            d='M178.75 163.75c18.75 11.25 27.5 27.5 27.5 51.25-15 18.75-42.5 30-73.75 30-53.75 0-91.25-26.25-98.75-71.25H85c6.25 21.25 23.75 30 47.5 30 27.5 1.25 46.25-13.75 46.25-40ZM78.75 82.5c-8.75-5-15-12.5-20-21.25-3.75-8.75-6.25-17.5-6.25-27.5 15-20 41.25-31.25 72.5-31.25 55 0 86.25 28.75 93.75 67.5h-50c-5-15-18.75-27.5-43.75-27.5-26.25 1.25-45 16.25-46.25 40Z'
            opacity={0.7}
        />
    </svg>
)
export default Sanity
