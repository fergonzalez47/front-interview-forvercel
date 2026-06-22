import Logo, { LogoProps } from '@/app/components/Logo';
import Grid from '@/app/components/Grid';
import { Text } from '@/app/components/Text';
import { FC } from 'react';
import { G2Logo } from './G2Logo';
// import { MobileLogoCarousel } from './MobileLogoCarousel';

export type LogoStripProps = {
  type: 'text' | 'g2';
  logos: [LogoProps['type'], LogoProps['type'], LogoProps['type'], LogoProps['type'], LogoProps['type']];
}

const TEXT_CONTENT = `Trusted by 9000+ companies`
const G2_STARS = "4.7 stars"
const G2_REVIEWS = "2000+ Reviews"

const LogoStrip: FC<LogoStripProps> = ({ type = 'text', logos = [] }) => {
  return (
    <Grid className="w-full gap-y-md">
      <div className="col-span-4 md:col-span-3 flex">
        {type === 'text' && <Text className="mx-auto md:mx-0 my-auto text-primary" type="p1-medium">{TEXT_CONTENT}</Text>}
        {type === 'g2' && <div className="flex mx-auto md:mx-0">
          <div className="my-auto mr-xs">
            <G2Logo />
          </div>
          <Text className="my-auto mr-xs text-secondary" type="p2">{G2_STARS}</Text>
          <Text className="my-auto text-secondary" type="p2">{G2_REVIEWS}</Text>
        </div>}
      </div>
      <div className="hidden md:flex md:col-span-9 justify-between space-x-xs">
        {logos.map((logo: LogoProps['type']) => (
          <Logo key={logo} type={logo} />
        ))}
      </div>
      <div className="relative flex col-span-4 md:hidden">
        {/* <MobileLogoCarousel logos={logos} /> */}
        <div
          className="absolute top-0 bottom-0 left-0 h-full w-8 surface-l0 pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to right, black, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, black, black, transparent)',
          }}
        />
        <div
          className="absolute top-0 bottom-0 right-0 h-full w-8 surface-l0 pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to left, black, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to left, black, black, transparent)',
          }}
        />
      </div>
    </Grid>
  );
};

export default LogoStrip;
