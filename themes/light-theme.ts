import {Color} from './color'
import {SizeSpace} from "./size-space";
export const lightTheme = {
  token: {
    // Headings
    "lineHeightHeading-extraLarge": "48px",
    "lineHeightHeading-large": "40px",
    "lineHeightHeading-medium": "36px",
    "lineHeightHeading-small": "32px",
    "lineHeightHeading-extraSmall": "28px",
    "fontSizeHeading-extraLarge": 36,
    "fontSizeHeading-large": 32,
    "fontSizeHeading-medium": 28,
    "fontSizeHeading-small": 24,
    "fontSizeHeading-extraSmall": 20,

    // Typography.Title
    fontSizeHeading1: 36,
    fontSizeHeading2: 32,
    fontSizeHeading3: 28,
    fontSizeHeading4: 24,
    fontSizeHeading5: 20,
    lineHeightHeading1: "48px",
    lineHeightHeading2: "40px",
    lineHeightHeading3: "36px",
    lineHeightHeading4: "32px",
    lineHeightHeading5: "28px",

    // Titles
    "lineHeightTitle-large": "26px",
    "lineHeightTitle-medium": "24px",
    "lineHeightTitle-small": "22px",
    "fontSizeTitle-large": 18,
    "fontSizeTitle-medium": 16,
    "fontSizeTitle-small": 14,

    // BodyText
    "fontSizeBodyText-extraLarge": 20,
    "fontSizeBodyText-large": 16,
    "fontSizeBodyText-base": 14,
    "fontSizeBodyText-small": 12,
    "fontSizeBodyText-extraSmall": 10,
    "lineHeightBodyText-extraLarge": "28px",
    "lineHeightBodyText-large": "24px",
    "lineHeightBodyText-base": "22px",
    "lineHeightBodyText-small": "20px",
    "lineHeightBodyText-extraSmall": "18px",

    ...Color,
    ...SizeSpace
  }
}
