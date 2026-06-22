import { ThemeNameType } from "@/tailwind-config/theme.constants";
import { FC } from "react";
// import { uuid } from "@sanity/uuid";

export type ThemeWrapperProps = {
  theme: ThemeNameType;
  children: React.ReactNode;
}

const ThemeWrapper: FC<ThemeWrapperProps> = ({ theme, children }) => {
  // const wrapperProps = { 'data-theme': theme };
  // const myUUID = crypto.randomUUID();

  return (
    <div data-theme={theme} className={theme}>
      {children}
    </div>
  )
};

export default ThemeWrapper;
