import { Image } from "@chakra-ui/react";
import React from "react";

interface EmojiProps {
  emoji: string;
  alt: string;
  maxH?: number;
  mr?: number;
  my?: number;
}
const emojis: { [key: string]: string } = {
  "🧐": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/face-with-monocle_1f9d0.png",
  "👋": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/waving-hand_1f44b.png",
  "👨‍💻": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/technologist_1f9d1-200d-1f4bb.png",
  "🎓": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/graduation-cap_1f393.png",
  "💡": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/light-bulb_1f4a1.png",
  "🚀": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/rocket_1f680.png",
  "📬": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/open-mailbox-with-raised-flag_1f4ec.png",
};

export const Emoji: React.FC<EmojiProps> = ({ emoji, alt, maxH, mr, my }) => {
  return (
    <Image
      src={emojis[emoji]}
      alt={alt}
      display="inline"
      maxH={maxH === undefined ? 6 : maxH}
      mr={mr === undefined ? 2 : mr}
      my={my === undefined ? -1 : my}
    />
  );
};

export default Emoji;
